import type { AudioType, SurahType } from "./surah";

export type NextPreviousSurahType =
  | {
      nomor: number;
      nama: string;
      namaLatin: string;
      jumlahAyat: number;
    }
  | false;

export type AyatType = {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: AudioType;
};

export type TafsirType = {
  ayat: number;
  teks: string;
};

export type DetailSurahType = {
  ayat: AyatType[];
  tafsir: TafsirType[];
  suratSelanjutnya: NextPreviousSurahType;
  suratSebelumnya: NextPreviousSurahType;
} & SurahType;
