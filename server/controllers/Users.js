import User from "../models/User.js";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
import Jwt from "jsonwebtoken";

dotenv.config();

// get all users
export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// create user

export const createUser = async (req, res) => {
  const body = {
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SEC
    ).toString(),
  };
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "you must provide credentials",
    });
  }
  const user = new User(body);
  if (!user) {
    return res.status(400).json("no user found");
  }
  user
    .save()
    .then(() => {
      return res.status(201).json({
        msg: "user created",
        user,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ msg: err });
    });
};

// LOGIN

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log("user", user);
    // console.log("res", res);
    if (!user) {
      res.status(401).json({ msg: "Wrong credentials!" });
      console.log("error");
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASSWORD_SEC
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (OriginalPassword !== req.body.password) {
        res.status(401).json({ msg: "wrong password" });
      } else {
        const accessToken = Jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: "3d" }
        );
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
      }
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
// DELETE
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addItem = async (req, res) => {
  try {
    const username = req.params.userId;
    const item = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      const existingItem = user.cart.find(
        (i) => i.productId === item.productId
      );
      if (existingItem) {
        await User.updateOne(
          { username: username, "cart.productId": item.productId },
          { $inc: { "cart.$.quantity": item.quantity } }
        );
        res.status(200).json({ message: "item quantity updated" });
      } else {
        await User.updateOne({ username: username }, { $push: { cart: item } });
        res.status(200).json({ message: "item added successfully" });
      }
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const myUser = await User.findById(req.params.id);
    if (!myUser) {
      res.status(401).json("didn't find user");
    } else {
      res.status(200).json(myUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCart = async (req, res) => {
  try {
    const username = req.params.userId;
    const user = await User.findOneAndUpdate({ username: username });
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    user.cart = [];
    await user.save();
    res.status(200).json({ message: "cart deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { username, email, isAdmin } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.isAdmin = isAdmin !== undefined ? isAdmin : user.isAdmin;

    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
