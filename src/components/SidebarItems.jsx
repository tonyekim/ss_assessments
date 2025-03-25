"use client";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar, closeSidebar } from "@/store/sidebarSlice";

const SidebarItems = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <nav className="flex gap-2">
      <Sheet
        open={isSidebarOpen}
        onOpenChange={(open) =>
          dispatch(open ? openSidebar() : closeSidebar())
        }
      >
        <SheetContent
          side="left"
          className="rounded-sm sm:w-64 h-[75vh] fixed left-4 !bottom-4 !top-auto [&>button]:hidden"
        >
           <SheetClose asChild className="![&>button]:hidden">
           
            </SheetClose>
          <div>
            <div className="flex justify-center mt-6">
              <Image
                width={80}
                height={80}
                src="/travel-agent-profile.svg"
                alt="profile"
              />
            </div>

            <ul className="mt-4 flex flex-col px-10  items-center justify-center w-full">
              {sidebarLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`w-full flex  rounded  justify-items-start items-center whitespace-pre text-dark-700 ${
                      isActive ? "bg-[#EF2424] text-white" : ""
                    }`}
                  >
                    <Link
                      className="flex items-center gap-4 text-sm p-[10px] cursor-pointer"
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={20}
                        height={20}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default SidebarItems;
