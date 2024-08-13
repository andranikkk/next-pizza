import React from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowDown size={16} />
      <b>Sort:</b>
      <b className="text-primary">popular</b>
    </div>
  );
};
