import Navbar from "@/components/Navbar";
import SidebarItems from "@/components/SidebarItems";
import SideMenu from "@/components/SideMenu";
import { StoreProvider } from "@/store/StoreProvider";

export default function Layout({ children }) {
  return (
    <StoreProvider>
      <main className=" flex  w-full flex-col bg-white lg:flex-row">
        <SideMenu />
        <div className="">
        <SidebarItems />
        </div>
        <div className="mt-6 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10">
          <div className=" mx-auto md:px-10 w-full text-dark-400 p-16-regular">
            {children}
          </div>
        </div>
      </main>
    </StoreProvider>
  );
}
