export default function Heroes() {
  return (
    <div className="relative">
      <div className="relative w-full h-64 flex justify-center">
        <div className="w-full h-full bg-primary-500" />
        <img
          className="w-full absolute top-0 h-64 object-cover invert opacity-10"
          src="https://img.pikbest.com/element_our/20230308/bg/fed22d1b783b0.png!bw700"
          alt=""
        />
      </div>
      <div className="absolute top-0 w-full h-full px-4 flex flex-col justify-center items-center text-white">
        <img
          className="w-full max-w-[16rem] invert"
          src="https://img.pikbest.com/element_our/20230308/bg/fed22d1b783b0.png!bw700"
          alt=""
        />
        <p className="text-xl font-medium">The Holy Quran</p>
      </div>
    </div>
  );
}
