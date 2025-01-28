import { useState } from "react";
import { motion } from "motion/react";

/* eslint-disable react/no-unescaped-entities */
const ContactForm = () => {
  const labelStyle =
    "text-neutral-300 group-hover:text-white group-hover:font-medium transition-all w-full text-sm";
  const inputStyle =
    "placeholder:text-neutral-400 p-3 outline-none w-full h-full text-[0.9rem] border border-neutral-500 focus:border-orange-600 leading-5 bg-neutral-900 rounded-lg appearance-none transition-all";

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <section id="contact" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        Let's work
        <span className="text-neutral-700 block">Together</span>
      </h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        viewport={{ once: true }}
        animate
        className="grid grid-cols-2 gap-4 text-white"
        action=""
      >
        <div className="flex flex-col gap-4 group">
          <label className={labelStyle} htmlFor="contact-name">
            Name
          </label>
          <input
            className={inputStyle}
            placeholder="Your name"
            id="contact-name"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4 group">
          <label className={labelStyle} htmlFor="contact-email">
            Email
          </label>
          <input
            className={inputStyle}
            placeholder="Your@email.com"
            id="contact-email"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4 col-span-2 group">
          <label className={labelStyle} htmlFor="contact-budget">
            Budget
          </label>
          <select
            className={`${inputStyle} ${
              selectedValue ? "text-white" : "text-neutral-400"
            }`}
            placeholder="Your budget"
            id="contact-budget"
            defaultValue={""}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option disabled value={""}>
              Select an option
            </option>
            <option className="text-white" value="3k">
              {"<"}3k
            </option>
            <option className="text-white" value="3k-5k">
              3k-5k
            </option>
            <option className="text-white" value="5k-10k">
              5k-10k
            </option>
            <option className="text-white" value="3k">
              {">"}10k
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-4 col-span-2 group">
          <label className={labelStyle} htmlFor="contact-message">
            Message
          </label>
          <textarea
            className={`${inputStyle} h-52`}
            placeholder="Your message"
            name="message"
            id="contact-message"
          ></textarea>
        </div>
        <button
          className="w-full col-span-2 bg-orange-600 p-3 rounded-xl font-semibold flex items-center justify-center text-lg hover:text-neutral-800 transition-all"
          type="submit"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
