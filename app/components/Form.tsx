'use client';
const Form = () => {
  return (
    <form action="#" className="flex gap-[0.5em]">
      <input
        onSubmit={(e) => {
          e.preventDefault();
        }}
        aria-label="Email"
        placeholder="Updates in your inbox…"
        type="email"
        className="w-[15.5em] rounded-[2em] pl-[1.2em] text-[0.8rem]"
      />
      <button
        aria-label="Go"
        type="button"
        className="rounded-[2em] bg-[hsl(12,88%,59%)] px-[2em] pb-[0.9em] pt-[1.25em] text-[0.75rem] font-[500] text-[hsl(13,100%,96%)] transition hover:bg-[#F98F75]"
      >
        Go
      </button>
    </form>
  );
};

export default Form;
