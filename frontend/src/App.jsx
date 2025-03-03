import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  Home,
  CreateProduct,
  MyProducts,
  Cart,
  ProductDetails,
  Profile,
} from "./Routes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/create-product/:id" element={<CreateProduct />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
