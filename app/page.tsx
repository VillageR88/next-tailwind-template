'use client';
import { useCallback, useEffect, useState } from 'react';
import { Hourglass } from 'react-loader-spinner';

export default function Home() {
  enum GamePhase {
    menu = 'Menu',
    options = 'Options',
    exit = 'Exit',
    preSetup = 'Enemy unit placement',
    setup = 'Own unit placement',
    battle = 'Battle',
  }
  enum ShipSelection {
    ship2 = 'ship2',
    ship3 = 'ship3',
    ship4 = 'ship4',
    ship5 = 'ship5',
  }

  const [initialConfig, setInitialConfig] = useState<number[]>([2, 2, 1, 1]);

  const shipConfiguration = useCallback(() => {
    const shipTemplate = ({ type, coordinates, id }: { type: ShipSelection; coordinates: number[][]; id: string }) => [
      type,
      coordinates,
      id,
    ];
    const ids = [];
    const idsNeeded = initialConfig.reduce((p, n) => p + n);
    for (let i = 1; i <= idsNeeded; i++) ids.push(`unit${i}`);
    const stack = [];
    for (let i = 0; i < initialConfig[0]; i++) {
      stack.push(shipTemplate({ type: ShipSelection.ship2, coordinates: [], id: ids.shift() as unknown as string }));
    }
    for (let i = 0; i < initialConfig[1]; i++) {
      stack.push(shipTemplate({ type: ShipSelection.ship3, coordinates: [], id: ids.shift() as unknown as string }));
    }
    for (let i = 0; i < initialConfig[2]; i++) {
      stack.push(shipTemplate({ type: ShipSelection.ship4, coordinates: [], id: ids.shift() as unknown as string }));
    }
    for (let i = 0; i < initialConfig[3]; i++) {
      stack.push(shipTemplate({ type: ShipSelection.ship5, coordinates: [], id: ids.shift() as unknown as string }));
    }
    return stack as [ShipSelection, number[][], string][];
  }, [initialConfig, ShipSelection]);

  enum AutoloaderWarning {
    none = '',
    aborted1 = 'Deployment aborted!\nReduce number of ships.',
    aborted2 = 'Deployment aborted!\nRestart or reduce number of ships.',
  }

  const [healthPlayer, setHealthPlayer] = useState<number>(100);
  const [healthComputer, setHealthComputer] = useState<number>(100);
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.menu);
  const [collection, setCollection] = useState<[ShipSelection, number[][], string][]>(shipConfiguration);
  const [enemyCollection, setEnemyCollection] = useState<[ShipSelection, number[][], string][]>([]);
  const [fogOfWar, setFogOfWar] = useState<number[]>([]);
  const [computerMove, setComputerMove] = useState<number[]>([]);
  const [unitSelected, setUnitSelected] = useState<(ShipSelection | string | null)[]>([]);
  const [horizontal, setHorizontal] = useState<boolean>(false);
  const [autoloader, setAutoloader] = useState<boolean>(false);
  const [autoloaderControl, setAutoloaderControl] = useState<number>(0);
  const [playerShipFound, setPlayerShipFound] = useState<[boolean, number | null]>([false, null]);
  //seek[0] is heading and seek[1] is array of uncovered numbers on that heading
  const [seek, setSeek] = useState<[number[], number[]]>([[], []]);
  const [seekLoader, setSeekLoader] = useState<boolean>(false);
  const autoloaderTime = 500;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  //AI Movement part of logic
  useEffect(() => {
    if (gamePhase === GamePhase.battle)
      if (
        !playerShipFound[0] &&
        collection
          .map((x) => x[1][0])
          .flat()
          .includes(computerMove[computerMove.length - 1])
      ) {
        //When ship has been found it sets start values for seek
        collection.map((x, i) => {
          if (x[1][0].includes(computerMove[computerMove.length - 1])) {
            //[bool, ship, parts of ship]
            setPlayerShipFound([true, i]);
            //[heading (U,R,D,L), AI moves]
            let headingHorizontal = Math.floor(Math.random() * 4) + 1;
            let headingVertical = Math.floor(Math.random() * 4) + 1;
            while (headingVertical === 2 || headingVertical === 4) headingVertical = Math.floor(Math.random() * 4) + 1;
            while (headingHorizontal === 1 || headingHorizontal === 3)
              headingHorizontal = Math.floor(Math.random() * 4) + 1;
            const random1to4 = Math.floor(Math.random() * 4) + 1;
            setSeek([[random1to4], [computerMove[computerMove.length - 1]]]);
            setSeekLoader(true);
          }
        });
      }
  }, [GamePhase.battle, collection, computerMove, gamePhase, playerShipFound, seek]);

  useEffect(() => {
    //After ship has been found it sets next move
    if ((playerShipFound[0] as boolean) && seekLoader) {
      let heading = null;
      //heading calculations
      //U - Up
      if (seek[0][seek[0].length - 1] === 1)
        if (
          (seek[1][seek[1].length - 1] >= 1 && seek[1][seek[1].length - 1] <= 10) ||
          collection
            .map((x) => x[1][0])
            .flat()
            .filter((x) => !collection[playerShipFound[1] as unknown as number][1][0].includes(x))
            .includes(seek[1][seek[1].length - 1] - 10) ||
          computerMove.includes(seek[1][seek[1].length - 1] - 10) ||
          !collection
            .map((x) => x[1][0])
            .flat()
            .includes(seek[1][seek[1].length - 1])
        ) {
          const val1 = [...seek];
          if (!val1[0].includes(3)) val1[0].push(3);
          else if (!val1[0].includes(2)) val1[0].push(2);
          setSeek([val1[0], [val1[1][0]]] as [number[], number[]]);
        } else heading = 1;
      //R - Right
      else if (seek[0][seek[0].length - 1] === 2)
        if (
          seek[1][seek[1].length - 1].toString().endsWith('0') ||
          collection
            .map((x) => x[1][0])
            .flat()
            .filter((x) => !collection[playerShipFound[1] as unknown as number][1][0].includes(x))
            .includes(seek[1][seek[1].length - 1] + 1) ||
          computerMove.includes(seek[1][seek[1].length - 1] + 1) ||
          !collection
            .map((x) => x[1][0])
            .flat()
            .includes(seek[1][seek[1].length - 1])
        ) {
          const val1 = [...seek];
          if (!val1[0].includes(4)) val1[0].push(4);
          else if (!val1[0].includes(1)) val1[0].push(1);
          setSeek([val1[0], [val1[1][0]]] as [number[], number[]]);
        } else heading = 2;
      //D - Down
      else if (seek[0][seek[0].length - 1] === 3)
        if (
          (seek[1][seek[1].length - 1] >= 91 && seek[1][seek[1].length - 1] <= 100) ||
          collection
            .map((x) => x[1][0])
            .flat()
            .filter((x) => !collection[playerShipFound[1] as unknown as number][1][0].includes(x))
            .includes(seek[1][seek[1].length - 1] + 10) ||
          computerMove.includes(seek[1][seek[1].length - 1] + 10) ||
          !collection
            .map((x) => x[1][0])
            .flat()
            .includes(seek[1][seek[1].length - 1])
        ) {
          const val1 = [...seek];
          if (!val1[0].includes(1)) val1[0].push(1);
          else if (!val1[0].includes(4)) val1[0].push(4);
          setSeek([val1[0], [val1[1][0]]] as [number[], number[]]);
        } else heading = 3;
      //L - Left
      else if (seek[0][seek[0].length - 1] === 4)
        if (
          seek[1][seek[1].length - 1].toString().endsWith('1') ||
          collection
            .map((x) => x[1][0])
            .flat()
            .filter((x) => !collection[playerShipFound[1] as unknown as number][1][0].includes(x))
            .includes(seek[1][seek[1].length - 1] - 1) ||
          computerMove.includes(seek[1][seek[1].length - 1] - 1) ||
          !collection
            .map((x) => x[1][0])
            .flat()
            .includes(seek[1][seek[1].length - 1])
        ) {
          const val1 = [...seek];
          if (!val1[0].includes(2)) val1[0].push(2);
          else if (!val1[0].includes(3)) val1[0].push(3);
          setSeek([val1[0], [val1[1][0]]] as [number[], number[]]);
        } else heading = 4;
      if (heading !== null) {
        const seekFiller = seek[1];
        if (heading === 1) seekFiller.push(seek[1][seek[1].length - 1] - 10);
        else if (heading === 2) seekFiller.push(seek[1][seek[1].length - 1] + 1);
        else if (heading === 3) seekFiller.push(seek[1][seek[1].length - 1] + 10);
        else if (heading === 4) seekFiller.push(seek[1][seek[1].length - 1] - 1);
        setSeek((value) => {
          const newValue = [...value];
          newValue[1] = seekFiller;
          return newValue as [number[], number[]];
        });
        setSeekLoader(false);
      }
    }
  }, [collection, playerShipFound, seek, seekLoader]);

  useEffect(() => {
    //after last ship hit this reset to normal uncover
    if (
      playerShipFound[0] &&
      collection[playerShipFound[1] as unknown as number][1][0].filter((x) => !computerMove.includes(x)).length === 0
    ) {
      setPlayerShipFound([false, null]);
      setSeek([[], []]);
      setSeekLoader(false);
    }
  }, [collection, computerMove, playerShipFound]);

  useEffect(() => {
    if (fogOfWar.length !== 0) {
      const shipTotalLengthEnemy = enemyCollection.map((x) => x[1][0]).flat().length;
      const shipCurrentLengthEnemy = enemyCollection
        .map((x) => x[1][0])
        .flat()
        .filter((x) => fogOfWar.includes(x)).length;
      setHealthComputer(100 - (shipCurrentLengthEnemy * 100) / shipTotalLengthEnemy);
      return void [];
    }
  }, [enemyCollection, fogOfWar]);

  useEffect(() => {
    if (computerMove.length !== 0) {
      const shipTotalLengthPlayer = collection.map((x) => x[1][0]).flat().length;
      const shipCurrentLengthPlayer = collection
        .map((x) => x[1][0])
        .flat()
        .filter((x) => computerMove.includes(x)).length;
      setHealthPlayer(100 - (shipCurrentLengthPlayer * 100) / shipTotalLengthPlayer);
      return void [];
    }
  }, [collection, computerMove]);

  const Buttons1 = Array.from({ length: 100 }, (_, iterator, i = iterator + 1) => (
    <button
      id={'' + i}
      onKeyUp={(key) => {
        (key.keyCode === 13 || key.keyCode === 32) && document.getElementById('' + i)?.blur();
      }}
      onClick={() => {
        if ((!horizontal ? i > 10 : !('' + i).endsWith('0')) && unitSelected[0] === ShipSelection.ship2) {
          calculateBorders(i);
        } else if (
          (!horizontal ? i > 20 : !('' + i).endsWith('0') && !('' + i).endsWith('9')) &&
          unitSelected[0] === ShipSelection.ship3
        ) {
          calculateBorders(i);
        } else if (
          (!horizontal ? i > 30 : !('' + i).endsWith('0') && !('' + i).endsWith('9') && !('' + i).endsWith('8')) &&
          unitSelected[0] === ShipSelection.ship4
        ) {
          calculateBorders(i);
        } else if (
          (!horizontal
            ? i > 40
            : !('' + i).endsWith('0') &&
              !('' + i).endsWith('9') &&
              !('' + i).endsWith('8') &&
              !('' + i).endsWith('7')) &&
          unitSelected[0] === ShipSelection.ship5
        ) {
          calculateBorders(i);
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
    ></button>
  ));

  /*Battle phase buttons logic
  IMPORTANT: includes AI movement*/
  const Buttons2 = ({
    feed,
    manipulative,
  }: {
    feed: (ShipSelection | number[][] | string)[][];
    manipulative?: boolean;
  }) =>
    Array.from({ length: 100 }, (_, iterator, i = iterator + 1) => (
      <button
        key={i}
        id={'' + i}
        onClick={() => {
          if (healthPlayer !== 0 && healthComputer !== 0 && manipulative && !fogOfWar.includes(i)) {
            //Player uncover Computer
            setFogOfWar((value) => {
              const newValue = [...value];
              newValue.push(i);
              return newValue;
            });
            //Computer uncover Player (Computer(AI) move)
            //regular move
            if (!playerShipFound[0]) {
              setComputerMove((value) => {
                const newValue = [...value];
                let randomNumberFrom1to100 = Math.floor(Math.random() * 100) + 1;
                while (newValue.includes(randomNumberFrom1to100)) {
                  randomNumberFrom1to100 = Math.floor(Math.random() * 100) + 1;
                }
                newValue.push(randomNumberFrom1to100);
                return newValue;
              });
            }
            //ship seek move
            else {
              setComputerMove((value) => {
                const newValue = [...value];
                newValue.push(seek[1][seek[1].length - 1]);
                setSeekLoader(true);
                return newValue;
              });
            }
          }
        }}
        className={`
        ${
          feed
            .map((x) => x[1][0])
            .flat()
            .includes(i)
            ? (!manipulative || fogOfWar.includes(i)) &&
              (!manipulative ? (computerMove.includes(i) ? 'bg-red-900' : 'bg-slate-500') : 'bg-red-900')
            : manipulative && fogOfWar.includes(i)
              ? 'bg-red-300'
              : !manipulative && computerMove.includes(i) && 'bg-red-300'
        } ${
          feed
            .map((x) => x[1][1])
            .flat()
            .includes(i) &&
          (!manipulative ||
            enemyCollection
              .map(
                (eCol, ib1) =>
                  !eCol[1][0].map((xb1) => fogOfWar.includes(xb1)).includes(false) && enemyCollection[ib1][1][1],
              )
              .flat()
              .filter((xb2) => xb2 !== false)
              .includes(i)) &&
          (!manipulative ? (computerMove.includes(i) ? 'bg-red-300' : 'bg-cyan-100') : 'bg-red-300')
        } h-10 w-10 outline outline-1 active:border-[5px] active:border-blue-500`}
      ></button>
    ));

  const calculateBorder2 = (array: number[]) => {
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
  };

  const calculateBorders = (i: number) => {
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
  };

  /*Array of Border2's of collection. 
  Logic in correlated useEffect is that when you uncover ship's sector (destroy ship) it uncovers boundary around that ship.*/
  //Player board
  const visibleBorder2Player = useCallback(
    () =>
      gamePhase === GamePhase.battle &&
      (collection
        .map((x, i) => !x[1][0].map((x) => computerMove.includes(x)).includes(false) && collection[i][1][1])
        .flat()
        .filter((x) => x !== false) as number[]),
    [GamePhase.battle, collection, computerMove, gamePhase],
  );
  //Computer board
  const visibleBorder2Enemy = useCallback(
    () =>
      gamePhase === GamePhase.battle &&
      (enemyCollection
        .map((x, i) => !x[1][0].map((x) => fogOfWar.includes(x)).includes(false) && enemyCollection[i][1][1])
        .flat()
        .filter((x) => x !== false) as number[]),
    [GamePhase.battle, enemyCollection, fogOfWar, gamePhase],
  );

  /*Here is the logic that makes Border2 of destroyed ship to appear*/
  //Player board
  useEffect(() => {
    if (gamePhase === GamePhase.battle) {
      const array = [] as number[];
      (visibleBorder2Player() as number[]).map((x) => !computerMove.includes(x) && array.push(x));
      if (array.length !== 0)
        setComputerMove((value) => {
          const newValue = [...value];
          array.map((x) => newValue.push(x));
          return newValue;
        });
      return void [];
    }
  }, [GamePhase.battle, computerMove, gamePhase, visibleBorder2Player]);
  //Computer board
  useEffect(() => {
    if (gamePhase === GamePhase.battle) {
      const array = [] as number[];
      (visibleBorder2Enemy() as number[]).map((x) => !fogOfWar.includes(x) && array.push(x));
      if (array.length !== 0)
        setFogOfWar((value) => {
          const newValue = [...value];
          array.map((x) => newValue.push(x));
          return newValue;
        });
      return void [];
    }
  }, [GamePhase.battle, fogOfWar, gamePhase, visibleBorder2Enemy]);

  /*Autoloader:
  - in pre-setup used as loading enemy,
  - in setup used as random placement of player.*/
  useEffect(() => {
    if (collection.map((x) => x[1].length === 0).includes(true) && autoloader) {
      const randomNumberFrom1to100 = Math.floor(Math.random() * 100) + 1;
      const randomStackSelection = Math.floor(Math.random() * collection.length);
      setHorizontal(Math.round(Math.random()) as unknown as boolean);
      document.getElementById(`stack${randomStackSelection}`)?.click();
      document.getElementById(randomNumberFrom1to100.toString())?.click();
      setAutoloaderControl(autoloaderControl + 1);
    } else if (!collection.map((x) => x[1].length === 0).includes(true)) {
      setAutoloader(false);
      setHorizontal(false);
    }
    if (autoloaderControl === autoloaderTime) setAutoloader(false);
    return void [];
  }, [autoloader, autoloaderControl, autoloaderTime, collection]);

  /*UseEffect for Autoloader associated with pre-setup.
  Concept is to load collection of ships using player functions and convert it to computer.*/
  useEffect(() => {
    if (gamePhase === GamePhase.preSetup && !collection.map((x) => x[1].length === 0).includes(true)) {
      const newCollection = [...collection];
      for (const i of newCollection) i[2] = 'enemy_'.concat(i[2]);
      setEnemyCollection(newCollection);
      setCollection(shipConfiguration);
      setGamePhase(GamePhase.setup);
    }
  }, [GamePhase.preSetup, GamePhase.setup, collection, gamePhase, shipConfiguration]);

  const QuitButton = () => {
    return (
      <button
        onClick={() => {
          setGamePhase(GamePhase.menu);
          setHorizontal(false);
          setUnitSelected([]);
          setAutoloader(false);
          setAutoloaderControl(0);
          setCollection(shipConfiguration);
          setFogOfWar([]);
          setComputerMove([]);
          setHealthComputer(100);
          setHealthPlayer(100);
          setPlayerShipFound([false, null]);
          setSeek([[], []]);
          setSeekLoader(false);
        }}
        className="w-60 rounded-xl bg-slate-100 py-1.5 outline outline-1"
      >
        Quit
      </button>
    );
  };

  const ResetButton = () => {
    return (
      !autoloader &&
      gamePhase === GamePhase.setup && (
        <button
          onClick={() => {
            setHorizontal(false);
            setUnitSelected([]);
            setAutoloader(false);
            setAutoloaderControl(0);
            setCollection(shipConfiguration);
          }}
          className="w-60 rounded-xl bg-slate-100 py-1.5 outline outline-1"
        >
          Reset
        </button>
      )
    );
  };

  const Board = ({ buttons, title, health }: { buttons: JSX.Element[]; title?: string; health?: number }) => {
    return (
      <div>
        {title && (
          <div className="mb-4 flex h-8 items-center bg-green-500 outline outline-2 outline-yellow-300">
            <span className="absolute pl-4 text-lg text-yellow-300">{title}</span>
            <div className="flex h-full w-full justify-end">
              <div style={{ width: `${100 - (health ?? 0)}%` }} className="self h-full bg-red-700"></div>
            </div>
          </div>
        )}
        <div>
          <div className="flex">
            <div className="h-10 w-10"></div>
            <div className="grid grid-cols-10">
              {letters.map((_, i) => (
                <button disabled className="m-1 mx-1 mb-2 h-8 w-8 rounded-2xl bg-cyan-100" key={i}>
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex flex-col">
                {letters.map((x, i) => (
                  <button disabled className="my-1 mr-2 h-8 w-8 rounded-2xl bg-cyan-100" key={i + 1}>
                    {x}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-10 outline outline-2">{buttons}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-cyan-300 to-cyan-200 font-[600] text-black">
      {gamePhase === GamePhase.exit && (
        <div className="flex h-screen w-screen items-center justify-center bg-black">
          <span className="whitespace-pre-line text-3xl text-amber-600">{"It's now safe to turn off\nthis site"}</span>
        </div>
      )}
      {gamePhase === GamePhase.menu && (
        <div className="flex flex-col items-center">
          <span className="text-3xl">Nuts on These Ships</span>
          <div className="flex flex-col gap-4 py-10">
            {['Single Player', 'Options', 'Exit'].map((x, i) => (
              <button
                onClick={() => {
                  if (i === 0) {
                    setGamePhase(GamePhase.preSetup);
                    setAutoloader(true);
                  }
                  i === 1 && setGamePhase(GamePhase.options);
                  i === 2 && setGamePhase(GamePhase.exit);
                }}
                key={i}
                className="w-60 rounded-xl bg-slate-100 py-1.5 outline outline-1"
              >
                {x}
              </button>
            ))}
          </div>
        </div>
      )}
      {gamePhase === GamePhase.options && (
        <div>
          <div className="mb-2 flex flex-col gap-y-2 rounded-sm bg-teal-50 p-4 outline outline-1">
            {['Ship2', 'Ship3', 'Ship4', 'Ship5'].map((x, i) => (
              <div key={i} className="flex justify-around gap-2">
                <span>{x}:</span>
                <span className="text-blue-600">{`${initialConfig[i]}`}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      setInitialConfig((value) => {
                        const newValue = [...value];
                        if (newValue[i] > 0) newValue[i] = newValue[i] - 1;
                        return newValue;
                      });
                    }}
                    className="px-2 outline outline-1"
                  >
                    {'<'}
                  </button>
                  <button
                    onClick={() => {
                      setInitialConfig((value) => {
                        const newValue = [...value];
                        newValue[i] = newValue[i] + 1;
                        return newValue;
                      });
                    }}
                    className="px-2 outline outline-1"
                  >
                    {'>'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              if (initialConfig.reduce((p, n) => p + n) !== 0) {
                setGamePhase(GamePhase.menu);
                setCollection(shipConfiguration);
              }
            }}
            className="w-60 rounded-xl bg-slate-100 py-1.5 outline outline-1"
          >
            Return
          </button>
        </div>
      )}
      {gamePhase === GamePhase.preSetup && (
        <div className="absolute mb-6 flex h-full w-full flex-col items-center justify-center gap-4">
          {autoloaderControl >= autoloaderTime && (
            <span className="whitespace-pre-line text-red-600">{AutoloaderWarning.aborted1}</span>
          )}

          {autoloaderControl < autoloaderTime && (
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#306cce', '#72a1ed']}
            />
          )}
          {autoloaderControl >= autoloaderTime && <QuitButton />}
        </div>
      )}
      {(gamePhase === GamePhase.preSetup || gamePhase === GamePhase.setup) && (
        <div className={`${gamePhase === GamePhase.preSetup && 'invisible'} flex flex-row items-center`}>
          <div className="ml-[-15em] mr-[5em] flex w-[12em] flex-col justify-center">
            <button
              onClick={() => {
                setHorizontal(!horizontal);
              }}
              className={`${autoloader && 'invisible'} mb-[1em] rounded-md bg-violet-200 outline outline-1`}
            >
              {horizontal ? 'Align: horizontal' : 'Align: vertical'}
            </button>
            <button
              disabled={!collection.map((x) => x[1].length === 0).includes(true)}
              onClick={() => {
                setAutoloaderControl(0);
                setAutoloader(true);
              }}
              className="mb-[1em] rounded-md bg-slate-100 outline outline-1 disabled:opacity-50"
            >
              Place randomly
            </button>
            <div className="h-[30em] flex-col overflow-y-auto outline outline-2">
              {collection.map(
                (x, i) =>
                  x[1].length === 0 && (
                    <button
                      key={i}
                      id={`stack${i}`}
                      onClick={() => {
                        setUnitSelected([x[0] as ShipSelection, x[2]]);
                      }}
                      className={`${
                        unitSelected[1] === x[2] ? 'bg-yellow-100' : 'bg-slate-100'
                      } w-full  outline outline-1`}
                    >
                      {x[0]}
                    </button>
                  ),
              )}
            </div>
          </div>

          <div>
            <div className="mb-6 text-red-600">
              {autoloaderControl >= autoloaderTime && (
                <span className="whitespace-pre-line text-red-600">{AutoloaderWarning.aborted2}</span>
              )}
            </div>
            <Board buttons={Buttons1} />
          </div>
        </div>
      )}
      {gamePhase === GamePhase.setup && (
        <div className="mt-5 flex flex-col gap-2">
          {!collection.map((x) => x[1].length === 0).includes(true) && (
            <button
              onClick={() => {
                setGamePhase(GamePhase.battle);
              }}
              className="w-60 rounded-xl bg-green-200 py-1.5 outline outline-1"
            >
              Start battle
            </button>
          )}
          <ResetButton />
          <QuitButton />
        </div>
      )}
      {gamePhase === GamePhase.battle && (healthComputer === 0 || healthPlayer === 0) && (
        <div className="absolute flex items-center justify-center">
          <div className="flex h-24 w-96 items-center justify-center rounded-lg bg-white outline outline-2 drop-shadow-xl">
            {healthComputer === 0 && <span className="text-3xl">Player Wins!</span>}
            {healthPlayer === 0 && <span className="text-3xl">Computer Wins!</span>}
            {healthPlayer === 0 && healthComputer === 0 && <span className="text-3xl">Draw!</span>}
          </div>
        </div>
      )}

      {gamePhase === GamePhase.battle && (
        <div className="flex flex-col">
          <div className="flex gap-8">
            <Board health={healthPlayer} title="Player" buttons={Buttons2({ feed: collection })} />
            <Board
              health={healthComputer}
              title="Computer"
              buttons={Buttons2({ manipulative: true, feed: enemyCollection })}
            />
          </div>
          <div className="mt-10 flex w-full justify-center">
            <QuitButton />
          </div>
        </div>
      )}
    </div>
  );
}
