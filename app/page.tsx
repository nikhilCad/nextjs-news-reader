import React from "react";
import NewsColumn from "@/components/newsColumn";
import  Sidebar from "@/components/sidebar";


const showSidebar = true;

export default function Home() {
  
  return (
    <main className="flex flex-row">
      {showSidebar && <Sidebar/>}
      
      <div className="flex flex-col ">
        <NewsColumn/>
      </div>
      
    </main>
  );
}
