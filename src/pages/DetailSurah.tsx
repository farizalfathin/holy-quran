import CardAyah from "@/components/card/CardAyah";
import TafsirDrawer from "@/components/drawer/TafsirDrawer";
import Basmallah from "@/components/others/Basmallah";
import Layout from "@/components/others/Layout";
import NextPreviousSurah from "@/components/others/NextPreviousSurah";
import HeaderSurah from "@/components/section/HeaderSurah";
import CardAyahSkeleton from "@/components/skeleton/CardAyahSkeleton";
import HeaderSurahSkeleton from "@/components/skeleton/HeaderSurahSkeleton";
import type {
  AyatType,
  DetailSurahType,
  TafsirType,
} from "@/types/detailSurah";
import ConditionalRender from "@/utils/ConditionalRender";
import RenderList from "@/utils/RenderList";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type OpenTafsir = {
  namaLatin: string;
} & TafsirType;

export default function DetailSurah() {
  const { id } = useParams();
  const [status, setStatus] = useState<"loading" | "success" | "fail">(
    "loading"
  );
  const [detailSurah, setDetailSurah] = useState<DetailSurahType>();
  const [isOpenTafsir, setIsOpenTafsir] = useState<OpenTafsir | false>(false);

  const getDetailSurah = useCallback(
    async (id: string) => {
      try {
        setStatus("loading");

        const [detailSurahRes, tafsirRes] = await Promise.all([
          fetch(`https://equran.id/api/v2/surat/${id}`),
          fetch(`https://equran.id/api/v2/tafsir/${id}`),
        ]);

        if (!detailSurahRes.ok || !tafsirRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [detailSurahData, tafsirData] = await Promise.all([
          detailSurahRes.json(),
          tafsirRes.json(),
        ]);

        setDetailSurah({
          ...detailSurahData.data,
          tafsir: tafsirData.data.tafsir,
        });
        setStatus("success");
      } catch (e: any) {
        setStatus("fail");
        throw new Error(e);
      }
    },
    [id]
  );

  useEffect(() => {
    getDetailSurah(id || "");

    if (detailSurah?.namaLatin) {
      document.title = `Surah ${detailSurah?.namaLatin}`;
    }
  }, [id]);

  const handleOpenTafsir = (ayat: number) => {
    if (detailSurah?.tafsir) {
      const data = detailSurah.tafsir.find((tafsir) => tafsir.ayat === ayat);

      setIsOpenTafsir({
        namaLatin: detailSurah?.namaLatin || "",
        ayat: data?.ayat || 0,
        teks: data?.teks || "",
      });
    }
  };

  const handleCloseTafsir = () => setIsOpenTafsir(false);

  return (
    <Layout>
      <main className="w-full">
        <section className="w-full max-w-screen-lg mx-auto mb-4">
          <ConditionalRender
            status={status}
            loadingElement={<HeaderSurahSkeleton />}
            render={
              <HeaderSurah
                nomor={detailSurah?.nomor || 0}
                nama={detailSurah?.nama || ""}
                namaLatin={detailSurah?.namaLatin || ""}
                arti={detailSurah?.arti || ""}
                jumlahAyat={detailSurah?.jumlahAyat || 0}
                tempatTurun={detailSurah?.tempatTurun || ""}
                deskripsi={detailSurah?.deskripsi || ""}
                audioFull={detailSurah?.audioFull}
              />
            }
          />
        </section>
        <section className="w-full max-w-screen-lg mx-auto mb-4">
          <ConditionalRender
            status={status}
            render={detailSurah?.nomor !== 1 ? <Basmallah /> : null}
          />
          <div className="flex flex-col gap-6 px-4">
            <RenderList
              of={detailSurah?.ayat || []}
              status={status}
              loadingElement={<CardAyahSkeleton />}
              failedElement={<p>Failed to fetch</p>}
              render={(item: AyatType, index) => (
                <CardAyah
                  key={index}
                  handleOpenTafsir={handleOpenTafsir}
                  {...item}
                />
              )}
            />
          </div>
        </section>
        <section className="w-full max-w-screen-lg mx-auto mb-16">
          <ConditionalRender
            status={status}
            render={
              <NextPreviousSurah
                nextSurah={detailSurah?.suratSelanjutnya || false}
                previousSurah={detailSurah?.suratSebelumnya || false}
              />
            }
          />
        </section>
        <TafsirDrawer
          isOpenTafsir={isOpenTafsir}
          handleCloseTafsir={handleCloseTafsir}
        />
      </main>
    </Layout>
  );
}
