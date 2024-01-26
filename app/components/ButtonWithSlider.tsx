import { Icon } from '@mdi/react';
import { useState } from 'react';
import { mdiChevronRight } from '@mdi/js';

const ButtonWithSlider = ({
  width,
  buttonText,
  background1,
  background2,
}: {
  width: string;
  buttonText: string;
  background1: string;
  background2: string;
}) => {
  const [buttonHoverValue, setButtonHoverValue] = useState(0);

  return (
    <button
      onMouseEnter={() => {
        setButtonHoverValue(100);
      }}
      onMouseLeave={() => {
        setButtonHoverValue(0);
      }}
      className={`flex h-[44px] ${width} items-center justify-between rounded-[0.5em] ${background1}`}
    >
      <div className="flex h-full w-full items-center justify-end">
        <h1 className="absolute z-10 pr-2.5 font-baloo text-[1.2rem] font-[500] text-white">{buttonText}</h1>
        <div
          style={{ width: `${buttonHoverValue}%` }}
          className={`h-full rounded-l-[0.5em] ${background2} transition-all duration-[400ms] ease-in-out`}
        ></div>
      </div>
      <div className={`flex h-full items-center rounded-r-[0.5em] ${background2} px-1`}>
        <Icon color="white" path={mdiChevronRight} size={1.4} />
      </div>
    </button>
  );
};

export default ButtonWithSlider;
