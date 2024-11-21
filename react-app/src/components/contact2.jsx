import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
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
    className="container mx-auto" id="contact">
      <div className="grid md:grid-cols-2 place-items-center">
        <div className="mx-auto">
          <div className="text-gray-200 my-3">
            <h3 className="text-4xl text-green-400 pb-8 text-center">
                Sobre mi
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos,
              quam vel quisquam, explicabo sit labore dignissimos optio ratione
              quibusdam doloribus pariatur consequuntur sint. Reprehenderit
              cupiditate possimus facere quasi voluptatem?
            </p>
          </div>
          <div className="flex mt-10 items-center gap-6 text-gray-200">
          <div className="flex-1 flex items-center px-[20px] xl:justify-center order-2 xl:order-none mb-8 xl:mb-0 text-gray-200">
            <ul className="flex flex-col gap-10">
              {contact.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72] bg-[#27272c] text-green-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          </div>
        </div>

        <form
          action="https://getform.io/f/aollolrb"
          method="POST"
          className="max-w-6xl p-5 md:p-12"
          id="form"
        >
          <p className="text-gray-100 font-bold text-xl mb-2">Let's connect!</p>
          <input
            type="text"
            id="name"
            placeholder="Your name..."
            name="name"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <input
            type="email"
            id="email"
            placeholder="Your email..."
            name="email"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Your message ..."
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          >
            Send message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
