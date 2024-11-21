import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Services />
    </>
  );
}
