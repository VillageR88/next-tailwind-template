export default function Home() {
  const Block = () => {
    return (
      <div className="flex h-[10.45em] w-[45.625em] gap-[1em] rounded-[0.5em] bg-white px-[1.5em] py-[1.5em]">
        <div className="h-[6.25em] w-[2.5em] bg-[#F5F6FA] rounded-[0.65em]"></div>
        <div>RIGHT</div>
      </div>
    );
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F6FA] font-rubik">
      <div className="mt-[4em] flex h-[100em] w-full flex-col items-center">
        <Block />
      </div>
    </main>
  );
}
