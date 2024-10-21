import { IoBookmarks } from "react-icons/io5";
import { Link } from "react-router-dom";
import Tooltip from "../others/Tooltip";
import MenuDrawer from "../drawer/MenuDrawer";
import SettingDrawer from "../drawer/SettingDrawer";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-10 bg-white">
      <div className="w-full max-w-screen-xl flex justify-between items-center mx-auto px-4 py-3 sm:px-6">
        <div className="flex gap-1 items-center">
          <MenuDrawer />
          <Link to={"/"}>
            <h3 className="text-2xl text-secondary-800 font-logo font-semibold">
              <span className="text-3xl font-extrabold">EH</span>oly
              <span className="text-3xl font-extrabold">Q</span>uran
            </h3>
          </Link>
        </div>
        <div className="flex gap-2">
          <Tooltip text="Bookmark" position="left">
            <Link
              to={"/"}
              className="w-9 h-9 flex justify-center items-center font-semibold hover:bg-secondary-200 p-2 rounded-full"
              type="button">
              <IoBookmarks />
            </Link>
          </Tooltip>
          <SettingDrawer />
        </div>
      </div>
    </header>
  );
}
