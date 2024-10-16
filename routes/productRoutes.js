import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "./controllers/productController.js"; // تأكد من تعديل المسار إذا لزم الأمر
import { isAdmin, requireSignIn } from "./middlewares/authMiddleware.js"; // تأكد من تعديل المسار إذا لزم الأمر
import formidable from "express-formidable";

const app = express();

// Middlewares
app.use(formidable());

// Routes
app.post("/create-product", requireSignIn, isAdmin, createProductController);
app.put("/update-product/:pid", requireSignIn, isAdmin, updateProductController);
app.get("/get-product", getProductController);
app.get("/get-product/:slug", getSingleProductController);
app.get("/product-photo/:pid", productPhotoController);
app.delete("/delete-product/:pid", deleteProductController);
app.post("/product-filters", productFiltersController);
app.get("/product-count", productCountController);
app.get("/product-list/:page", productListController);
app.get("/search/:keyword", searchProductController);
app.get("/related-product/:pid/:cid", realtedProductController);
app.get("/product-category/:slug", productCategoryController);
app.get("/braintree/token", braintreeTokenController);
app.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default app;
