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

  //const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.setup);
  const [shipSelected, setShipSelected] = useState<ShipSelection>(ShipSelection.none);
  const [shipStack, setShipStack] = useState<string[]>([]);
  const [clicked, setClicked] = useState<number>(0);
  const [border1, setBorder1] = useState<number[]>([]);
  const [border2, setBorder2] = useState<number[]>([]);
  const [coordinatesShip2, setCoordinatesShip2] = useState<number[][]>([]);
  const [coordinatesShip3, setCoordinatesShip3] = useState<number[][]>([]);
  const [coordinatesShip4, setCoordinatesShip4] = useState<number[][]>([]);
  const [coordinatesShip5, setCoordinatesShip5] = useState<number[][]>([]);
  const [imprinted, setImprinted] = useState<number[][][]>([]);
  const [horizontal, setHorizontal] = useState<boolean>(false);
  const [autoloader, setAutoloader] = useState<boolean>(false);
  const [autoloaderControl, setAutoloaderControl] = useState<number>(0);

  const shipTemplate = ({ type, id, coordinates }: { type: ShipSelection; id: string; coordinates: number[][] }) => [
    type,
    id,
    coordinates,
  ];
  //console.log(imprinted);
  //console.log(shipSelected);
  //console.log(shipStack);
  //console.log(border1);
  //console.log(border2);
  //console.log(coordinatesShip2);
  //console.log(coordinatesShip3);
  //console.log(clicked);
  //console.log(trace);
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
          if ((!horizontal ? i > 10 : !('' + i).endsWith('0')) && shipSelected === ShipSelection.ship2) {
            setClicked(i);
            doer1(i);
          } else if (
            (!horizontal ? i > 20 : !('' + i).endsWith('0') && !('' + i).endsWith('9')) &&
            shipSelected === ShipSelection.ship3
          ) {
            setClicked(i);
            doer1(i);
          } else if (
            (!horizontal ? i > 30 : !('' + i).endsWith('0') && !('' + i).endsWith('9') && !('' + i).endsWith('8')) &&
            shipSelected === ShipSelection.ship4
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
            shipSelected === ShipSelection.ship5
          ) {
            setClicked(i);
            doer1(i);
          }
          document.getElementById('' + i)?.blur();
        }}
        className={`

        ${
          imprinted
            .map((x) => x[0])
            .flat()
            .includes(i) && 'bg-slate-500'
        } 
        ${
          imprinted
            .map((x) => x[1])
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
          shipSelected === ShipSelection.ship2 &&
          array1.push(array[array.length - 1] + 1)) ||
        (!array[0].toString().endsWith('8') &&
          shipSelected === ShipSelection.ship3 &&
          array1.push(array[array.length - 1] + 1)) ||
        (!array[0].toString().endsWith('7') &&
          shipSelected === ShipSelection.ship4 &&
          array1.push(array[array.length - 1] + 1)) ||
        (!array[0].toString().endsWith('6') &&
          shipSelected === ShipSelection.ship5 &&
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
      if (shipSelected === ShipSelection.ship2) {
        horizontal ? [i, i + 1].map((x) => array1.push(x)) : [i, i - 10].map((x) => array1.push(x));
      } else if (shipSelected === ShipSelection.ship3) {
        horizontal ? [i, i + 1, i + 2].map((x) => array1.push(x)) : [i, i - 10, i - 20].map((x) => array1.push(x));
      } else if (shipSelected === ShipSelection.ship4) {
        horizontal
          ? [i, i + 1, i + 2, i + 3].map((x) => array1.push(x))
          : [i, i - 10, i - 20, i - 30].map((x) => array1.push(x));
      } else if (shipSelected === ShipSelection.ship5) {
        horizontal
          ? [i, i + 1, i + 2, i + 3, i + 4].map((x) => array1.push(x))
          : [i, i - 10, i - 20, i - 30, i - 40].map((x) => array1.push(x));
      }
    }
    if (
      !array1
        .map((x1) =>
          imprinted
            .map((x) => x)
            .flat(2)
            .includes(x1),
        )
        .includes(true)
    ) {
      setBorder1(array1);
      setBorder2(calculateBorder2(array1));
      if (shipSelected === ShipSelection.ship2) {
        setCoordinatesShip2([array1, calculateBorder2(array1)]);
      } else if (shipSelected === ShipSelection.ship3) {
        setCoordinatesShip3([array1, calculateBorder2(array1)]);
      } else if (shipSelected === ShipSelection.ship4) {
        setCoordinatesShip4([array1, calculateBorder2(array1)]);
      } else if (shipSelected === ShipSelection.ship5) {
        setCoordinatesShip5([array1, calculateBorder2(array1)]);
      }
      setShipStack(shipStack.filter((x) => (x as ShipSelection) !== shipSelected));
      setShipSelected(ShipSelection.none);
    }
  }

  useEffect(() => {
    setImprinted([coordinatesShip2, coordinatesShip3, coordinatesShip4, coordinatesShip5]);
  }, [coordinatesShip2, coordinatesShip3, coordinatesShip4, coordinatesShip5]);

  useEffect(() => {
    if (shipStack.length !== 0 && autoloader) {
      const randomNumberFrom1to100 = Math.floor(Math.random() * 100) + 1;
      const randomStackSelection = Math.floor(Math.random() * shipStack.length);
      setHorizontal(Math.round(Math.random()) as unknown as boolean);
      document.getElementById(`stack${randomStackSelection}`)?.click();
      document.getElementById(randomNumberFrom1to100.toString())?.click();
      setAutoloaderControl(autoloaderControl + 1);
    } else {
      setAutoloader(false);
      setAutoloaderControl(0);
    }
  }, [autoloader, autoloaderControl, shipStack.length]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-cyan-300 to-cyan-200 font-[600] text-black">
      <div className="absolute mb-[45em] flex flex-col">
        <span>debug selected number: {clicked}</span>
        <span>debug ship sector: {border1.toLocaleString()}</span>
        <span>debug buffer sector: {border2.toLocaleString()}</span>
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
              setShipStack([]);
              setBorder1([]);
              setBorder2([]);
              setCoordinatesShip2([]);
              setCoordinatesShip3([]);
              setCoordinatesShip4([]);
              setCoordinatesShip5([]);
              setHorizontal(false);
              setShipSelected(ShipSelection.none);
            }}
            className="bg-slate-100 pl-2  text-left outline outline-1"
          >
            debug: Reset
          </button>
          <button
            id="oneTime"
            onClick={() => {
              {
                const element = document.getElementById('oneTime');
                if (element !== null) element.style.visibility = 'hidden';
                setShipStack(['ship2', 'ship3', 'ship4', 'ship5']);
              }
            }}
            className=" bg-slate-100 outline outline-1"
          >
            debug: Generate ships
          </button>
          <button
            id="random"
            disabled={shipStack.length === 0}
            onClick={() => {
              setAutoloader(true);
            }}
            className="mb-[1em] bg-slate-100 outline outline-1 disabled:opacity-50"
          >
            debug: Place randomly
          </button>
          <div className="h-[30em] flex-col outline outline-2">
            {shipStack.map((x, i) => (
              <button
                key={i}
                id={`stack${i}`}
                onClick={() => {
                  setShipSelected(x as ShipSelection);
                }}
                className={`${
                  shipSelected === (x as ShipSelection) ? 'bg-yellow-100' : 'bg-slate-100'
                } w-full  outline outline-1`}
              >
                {x}
              </button>
            ))}
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
