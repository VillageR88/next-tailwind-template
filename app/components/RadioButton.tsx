import { Dispatch, SetStateAction } from 'react';

const RadioButton = ({
  id,
  selected,
  setSelected,
}: {
  id: 1 | 2;
  selected: 1 | 2;
  setSelected: Dispatch<SetStateAction<1 | 2>>;
}) => {
  return (
    <button
      onClick={() => {
        setSelected(id);
      }}
      type="button"
      className={`${id === selected ? 'bg-[#D8E2E7]' : 'border border-[#D8E2E7] hover:border-[#345FF6]'} flex size-[31px] items-center justify-center rounded-full transition-all`}
    >
      <div
        className={`${id !== selected ? 'opacity-0' : 'opacity-100'} z-10 size-[15px] rounded-full bg-[#345FF6] transition`}
      ></div>
    </button>
  );
};

export default RadioButton;
