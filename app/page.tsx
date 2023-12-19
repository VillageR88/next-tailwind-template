'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  //enum GamePhase {
  //  setup,
  //}
  enum ShipSelection {
    none = 'none',
    ship2 = 'ship2',
    ship3 = 'ship3',
    ship4 = 'ship4',
    ship5 = 'ship5',
  }

  const shipTemplate = ({ type, coordinates, id }: { type: ShipSelection; coordinates: number[][]; id: string }) => [
    type,
    coordinates,
    id,
  ];

  const defaultConfiguration = () => {
    const ids = [];
    for (let i = 1; i <= 10; i++) ids.push(`unit${i}`);
    return [
      shipTemplate({ type: ShipSelection.ship2, coordinates: [], id: ids.shift() as unknown as string }),
      shipTemplate({ type: ShipSelection.ship2, coordinates: [], id: ids.shift() as unknown as string }),
      shipTemplate({ type: ShipSelection.ship3, coordinates: [], id: ids.shift() as unknown as string }),
      shipTemplate({ type: ShipSelection.ship3, coordinates: [], id: ids.shift() as unknown as string }),
      shipTemplate({ type: ShipSelection.ship4, coordinates: [], id: ids.shift() as unknown as string }),
      shipTemplate({ type: ShipSelection.ship5, coordinates: [], id: ids.shift() as unknown as string }),
    ];
  };

  //const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.setup);
  const [collection, setCollection] = useState<(ShipSelection | number[][] | string)[][]>(defaultConfiguration);
  const [unitSelected, setUnitSelected] = useState<(ShipSelection | string | null)[]>([]);
  const [clicked, setClicked] = useState<number>(0);
  const [border, setBorder] = useState<number[][]>([]);
  const [horizontal, setHorizontal] = useState<boolean>(false);
  const [autoloader, setAutoloader] = useState<boolean>(false);
  const [autoloaderControl, setAutoloaderControl] = useState<number>(0);

  console.log('collection:', collection);
  const buttons = [];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  for (let i = 1; i <= 100; i++) {
    buttons.push(
      <button
        id={'' + i}
        onKeyUp={(key) => {
          (key.keyCode === 13 || key.keyCode === 32) && document.getElementById('' + i)?.blur();
        }}
        onClick={() => {
          if ((!horizontal ? i > 10 : !('' + i).endsWith('0')) && unitSelected[0] === ShipSelection.ship2) {
            setClicked(i);
            doer1(i);
          } else if (
            (!horizontal ? i > 20 : !('' + i).endsWith('0') && !('' + i).endsWith('9')) &&
            unitSelected[0] === ShipSelection.ship3
          ) {
            setClicked(i);
            doer1(i);
          } else if (
            (!horizontal ? i > 30 : !('' + i).endsWith('0') && !('' + i).endsWith('9') && !('' + i).endsWith('8')) &&
            unitSelected[0] === ShipSelection.ship4
          ) {
            setClicked(i);
            doer1(i);
          } else if (
            (!horizontal
              ? i > 40
              : !('' + i).endsWith('0') &&
                !('' + i).endsWith('9') &&
                !('' + i).endsWith('8') &&
                !('' + i).endsWith('7')) &&
            unitSelected[0] === ShipSelection.ship5
          ) {
            setClicked(i);
            doer1(i);
          }
          document.getElementById('' + i)?.blur();
        }}
        className={`

        ${
          collection
            .map((x) => x[1][0])
            .flat()
            .includes(i) && 'bg-slate-500'
        } 
        ${
          collection
            .map((x) => x[1][1])
            .flat()
            .includes(i) && 'bg-cyan-100'
        }          h-10 w-10 outline outline-1 focus:bg-black `}
        key={i}
      ></button>,
    );
  }

  function calculateBorder2(array: number[]) {
    const array1 = [] as number[];
    const array2 = [] as number[];
    horizontal ? !array[0].toString().endsWith('1') && array1.push(array[0] - 1) : array1.push(array[0] + 10);
    for (const i of array) array1.push(i);
    horizontal
      ? (!array[0].toString().endsWith('9') &&
          unitSelected[0] === ShipSelection.ship2 &&
          array1.push(array[array.length - 1] + 1)) ||
        (!array[0].toString().endsWith('8') &&
          unitSelected[0] === ShipSelection.ship3 &&
          array1.push(array[array.length - 1] + 1)) ||
        (!array[0].toString().endsWith('7') &&
          unitSelected[0] === ShipSelection.ship4 &&
          array1.push(array[array.length - 1] + 1)) ||
        (!array[0].toString().endsWith('6') &&
          unitSelected[0] === ShipSelection.ship5 &&
          array1.push(array[array.length - 1] + 1))
      : array1.push(array[array.length - 1] - 10);
    for (const i of array1) {
      if (!horizontal) {
        if (i.toString().endsWith('1')) array2.push(i, i + 1);
        else if (i.toString().endsWith('0')) array2.push(i - 1, i);
        else array2.push(i - 1, i, i + 1);
      }
      if (horizontal) {
        if (i < 10) array2.push(i, i + 10);
        else if (i > 90) array2.push(i - 10, i);
        else array2.push(i - 10, i, i + 10);
      }
    }
    const array3 = array2.filter((x) => !array.includes(x) && x > 0 && x <= 100);
    return array3;
  }

  function doer1(i: number) {
    const array1 = [] as number[];
    if (i !== 0) {
      if (unitSelected[0] === ShipSelection.ship2) {
        horizontal ? [i, i + 1].map((x) => array1.push(x)) : [i, i - 10].map((x) => array1.push(x));
      } else if (unitSelected[0] === ShipSelection.ship3) {
        horizontal ? [i, i + 1, i + 2].map((x) => array1.push(x)) : [i, i - 10, i - 20].map((x) => array1.push(x));
      } else if (unitSelected[0] === ShipSelection.ship4) {
        horizontal
          ? [i, i + 1, i + 2, i + 3].map((x) => array1.push(x))
          : [i, i - 10, i - 20, i - 30].map((x) => array1.push(x));
      } else if (unitSelected[0] === ShipSelection.ship5) {
        horizontal
          ? [i, i + 1, i + 2, i + 3, i + 4].map((x) => array1.push(x))
          : [i, i - 10, i - 20, i - 30, i - 40].map((x) => array1.push(x));
      }
    }
    if (
      !array1
        .map((x1) =>
          collection
            .map((x) => x[1])
            .flat(2)
            .includes(x1),
        )
        .includes(true)
    ) {
      setBorder([array1, calculateBorder2(array1)]);
      setCollection((value) => {
        const newValue = [...value];
        if (unitSelected[1] !== null) {
          for (const x of newValue) {
            if (x[2] === unitSelected[1]) x[1] = [array1, calculateBorder2(array1)];
          }
        }
        return newValue;
      });
      setUnitSelected([]);
    }
  }

  useEffect(() => {
    if (collection.map((x) => x[1].length === 0).includes(true) && autoloader) {
      const randomNumberFrom1to100 = Math.floor(Math.random() * 100) + 1;
      const randomStackSelection = Math.floor(Math.random() * collection.length);
      setHorizontal(Math.round(Math.random()) as unknown as boolean);
      document.getElementById(`stack${randomStackSelection}`)?.click();
      document.getElementById(randomNumberFrom1to100.toString())?.click();
      setAutoloaderControl(autoloaderControl + 1);
    } else {
      setAutoloader(false);
      setAutoloaderControl(0);
    }
  }, [autoloader, autoloaderControl, collection]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-cyan-300 to-cyan-200 font-[600] text-black">
      <div className="absolute mb-[45em] flex flex-col">
        <span>debug selected number: {clicked}</span>
        <span>debug ship sector: {border[0]?.toLocaleString()}</span>
        <span>debug buffer sector: {border[1]?.toLocaleString()}</span>
      </div>
      <div className="flex flex-row items-center">
        <div className=" absolute ml-[-15em] mr-[5em] flex w-[12em] flex-col justify-center">
          <button
            onClick={() => {
              setHorizontal(!horizontal);
            }}
            className="mb-[1em] bg-violet-200 pl-2 text-left outline outline-1"
          >
            {horizontal ? 'Align: horizontal' : 'Align: vertical'}
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('oneTime');
              if (element !== null) element.style.visibility = 'visible';
              setClicked(0);
              setBorder([]);
              setHorizontal(false);
              setUnitSelected([]);
              setCollection(defaultConfiguration);
            }}
            className="bg-slate-100 pl-2  text-left outline outline-1"
          >
            debug: Reset
          </button>

          <button
            id="random"
            disabled={!collection.map((x) => x[1].length === 0).includes(true)}
            onClick={() => {
              setAutoloader(true);
            }}
            className="mb-[1em] bg-slate-100 outline outline-1 disabled:opacity-50"
          >
            debug: Place randomly
          </button>
          <div className="h-[30em] flex-col outline outline-2">
            {collection.map(
              (x, i) =>
                x[1].length === 0 && (
                  <button
                    key={i}
                    id={`stack${i}`}
                    onClick={() => {
                      setUnitSelected([x[0] as ShipSelection, x[2] as string]);
                    }}
                    className={`${
                      unitSelected[1] === (x[2] as string) ? 'bg-yellow-100' : 'bg-slate-100'
                    } w-full  outline outline-1`}
                  >
                    {x[0]}
                  </button>
                ),
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-10 w-10"></div>
          <div className="flex flex-col">
            {letters.map((x, i) => (
              <button disabled className="my-1 mr-2 h-8 w-8 rounded-2xl bg-cyan-100" key={i + 1}>
                {x}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-10">
            {letters.map((_, i) => (
              <button disabled className="m-1 mx-1 mb-2 h-8 w-8 rounded-2xl bg-cyan-100" key={i}>
                {i + 1}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-10 outline outline-2">{buttons}</div>
        </div>
        <div className="absolute ml-[31em] flex flex-col"></div>
      </div>
    </div>
  );
}
