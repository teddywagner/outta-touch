"use client";
import { Place } from "@mui/icons-material";
import { FunctionComponent } from "react";
import { cn } from "@/util";

type TripCardProps = {
  location: string;
  duration: string;
  season: string;
};

const TripCard: FunctionComponent<TripCardProps> = ({
  location,
  duration,
  season,
}) => {
  const loc = location === "Bahamas" ? "Bahamas" : "VirginIslands";
  return (
    <div
      className={cn(
        "flex flex-1 flex-col gap-3 rounded-lg bg-img text-white min-h-[200px] min-w-[280px] max-w-[400px] w-full",
        location === "Bahamas" ? "bg-bahamas" : "bg-virgin-islands",
      )}
    >
      <div className="flex-1"></div>
      <div className="flex justify-end flex-col gap-1 bg-[rgba(0,0,0,0.7)] rounded-b-lg px-6 padding-y">
        <span className="font-bold text-lg">
          <Place />
          {location}
        </span>
        <span className="text-md">{duration}</span>
        <span className="text-md">{season}</span>
      </div>
    </div>
  );
};

export default TripCard;
