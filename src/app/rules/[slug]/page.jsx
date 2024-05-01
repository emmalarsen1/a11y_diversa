import Image from "next/image";
import { reglerData } from "@/data/reglerData";
import Test from "@/app/components/Test";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return reglerData.map((post) => ({
    slug: post.id,
  }));
}

export default async function page({ params }) {
  const { slug } = params;

  const oneData = reglerData.filter((oneRule) => oneRule.id === slug);
  const virker = oneData[0];
  console.log();
  return (
    <>
      <section class="h-lvh">
        <h1 class="text-5xl">{virker.id}</h1>
        <h2 class="text-2xl">{virker.impact}</h2>
        <p>{virker.description}</p>
      </section>
    </>
  );
}
