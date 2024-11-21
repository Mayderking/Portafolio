import React from "react";
import { motion } from "framer-motion";
import { VscArrowRight } from "react-icons/vsc";
import work1 from "../assets/brawlhalla.png";
import work2 from "../assets/blogger.png";
import work3 from "../assets/post.png";
import work4 from "../assets/tecnno.png";

const services = [
  {
    num: "01",
    title: "Brawlhalla",
    description: "Pagina web Informativa sobre el videojuego brawlhalla",
    img: work1,
    href: "https://welcome-to-brawlhalla.netlify.app/",
  },
  {
    num: "02",
    title: "Pandas",
    description: "Pagina web informativa sobre los animales pandas",
    img: work2,
    href: "https://infopanditas.blogspot.com/",
  },
  {
    num: "03",
    title: "Post",
    description:
      "Blog donde se pueden crear y editar publicaciones con busquedas filtradas y botones de navegacion",
    img: work3,
    href: "https://github.com/Mayderking/Blog",
  },
  {
    num: "04",
    title: "TecnoProducts",
    description:
      "TecnoProducts es un sistema de gestión de ventas diseñado para un local de tecnología",
    img: work4,
    href: "https://github.com/Mayderking/final-poo",
  },
];

const Services = () => {
  return (
    <section
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8"
      id="Services"
    >
      <div className="container mx-auto text-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 px-3 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-400">
                    {service.num}
                  </div>
                  <a
                    href={service.href}
                    target="_blank"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-green-400 transition-all duration-400 flex justify-center items-center hover:-rotate-45"
                  >
                    <VscArrowRight className="text-gray-900 text-3xl" />
                  </a>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-gray-200 group-hover:text-green-400 transition-all duration-400">
                  {service.title}{" "}
                </h2>
                <p className="text-gray-200/60">{service.description}</p>
                <motion.img
                  src={service.img}
                  alt={`Imagen de ${service.title}`}
                  className="rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
