export default function HeaderSurahSkeleton() {
  return (
    <div className="flex flex-col py-8 animate-pulse">
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-8 bg-secondary-200 rounded-full mb-4" />
        <div className="flex gap-4 mb-2">
          <div className="w-16 h-3 bg-secondary-200 rounded-full" />
          <div className="w-16 h-3 bg-secondary-200 rounded-full" />
        </div>
        <div className="flex gap-4">
          <div className="w-[4.5rem] h-3 bg-secondary-200 rounded-full" />
          <div className="w-[4.5rem] h-3 bg-secondary-200 rounded-full" />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-24 h-4 rounded-full bg-secondary-200" />
        <div className="w-24 h-4 rounded-full bg-primary-300" />
      </div>
    </div>
  );
}
