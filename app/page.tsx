import Link from "@/node_modules/next/link";
import React from "react";
import { use } from "react";
import { fetchData } from "@/utils/getFeedFromUrl";
import { newsColumn } from "@/components/newsColumn";
import { Sidebar } from "@/components/sidebar";


export default function Home() {
  const data = use(fetchData);
  return (
    <main className="flex flex-row ">
      <Sidebar />
      {newsColumn(data)}
    </main>
  );
}
