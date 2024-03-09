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
      className={`${id === selected ? 'bg-[#D8E2E7]' : 'border border-[#D8E2E7]'} flex size-[31px] items-center justify-center rounded-full`}
    >
      <div className={`${id !== selected && 'hidden'} z-10 size-[15px] rounded-full bg-[#345FF6]`}></div>
    </button>
  );
};

export default RadioButton;
