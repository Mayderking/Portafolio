import { VscAccount, VscBook, VscChecklist } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed z-40 flex flex-col items-center justify-center w-full h-max bottom-10 text-primary">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay:0.5}}
        className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-gray-200/15 backdrop-blur-sm text-gray-200"
      >
        <ul className="flex gap-5 z-10 cursor-pointer">
          <li className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-green-400">
            <Link to="Home" smooth={true} duration={500}>
              <VscAccount className="size-8" />
            </Link>
          </li>
          <li className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-green-400">
            <Link to="Services" smooth={true} duration={500}>
              <VscBook className="size-8" />
            </Link>
          </li>
          <li className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-green-400">
            <Link to="contact" smooth={true} duration={500}>
              <VscChecklist className="size-8" />
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
