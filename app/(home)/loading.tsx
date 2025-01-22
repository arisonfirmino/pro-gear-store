import { Skeleton } from "@/app/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <div className="flex justify-between md:justify-center md:gap-10">
        <Skeleton className="h-10 w-10 min-w-10 max-w-10 xl:min-w-28 xl:max-w-28" />
        <Skeleton className="h-10 w-10 min-w-10 max-w-10 xl:min-w-28 xl:max-w-28" />
        <Skeleton className="h-10 w-10 min-w-10 max-w-10 xl:min-w-28 xl:max-w-28" />
        <Skeleton className="h-10 w-10 min-w-10 max-w-10 xl:min-w-28 xl:max-w-28" />
        <Skeleton className="h-10 w-10 min-w-10 max-w-10 xl:min-w-28 xl:max-w-28" />
        <Skeleton className="h-10 w-10 min-w-10 max-w-10 xl:min-w-28 xl:max-w-28" />
      </div>

      <Skeleton className="aspect-square w-full rounded-3xl md:aspect-auto md:h-64" />

      <div className="grid grid-cols-2 gap-5 xl:flex">
        <Skeleton className="h-[138px] w-full md:h-[76px]" />
        <Skeleton className="h-[138px] w-full md:h-[76px]" />
        <Skeleton className="h-[138px] w-full md:h-[76px]" />
        <Skeleton className="h-[138px] w-full md:h-[76px]" />
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <Skeleton className="h-[32px] w-36" />
          <Skeleton className="h-5 w-[61px]" />
        </div>

        <Skeleton className="h-[1px]" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Skeleton className="h-[481px]" />
          <Skeleton className="h-[481px]" />
          <Skeleton className="h-[481px]" />
          <Skeleton className="h-[481px]" />
        </div>
      </div>
    </>
  );
};

export default Loading;
