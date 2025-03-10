import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./components/HOME/Home";
import Men from "./components/MEN/Men";
import Login from "./components/LOGIN/Login";
import About from "./components/ABOUT/About";
import Women from "./components/WOMEN copy/Women";
import Contact from "./components/CONTACT/Contact";
import ProductDetails from "./components/PRODUCTDETAILS/ProductDetails";
import Cart from "./components/CART/Cart";
import Kids from "./components/KIDS copy/Kids";
import Register from "./components/LOGIN/Register";
import Navbar from "./components/Navbar/Navbar";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />

        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
