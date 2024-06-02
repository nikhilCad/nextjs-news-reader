import React from "react";
import { newsCard } from "./newsCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { newsPopup } from "./newsPopup";
import Link from "next/link";

export const newsColumn = (data: any) => {
  return (
    <div className="grid grid-cols-auto-fit-400 p-5 bg-slate-100 w-screen">
      {data.map((item: any) => {
        return (
          <Dialog>
            <DialogTrigger>{newsCard(item)}</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-lg font-bold mb-3 pb-4"
                  >
                    {item.title}
                  </Link>
                </DialogTitle>
                <DialogDescription>{newsPopup(item)}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};
