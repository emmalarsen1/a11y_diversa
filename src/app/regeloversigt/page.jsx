import React from "react";
import Link from "next/link";
import { reglerData } from "@/data/reglerData";

function page() {
  return (
    <>
      <section class="flex flex-col justify-center items-center h-lvh">
        <h1 class="text-5xl m-2.5">A11y-regel oversigt</h1>
        <article class="">
          {reglerData.map((data) => (
            <p class="flex place-self-start box-border border-2 bg-turquoise-00 border-transparent border-b-neutral-950 capitalize" key={data.id}>
              {data.id}{" "}
              <Link class="text-[#FF7733] underline uppercase" href={`/rules/${data.id}`}>
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
