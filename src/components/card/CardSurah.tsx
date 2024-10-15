import { Link } from "react-router-dom";

export default function CardSurah({
  nomor,
  nama,
  namaLatin,
  jumlahAyat,
  arti,
}: {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  arti: string;
}) {
  return (
    <Link className="group" to={`/surah/${nomor}`}>
      <div className="w-full flex border border-secondary-300 items-center px-4 py-2 gap-4 rounded group-hover:border-primary-500 group-hover:bg-primary-50">
        <div className="w-12 h-12 bg-secondary-200 flex justify-center items-center rounded-se-[1.8rem] rounded-es-[1.8rem] font-bold group-hover:bg-primary-500 group-hover:text-white">
          {nomor}
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between font-medium">
            <p>{namaLatin}</p>
            <p className="font-amiri">{nama}</p>
          </div>
          <div className="flex justify-between text-xs font-medium text-secondary-500 group-hover:text-primary-500">
            <p>{arti}</p>
            <p>{jumlahAyat} Ayat</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// function ListSurahSkeleton({ items = 6 } : { items?: number }) {
//     return (
//         <>
//         { Array.from({ length: items }).map((_, index) => (

//         ))}
//     </>
// )}
