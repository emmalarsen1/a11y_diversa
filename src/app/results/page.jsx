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
    <main class="grid grid-cols-2 gap-4">
      <section>
        <h1>Report for {data.url}</h1>
        <p>Score:</p>
        <Image
          alt={data.url}
          src={data.screenshot.url}
          width={data.screenshot.width}
          height={data.screenshot.height}
        />
      </section>
      <section>
        <p>Found {data.violations.length} issues</p>
        {violations.map((oneViolation) => {
          return (
            <section>
              <div>
                <p>
                  {oneViolation.id} og mit link er{" "}
                  <Link href={`/rules/${oneViolation.id}`}>her</Link>
                </p>
                <p>jeg er {oneViolation.impact}</p>
                <p>
                  og mit link er{" "}
                  <Link href={`/rules/${oneViolation.id}`}>her</Link>
                </p>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}
