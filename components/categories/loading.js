import React from "react";
import Skeleton from "@/components/skeleton";



function CategoriesLoading() {
  return (
    <div className="grid grid-cols-5 gap-5 p-5 w-full h-max">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={40} className="flex justify-center items-center p-2 rounded-lg" />
        ))}
    </div>
  );
}

export default CategoriesLoading ;