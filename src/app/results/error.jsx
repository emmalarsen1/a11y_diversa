"use client";
import React from "react";
import Link from "next/link";

function error() {
  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <h2 className="m-5 text-4xl">Noget gik galt</h2>
      <p className="ml-5">Prøv igen eller læs mere om ally-regler</p>
      <div className="flex flex-row gap-3 m-6 mt-14">
        <div>
          <Link className=" bg-[#FF7733] text-center text-white hover:text-gray-50 p-2 p-l-2.5 rounded-full hover:bg-[#FE6013] active:bg-[#DB5E1F]" href={`/`}>
            CHECK URL
          </Link>
        </div>
        <div>
          <p>eller</p>
        </div>
        <div>
          <Link className=" bg-[#69e3fc] place-items-center hover:bg-[#02E8FE] py-3 px-5  rounded-lg active:bg-[#4BCBE0] text-center font-['Libre_Baskerville'] text-lg font-semibold" href={`/regeloversigt`}>
            A11y-regler
          </Link>
        </div>
      </div>
    </div>
  );
}

export default error;
