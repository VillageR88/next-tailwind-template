export default function Home() {
  const buttons = [];

  for (let i = 1; i <= 100; i++) {
    buttons.push(<button className="h-10 w-10 outline outline-1 hover:bg-black" key={i}></button>);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid grid-cols-10 gap-0 outline outline-2">{buttons}</div>
    </main>
  );
}
