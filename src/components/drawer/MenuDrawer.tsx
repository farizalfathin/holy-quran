import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { IoClose, IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import Tooltip from "../others/Tooltip";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "-100%",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Tooltip text="Menu" position="right">
        <button
          className="text-2xl font-semibold hover:bg-secondary-200 p-1 rounded"
          onClick={toggleDrawer}
          type="button">
          <BsList />
        </button>
      </Tooltip>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleDrawer}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}></motion.div>
        )}
      </AnimatePresence>

      {/* Drawer with Enhanced Animation */}
      <motion.div
        className="fixed inset-y-0 left-0 w-80 bg-white z-50"
        variants={drawerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit">
        <div className="w-full flex justify-between items-start px-4 py-3 mb-4 border-b border-secondary-200">
          <h2 className="font-bold text-black font-logo text-2xl">
            EHolyQuran
          </h2>
          <Tooltip text="Close" position="right">
            <button
              className="text-xl p-2 rounded-full hover:bg-secondary-200"
              onClick={toggleDrawer}
              type="button">
              <IoClose />
            </button>
          </Tooltip>
        </div>
        <motion.ul
          className="px-4 font-montserrat"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}>
          <motion.li variants={itemVariants}>
            <Link
              to="/"
              onClick={toggleDrawer}
              className="flex items-center text-sm gap-3 py-3 border-b border-secondary-200 group">
              <IoHome className="text-secondary-400 group-hover:text-black" />
              <span className="text-black">Home</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              to="/about"
              onClick={toggleDrawer}
              className="flex items-center text-sm gap-3 py-3 border-b border-secondary-200 group">
              <IoIosInformationCircle className="text-secondary-400 group-hover:text-black" />
              <span className="text-black">About us</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              to="/"
              className="flex items-center text-sm gap-3 py-3 border-b border-secondary-200 group">
              <IoHome className="text-secondary-400 group-hover:text-black" />
              <span className="text-black">Feedback</span>
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
