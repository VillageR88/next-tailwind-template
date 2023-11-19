'use client';
import '@fontsource/space-mono';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import { useState } from 'react';

enum ButtonSelected {
  none = 0,
  button5 = 5,
  button10 = 10,
  button15 = 15,
  button25 = 25,
  button50 = 50,
}

const textSettings1 = 'text-[1rem] font-[700] text-darkGrayishCyan';
const dollarSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
    <path
      fill="#9EBBBD"
      d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
    />
  </svg>
);
const personSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16">
    <path
      fill="#9EBBBD"
      d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
    />
  </svg>
);

const FormType1 = ({
  name,
  picture,
  action,
}: {
  name: string;
  picture: JSX.Element;
  action(value: string): unknown;
}) => {
  const [numericValue, setNumericValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    const regex = /^(?!^\.)\d{0,22}(?:\.\d{0,2})?$/;

    value = value.replace(',', '.');

    if (value === '0') {
      value += '.';
    }

    if (value === '0.' && (e.nativeEvent as InputEvent).inputType === 'deleteContentBackward') {
      value = '';
    }

    if (regex.test(value)) {
      setNumericValue(value);
      action(value); // Update the parent component state with the new value
    }
  };

  return (
    <form autoComplete="off" className="space-y-[0.3em]">
      <label htmlFor={name} className={textSettings1}>
        {name}
      </label>
      <div className="flex flex-row items-center justify-between rounded-[0.3em] bg-veryLightGrayishCyan px-4 py-2.5">
        <span>{picture}</span>
        <input
          id={name}
          className="w-full appearance-none bg-transparent text-end text-[1.2rem] font-[700] text-veryDarkCyan outline-none hover:cursor-pointer"
          placeholder={'0'}
          type="text"
          value={numericValue}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

const FormType2 = ({
  name,
  picture,
  action,
}: {
  name: string;
  picture: JSX.Element;
  action(value: string): unknown;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const regex = /(?!0)^[0-9]{0,22}$/;

    if (regex.test(value)) {
      action(value);
    }
  };

  return (
    <form autoComplete="off" className="space-y-[0.3em]">
      <label htmlFor={name} className={textSettings1}>
        {name}
      </label>
      <div className="flex flex-row items-center justify-between rounded-[0.3em] bg-veryLightGrayishCyan px-4 py-2.5">
        <span>{picture}</span>
        <input
          id={name}
          className="w-full appearance-none bg-transparent text-end text-[1.2rem] font-[700] text-veryDarkCyan outline-none hover:cursor-pointer"
          type="text"
          onChange={handleInputChange}
          placeholder="0"
        />
      </div>
    </form>
  );
};

const FormType3 = ({ name, value }: { name: string; value: string }) => {
  console.log(value);
  return (
    <div className={`flex items-center justify-between `}>
      <div className="flex flex-col">
        <span className="font-[600]">{name}</span>
        <span className="text-[0.9rem] font-[700] text-grayishCyan">/ person</span>
      </div>
      <span
        className={`break-all text-right text-[2rem] font-[700] text-strongCyan ${
          value.length <= 4 ? 'md:text-[2.9rem]' : value.length <= 8 ? 'md:text-[2rem]' : 'md:text-[1.5rem]'
        }`}
      >
        ${parseFloat(value).toFixed(2)}
      </span>
    </div>
  );
};

const ButtonType1 = ({ quantity, value, action }: { quantity: number; value: number; action(): unknown }) => {
  return (
    <button
      onClick={() => {
        action();
      }}
      className={`rounded-[0.3em] ${
        value !== quantity ? 'bg-veryDarkCyan text-veryLightGrayishCyan' : 'bg-strongCyan text-veryDarkCyan'
      } py-2 text-[1.5rem] font-[700]`}
    >
      {quantity}%
    </button>
  );
};

const ButtonType2 = () => (
  <button className="rounded-[0.3em] bg-veryLightGrayishCyan py-2 text-[1.5rem] font-[700] text-darkGrayishCyan">
    Custom
  </button>
);

export default function Home() {
  const [person, setPerson] = useState<string>('0');
  const [selectedButton, setSelectedButton] = useState<ButtonSelected>(ButtonSelected.none);
  const [billAmount, setBillAmount] = useState<string>('0.00');
  const evalued1 = (((parseFloat(billAmount) / parseFloat(person)) * Number(selectedButton)) / 100).toString();
  const evalued2 = (
    ((parseFloat(billAmount) / parseFloat(person)) * Number(selectedButton)) / 100 +
    parseFloat(billAmount) / parseFloat(person)
  ).toString();
  return (
    <main className="flex min-h-screen flex-col justify-center font-spaceMono">
      {/*main wrapper*/}
      <div className="mt-10 flex flex-col place-items-center gap-8 md:mt-0 md:gap-20">
        {/*top wrapper*/}
        <div className="grid w-[6em] grid-cols-4 text-center">
          {'SPLITTER'.split('').map((x, i) => (
            <span className="text-[1.5rem] font-[700] text-[#3E6465]" key={i}>
              {x}
            </span>
          ))}
        </div>
        {/*bottom wrapper*/}
        <div className="w-full justify-center gap-[2.7em] rounded-[1.5em] bg-white px-[1em] py-[2em] md:grid md:w-[47em] md:grid-cols-2 md:pl-[3em] md:pr-[2em] lg:w-[57.3em]">
          {/*first column*/}
          <div className="flex flex-col gap-[2.5em] px-4 py-[1em] md:w-full md:px-0">
            <FormType1
              action={(value) => {
                setBillAmount(value || '0.00');
              }}
              name="Bill"
              picture={dollarSVG}
            />
            <div className="space-y-4">
              <span className={textSettings1}>Select Tip %</span>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-3">
                <ButtonType1
                  value={selectedButton}
                  action={() => {
                    setSelectedButton(ButtonSelected.button5);
                  }}
                  quantity={5}
                />
                <ButtonType1
                  value={selectedButton}
                  action={() => {
                    setSelectedButton(ButtonSelected.button10);
                  }}
                  quantity={10}
                />
                <ButtonType1
                  value={selectedButton}
                  action={() => {
                    setSelectedButton(ButtonSelected.button15);
                  }}
                  quantity={15}
                />
                <ButtonType1
                  value={selectedButton}
                  action={() => {
                    setSelectedButton(ButtonSelected.button25);
                  }}
                  quantity={25}
                />
                <ButtonType1
                  value={selectedButton}
                  action={() => {
                    setSelectedButton(ButtonSelected.button50);
                  }}
                  quantity={50}
                />
                <ButtonType2 />
              </div>
            </div>
            <FormType2
              action={(value) => {
                setPerson(value);
              }}
              name="Number of People"
              picture={personSVG}
            />
          </div>
          {/*second column*/}
          <div className="flex flex-col justify-between gap-6 rounded-[0.8em] bg-veryDarkCyan px-8 pb-6 pt-10 text-white md:w-full md:gap-0 md:pb-10">
            <div className="space-y-[1.5em]">
              <FormType3
                value={
                  evalued1 !== 'NaN' && evalued1 !== 'Infinity' && selectedButton !== ButtonSelected.none
                    ? evalued1
                    : '0.00'
                }
                name="Tip Amount"
              />
              <FormType3
                value={
                  evalued2 !== 'NaN' && evalued2 !== 'Infinity' && selectedButton !== ButtonSelected.none
                    ? evalued2
                    : '0.00'
                }
                name="Total"
              />
            </div>
            <button
              className={`rounded-[0.3em] ${
                person === '0' && selectedButton === ButtonSelected.none && billAmount === '0.00'
                  ? 'bg-[#0D686D]'
                  : 'bg-strongCyan'
              }  py-[0.6em] text-[1.1rem] font-[700] text-[#055D61]`}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
