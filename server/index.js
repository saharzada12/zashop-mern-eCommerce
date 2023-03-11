import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

// routes imports
import userRoutes from "./routes/Users.js";
import AuthRoute from "./routes/Auth.js";
import ProductRoute from "./routes/Product.js";
import stripeRoute from "./routes/Stripe.js";

mongoose.set("strictQuery", false);

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));

const PORT = 6001;
app.use(cors());
// ROUTES
// http://localhost:6001 =>
app.use("/api/v1", userRoutes);
app.use("/api/auth", AuthRoute);
app.use("/api/products", ProductRoute);
app.use("/api/checkout", stripeRoute);

// mongoose connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || PORT, () =>
      console.log(`server running on port: ${PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
