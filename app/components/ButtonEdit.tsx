const ButtonEdit = ({
  collectionId,
  setPage,
}: {
  collectionId: number;
  setPage: React.Dispatch<React.SetStateAction<number | null>>;
}) => (
  <button
    onClick={() => {
      setPage(collectionId);
    }}
    className={`flex items-center gap-1 fill-white text-white transition hover:fill-[orange] hover:text-[orange] group-hover/group2:opacity-100 md:opacity-0`}
  >
    <span className="pr-1 text-white">-</span>
    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18">
      <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
    </svg>
    <span>edit</span>
  </button>
);

export default ButtonEdit;