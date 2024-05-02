import Image from "next/image";
import { dsbData } from "@/data/dsbData";
import Link from "next/link";

// Revalidate route every 30 minutes
/* export const revalidate = 1800; */

const severityMapping = {
  minor: {
    color: "green",
    value: "25",
  },
  moderate: {
    color: "orange",
    value: "50",
  },
  serious: {
    color: "red",
    value: "75",
  },
  Critical: {
    color: "darkred",
    value: "100",
  },
};

export default async function Page() {
  /*   const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json(); */
  const data = dsbData;
  const violations = data.violations;
  console.log(violations);

  return (
    <main class=" mx-4 lg:grid grid-cols-2 gap-20 my-20 mx-10">
      <section class="">
        <h1 class="capitalizetext-base lg:text-xl font-bold">Resultat for {data.url}</h1>
        <p class="text-base lg:text-xl font-medium">Score:</p>
        <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
      </section>
      <section>
        <p class="text-base lg:text-xl font-bold">Problemer: {data.violations.length}</p>
        <article className="flex flex-col">
          {violations.map((oneViolation) => {
            return (
              <div key={oneViolation.id} class="flex justify-between box-border border-2 bg-turquoise-00 border-transparent border-b-neutral-950">
                <div>
                  <p class="capitalize">{oneViolation.id}</p>
                  <p className={`capitalize`} style={{ color: severityMapping[oneViolation.impact].color }}>
                    {oneViolation.impact}
                  </p>
                </div>
                <div class="flex items-center">
                  <p class="text-orange-70 underline">
                    {" "}
                    <Link href={`/rules/${oneViolation.id}`}>LÆS MERE</Link>
                  </p>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
}
