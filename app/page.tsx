'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  enum GamePhase {
    setup,
  }
  enum ShipSelection {
    none = 'none',
    ship2 = 'ship2',
    ship3 = 'ship3',
  }
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.setup);
  const [shipSelected, setShipSelected] = useState<ShipSelection>(ShipSelection.none);
  const [trace, setTrace] = useState<ShipSelection>(ShipSelection.none);
  const [shipStack, setShipStack] = useState<string[]>([]);
  const [clicked, setClicked] = useState<number>(0);
  const [border1, setBorder1] = useState<number[]>([]);
  const [border2, setBorder2] = useState<number[]>([]);
  const [coordinatesShip2, setCoordinatesShip2] = useState<number[][]>([]);
  const [coordinatesShip3, setCoordinatesShip3] = useState<number[][]>([]);
  const [imprinted, setImprinted] = useState<number[]>([]);
  console.log(shipSelected);
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
          setTrace(shipSelected);
          if (i > 10 && shipSelected === ShipSelection.ship2) {
            setClicked(i);
            setShipStack(shipStack.filter((x) => (x as ShipSelection) !== shipSelected));
            doer1(i);
          } else if (i > 20 && shipSelected === ShipSelection.ship3) {
            setClicked(i);
            setShipStack(shipStack.filter((x) => (x as ShipSelection) !== shipSelected));
            doer1(i);
          }
          document.getElementById('' + i)?.blur();
        }}
        className={`${
          border1.includes(i) ? 'bg-slate-500' : border2.includes(i) && 'bg-cyan-100'
        } h-10 w-10 outline outline-1 focus:bg-black `}
        key={i}
      ></button>,
    );
  }

  function calculateBorder2() {
    const array1 = [];
    const array2 = [];
    array1.push(border1[0] + 10);
    for (const i of border1) array1.push(i);
    array1.push(border1[border1.length - 1] - 10);
    for (const i of array1) {
      if (i.toString().endsWith('1')) array2.push(i, i + 1);
      else if (i.toString().endsWith('0')) array2.push(i - 1, i);
      else array2.push(i - 1, i, i + 1);
    }
    const array3 = array2.filter((x) => !border1.includes(x) && x > 0 && x < 100);
    return array3;
  }

  function doer1(i: number) {
    //clicked === 0 && setBorder1([]);
    //clicked === 0 && setBorder2([]);
    i !== 0 && shipSelected === ShipSelection.ship2 && setBorder1([i, i - 10]);
    i !== 0 && shipSelected === ShipSelection.ship3 && setBorder1([i, i - 10, i - 20]);
    i !== 0 && setBorder2(calculateBorder2);
    if (trace === ShipSelection.ship2) {
      setCoordinatesShip2([border1, border2]);
    } else if (trace === ShipSelection.ship3) {
      setCoordinatesShip3([border1, border2]);
    }
    setShipSelected(ShipSelection.none);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-cyan-300 to-cyan-200 font-[600] text-black">
      <div className="mb-4 flex flex-col">
        <span>debug selected number: {clicked}</span>
        <span>debug shipSizeOf2Vertical sector: {border1.toLocaleString()}</span>
        <span>debug buffer shipSizeOf2Vertical sector: {border2.toLocaleString()}</span>
      </div>
      <div className="flex flex-row items-center">
        <div className=" absolute ml-[-15em] mr-[5em] flex w-[12em] flex-col justify-center">
          <button
            onClick={() => {
              const element = document.getElementById('oneTime');
              if (element !== null) element.style.visibility = 'visible';
              setClicked(0);
              setShipStack([]);
              setCoordinatesShip2([]);
              setCoordinatesShip3([]);
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
                setShipStack(['ship2', 'ship3']);
              }
            }}
            className="mb-[1em] bg-slate-100 outline outline-1"
          >
            debug: Generate ships
          </button>
          <div className="h-[30em] flex-col outline outline-2">
            {shipStack.map((x, i) => (
              <button
                key={i}
                id={`button${i}`}
                onClick={() => {
                  setShipSelected(x as ShipSelection);
                }}
                className={`${
                  shipSelected === (x as ShipSelection) ? 'bg-yellow-50' : 'bg-slate-100'
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
        <div className="absolute ml-[31em] flex flex-col">
          <div>
            <span>debug: Imprinted values: </span>
          </div>
          <div className="flex h-[30em] w-[20em] flex-col flex-wrap gap-4 p-2 outline outline-2">
            {
              <div className="flex flex-col">
                Coordinates Ship2:
                <div className="flex flex-wrap gap-2 pr-2">
                  Border1:
                  {coordinatesShip2[0]?.map((x, i) => <span key={i}>{x.toLocaleString()}</span>)}
                </div>
                <div className="flex flex-wrap gap-2 pr-2">
                  Border2:
                  {coordinatesShip2[1]?.map((x, i) => <span key={i}>{x.toLocaleString()}</span>)}
                </div>
              </div>
            }
            <div className="flex flex-col">
              Coordinates Ship3:
              <div className="flex flex-wrap gap-2 pr-2">
                Border1:
                {coordinatesShip3[0]?.map((x, i) => <span key={i}>{x.toLocaleString()}</span>)}
              </div>
              <div className="flex flex-wrap gap-2 pr-2">
                Border2:
                {coordinatesShip3[1]?.map((x, i) => <span key={i}>{x.toLocaleString()}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
