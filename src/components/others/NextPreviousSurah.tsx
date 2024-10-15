import type { NextPreviousSurahType } from "@/types/detailSurah";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NextPreviousSurah({
  nextSurah,
  previousSurah,
}: {
  nextSurah: NextPreviousSurahType;
  previousSurah: NextPreviousSurahType;
}) {
  return (
    <div className="w-full flex gap-4">
      {previousSurah && (
        <>
          <Link
            className="flex items-center gap-2 text-lg border p-2 border-secondary-300 rounded text-secondary-700 hover:text-primary-500 hover:border-primary-500"
            to={`/surah/${previousSurah.nomor}`}>
            <IoIosArrowBack />
            <p>Surah Sebelumnya</p>
          </Link>
          <Link
            className="text-lg border py-2 px-3 border-secondary-300 rounded text-secondary-700 hover:text-primary-500 hover:border-primary-500"
            to="/surah/1">
            Awal Surah
          </Link>
        </>
      )}
      {nextSurah && (
        <Link
          className="flex items-center gap-2 text-lg border p-2 border-secondary-300 rounded text-secondary-700 hover:text-primary-500 hover:border-primary-500 ml-auto"
          to={`/surah/${nextSurah.nomor}`}>
          <p>Surah Selanjutnya</p>
          <IoIosArrowForward />
        </Link>
      )}
    </div>
  );
}
