import React from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      <div
        className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-200"
        id="Home"
      >
        <p className="text-center text-sm sm:text-base lg:text-[30px] font-bold">
          @2024 Santiago Grisales
        </p>
      </div>
    </footer>
  );
};

export default Footer;
