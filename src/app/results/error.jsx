"use client";
import React from "react";
import { dsbData } from "@/data/dsbData";

function error() {
  /*   const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json(); */
  const data = dsbData;
  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <h1 className="text-3xl font-semibold text-[#ff7733] m-5 mt-24">{data.url}</h1>
      <h2 className="m-5 mt-20 text-4xl">Noget gik galt</h2>
      <p className="ml-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
  );
}

export default error;
