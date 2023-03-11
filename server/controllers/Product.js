import Product from "../models/Product.js";
import dotenv from "dotenv";
import Jwt from "jsonwebtoken";
import User from "../models/User.js";

// THE CONTROLLERS FOR THE PRODUCTS ROUTE

dotenv.config();

// GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qColor = req.query.color;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    }
    if (qColor) {
      products = await Product.find({
        color: {
          $in: [qColor],
        },
      });
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ONE PRODUCT
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST NEW PRODUCT
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
    console.log("error");
  }
};

// UPDATE
export const updateProduct = async (req, res) => {
  try {
    const { title, desc, price, categories, sizes, color, img } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    product.title = title || product.title;
    product.desc = desc || product.desc;
    product.price = price || product.price;
    product.categories = categories || product.categories;
    product.size = sizes || product.size;
    product.color = color || product.color;
    product.img = img || product.img;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

// const updatedProduct = await Product.findByIdAndUpdate(
//   req.params.id,
//   {
//     $set: req.body,
//   },
//   { new: true }
// );
// res.status(200).json(updatedProduct);

// DELETE
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Products has been deleted successfully");
  } catch (error) {
    res.status(500).json(error, "error in delete product");
  }
};
