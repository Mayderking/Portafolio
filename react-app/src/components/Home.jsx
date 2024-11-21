import Profile from "../assets/image.png";
import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiDjango,
  DiReact,
} from "react-icons/di";

const Home = () => {
  return (
    <div className="mb-[200px] mt-[100px] max-w-[1200px] mx-auto relative">
      <div className="flex flex-col md:flex-row placer-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-3 text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:text-7xl text-5xl tracking-tight mb-4 text-gray-200 text-center"
          >
            Hola soy <br />
            <span className="text-green-400">Santiago Grisales</span>
          </motion.p>
          <motion.p
            inital={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-[300px] md:max-w-[500px] text-center md:text-2xl text-lg mx-auto text-gray-200"
          >
            Estudiante y programador especializado en [tecnología o área
            principal], con experiencia en crear soluciones funcionales e
            innovadoras. Apasionado por la tecnología y el diseño.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-wrap gap-4 px-6 md:px-0 w-full justify-center items-center py-4"
          >
            <DiHtml5 className="text-green-400 w-10 h-10 md:w-12 md:h-12" />
            <DiCss3 className="text-green-400 w-10 h-10 md:w-12 md:h-12" />
            <DiJavascript1 className="text-green-400 w-10 h-10 md:w-12 md:h-12" />
            <DiPython className="text-green-400 w-10 h-10 md:w-12 md:h-12" />
            <DiDjango className="text-green-400 w-10 h-10 md:w-12 md:h-12" />
            <DiReact className="text-green-400 w-10 h-10 md:w-12 md:h-12" />
          </motion.div>
        </motion.div>
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mx-auto">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mx-auto">
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="253"
                stroke="#00ff99"
                strokeWidth="4"
                fill="none"
                strokeLinejoin="round"
                initial={{ opacity: 0, strokeDasharray: "24 10 0 0" }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
            <motion.img
              src={Profile}
              className="absolute inset-0 w-full h-full rounded-full object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
