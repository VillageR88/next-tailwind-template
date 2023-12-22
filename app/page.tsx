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
    return stack;
  }, [initialConfig, ShipSelection]);

  enum AutoloaderWarning {
    none = '',
    aborted1 = 'Deployment aborted!\nReduce number of ships.',
    aborted2 = 'Deployment aborted!\nRestart or reduce number of ships.',
  }

  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.menu);
  const [collection, setCollection] = useState<(ShipSelection | number[][] | string)[][]>(shipConfiguration);
  const [enemyCollection, setEnemyCollection] = useState<(ShipSelection | number[][] | string)[][]>([]);
  const [fogOfWar, setFogOfWar] = useState<number[]>([]);
  const [unitSelected, setUnitSelected] = useState<(ShipSelection | string | null)[]>([]);
  const [horizontal, setHorizontal] = useState<boolean>(false);
  const [autoloader, setAutoloader] = useState<boolean>(false);
  const [autoloaderControl, setAutoloaderControl] = useState<number>(0);
  const autoloaderTime = 500;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  //'is ship sunk in Array' enemyCollection.map((eCol) => !(eCol[1][0] as number[]).map((x) => fogOfWar.includes(x)).includes(false)),
  //'Array[sunkShip]' enemyCollection.map((eCol, i) => !(eCol[1][0] as number[]).map((x) => fogOfWar.includes(x)).includes(false) && i),
  //'Border2 of sunkShip'  enemyCollection.map((eCol, i) => !(eCol[1][0] as number[]).map((x) => fogOfWar.includes(x)).includes(false) && enemyCollection[i][1][1],);
  /* 'if ship was sunk this return border2 of all sunk ships
  enemyCollection
    .map(
      (eCol, i) =>
        !(eCol[1][0] as number[]).map((x) => fogOfWar.includes(x)).includes(false) && enemyCollection[i][1][1],
    )
    .flat()
    .filter((x) => x !== false);
  */

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
          manipulative &&
            !fogOfWar.includes(i) &&
            setFogOfWar((value) => {
              console.log('click registered');
              const newValue = [...value];
              !newValue.includes(i) && newValue.push(i);

              return newValue;
            });
        }}
        className={`${
          feed
            .map((x) => x[1][0])
            .flat()
            .includes(i) &&
          (!manipulative || fogOfWar.includes(i)) &&
          (!manipulative ? 'bg-slate-500' : 'bg-red-900')
        } ${
          feed
            .map((x) => x[1][1])
            .flat()
            .includes(i) &&
          (!manipulative ||
            enemyCollection
              .map(
                (eCol, ib1) =>
                  !(eCol[1][0] as number[]).map((xb1) => fogOfWar.includes(xb1)).includes(false) &&
                  enemyCollection[ib1][1][1],
              )
              .flat()
              .filter((xb2) => xb2 !== false)
              .includes(i)) &&
          (!manipulative ? 'bg-cyan-100' : 'bg-red-300')
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
  const visibleBorder2 = useCallback(
    () =>
      enemyCollection
        .map(
          (eCol, ib1) =>
            !(eCol[1][0] as number[]).map((xb1) => fogOfWar.includes(xb1)).includes(false) &&
            enemyCollection[ib1][1][1],
        )
        .flat()
        .filter((xb2) => xb2 !== false),
    [enemyCollection, fogOfWar],
  );
  useEffect(() => {
    const array = [] as number[];
    visibleBorder2().map((x) => !fogOfWar.includes(x as number) && array.push(x as number));
    if (array.length !== 0)
      setFogOfWar((value) => {
        const newValue = [...value];
        array.map((x) => newValue.push(x));
        return newValue;
      });
  }, [fogOfWar, visibleBorder2]);

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
    }
    if (autoloaderControl === autoloaderTime) setAutoloader(false);
  }, [autoloader, autoloaderControl, autoloaderTime, collection]);

  useEffect(() => {
    if (gamePhase === GamePhase.preSetup && !collection.map((x) => x[1].length === 0).includes(true)) {
      const newCollection = [...collection];
      for (const i of newCollection) i[2] = 'enemy_'.concat(i[2] as string);
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

  const Board = ({ buttons, title }: { buttons: JSX.Element[]; title?: string }) => {
    return (
      <div>
        {title && <div>{title}</div>}
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
              className="mb-[1em] rounded-md bg-violet-200 outline outline-1"
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
      {gamePhase === GamePhase.battle && (
        <div className="flex flex-col">
          <div className="flex gap-8">
            <Board title="Player" buttons={Buttons2({ feed: collection })} />
            <Board title="Computer" buttons={Buttons2({ manipulative: true, feed: enemyCollection })} />
          </div>
          <div className="mt-10 flex w-full justify-center">
            <QuitButton />
          </div>
        </div>
      )}
    </div>
  );
}
