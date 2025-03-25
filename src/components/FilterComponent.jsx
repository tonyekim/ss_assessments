import React from "react";
import Image from "next/image";

const FilterComponent = () => {
  return (
    <div className="flex items-center justify-between lg:hidden px-2">
      <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
        <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
          <Image src="/search.svg" alt="search-icon" width={25} height={25} />
        </span>
        <input
          className="block w-full min-w-[70px] placeholder:text-[#00000099] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-2 border-[#00000099] bg-clip-padding rounded-4xl"
          placeholder="Search..."
          type="text"
        />
      </div>
      <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
        <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted flex items-center justify-between space-x-2">
          <Image src="/filter.svg" alt="filter-icon" width={25} height={25} />
          <span className="text-[#00000099] text-base font-medium">Filter</span>
        </span>

        <div className="block w-full min-w-[70px] py-6 pl-16 pr-16 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-2 border-[#00000099] bg-clip-padding rounded-4xl" />
      </div>
    </div>
  );
};

export default FilterComponent;
