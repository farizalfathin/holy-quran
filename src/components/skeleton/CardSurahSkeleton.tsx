export default function CardSurahSkeleton({ item = 9 }: { item?: number }) {
  return Array.from({ length: item }).map((_, index) => (
    <div
      key={index}
      className="w-full flex border border-secondary-300 bg-secondary-100 items-center px-4 py-2 gap-4 rounded animate-pulse">
      <div className="w-12 h-12 bg-secondary-200 flex justify-center items-center rounded-se-[1.8rem] rounded-es-[1.8rem]" />
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="w-20 h-4 rounded-full bg-secondary-200" />
          <div className="w-16 h-4 rounded-full bg-secondary-200" />
        </div>
        <div className="flex justify-between">
          <div className="w-14 h-3 rounded-full bg-secondary-200" />
          <div className="w-12 h-3  rounded-full bg-secondary-200" />
        </div>
      </div>
    </div>
  ));
}
