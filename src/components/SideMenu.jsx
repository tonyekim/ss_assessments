"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "@/store/sidebarSlice";

const SideMenu = () => {
  const dispatch = useDispatch();
  return (
    <aside className="hidden bg-white  lg:flex mt-14 px-4 sm:px-10">
      <div onClick={() => dispatch(openSidebar())} className="cursor-pointer">
        <Image src="/menu.svg" alt="menu" width={16} height={16} />
      </div>
    </aside>
  );
};

export default SideMenu;
