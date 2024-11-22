import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contact = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefono",
    description: "(+57) 324 557 7008",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "santiusuga717@gmail.com",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="container mx-auto max-w-screen-lg pt-20 pb-10 px-4" // Ajuste del contenedor principal
      id="Contact"
    >
      {/* Grid principal */}
      <div className="grid md:grid-cols-2 gap-16 place-items-center">
        {/* Sobre mí */}
        <div className="text-gray-200">
          <h3 className="text-4xl text-green-400 pb-6 text-center md:text-left">
            Sobre mí
          </h3>
          <p className="leading-7 text-center md:text-justify px-2 md:px-0">
            Soy un desarrollador con experiencia en programación web,
            especializado en tecnologías como React, Tailwind y Django. Me
            destaco por crear interfaces modernas y responsivas, optimizando la
            experiencia del usuario. Además, cuento con habilidades personales
            como adaptabilidad y comunicación efectiva, lo que me permite
            colaborar en proyectos complejos y cumplir objetivos con eficiencia.
          </p>
        </div>

        {/* Contactos */}
        <div className="flex flex-col gap-6 text-gray-200 w-full">
          <ul className="flex flex-col gap-6 items-center md:items-start">
            {contact.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 w-full max-w-md bg-gray-800 rounded-lg p-4"
              >
                <div className="w-14 h-14 bg-[#27272c] text-green-400 rounded-full flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div>
                  <p className="font-bold text-lg">{item.title}</p>
                  <h3 className="text-gray-400">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Formulario */}
      <form
        action="https://getform.io/f/awnnydyb"
        method="POST"
        className="w-full max-w-md mx-auto mt-10 text-gray-200"
      >
        <p className="text-green-400 font-bold text-xl mb-4 text-center">
          ¡Contáctame!
        </p>
        <input
          type="text"
          id="name"
          placeholder="Tu nombre..."
          name="name"
          className="mb-4 w-full rounded-md border bg-gray-800 border-gray-600 focus:border-green-400 font-light placeholder:text-gray-500 outline-none py-2 pl-4"
        />
        <input
          type="email"
          id="email"
          placeholder="Tu correo..."
          name="email"
          className="mb-4 w-full rounded-md border bg-gray-800 border-gray-600 focus:border-green-400 font-light placeholder:text-gray-500 outline-none py-2 pl-4"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="4"
          placeholder="Tu mensaje..."
          className="w-full mb-4 rounded-md border bg-gray-800 border-gray-600 focus:border-green-400 font-light placeholder:text-gray-500 outline-none py-2 pl-4"
        />
        <button
          type="submit"
          className="w-full py-3 bg-green-400 rounded-md text-gray-800 hover:bg-green-600 transition-all duration-300 font-semibold text-lg"
        >
          Enviar mensaje
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
