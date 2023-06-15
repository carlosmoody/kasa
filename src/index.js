import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./utils/style/GlobalStyle";
import Error from "./components/Error/Error";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Details from "./pages/details/details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
