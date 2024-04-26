import React from "react";
import Link from "next/link";
import { reglerData } from "@/data/reglerData";
function page() {
  return (
    <>
      <h1>A11y-regel oversigt</h1>
      <section>
        {reglerData.map((data) => (
          <p key={data.id}>
            {data.id} <Link href={`/rules/${data.id}`}>Læs mere</Link>
          </p>
        ))}
      </section>
    </>
  );
}

export default page;
