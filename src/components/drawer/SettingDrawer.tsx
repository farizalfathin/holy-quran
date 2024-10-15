import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoClose, IoSettingsSharp } from "react-icons/io5";
import { WiSunset } from "react-icons/wi";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Tooltip from "../others/Tooltip";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: "100%" }, // Mengubah dari -100% ke 100% untuk keluar dari kanan
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 }, // Mengubah animasi item dari kiri ke kanan
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SettingDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Tooltip text="Setting" position="left">
        <button
          className="text-xl font-semibold hover:bg-secondary-200 p-2 rounded-full"
          onClick={toggleDrawer}
          type="button">
          <IoSettingsSharp />
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
        className="fixed inset-y-0 right-0 w-80 bg-white z-50 font-montserrat"
        variants={drawerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit">
        <div className="w-full flex justify-between items-center px-4 py-3 mb-6 border-b border-secondary-200">
          <h2 className="text-black text-lg">Settings</h2>
          <Tooltip text="Close" position="left">
            <button
              className="text-xl p-2 rounded-full hover:bg-secondary-200"
              onClick={toggleDrawer}
              type="button">
              <IoClose />
            </button>
          </Tooltip>
        </div>
        <motion.ul
          className="px-4"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}>
          <motion.li variants={itemVariants}>
            <h2>Theme</h2>
            <SelectTheme />
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}

const SelectTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<number>(0);

  return (
    <div className="relative w-full flex p-1 h-10 rounded-full bg-secondary-100 mt-2">
      {/* Background animasi */}
      <motion.div
        className="absolute top-0 left-0 border-4 border-secondary-100 w-1/3 h-full bg-white rounded-full"
        initial={false}
        animate={{ x: `${selectedTheme * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Tombol-tombol untuk memilih tema */}
      <button
        onClick={() => setSelectedTheme(0)}
        className={`flex-1 relative z-10 rounded-full flex items-center justify-center gap-2`}
        type="button">
        <MdOutlineLightMode />
        <span className="text-xs">Light</span>
      </button>
      <button
        onClick={() => setSelectedTheme(1)}
        className={`flex-1 relative z-10 rounded-full flex items-center justify-center gap-2`}
        type="button">
        <WiSunset />
        <span className="text-xs">Sepia</span>
      </button>
      <button
        onClick={() => setSelectedTheme(2)}
        className={`flex-1 relative z-10 rounded-full flex items-center justify-center gap-2`}
        type="button">
        <MdDarkMode />
        <span className="text-xs">Dark</span>
      </button>
    </div>
  );
};
