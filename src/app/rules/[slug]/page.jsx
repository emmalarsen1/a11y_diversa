import Image from "next/image";
import { reglerData } from "@/data/reglerData";
import Test from "@/app/components/Test";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return reglerData.map((post) => ({
    slug: post.id,
  }));
}

export default async function page() {
  console.log(reglerData);
  return (
    <main>
      <h1>DATA ID:{reglerData.id}</h1>
      <p>DATA IMPACT:{reglerData.impact}</p>
      {reglerData.map((regel) => {
        return <Test key={regel.id} data={regel} />;
      })}
    </main>
  );
}
