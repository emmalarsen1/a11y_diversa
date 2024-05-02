import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-lvh">
        <h1 className="text-5xl text-center m-2.5">A11y Check</h1>
        <p className="m-3 text-center max-w-md mx-auto">Accessibility er afgørende i ethvert digitalt miljø. Tilgængelighedsstandarder og retningslinjer er afgørende for at sikre, at ingen bliver udelukket, og er et kritisk skridt mod at skabe et mere inkluderende samfund online og offline. Tjek din sides A11y-score her:</p>
        <form className="grid gap-7" action="/results">
          <input className=" bg-[#FF7733] opacity-45 placeholder:text-white w-full border border-slate-300 text-white rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#FF7733] focus:ring-white focus:ring-1 sm:text-sm" placeholder="Indsæt url" name="url" type="url" required />
          <button className=" mx-14 bg-[#FF7733] text-center text-white hover:text-gray-50 p-2 p-l-2.5 rounded-full hover:bg-[#FE6013] active:bg-[#DB5E1F]">CHECK URL</button>
        </form>
      </div>
    </>
  );
}
