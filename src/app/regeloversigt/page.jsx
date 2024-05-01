import React from "react";
import Link from "next/link";
import { reglerData } from "@/data/reglerData";
function page() {
  return (
    <>
      <section class="flex flex-col justify-center items-center h-lvh">
        <h1 class="text-5xl m-2.5 mt-14">A11y-regel oversigt</h1>
        <article class="bg-cyan-200 py-2 px-2 ">
          {reglerData.map((data) => (
            <p class="text-3xl border-b-2 border-black flex place-self-start capitalize" key={data.id}>
              {data.id}{" "}
              <Link class="text-[#FF7733] underline flex place-self-end uppercase" href={`/rules/${data.id}`}>
                Læs mere
              </Link>
            </p>
          ))}
        </article>
      </section>
    </>
  );
}

export default page;
