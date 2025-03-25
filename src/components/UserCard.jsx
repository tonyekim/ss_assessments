import React from "react";
import Image from "next/image";
import { users } from "../constants/index";

const UserCard = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="relative flex flex-col items-center shadow rounded-2xl shadow-3xl overflow-hidden">
        <div className="relative flex h-32 w-full justify-center bg-cover overflow-hidden">
          <img
            src="/profile_one_bg.svg"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className=" rounded-b-2xl ">
          <div className="relative w-full -mt-8 flex flex-col items-center">
            <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
              <img
                className="h-full w-full rounded-full"
                src="/profile_round_one.svg"
                alt="profile"
              />
            </div>
            {/* <div className="flex items-center justify-between -mt-4">
              <div className="">
                <p className="text-[9px] whitespace-nowrap font-semibold text-gray-800">
                  Davina, 23
                </p>
                <p className="text-[8px] text-gray-500">Abuja</p>
              </div>
              <div className="">
                <p className="text-[9px] whitespace-nowrap font-semibold text-gray-800">
                  85% Match
                </p>
                <p className="text-[8px] text-gray-500 whitespace-nowrap">
                  Verified Address
                </p>
              </div>
            </div> */}

            <div className="w-full flex items-center justify-between px-4 -mt-4">
              <div>
                <p className="text-[9px] whitespace-nowrap font-semibold text-gray-800">
                  Davina, 23
                </p>
                <p className="text-[8px] text-gray-500">Abuja</p>
              </div>
              <div>
                <p className="text-[9px] whitespace-nowrap font-semibold text-gray-800">
                  85% Match
                </p>
                <p className="text-[8px] text-gray-500 whitespace-nowrap">
                  Verified Address
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 px-4 flex flex-col ">
            <p className="text-[10px] font-normal text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ornare eros mi, sed auctor libero finibus nec.
              Integer pretium orci nec nulla pellentesque pretium.
            </p>
          </div>
          <div className="flex items-center justify-between w-full px-4 mt-4 mb-4">
            <button className="bg-[#EF2424] text-white text-xs rounded-4xl px-4 py-2">
              More Info
            </button>
            <Image src="/fav.svg" alt="logo" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
