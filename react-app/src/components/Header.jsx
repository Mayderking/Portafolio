import React from "react";
import { Link } from "react-scroll";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div
        className="container justify-between max-w-6xl mx-auto md:flex"
        id="Home"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className=" my-3 text-4xl font-bold text-center md:text-left text-gray-200"
        >
          Santi
          <span className="text-green-400">.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-7"
        >
          <a
            href="https://github.com/Mayderking"
            className="transition-all duration-300 text-gray-200 hover:text-green-400"
            target="_blank"
          >
            <AiOutlineGithub className="size-10" />
          </a>
          <a
            href="https://www.instagram.com/_santi_grisales/"
            className="transition-all duration-300 text-gray-200 hover:text-green-400"
            target="_blank"
          >
            <AiOutlineInstagram className="size-10" />
          </a>
          <a
            href="https://wa.me/573245577008"
            className="transition-all duration-300 text-gray-200 hover:text-green-400"
            target="_blank"
          >
            <FaWhatsappSquare className="size-10" />
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
