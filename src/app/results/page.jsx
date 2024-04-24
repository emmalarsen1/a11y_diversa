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

  return (
    <main>
      <h1>Report for {data.url}</h1>
      <p>Found {data.violations.length} issues</p>
      <p>Problem: {data.violations[1].id}</p>
      <p>Score: {data.violations[1].impact}</p>
      <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
      <Link href={`/rules/${data.violations[0].id}`} prefetch={false}>
        Link til side
      </Link>
    </main>
  );
}