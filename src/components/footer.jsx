import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-200"
        id="Home"
      >
        <p className="text-center text-sm sm:text-base lg:text-[30px] font-bold">
          @2024 Santiago Grisales
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
