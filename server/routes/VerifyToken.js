import jwt from "jsonwebtoken";

// verifying the jwt token - in users/products routes

// for regular users
export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Missing Authorization header" });
  }
  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer") {
    return res.status(401).json({ error: "Invalid Authorization header" });
  }
  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SEC);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};
// authenticated users
export const verifyTokenAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.username === req.params.userId || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authenticated 2");
    }
  });
};

// for admin users
export const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authenticated");
    }
  });
};
