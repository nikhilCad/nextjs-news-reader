import Link from "@/node_modules/next/link";
import React from "react";
import { use } from "react";
import { fetchData } from "@/utils/getFeedFromUrl";
import { newsColumn } from "@/components/newsColumn";


export default function Home() {
  const data = use(fetchData);
  return (
    <main className="flex flex-col ">
      {newsColumn(data)}
    </main>
  );
}
