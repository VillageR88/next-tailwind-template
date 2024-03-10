import { Dispatch, SetStateAction } from 'react';
enum System {
  Metric = 1,
  Imperial = 2,
}

const RadioButton = ({
  id,
  system,
  setSystem,
}: {
  id: System;
  system: System;
  setSystem: Dispatch<SetStateAction<1 | 2>>;
}) => {
  return (
    <button
      onClick={() => {
        setSystem(id);
      }}
      type="button"
      className={`${id === system ? 'bg-[#D8E2E7]' : 'border border-[#D8E2E7] hover:border-[#345FF6]'} flex size-[31px] items-center justify-center rounded-full transition-all`}
    >
      <div
        className={`${id !== system ? 'opacity-0' : 'opacity-100'} z-10 size-[15px] rounded-full bg-[#345FF6] transition`}
      ></div>
    </button>
  );
};

export default RadioButton;
