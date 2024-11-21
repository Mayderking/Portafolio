import React from "react";
import { motion } from "framer-motion";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-scroll";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "jfdiksltjreipogjdfsklfdjhklgjdsfkl",
  },
  {
    num: "02",
    title: "Web Development",
    description: "jfdiksltjreipogjdfsklfdjhklgjdsfkl",
  },
  {
    num: "03",
    title: "Web Development",
    description: "jfdiksltjreipogjdfsklfdjhklgjdsfkl",
  },
  {
    num: "04",
    title: "Web Development",
    description: "jfdiksltjreipogjdfsklfdjhklgjdsfkl",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8" id="Services">
      <div className="container mx-auto text-gray-200">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }}
        className="grid grid-cols-1 md:grid-cols-2 px-3 gap-[60px]"
        >
            {services.map((service, index) => {
                return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-400">{service.num}</div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-green-400 transition-all duration-400 flex justify-center items-center hover:-rotate-45">
                    <VscArrowRight className="text-gray-900 text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-gray-200 group-hover:text-green-400 transition-all duration-400">{service.title} </h2>
                  <p className="text-gray-200/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
            })}

        </motion.div>
      </div>
    </section>
  );
};

export default Services;