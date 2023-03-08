import Link from "next/link";
import React from "react";
import { page_routes } from "../../lib/pageRoutes";

export function HeroCTA() {
  return (
    <div className="flex justify-center item-center bg-primaryPurple p-4 py-6 ">
      <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
        <span className="text-white text-xl md:text-2xl font-bold">
          Let us work together
        </span>
        <Link
          href={page_routes.contactUs}
          className="text-xl md:text-4xl font-bold shadow text-primaryBlue p-4 px-8 rounded-sm bg-white cursor-pointer hover:bg-gray-100 hover:text-black hover:scale-105 transform ease-in-out duration-300"
        >
          Ready to Talk?
        </Link>
      </div>
    </div>
  );
}
