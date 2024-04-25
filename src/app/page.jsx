import Link from "next/link";
import NavButton from "./components/NavButton";
export default function Home() {
  return (
    <>
      <form action="/results">
        <input name="url" type="url" required />
        <button>Scan URL</button>
        <NavButton></NavButton>
      </form>
    </>
  );
}
