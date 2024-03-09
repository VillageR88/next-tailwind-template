'use client';
import { useState } from 'react';
import RadioButton from './RadioButton';

const MainForm = () => {
  const [selected, setSelected] = useState<1 | 2>(1);
  return (
    <form
      id="MainForm"
      className="ml-[-266px] min-h-[484px] w-[564px] rounded-[16px] bg-white p-[32px] shadow-[10px_25px_50px_5px_rgba(179,211,241,0.3)]"
    >
      <h2 className="Heading2">Enter your details below</h2>
      <div className="mt-[32px] flex h-[31px]">
        <div className="flex h-full w-1/2 justify-between">
          <RadioButton id={1} selected={selected} setSelected={setSelected} />
          <RadioButton id={2} selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </form>
  );
};

export default MainForm;
