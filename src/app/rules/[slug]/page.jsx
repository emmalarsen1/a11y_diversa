import Image from "next/image";
import { reglerData } from "@/data/reglerData";
import Test from "@/app/components/Test";
import Gauge from "@/app/components/Gauge";
import NotFound from "@/app/not-found";

//Component with default values

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return reglerData.map((post) => ({
    slug: post.id,
  }));
}

const severityMapping = {
  Mindre: {
    color: "green",
    value: "33",
  },
  Moderat: {
    color: "orange",
    value: "73",
  },
  Alvorlig: {
    color: "red",
    value: "98",
  },
};

export default async function page({ params }) {
  const { slug } = params;

  const oneData = reglerData.filter((oneRule) => oneRule.id === slug);
  const virker = oneData[0];
  if (!virker) return NotFound();
  console.log();
  return (
    <>
      <section class="flex flex-col gap-3 h-lvh mx-8 text-base max-w-prose">
        <h1 class="text-5xl mt-3 capitalize">{virker.id}</h1>
        <div>
          <span class={`text-2xl`} style={{ color: severityMapping[virker.impact].color }}>
            {virker.impact}
          </span>
          <span className="text-2xl"> indflydelse.</span>
        </div>
        <p>{virker.description}</p>
        <p>{virker.why}</p>
        <p>{virker.tags}</p>
      </section>
    </>
  );
}
