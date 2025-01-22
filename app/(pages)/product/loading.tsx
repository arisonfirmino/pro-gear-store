import { Skeleton } from "@/app/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <Skeleton className="h-10 w-[103px]" />

      <div className="flex flex-col gap-5 xl:flex-row">
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div className="order-2 flex gap-5 md:order-1 md:flex-col">
              <Skeleton className="h-14 w-14" />
              <Skeleton className="h-14 w-14" />
              <Skeleton className="h-14 w-14" />
            </div>

            <Skeleton className="order-1 h-80 w-80 md:order-2" />
          </div>

          <div className="w-full space-y-5">
            <div className="space-y-1.5">
              <Skeleton className="h-6 w-[308px]" />
              <Skeleton className="h-[1px]" />
            </div>

            <div className="space-y-1.5">
              <Skeleton className="h-6 w-28" />
              <Skeleton className="h-5 w-[229px]" />
            </div>

            <div className="space-y-1.5">
              <Skeleton className="h-6 w-[147px]" />

              <Skeleton className="h-[1px]" />

              <div className="space-y-1">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-5 xl:max-w-xs">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />

          <Skeleton className="h-[1px]" />

          <div className="space-y-2.5">
            <Skeleton className="h-4 w-28" />

            <div className="flex gap-5">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
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
