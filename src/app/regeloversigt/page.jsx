import React from "react";
import Link from "next/link";
import { reglerData } from "@/data/reglerData";
function page() {
  return (
    <>
      <section class="flex flex-col justify-center items-center h-lvh">
        <h1 class="text-5xl m-2.5 mt-14">A11y-regel oversigt</h1>
        <article>
          {reglerData.map((data) => (
            <p key={data.id}>
              {data.id} <Link href={`/rules/${data.id}`}>Læs mere</Link>
            </p>
          ))}
        </article>
      </section>
    </>
  );
}

export default page;
