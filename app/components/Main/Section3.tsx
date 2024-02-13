const Section3 = () => {
  return (
    <div className="mt-[1.53em] flex w-full flex-col items-start justify-start">
      <h2 className="font-youngSerif scale-y-105 text-[1.75rem] font-[500] text-[hsl(14,45%,36%)]">Instructions</h2>
      <ul className="font-outfit custom-listNumber mt-[1em] flex flex-col gap-[0.5em] pr-[3em] text-[hsl(14,45%,36%)]">
        <li>
          <span className="text-[hsl(30,10%,34%)]">Beat the eggs</span>
          <span className="font-[400] text-[hsl(30,10%,34%)]">
            : In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a
            tablespoon of water or milk for a fluffier texture.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Section3;
