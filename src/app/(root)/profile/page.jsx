import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="bg-[#F6F6F6]">

    
    <section className=" w-full p-2 lg:p-8 md:px-10">
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
              <div className="-mt-26 ml-8 flex flex-col lg:flex-row relative">
                <div className="w-full h-full lg:h-36 lg:w-36 rounded-full relative">
                  <img
                    className="w-full h-full lg:h-36 lg:w-36 rounded"
                    src="/travel-guy.png"
                    alt="Profile Avatar"
                  />
                  {/* Plus Button */}
                  <button className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-red-700 transition">
                    +
                  </button>
                </div>
                <div className="ml-8 md:mt-6">
                  <div className="flex  items-center space-x-4">
                    <span className="text-base font-semibold">
                      Temiloluwa, 27
                    </span>
                    <Image
                      src="/creates.svg"
                      width={20}
                      height={20}
                      alt="pencil"
                      className=" cursor-pointer"
                    />
                  </div>

                  <p className="text-sm font-semibold">Lagos</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
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

      <div className="px-10 mt-16 lg:mt-0 py-6 bg-white lg:w-lg flex items-center space-x-10 border rounded-md">
        <p className="text-sm text-[#00000099]">A few words about myself</p>
        <Image
          src="/Pencil.svg"
          width={20}
          height={20}
          alt="pencil"
          className=" cursor-pointer"
        />
      </div>
      <div className="px-10 py-2  bg-white gap-2 lg:gap-0 md:w-lg flex flex-wrap items-center lg:justify-between border rounded-md mt-6">
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
              src="/creates.svg"
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
              src="/creates.svg"
              width={20}
              height={20}
              alt="pencil"
              className=" cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-4 space-y-4 mt-4">
            <div>
              <Image
                src="/travel.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/drawing.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/history.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/wood_work.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/photograph.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/poetry.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/poetry.svg"
                width={56}
                height={65}
                alt="pencil"
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="p-6 border rounded-md mt-6">
          <div className="">
            <h3 className="text-sm font-semibold">About Me</h3>
          </div>

          <div className=" mt-4 flex flex-col space-y-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/gender.svg"
                  width={20}
                  height={20}
                  alt="pencil"
                />
                <p className="text-[10px] font-light">Gender:</p>
              </div>
              <h3 className="text-sm font-medium">Male</h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/age.svg"
                  width={20}
                  height={20}
                  alt="pencil"
                />
                <p className="text-[10px] font-light">Age:</p>
              </div>
              <h3 className="text-sm font-medium">27</h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Occupation.svg"
                  width={20}
                  height={20}
                  alt="pencil"
                />
                <p className="text-[10px] font-light">Occupation:</p>
              </div>
              <h3 className="text-sm font-medium">Engineer</h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Relationship.svg"
                  width={20}
                  height={20}
                  alt="pencil"
                />
                <p className="text-[10px] font-light">Relationship:</p>
              </div>
              <h3 className="text-sm font-medium">Single</h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Location.svg"
                  width={20}
                  height={20}
                  alt="pencil"
                />
                <p className="text-[10px] font-light">Location:</p>
              </div>
              <h3 className="text-sm font-medium">Lagos</h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Height.svg"
                  width={20}
                  height={20}
                  alt="pencil"
                />
                <p className="text-[10px] font-light">Height range:</p>
              </div>
              <h3 className="text-sm font-medium">5’5 - 6’0</h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Weight.svg"
                  width={20}
                  height={20}
                  alt="pencil"
                />
                <p className="text-[10px] font-light">Weight range:</p>
              </div>
              <h3 className="text-sm font-medium">60 - 70kg</h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Religion.svg"
                  width={20}
                  height={20}
                  alt="pencil"
                />
                <p className="text-[10px] font-light">Religion:</p>
              </div>
              <h3 className="text-sm font-medium">Christianity</h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Nationality.svg"
                  width={20}
                  height={20}
                  alt="pencil"
                />
                <p className="text-[10px] font-light">Nationality:</p>
              </div>
              <h3 className="text-sm font-medium">Nigerian</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Page;
