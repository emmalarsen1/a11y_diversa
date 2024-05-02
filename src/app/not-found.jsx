export const metadata = {
  title: "Siden findes ikke",
};
export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center h-lvh">
      <h1 className="text-[#FF7733] text-5xl text-center m-2.5">404 fejl</h1>
      <p className="text-center">Denne side kunne ikke findes</p>
    </main>
  );
}
