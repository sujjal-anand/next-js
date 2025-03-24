import React from "react";

const SkeletonTable = () => {
  return (
    <div className="w-full border border-gray-200 shadow rounded-md p-4">
      <div className="animate-pulse space-y-4">
        {/* Table Header Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>

        {/* Table Rows Skeleton */}
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="grid grid-cols-5 gap-4">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="h-6 bg-gray-300 rounded"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonTable;
