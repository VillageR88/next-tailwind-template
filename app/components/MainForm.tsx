'use client';
import { useState } from 'react';
import RadioButton from './RadioButton';
import bMIPreProcessor from '../lib/bMIPreProcessor';
import MeasureSystem from '../lib/measureSystem';

const MainForm = () => {
  const [system, setSystem] = useState<MeasureSystem>(MeasureSystem.Metric);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const calculateBMI = () => {
    if (system === MeasureSystem.Imperial) {
      const heightInInches = Number(height);
      const weightInLbs = Number(weight);
      return ((weightInLbs / (heightInInches * heightInInches)) * 703).toFixed(1);
    } else {
      const heightInMeters = Number(height) / 100;
      const weightInKg = Number(weight);
      return (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
    }
  };
  return (
    <form
      id="MainForm"
      className=" ml-[-266px] mt-[166px] flex max-h-[484px] w-[564px] flex-col gap-[32px] rounded-[16px] bg-white  p-[32px] shadow-[10px_25px_50px_5px_rgba(179,211,241,0.3)]"
    >
      <h2 className="Heading3">Enter your details below</h2>
      <div className="flex h-[31px] justify-between gap-[24px]">
        <div className="flex w-1/2 items-center gap-[18px]">
          <RadioButton id={MeasureSystem.Metric} system={system} setSystem={setSystem} />
          <span className="Body1 font-bold text-[#253347]">Metric</span>
        </div>
        <div className="flex w-1/2 items-center gap-[18px]">
          <RadioButton id={MeasureSystem.Imperial} system={system} setSystem={setSystem} />
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
              value={height}
              onChange={(e) => {
                setHeight(bMIPreProcessor(e));
              }}
              id="height"
              className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] pr-[100px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6]"
              min={0}
              max={300}
              placeholder="0"
            />
            <div className="flex h-full w-0 items-center">
              <span className="Heading3 ml-[-58px] text-[#345FF6]">cm</span>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col justify-between">
          <label className="Body2 text-[#5E6E85]" htmlFor="weight">
            Weight
          </label>
          <div className="flex">
            <input
              value={weight}
              onChange={(e) => {
                setWeight(bMIPreProcessor(e));
              }}
              id="height"
              className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] pr-[100px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6]"
              min={0}
              max={300}
              placeholder="0"
            />
            <div className="flex h-full w-0 items-center">
              <span className="Heading3 ml-[-58px] text-[#345FF6] transition">kg</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-[130px] max-w-[500px] justify-between rounded-l-[16px] rounded-r-[200px] bg-gradient-to-r from-[#345FF6] to-[#587DFF] p-[32px] text-white">
        {height && weight ? (
          <div className="flex justify-between">
            <div className="flex h-[102px] flex-col justify-between">
              <h2 className="Body1 font-bold">Your BMI is...</h2>
              <p className="Heading1">{calculateBMI()}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between">
            <h2 className="Heading3">Welcome!</h2>
            <p className="Body2">Enter your height and weight and you’ll see your BMI result here</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default MainForm;
