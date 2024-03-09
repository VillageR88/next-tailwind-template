'use client';
import { useState } from 'react';
import RadioButton from './RadioButton';

const MainForm = () => {
  const [selected, setSelected] = useState<1 | 2>(1);
  return (
    <form
      id="MainForm"
      className="ml-[-266px] flex min-h-[484px] w-[564px] flex-col gap-[32px] rounded-[16px] bg-white p-[32px] shadow-[10px_25px_50px_5px_rgba(179,211,241,0.3)]"
    >
      <h2 className="Heading2">Enter your details below</h2>
      <div className="flex h-[31px] justify-between gap-[24px]">
        <div className="flex w-1/2 items-center gap-[18px]">
          <RadioButton id={1} selected={selected} setSelected={setSelected} />
          <span className="Body1 font-bold text-[#253347]">Metric</span>
        </div>
        <div className="flex w-1/2 items-center gap-[18px]">
          <RadioButton id={2} selected={selected} setSelected={setSelected} />
          <span className="Body1 font-bold text-[#253347]">Imperial</span>
        </div>
      </div>
      <div className="flex h-[98px] w-full gap-[24px]">
        <div className="flex w-1/2 flex-col justify-between">
          <label className="Body2 text-[#5E6E85]" htmlFor="height">
            Height
          </label>
          <div className="flex">
            <input
              id="height"
              className="Heading2 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] pr-[100px] text-[#253347] outline-none placeholder:text-opacity-25 focus:border-[#345FF6]"
              type="string"
              placeholder="0"
            />
            <div className="flex h-full w-0 items-center">
              <span className="Heading2 ml-[-58px] text-[#345FF6]">cm</span>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col justify-between">
          <label className="Body2 text-[#5E6E85]" htmlFor="weight">
            Weight
          </label>
          <div className="flex">
            <input
              id="weight"
              className="Heading2 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] pr-[100px] text-[#253347] outline-none placeholder:text-opacity-25 focus:border-[#345FF6]"
              type="string"
              placeholder="0"
            />
            <div className="flex h-full w-0 items-center">
              <span className="Heading2 ml-[-58px] text-[#345FF6]">kg</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[166px] max-w-[500px] rounded-l-[16px] rounded-r-[200px] bg-gradient-to-r from-[#345FF6] to-[#587DFF]"></div>
    </form>
  );
};

export default MainForm;
