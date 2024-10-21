export default function Footer() {
  return (
    <footer className="w-full border-t border-secondary-300 mt-6 mb-auto">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col gap-12 px-6 pt-4 pb-8 md:flex-row md:gap-14">
        <div className="flex-1">
          <h3 className="text-2xl">
            <span className="font-logo font-semibold">eholyquran</span>
            .vercel.app
          </h3>
          <p className="text-lg font-semibold">
            Mempelajari dan Mengajarkan Al-Qur’an
          </p>
          <p className="text-secondary-500">
            <span className="font-logo">EHoly-Quran</span> adalah situs penyedia
            Al-Qur’an online untuk mempermudah setiap orang yang ingin membaca
            Al-Qur’an dan mempelajarinya. Semoga Allah SWT memberikan kemudahan
            bagi orang orang mempelajari Al-Qur’an
          </p>
          <div className="w-full p-4 bg-secondary-200 rounded mt-6">
            <p className="text-end">
              عن عثمانَ بن عفانَ رضيَ اللَّه عنهُ قال : قالَ رسولُ اللَّهِ صَلّى
              اللهُ عَلَيْهِ وسَلَّم : « خَيركُم مَنْ تَعَلَّمَ القُرْآنَ
              وَعلَّمهُ » رواه البخاري
            </p>
            <p className="mt-4">
              Dari Usman bin Affan ra, Rasulullah saw. bersabda, “Sebaik-baik
              kalian adalah yang mempelajari al-Qur’an dan mengajarkannya.” (HR.
              Bukhari)
            </p>
          </div>
        </div>
        <div className="flex-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            dolores eius adipisci. Voluptatum perferendis incidunt aut accusamus
            mollitia obcaecati, repellendus dolores dolore. Nihil quisquam
            dolore itaque nostrum perspiciatis rem necessitatibus nam cumque
            doloribus unde voluptate eligendi, amet odio voluptatibus dolorum
            harum esse quis totam quia hic nobis pariatur! Natus, et!
          </p>
        </div>
      </div>
    </footer>
  );
}
