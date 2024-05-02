"use client";
import React from "react";
import { dsbData } from "@/data/dsbData";

function error() {
  /*   const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json(); */
  const data = dsbData;
  return (
    <div>
      <h1 class="text-3xl font-semibold text-[#ff7733] m-5 mt-24">{data.url}</h1>
      <h2 class="m-5 mt-22 text-4xl">Noget gik galt</h2>
      <p class="ml-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, atque repellendus earum voluptatibus accusantium eligendi iusto unde, vitae molestias animi, reprehenderit beatae harum culpa deserunt velit ex veniam! Aut, tempora?</p>
    </div>
  );
}

export default error;
