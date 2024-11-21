import React from "react";
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 px-4 xl:px-64"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="text-gray-200 flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-green-400">contactame!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="firstname"
                  placeholder="Firstname"
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-green-400 font-light bg-gray-800 px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <input
                  type="lastname"
                  placeholder="Lastname"
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-green-400 font-light bg-gray-800 px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-green-400 font-light bg-gray-800 px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <input
                  type="phone"
                  placeholder="Phone number"
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-green-400 font-light bg-gray-800 px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
              </div>
              <textarea
                className="h-[230px] flex min-h-[80px] w-full rounded-md border border-white/10 bg-gray-800 px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-53"
                placeholder="Type your message here."
              />
              <button
              type="submit"
                className="size-md max-w-40 bg-green-400 rounded-md text-gray-800 hover:bg-green-600 transition-all duration-400"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 text-gray-200">
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
    </motion.section>
  );
};

export default Contact;
