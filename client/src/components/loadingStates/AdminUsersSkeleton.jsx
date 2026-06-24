import React, { memo } from "react";
import Skeleton from "../Skeleton/Skeleton";

const AdminUsersSkeleton = () => {
  return (
    <div
      className="
        flex flex-col gap-5

        px-6
        py-5

        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div className="flex min-w-0 items-center gap-4 flex-1">
        <Skeleton
          className="
            h-12
            w-12

            shrink-0

            rounded-full

           

            shadow-[0_8px_24px_rgba(0,0,0,0.04)]
          "
        />

        <div className="min-w-0 flex-1 space-y-1.5">
          <Skeleton
            className="
              h-[14px]
              w-32

              rounded-full

           
            "
          />

          <div className="flex flex-wrap gap-2">
            <Skeleton
              className="
                h-[12px]
                w-16

                rounded-full

               
              "
            />

            <Skeleton className="h-1 w-1 rounded-full bg-black/[0.08]" />

            <Skeleton
              className="
 
    h-[12px]
    w-40

                rounded-full

               
              "
            />
          </div>
        </div>
      </div>

      <div
        className="
          flex items-center justify-between gap-4

          sm:justify-end
        "
      >
        <Skeleton
          className="
            hidden lg:block

            h-[13px]
            w-20

            rounded-full

           
          "
        />

        <Skeleton
          className="
            h-7
            w-16

            rounded-full

           
          "
        />

        <div className="flex items-center gap-[5px]">
          <Skeleton
            className="
              h-[13px]
              w-11

              rounded-full

             
            "
          />
        </div>
      </div>
    </div>
  );
};

export default memo(AdminUsersSkeleton);
