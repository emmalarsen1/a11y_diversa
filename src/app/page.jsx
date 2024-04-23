export default function Home() {
  return (
    <>
      <form action="/results">
        <input name="url" type="url" required />
        <button>Scan URL</button>
      </form>
    </>
  );
}
