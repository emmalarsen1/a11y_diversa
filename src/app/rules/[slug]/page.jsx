import Image from "next/image";
import { reglerData } from "@/data/reglerData";
import Test from "@/app/components/Test";
import Gauge from "@/app/components/Gauge";

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
  console.log();
  return (
    <>
      <section class="h-lvh">
        <h1 class="text-5xl capitalize">{virker.id}</h1>
        <h2 class={`text-2xl`} style={{ color: severityMapping[virker.impact].color }}>
          {virker.impact}
        </h2>
        <Gauge value={severityMapping[virker.impact].value} />
        <p>{virker.description}</p>
        <p>{virker.why}</p>
        <p>{virker.tags}</p>
      </section>
    </>
  );
}
