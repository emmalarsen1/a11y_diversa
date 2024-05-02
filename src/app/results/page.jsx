import Image from "next/image";
import { dsbData } from "@/data/dsbData";
import Link from "next/link";
import Gauge from "../components/Gauge";

// Revalidate route every 30 minutes
export const revalidate = 1800;

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

export default async function Page({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  // const data = dsbData;
  const violations = data.violations;

  const hasCritical = violations.some((violation) => violation.impact === "critical");
  const hasSerious = violations.some((violation) => violation.impact === "serious");
  const hasModerate = violations.some((violation) => violation.impact === "moderate");
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
    <main className=" mx-4 lg:grid grid-cols-2 gap-20 my-20 mx-10">
      <section className="grid gap-10">
        <h1 className="capitalizetext-base lg:text-xl font-bold">Resultat for {data.url}</h1>
        {/* <p class="text-base lg:text-xl font-medium">Score:</p> */}
        <div className="grid grid-cols-2 gap-5">
          <Gauge
            // className="ulla"
            // style={{ width: "400px" }}
            value={config.value}
          />
          <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
        </div>
      </section>
      <section className="grid gap-5">
        <p className="text-base lg:text-xl font-bold">Problemer: {data.violations.length}</p>
        <article className="flex flex-col">
          {violations.map((oneViolation) => {
            return (
              <div key={oneViolation.id} className="flex justify-between box-border border-2 bg-turquoise-00 border-transparent border-b-neutral-950 p-4">
                <div>
                  <p className="capitalize">{oneViolation.id}</p>
                  <p
                    className={`capitalize`}
                    style={{
                      color: severityMapping[oneViolation.impact].color,
                    }}
                  >
                    {oneViolation.impact}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-orange-70 underline">
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
