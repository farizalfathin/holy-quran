import Heroes from "@/components/section/Heroes";
import CardSurah from "@/components/card/CardSurah";
import type { SurahType } from "@/types/surah";
import RenderList from "@/utils/RenderList";
import { useCallback, useEffect, useState } from "react";
import CardSurahSkeleton from "@/components/skeleton/CardSurahSkeleton";
import Layout from "@/components/others/Layout";

export default function Home() {
  const [status, setStatus] = useState<"loading" | "success" | "fail">(
    "loading"
  );
  const [listSurah, setListSurah] = useState<SurahType[]>([]);

  const getListSurah = useCallback(async () => {
    try {
      setStatus("loading");
      const response = await fetch("https://equran.id/api/v2/surat");
      const { data } = await response.json();
      setListSurah(data);
      setStatus("success");
    } catch (e: any) {
      setStatus("fail");
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    document.title = "Holy Quran";
    getListSurah();
  }, []);

  return (
    <Layout>
      <main>
        <section className="w-full mb-6">
          <Heroes />
        </section>
        <section className="w-full max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            <RenderList
              of={listSurah}
              status={status}
              loadingElement={<CardSurahSkeleton item={12} />}
              failedElement={<p>Failed to fetch</p>}
              render={(item: SurahType, index) => (
                <CardSurah key={index} {...item} />
              )}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
