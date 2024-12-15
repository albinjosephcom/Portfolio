import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* LinkedIn Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <h3 className="text-white text-lg font-semibold">LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/albin-joseph9846007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 mt-2 block"
        >
          Albin Joseph
        </a>
      </motion.div>


      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <h3 className="text-white text-lg font-semibold">Landing Page</h3>
        <a
          href="https://space-theme-landing-page.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 mt-2 block"
        >
          Landing Page
        </a>
      </motion.div>

      {/* Footer Design */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex justify-end items-start"
      >
        <div className="text-right">
          <p className="text-gray-400 mt-2">
            Designed and developed by{" "}
            <a
              href="https://a.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              a.com
            </a>
          </p>
          <p className="text-gray-400 mt-2">© 2024 All rights reserved</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Footer, "");
