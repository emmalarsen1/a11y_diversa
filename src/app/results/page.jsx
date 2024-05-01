import Image from "next/image";
import { dsbData } from "@/data/dsbData";
import Link from "next/link";

// Revalidate route every 30 minutes
/* export const revalidate = 1800; */

export default async function Page() {
  /*   const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json(); */
  const data = dsbData;
  const violations = data.violations;
  console.log(violations);

  return (
    <main class="flex-auto gap-3 mx-4 lg:grid grid-cols-2 gap-20 my-20 mx-10">
      <section class="">
        <h1 class="text-base lg:text-xl font-bold">Resultat for {data.url}</h1>
        <p class="text-base lg:text-xl font-medium">Score:</p>
        <Image
          alt={data.url}
          src={data.screenshot.url}
          width={data.screenshot.width}
          height={data.screenshot.height}
        />
      </section>
      <section>
        <p class="text-base lg:text-xl font-bold">
          Problemer: {data.violations.length}
        </p>
        {violations.map((oneViolation) => {
          return (
            <section key={oneViolation.id} class="gap-y-12">
              <div class="box-border p-4 border-2 bg-turquoise-00 border-transparent border-b-neutral-950 ">
                <p>{oneViolation.id}</p>
                <p>{oneViolation.impact}</p>
                <div>
                  <p class="text-orange-70">
                    {" "}
                    <Link href={`/rules/${oneViolation.id}`}>LÆS MERE</Link>
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}
