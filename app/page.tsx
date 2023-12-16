export default function Home() {
  const buttons = [];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  for (let i = 1; i <= 100; i++) {
    buttons.push(<button className="h-10 w-10 outline outline-1 hover:bg-black" key={i}></button>);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid grid-cols-10">
        {letters.map((x, i) => (
          <button className="h-10 w-10" key={i}>
            {x}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-10 outline outline-2">{buttons}</div>
    </div>
  );
}
