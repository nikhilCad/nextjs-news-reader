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

export const newsColumn = (data: any) => {
  return (
    <div className="flex flex-wrap p-5 bg-slate-900">
      {data.map((item: any) => {
        return (
          <Dialog>
            <DialogTrigger className="w-1/4">{newsCard(item)}</DialogTrigger>
            <DialogContent className="h-[calc(100vh-5%)] min-w-[calc(100vw-40%)]">
              <DialogHeader>
                <DialogTitle>
                  Header component with buttons
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
