import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
