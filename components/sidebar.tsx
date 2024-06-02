import React from "react";
import { FaNewspaper } from "react-icons/fa";

const names = ["NyTimes", "Times of India", "Reddit"];

export const Sidebar = () => {
  return (
    <div className="sticky top-0 shadow flex flex-col gap-5 pt-10 bg-blue-900 h-screen">
      {names.map((item: any) => {
        return (
          <div className="flex flex-row gap-4 items-center bg-blue-500 
          text-white pr-10 pl-10 pt-4 pb-4 hover:text-yellow-200 shadow-inner">
            <SidebarIcon icon={<FaNewspaper size="32" />} /> {item}
          </div>
        );
      })}
    </div>
  );
};

const SidebarIcon = ({ icon }: { icon: any }) => <div>{icon}</div>;
