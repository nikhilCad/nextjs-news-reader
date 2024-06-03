import React from "react";
// import { FaNewspaper } from "react-icons/fa";

const names = ["All Feeds", "ABCD"];

export const Sidebar = () => {
  return (
    <div className="sticky top-0 shadow flex flex-col gap-5 pt-10 bg-zinc-900 h-screen">
      {names.map((item: any) => {
        return (
          <div className="flex flex-row gap-4 w-40 pl-4 items-center 
          text-white text-base hover:bg-zinc-600 hover:scale-110 transition-all">
            {/* <SidebarIcon icon={<FaNewspaper size="32" />} /> {item} */}
            {item}
          </div>
        );
      })}
    </div>
  );
};

const SidebarIcon = ({ icon }: { icon: any }) => <div>{icon}</div>;
