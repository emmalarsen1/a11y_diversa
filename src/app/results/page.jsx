import Image from "next/image";
import { dsbData } from "@/data/dsbData";
import Link from "next/link";
import Gauge from "../components/Gauge";

// Revalidate route every 30 minutes
/* export const revalidate = 1800; */

const severityMapping = {
  noerror: {
    color: "green",
    value: "0",
  },
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
  critical: {
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

  const hasCritical = violations.some(
    (violation) => violation.impact === "critical"
  );
  const hasSerious = violations.some(
    (violation) => violation.impact === "serious"
  );
  const hasModerate = violations.some(
    (violation) => violation.impact === "moderate"
  );
  const hasMinor = violations.some((violation) => violation.impact === "minor");

  let config = {};
  if (hasCritical) {
    config = severityMapping.critical;
  }
  if (hasSerious) {
    config = severityMapping.serious;
  }
  if (!hasSerious && !hasCritical && !hasModerate && !hasMinor) {
    config = severityMapping.noerror;
  }
  console.log("se", hasMinor);
  /*
  loope igennem data
  finde værste fejl
  bruge den
  */
  return (
    <main class=" mx-4 lg:grid grid-cols-2 gap-20 my-20 mx-10">
      <section class="">
        <h1 class="capitalizetext-base lg:text-xl font-bold">
          Resultat for {data.url}
        </h1>
        <p class="text-base lg:text-xl font-medium">Score:</p>
        <Gauge className="w-1/4" value={config.value} />
        <Image
          alt={data.url}
          src={data.screenshot.url}
          width={data.screenshot.width}
          height={data.screenshot.height}
        />
      </section>
      <section>
        <p class="text-base lg:text-xl font-bold">Problemer: {data.violations.length}</p>
        {violations.map((oneViolation) => {
          return (
            <section key={oneViolation.id} class="gap-y-12">
              <div class="flex gap-3 box-border p-4 border-2 bg-turquoise-00 border-transparent border-b-neutral-950 ">
                <div>
                  <p class="capitalize">{oneViolation.id}</p>
                  <p
                    className={`capitalize`}
                    style={{
                      color: severityMapping[oneViolation.impact].color,
                    }}
                  >
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
