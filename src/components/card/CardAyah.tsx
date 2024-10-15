import {
  IoBookmarkOutline,
  IoBookOutline,
  IoPlayOutline,
} from "react-icons/io5";
import Tooltip from "../others/Tooltip";

export default function CardAyah({
  nomorAyat,
  teksArab,
  teksIndonesia,
  handleOpenTafsir,
}: {
  nomorAyat: number;
  teksArab: string;
  teksIndonesia: string;
  handleOpenTafsir: (ayat: number) => void;
}) {
  return (
    <div className="flex flex-col justify-start border-b-2 border-secondary-200 pb-4 gap-6 sm:flex-row sm:items-end">
      <div className="flex gap-1 sm:flex-col">
        <div className="w-9 h-9 bg-primary-400 text-white text-xs flex justify-center items-center rounded-full font-medium">
          {nomorAyat}
        </div>
        <Tooltip text="Play" position="top">
          <button
            type="button"
            className="w-9 h-9 text-secondary-500 text-lg flex justify-center items-center rounded-full font-medium hover:bg-primary-200 hover:text-primary-500">
            <IoPlayOutline />
          </button>
        </Tooltip>
        <Tooltip text="Tafsir" position="top">
          <button
            type="button"
            className="w-9 h-9 text-secondary-500 text-lg flex justify-center items-center rounded-full font-medium hover:bg-primary-200 hover:text-primary-500"
            onClick={() => handleOpenTafsir(nomorAyat)}>
            <IoBookOutline />
          </button>
        </Tooltip>
        <Tooltip text="Bookmark" position="top">
          <button
            type="button"
            className="w-9 h-9 text-secondary-500 text-lg flex justify-center items-center rounded-full font-medium hover:bg-primary-200 hover:text-primary-500">
            <IoBookmarkOutline />
          </button>
        </Tooltip>
      </div>
      <div className="w-full pb-1">
        <p className="text-end text-2xl font-amiri leading-loose sm:text-3xl">
          {teksArab + " \u06DD"}
        </p>
        <p className="mt-4 sm:text-lg">{teksIndonesia}</p>
      </div>
    </div>
  );
}
