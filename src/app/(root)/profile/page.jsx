import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="bg-[#F6F6F6] w-full">
      <div className="relative ">
        {/* Background Banner */}
        <div
          className="w-full h-[200px] bg-cover bg-center bg-no-repeat rounded-2xl relative"
          style={{ backgroundImage: "url('/rec.svg')" }}
        >
          <button className="absolute top-4 left-4 bg-[#00000099] text-white text-xs rounded px-4 py-2 transition">
            Back
          </button>

          <button className="absolute top-4 right-4 bg-[#00000099] text-white text-xs rounded px-4 py-2 transition">
            Update Cover
          </button>
        </div>

        <div className="p-4">
          <div className="relative flex w-full">
            <div className="flex flex-1">
              {/* Profile Avatar */}
              <div className="-mt-24 ml-8 flex relative">
                <div className="h-36 w-36 rounded-full relative">
                  <img
                    className="h-36 w-36 rounded"
                    src="/travel-guy.png"
                    alt="Profile Avatar"
                  />
                  {/* Plus Button */}
                  <button className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-red-700 transition">
                    +
                  </button>
                </div>
                <div className="ml-8 mt-6">
                  <h1 className="text-base font-semibold">Temiloluwa, 27</h1>
                  <p className="text-sm font-semibold">Lagos</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-2">
              <button className="bg-red-600 text-white text-xs rounded-full px-8 py-2 hover:bg-red-700 transition">
                Edit Profile
              </button>
              <button className="bg-red-600 text-white text-xs rounded-full px-8 py-2 hover:bg-red-700 transition">
                Edit Match Setup
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-6 bg-white w-lg flex items-center space-x-10 border rounded-md">
        <p className="text-sm text-[#00000099]">A few words about myself</p>
        <Image src="/Pencil.svg" width={20} height={20} alt="pencil" />
      </div>
      <div className="px-10 py-2 bg-white w-lg flex items-center justify-between border rounded-md mt-6">
        <Image
          src="/travel-guy.png"
          width={60}
          height={60}
          alt="pencil"
          className=" cursor-pointer"
        />
        <Image
          src="/add_photo.svg"
          width={60}
          height={60}
          alt="pencil"
          className=" cursor-pointer"
        />
        <Image
          src="/add_photo.svg"
          width={60}
          height={60}
          alt="pencil"
          className=" cursor-pointer"
        />
        <Image
          src="/add_photo.svg"
          width={60}
          height={60}
          alt="pencil"
          className=" cursor-pointer"
        />
        <Image
          src="/add_photo.svg"
          width={60}
          height={60}
          alt="pencil"
          className=" cursor-pointer"
        />
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 border rounded-md mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">My Hobbies</h3>
            <Image
              src="/create.svg"
              width={20}
              height={20}
              alt="pencil"
              className=" cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-4 space-y-4 mt-4">
            <div>
              <Image
                src="/frame_b.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_bike.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_cooking.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_dancing.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_art.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="p-6 border rounded-md mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">My Interests</h3>
            <Image
              src="/create.svg"
              width={20}
              height={20}
              alt="pencil"
              className=" cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-4 space-y-4 mt-4">
            <div>
              <Image
                src="/frame_b.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_bike.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_cooking.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_dancing.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_art.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="p-6 border rounded-md mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">My Hobbies</h3>
            <Image
              src="/create.svg"
              width={20}
              height={20}
              alt="pencil"
              className=" cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-4 mt-4">
            <div>
              <Image
                src="/frame_b.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_bike.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_cooking.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_dancing.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/frame_art.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
