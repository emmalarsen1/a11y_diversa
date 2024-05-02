import React from "react";
import Link from "next/link";
import { reglerData } from "@/data/reglerData";

function page() {
  return (
    <>
      <section class="flex flex-col justify-center items-center h-lvh">
        <h1 class="text-5xl m-2.5">A11y-regel oversigt</h1>
        <article className="flex flex-col">
          {reglerData.map((data) => (
            <div class="flex justify-between box-border border-2 bg-turquoise-00 border-transparent border-b-neutral-950" key={data.id}>
              <p class="flex capitalize">{data.id} </p>
              <Link class="text-[#FF7733] flex underline uppercase" href={`/rules/${data.id}`}>
                Læs mere
              </Link>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}

export default page;
