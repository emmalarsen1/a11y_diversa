import Link from "next/link";
export default function Home() {
  return (
    <>
      <div class="flex flex-col items-center gap-2">
        <h1 class="text-5xl text-center m-2.5 mt-14">Ally Check</h1>
        <p class="m-3 text-center max-w-md mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, blanditiis? Illum ratione ad voluptate, corporis facere placeat officia. Eius assumenda est, dolores repellendus commodi quod maxime odio id quaerat. Alias?</p>
        <form class="grid gap-7" action="/results">
          <input class=" bg-[#FF7733] opacity-45 placeholder:text-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#FF7733] focus:ring-white focus:ring-1 sm:text-sm" placeholder="Indsæt url" name="url" type="url" required />
          <button class=" mx-14 bg-[#FF7733] text-center text-white hover:text-gray-50 p-2 p-l-2.5 rounded-full hover:bg-[#e5c000] active:bg-[#ffea80]">CHECK URL</button>
        </form>
      </div>
    </>
  );
}
