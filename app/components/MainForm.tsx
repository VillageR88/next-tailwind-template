'use client';
import { useState } from 'react';
import RadioButton from './RadioButton';
import bMIPreProcessor from '../lib/bMIPreProcessor';
import MeasureSystem from '../lib/measureSystem';

const MainForm = () => {
  const [system, setSystem] = useState<MeasureSystem>(MeasureSystem.Metric);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const convertMeasures = () => {
    if (system === MeasureSystem.Metric) {
      if (weight) setWeight((Number(weight) * 0.157473044).toFixed(2));
      if (height) setHeight((Number(height) * 0.032808399).toFixed(2));
    } else {
      if (weight) setWeight((Number(weight) / 0.157473044).toFixed(2));
      if (height) setHeight((Number(height) / 0.032808399).toFixed(2));
    }
  };
  const calculateBMI = () => {
    if (system === MeasureSystem.Metric) {
      const heightInMeters = Number(height) / 100;
      const weightInKg = Number(weight);
      return (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
    } else {
      const heightInInches = Number(height);
      const weightInLbs = Number(weight);
      return ((weightInLbs / (heightInInches * heightInInches)) * 703).toFixed(1);
    }
  };
  return (
    <form
      id="MainForm"
      className=" ml-[-266px] mt-[166px] flex min-h-full w-[564px] flex-col gap-[32px] rounded-[16px] bg-white  p-[32px] shadow-[10px_25px_50px_5px_rgba(179,211,241,0.3)]"
    >
      <h2 className="Heading3">Enter your details below</h2>
      <div className="flex h-[31px] justify-between gap-[24px]">
        <div className="flex w-1/2 items-center gap-[18px]">
          <RadioButton
            id={MeasureSystem.Metric}
            system={system}
            setSystem={setSystem}
            convertMeasures={convertMeasures}
          />
          <span className="Body1 font-bold text-[#253347]">Metric</span>
        </div>
        <div className="flex w-1/2 items-center gap-[18px]">
          <RadioButton
            id={MeasureSystem.Imperial}
            system={system}
            setSystem={setSystem}
            convertMeasures={convertMeasures}
          />
          <span className="Body1 font-bold text-[#253347]">Imperial</span>
        </div>
      </div>
      <div
        className={`flex ${system === MeasureSystem.Metric ? 'h-[98px] flex-row' : 'h-[220px] flex-col'} w-full gap-[24px]`}
      >
        <div
          className={`flex ${system === MeasureSystem.Metric ? 'w-1/2' : 'w-full'} h-[98px] flex-col justify-between`}
        >
          <label className="Body2 text-[#5E6E85]" htmlFor="height">
            Height
          </label>
          {system === MeasureSystem.Metric ? (
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
          ) : (
            <div className="flex w-full gap-[24px]">
              <div className="flex w-1/2">
                <input
                  value={height.split('.')[0]}
                  onChange={(e) => {
                    //setHeight(bMIPreProcessor(e));
                  }}
                  id="height"
                  className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] pr-[100px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6]"
                  min={0}
                  max={300}
                  placeholder="0"
                />
                <div className="flex h-full w-0 items-center">
                  <span className="Heading3 ml-[-40px] text-[#345FF6]">ft</span>
                </div>
              </div>
              <div className="flex w-1/2">
                <input
                  value={height.split('.')[1]?.replace(/^0/, '')}
                  onChange={(e) => {
                    //setHeight(bMIPreProcessor(e));
                  }}
                  id="height2"
                  className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] pr-[100px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6]"
                  min={0}
                  max={300}
                  placeholder="0"
                />
                <div className="flex h-full w-0 items-center">
                  <span className="Heading3 ml-[-43px] text-[#345FF6]">in</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className={`flex ${system === MeasureSystem.Metric ? 'w-1/2' : 'w-full'} h-[98px] flex-col justify-between`}
        >
          <label className="Body2 text-[#5E6E85]" htmlFor="weight">
            Weight
          </label>
          {system === MeasureSystem.Metric ? (
            <div className="flex">
              <input
                value={weight}
                onChange={(e) => {
                  setWeight(bMIPreProcessor(e));
                }}
                id="weight"
                className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] pr-[100px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6]"
                min={0}
                max={300}
                placeholder="0"
              />
              <div className="flex h-full w-0 items-center">
                <span className="Heading3 ml-[-58px] text-[#345FF6] transition">kg</span>
              </div>
            </div>
          ) : (
            <div className="flex w-full gap-[24px]">
              <div className="flex w-1/2">
                <input
                  value={weight}
                  onChange={(e) => {
                    //setHeight(bMIPreProcessor(e));
                  }}
                  id="weight"
                  className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] pr-[100px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6]"
                  min={0}
                  max={300}
                  placeholder="0"
                />
                <div className="flex h-full w-0 items-center">
                  <span className="Heading3 ml-[-44px] text-[#345FF6]">st</span>
                </div>
              </div>
              <div className="flex w-1/2">
                <input
                  value={weight}
                  onChange={(e) => {
                    //setHeight(bMIPreProcessor(e));
                  }}
                  id="weight2"
                  className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] pr-[100px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6]"
                  min={0}
                  max={300}
                  placeholder="0"
                />
                <div className="flex h-full w-0 items-center">
                  <span className="Heading3 ml-[-55px] text-[#345FF6]">lbs</span>
                </div>
              </div>
            </div>
          )}
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
