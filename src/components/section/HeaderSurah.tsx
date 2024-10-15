import type { SurahType } from "@/types/surah";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import parser from "html-react-parser";

export default function HeaderSurah({
  nama,
  namaLatin,
  arti,
  jumlahAyat,
  tempatTurun,
  deskripsi,
}: SurahType) {
  const [isOnInfo, setIsOnInfo] = useState(false);

  return (
    <div className="flex flex-col py-8 px-4">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-5xl mb-2 font-amiri">{nama}</h1>
        <p className="font-medium">{namaLatin + " - " + arti}</p>
        <p className="text-sm font-medium text-secondary-500">
          {jumlahAyat} ayat -{" "}
          {tempatTurun === "Mekah" ? "Makkiyah" : "Madaniyah"}
        </p>
      </div>
      <div className="flex w-full justify-between">
        <button
          className="flex gap-1 items-center px-1 rounded hover:bg-secondary-100"
          type="button"
          onClick={() => setIsOnInfo(!isOnInfo)}>
          {isOnInfo ? <IoIosArrowDown /> : <IoIosArrowForward />}
          <p className="font-medium">Surah Info</p>
        </button>
        <button
          className="flex gap-1 items-center p-1 text-primary-500 rounded hover:bg-primary-100"
          type="button">
          <IoPlay />
          <p>Play Audio</p>
        </button>
      </div>
      <div className="w-full mt-4 px-4">
        {isOnInfo && <p>{parser(deskripsi)}</p>}
      </div>
    </div>
  );
}
