'use client';
import { useState } from 'react';
import RadioButton from './RadioButton';
import bMIPreProcessor from '../lib/bMIPreProcessor';
import MeasureSystem from '../lib/enumMeasureSystem';
import WeightStages from '../lib/enumWeightStages';

const MainForm = () => {
  const [system, setSystem] = useState<MeasureSystem>(MeasureSystem.Metric);
  const [height, setHeight] = useState<string>('');
  const [heightFt, setHeightFt] = useState<string>('');
  const [heightIn, setHeightIn] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [weightSt, setWeightSt] = useState<string>('');
  const [weightLbs, setWeightLbs] = useState<string>('');
  if (Number(heightIn) >= 12) {
    setHeightFt((Number(heightFt) + Math.floor(Number(heightIn) / 12)).toString());
    setHeightIn((Number(heightIn) % 12).toString());
  }
  if (Number(weightLbs) >= 14) {
    setWeightSt((Number(weightSt) + Math.floor(Number(weightLbs) / 14)).toString());
    setWeightLbs((Number(weightLbs) % 14).toString());
  }
  const convertMeasures = () => {
    if (system === MeasureSystem.Metric) {
      let imperial;
      if (weight) {
        imperial = (Number(weight) * 2.20462).toFixed(2);
        setWeightSt(Math.floor(Number(imperial) / 14).toString());
        setWeightLbs((Number(imperial) - Math.floor(Number(imperial) / 14) * 14).toFixed(2).split('.')[0]);
      }
      if (height) {
        imperial = (Number(height) * 0.032808399).toFixed(2);
        setHeightFt(imperial.split('.')[0]);
        setHeightIn(((Number(imperial.split('.')[1]) * 12) / 100).toString());
      }
    } else {
      if (weightSt || weightLbs) setWeight((Number(weightSt) * 6.35029 + Number(weightLbs) * 0.453592).toFixed(2));
      if (heightIn || heightFt)
        setHeight((Number(heightFt) / 0.032808399 + Number(heightIn) * 0.0254 * 100).toFixed(2));
    }
  };
  const getWeightStage = () => {
    const bmi = calculateBMI();
    if (bmi === '< 18.5') return WeightStages.underweight;
    else if (Number(bmi) >= 18.5 && Number(bmi) < 24.9) return WeightStages.healthyWeight;
    else if (Number(bmi) >= 25 && Number(bmi) < 29.9) return WeightStages.overweight;
    else return WeightStages.obese;
  };
  const calculateBMI = () => {
    if (system === MeasureSystem.Metric) {
      const heightMetric = Number(height) / 100;
      const weightMetric = Number(weight);
      const result = (weightMetric / Math.pow(Number(heightMetric), 2)).toFixed(1);
      if (Number(result) >= 30) return '> 30';
      else if (Number(result) <= 18.5) return '< 18.5';
      return result;
    } else {
      const heightImperial = Number(heightFt) * 12 + Number(heightIn);
      const weightImperial = Number(weightSt) * 14 + Number(weightLbs);
      return ((weightImperial * 703) / Math.pow(heightImperial, 2)).toFixed(1) || '0';
    }
  };
  const idealWeightRange = () => {
    if (system === MeasureSystem.Metric)
      return `${(18.5 * Math.pow(Number(height) / 100, 2)).toFixed(1)}kgs - ${(24.9 * Math.pow(Number(height) / 100, 2)).toFixed(1)}kgs`;
    else
      return `${Math.floor((18.5 * Math.pow(Number(heightFt) * 12 + Number(heightIn), 2)) / 703 / 14)}st ${Math.floor(
        ((18.5 * Math.pow(Number(heightFt) * 12 + Number(heightIn), 2)) / 703) % 14,
      )}lbs - ${Math.floor((24.9 * Math.pow(Number(heightFt) * 12 + Number(heightIn), 2)) / 703 / 14)}st ${Math.floor(
        ((24.9 * Math.pow(Number(heightFt) * 12 + Number(heightIn), 2)) / 703) % 14,
      )}lbs`;
  };

  return (
    <form
      id="MainForm"
      className="mt-[-169px] flex min-h-full max-w-[328px] flex-col gap-[32px] self-center rounded-[16px] bg-white p-[32px] shadow-[10px_25px_50px_5px_rgba(179,211,241,0.3)] md:mr-4 md:mt-[-286px] md:md:max-w-[686px] min-[1200px]:ml-[-400px] min-[1200px]:mt-[166px] min-[1200px]:max-w-[564px] min-[1200px]:self-auto min-[1300px]:mr-0 min-[1400px]:ml-[-266px]"
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
        className={`flex ${system === MeasureSystem.Metric ? 'min-h-[98px] flex-col md:flex-row' : 'h-[220px] flex-col'} w-full gap-[24px]`}
      >
        <div
          className={`flex ${system === MeasureSystem.Metric ? 'w-full md:w-1/2' : 'w-full'} h-[98px] flex-col justify-between`}
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
                  value={heightFt}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    e.target.value = e.target.value.slice(0, 2);
                    setHeightFt(bMIPreProcessor(e));
                  }}
                  id="height"
                  className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6] md:pr-[100px]"
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
                  value={heightIn}
                  onChange={(e) => {
                    setHeightIn(bMIPreProcessor(e));
                  }}
                  id="height2"
                  className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6] md:pr-[100px]"
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
          className={`flex ${system === MeasureSystem.Metric ? 'w-full md:w-1/2' : 'w-full'} h-[98px] flex-col justify-between`}
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
                className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6] md:pr-[100px]"
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
                  value={weightSt}
                  onChange={(e) => {
                    setWeightSt(bMIPreProcessor(e));
                  }}
                  id="weight"
                  className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6] md:pr-[100px]"
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
                  value={weightLbs}
                  onChange={(e) => {
                    setWeightLbs(bMIPreProcessor(e));
                  }}
                  id="weight2"
                  className="Heading3 h-[69px] w-full rounded-[12px] border border-[#D8E2E7] pl-[24px] text-[#253347] outline-none transition placeholder:text-opacity-25 focus:border-[#345FF6] md:pr-[100px]"
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
      <div className="flex  justify-between rounded-[16px] bg-gradient-to-r from-[#345FF6] to-[#587DFF] p-[32px] text-white md:min-h-[130px] md:rounded-r-[200px]">
        {(height && weight && system === MeasureSystem.Metric) ||
        ((heightFt || heightIn) && (weightSt || weightLbs) && system === MeasureSystem.Imperial) ? (
          <div className="flex w-full flex-col justify-between md:flex-row md:items-center">
            <div className="flex flex-col justify-between gap-[8px] md:h-[85px] md:gap-0 min-[1200px]:h-[102px] ">
              <h2 className="Body1 font-bold">Your BMI is...</h2>
              <p className="Heading1">{calculateBMI()}</p>
            </div>
            <div className="mt-[24px] w-[206px] md:mt-0">
              <span className="Body2">
                Your BMI suggests you’re <span>{getWeightStage()}</span>. Your ideal weight is between{' '}
                <span className="font-bold">{idealWeightRange()}</span>
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between">
            <h2 className="Heading3">Welcome!</h2>
            <p className="Body2 mt-[18px]">Enter your height and weight and you’ll see your BMI result here</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default MainForm;
