import Layout from "@/components/others/Layout";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <Layout>
      <main>
        <section className="w-full max-w-screen-md mx-auto">
          <div className="my-8">
            <h1 className="text-3xl font-semibold text-secondary-800 mb-2">
              Tentang <span className="font-logo">EHoly-Quran</span>
            </h1>
            <p>
              <span className="font-logo font-semibold">EHoly-Quran</span>{" "}
              adalah sebuah platform website yang dirancang untuk menjadi solusi
              bagi siapa saja yang ingin mendekatkan diri dengan Al-Qur’an, baik
              melalui pembacaan, dan hafalan. Dengan antarmuka yang ramah
              pengguna dan fitur-fitur yang intuitif,{" "}
              <span className="font-logo font-semibold">EHoly-Quran</span>{" "}
              memudahkan pengguna dari berbagai kalangan, baik pemula maupun
              yang sudah mahir, untuk mengakses dan mempelajari Al-Qur’an.
              <br />
              <br />
              Platform ini menyediakan berbagai alat yang dirancang untuk
              memfasilitasi pengalaman belajar Al-Qur’an yang lebih efektif,
              seperti fitur untuk menyimpan ayat-ayat penting, serta memutar
              bacaan dari qari’ terkenal. Selain itu,{" "}
              <span className="font-logo font-semibold">EHoly-Quran</span> juga
              dilengkapi dengan tafsir dan terjemahan dalam bahasa Indonesia,
              sehingga pengguna dapat memahami pesan Al-Qur’an dengan lebih
              baik.
              <br />
              <br />
              Dengan visi untuk menjadi sahabat setiap Muslim dalam perjalanan
              spiritual mereka,{" "}
              <span className="font-logo font-semibold">EHoly-Quran</span>{" "}
              berkomitmen untuk terus berinovasi dalam menghadirkan fitur-fitur
              yang mendukung pembelajaran Al-Qur’an yang lebih interaktif dan
              personal.
            </p>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-secondary-800 mb-2">
              Tentang Pengembangan
            </h1>
            <p>
              Website ini dikembangkan dengan React Vite TypeScript serta
              beberapa library JavaScript lainnya dengan hosting Vercel serta
              API Al-Qur’an Open Source yang bersumber dari{" "}
              <Link
                className="text-primary-500 underline"
                to="https://equran.id/apidev/v2">
                EQuran.id
              </Link>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
