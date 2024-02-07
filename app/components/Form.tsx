const Form = () => {
  return (
    <form className="mt-[-5.25em] flex h-[10.5em] w-[77%] items-center justify-center rounded-[0.6em] bg-[hsl(257,27%,26%)] bg-[url('../public/images/bg-shorten-desktop.svg')] bg-center">
      <div className="flex h-[4em] w-[88.5%] gap-[1.5em]">
        <input
          placeholder="Shorten a link here..."
          type="url"
          className="w-full rounded-[0.5em] pl-[1.6em] pr-[1.6em] pt-[0.16em] text-[1.25rem]"
        />
        <button className="w-[12.6em] rounded-[0.5em] bg-[hsl(180,66%,49%)] pb-[0.67em] pt-[0.77em] text-[1.2rem] font-[700] text-[white] transition hover:bg-[#9BE3E2]">
          Shorten It!
        </button>
      </div>
    </form>
  );
};

export default Form;
