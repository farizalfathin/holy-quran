export default function CardAyahSkeleton({ item = 4 }: { item?: number }) {
  return Array.from({ length: item }).map((_, index) => (
    <div
      key={index}
      className="flex items-end border-b-2 border-secondary-200 pb-4 gap-6 animate-pulse">
      <div className="flex flex-col gap-1">
        <div className="w-9 h-9 bg-primary-300 rounded-full" />
        <div className="w-8 h-8 bg-secondary-200 rounded-full" />
        <div className="w-8 h-8 bg-secondary-200 rounded-full" />
        <div className="w-8 h-8 bg-secondary-200 rounded-full" />
      </div>
      <div className="w-full pb-1">
        <div className="w-64 h-8 bg-secondary-200 rounded-full ms-auto" />
        <div className="w-96 h-6 rounded-full bg-secondary-200 me-auto" />
      </div>
    </div>
  ));
}
