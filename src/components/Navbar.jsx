import Image from "next/image";

const Navbar = () => {
  return (
    <main className="">
    <header className="flex shadow py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-4 w-full">
        <a href="/" className="flex items-center space-x-4">
          <Image src="/logo.svg" alt="logo" width={60} height={60} />
          <h3 className="text-4xl tracking-wider font-semibold font-jaini text-[#000000]">
            Chuly
          </h3>
        </a>

        <div className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
              <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
                <Image
                  src="/search.svg"
                  alt="search-icon"
                  width={25}
                  height={25}
                />
              </span>
              <input
                className="block w-full min-w-[70px] placeholder:text-[#00000099] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-2 border-[#00000099] bg-clip-padding rounded-4xl"
                placeholder="Search..."
                type="text"
              />
            </div>
            <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
              <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted flex items-center justify-between space-x-2">
                <Image
                  src="/filter.svg"
                  alt="filter-icon"
                  width={25}
                  height={25}
                />
                <span className="text-[#00000099] text-base font-medium">
                  Filter
                </span>
              </span>

              <div className="block w-full min-w-[70px] py-6 pl-16 pr-16 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-2 border-[#00000099] bg-clip-padding rounded-4xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center ml-auto space-x-6">
          <div className="flex items-center space-x-6">
            <button>
              <Image
                width={35}
                height={35}
                src="/alarm-bell.svg"
                alt="profile"
              />
            </button>
            <button
           
              className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <Image
                width={50}
                height={50}
                src="/travel-agent.png"
                alt="profile"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
    </main>
  );
};

export default Navbar;
