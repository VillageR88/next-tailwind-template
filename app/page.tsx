'use client';
import { useCallback, useEffect, useState, useRef } from 'react';
import { Hourglass } from 'react-loader-spinner';

interface UserList {
  Username: string;
  UniqueId: string;
}

enum MultiplayerPhase {
  lobby = 'Lobby',
  setup = 'Setup',
  battle = 'Battle',
}

enum ShipSelection {
  ship2 = 'ship2',
  ship3 = 'ship3',
  ship4 = 'ship4',
  ship5 = 'ship5',
}

const WebSocketComponent = ({
  informMultiplayerPhaseLobby,
  username,
  collection,
  fogOfWar,
  multiplayerBattleReady,
  infoAboutPlayerMove,
  passMultiplayerPhase,
  passMultiplayerFeed,
  passOpponentName,
  passMoveAllowed,
  passInfoAboutPlayerMoveReceived,
  passWaitForMove,
  passFogReport,
  informMultiplayerPhaseLobbyReceived,
  jsxElement1,
  jsxElement2,
  jsxElement3,
  jsxElementQuit,
}: {
  informMultiplayerPhaseLobby: boolean;
  username: string | null;
  collection: [ShipSelection, number[][], string][] | null;
  fogOfWar: number[] | null;
  multiplayerBattleReady: boolean;
  infoAboutPlayerMove: boolean;
  passMultiplayerPhase(arg0: MultiplayerPhase): void;
  passMultiplayerFeed(arg0: [ShipSelection, number[][], string][] | null): void;
  passOpponentName(arg0: string): void;
  passMoveAllowed(): void;
  passInfoAboutPlayerMoveReceived(): void;
  passWaitForMove(arg0: boolean): void;
  passFogReport(arg0: number[]): void;
  informMultiplayerPhaseLobbyReceived(): void;
  jsxElement1: JSX.Element;
  jsxElement2: JSX.Element;
  jsxElement3: JSX.Element;
  jsxElementQuit: JSX.Element;
}) => {
  const [opponentFogOfWar, setOpponentFogOfWar] = useState<number[]>([]);
  const [moveConductor, setMoveConductor] = useState<[boolean, boolean]>([true, true]);
  const [multiplayerPhase, setMultiplayerPhase] = useState<MultiplayerPhase>(MultiplayerPhase.lobby);
  const [feed, setFeed] = useState<[ShipSelection, number[][], string][] | null>(null);
  const [nameInvitation, setNameInvitation] = useState<string | null>(null);
  const [invitationReceived, setInvitationReceived] = useState<null | string>(null);
  const [serverStatus, setServerStatus] = useState<boolean>(false);
  const [client, setClient] = useState<WebSocket | null>(null);
  const [userList, setUserList] = useState<string[][]>([]);
  const [multiplayers, setMultiplayers] = useState<[string | null, string | null]>([null, null]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [invitationList, setInvitationList] = useState<string[]>([]);
  const [rejectedList, setRejectedList] = useState<string[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(true);

  useEffect(() => {
    if (client && (multiplayerPhase as MultiplayerPhase) === MultiplayerPhase.battle && fogOfWar !== null) {
      client.send(JSON.stringify({ type: 'FOG_REPORT', message: [multiplayers[1], fogOfWar] }));
    }
  }, [client, fogOfWar, multiplayerPhase, multiplayers]);

  useEffect(() => {
    if (client && (multiplayerPhase as MultiplayerPhase) === MultiplayerPhase.battle && opponentFogOfWar.length !== 0)
      passFogReport(opponentFogOfWar);
  }, [client, multiplayerPhase, opponentFogOfWar, passFogReport]);

  useEffect(() => {
    if (!moveConductor[1]) passWaitForMove(true);
    else passWaitForMove(false);
  }, [moveConductor, passWaitForMove]);

  useEffect(() => {
    if (!moveConductor.includes(false) && multiplayerPhase === MultiplayerPhase.battle) {
      passMoveAllowed();
      setMoveConductor([false, false]);
    }
  }, [moveConductor, multiplayerPhase, passMoveAllowed]);

  useEffect(() => {
    if (infoAboutPlayerMove) {
      setMoveConductor((value) => {
        const newValue = [...value];
        newValue[0] = true;
        return newValue as [boolean, boolean];
      });
      passInfoAboutPlayerMoveReceived();
      if (client && (multiplayerPhase as MultiplayerPhase) === MultiplayerPhase.battle) {
        console.log('info about move has been sent');
        client.send(JSON.stringify({ type: 'MOVEMENT_REPORT', message: multiplayers[1] }));
      }
    }
  }, [client, infoAboutPlayerMove, multiplayerPhase, multiplayers, passInfoAboutPlayerMoveReceived]);

  useEffect(() => {
    if (multiplayerBattleReady) setMultiplayerPhase(MultiplayerPhase.battle);
  }, [multiplayerBattleReady]);

  useEffect(() => {
    if ((multiplayerPhase as MultiplayerPhase) === MultiplayerPhase.lobby && !multiplayers.includes(null)) {
      const enemyOnList = userList.find((x) => (x as unknown as UserList).UniqueId === multiplayers[1]);
      passOpponentName((enemyOnList as unknown as UserList).Username);
      passMultiplayerPhase(MultiplayerPhase.setup);
      setMultiplayerPhase(MultiplayerPhase.setup);
    }
  }, [multiplayerPhase, multiplayers, passMultiplayerPhase, passOpponentName, userList]);

  useEffect(() => {
    if ((multiplayerPhase as MultiplayerPhase) !== MultiplayerPhase.lobby && multiplayers.includes(null)) {
      console.log('QUIT TO LOBBY');
      setMultiplayerPhase(MultiplayerPhase.lobby);
    }
  }, [multiplayerPhase, multiplayers, passMultiplayerPhase, passOpponentName, userList]);

  useEffect(() => {
    if (informMultiplayerPhaseLobby) {
      setMultiplayers((value) => {
        const newValue = [...value];
        newValue[1] = null;
        return newValue as [string, null];
      });
      informMultiplayerPhaseLobbyReceived();
    }
  }, [informMultiplayerPhaseLobby, informMultiplayerPhaseLobbyReceived]);

  useEffect(() => {
    if (feed) passMultiplayerFeed(feed);
  }, [feed, passMultiplayerFeed]);

  useEffect(() => {
    if (nameInvitation === null && invitationReceived !== null)
      setNameInvitation(
        (userList.find((x) => (x as unknown as UserList).UniqueId === invitationReceived) as unknown as UserList)
          .Username,
      );
  }, [invitationReceived, nameInvitation, userList]);

  useEffect(() => {
    const address = 'ws://192.168.1.109:8080';
    const newClient = new WebSocket(address);
    //const newClient = new W3CWebSocket('ws://192.168.1.61:8080');

    newClient.onopen = () => {
      console.log('WebSocket Client Connected');
      setServerStatus(true);
      newClient.send(JSON.stringify({ type: 'USERNAME', username: username }));
    };

    newClient.onclose = () => {
      console.log('WebSocket Client Disconnected');
      setServerStatus(false);
    };

    newClient.onerror = (error) => {
      console.error('Connection Error:', error);
    };
    // Assuming 'newClient' is your WebSocket connection

    interface JSONWebsocket {
      type: string;
      message: string;
    }

    newClient.onmessage = (message) => {
      const parsedJSON: JSONWebsocket = JSON.parse(message.data as string) as JSONWebsocket;

      if (parsedJSON.type === 'USER_JOIN' || parsedJSON.type === 'CHAT_MESSAGE' || parsedJSON.type === 'USER_LEFT') {
        // Assuming 'parsedJSON.message' contains the chat message text
        setMessages((prevMessages) => [...prevMessages, parsedJSON.message] as string[]);
      } else if (parsedJSON.type === 'USER_LIST') {
        // Assuming 'parsedJSON2.message' is an array of user list items
        const parsedUserList = JSON.parse(parsedJSON.message) as string[][];
        setUserList(parsedUserList);
      } else if (parsedJSON.type === 'INVITATION_PASS') {
        setInvitationReceived(parsedJSON.message);
      } else if (parsedJSON.type === 'INVITATION_REJECT_PASS') {
        setRejectedList((value) => {
          const newValue = [...value];
          if (!newValue.includes(parsedJSON.message)) newValue.push(parsedJSON.message);
          return newValue;
        });
      } else if (parsedJSON.type === 'INVITATION_ACCEPT_PASS') {
        setMultiplayers((value) => {
          const newValue = [...value];
          newValue[1] = parsedJSON.message;
          return newValue as [string, string];
        });
      } else if (parsedJSON.type === 'FEED_PASS') {
        setFeed(parsedJSON.message as unknown as [ShipSelection, number[][], string][]);
      } else if (parsedJSON.type === 'FOG_REPORT_PASS') {
        setOpponentFogOfWar(parsedJSON.message as unknown as number[]);
      } else if (parsedJSON.type === 'MOVEMENT_REPORT_PASS') {
        setMoveConductor((value) => {
          const newValue = [...value];
          newValue[1] = true;
          return newValue as [boolean, boolean];
        });
      } else if (parsedJSON.type === 'MY_ID') {
        setMultiplayers((value) => {
          const newValue = [...value];
          newValue[0] = parsedJSON.message;
          return newValue as [string, string];
        });
      }
    };

    setClient(newClient);

    return () => {
      newClient.close();
    };
  }, [username]);

  useEffect(() => {
    isSticky && scrollToBottom();
  }, [isSticky, messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (client && messageInput.trim() !== '') {
      client.send(JSON.stringify({ type: 'CHAT', message: messageInput }));
      setMessageInput('');
    }
  };

  useEffect(() => {
    if (client && (multiplayerPhase as MultiplayerPhase) === MultiplayerPhase.battle) {
      console.log('feed has been sent');
      client.send(JSON.stringify({ type: 'FEED', message: [multiplayers[1], collection] }));
    }
  }, [client, collection, multiplayerPhase, multiplayers]);

  interface userList {
    Username: string;
  }
  if (multiplayerPhase === MultiplayerPhase.lobby)
    return (
      <div className="flex items-center justify-center">
        {nameInvitation && (
          <div className="absolute rounded-md outline outline-1">
            <div className="flex h-fit w-fit flex-col items-center justify-center gap-2 bg-white px-4 py-4">
              <span>{`${nameInvitation}`}</span>
              <span>{`challenges you to a battle.`}</span>
              <div className="flex gap-6">
                {['Accept', 'Reject'].map((x, i) => (
                  <button
                    onClick={() => {
                      if (i === 0) {
                        const acceptInvitation = () => {
                          if (client && invitationReceived) {
                            client.send(JSON.stringify({ type: 'INVITATION_ACCEPT', message: invitationReceived }));
                            setMultiplayers((value) => {
                              const newValue = [...value];
                              newValue[1] = invitationReceived;
                              return newValue as [string, string];
                            });
                          }
                        };
                        acceptInvitation();
                      } else if (i === 1) {
                        const rejectInvitation = () => {
                          if (client && invitationReceived) {
                            client.send(JSON.stringify({ type: 'INVITATION_REJECT', message: invitationReceived }));
                          }
                        };
                        rejectInvitation();
                      }
                      setInvitationReceived(null);
                      setNameInvitation(null);
                    }}
                    className="px-2 py-1 outline outline-1"
                    key={i}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="ml-[-15em] mr-[5em] flex w-[12em] flex-col justify-center">
          <button
            disabled={
              selectedUser === null || !userList.map((x) => (x as unknown as UserList).UniqueId).includes(selectedUser)
            }
            onClick={() => {
              setInvitationList((value) => {
                const newValue = [...value];
                if (selectedUser && !newValue.includes(selectedUser)) newValue.push(selectedUser);
                return newValue;
              });
              const sendInvitation = () => {
                if (client && selectedUser) {
                  client.send(JSON.stringify({ type: 'INVITATION', message: selectedUser }));
                }
              };
              sendInvitation();
              setSelectedUser(null);
            }}
            className="mb-[1em] rounded-md bg-slate-100 outline outline-1 disabled:opacity-50"
          >
            Send invitation
          </button>
          <div className="h-[30em] flex-col overflow-y-auto p-0.5 outline outline-2">
            {userList.map((user, index) => (
              <button
                id={`button_${(user as unknown as UserList).UniqueId}`}
                key={index}
                onClick={() => {
                  (user as unknown as UserList).UniqueId !== multiplayers[0] &&
                    setSelectedUser(() => {
                      if ((user as unknown as UserList).UniqueId === selectedUser) return null;
                      else return (user as unknown as UserList).UniqueId;
                    });
                  // Handle the onClick logic
                  // setUnitSelected([user.something, user.anotherProperty]);
                }}
                className={`${
                  rejectedList.includes((user as unknown as UserList).UniqueId)
                    ? 'bg-red-300'
                    : invitationList.includes((user as unknown as UserList).UniqueId)
                      ? 'bg-yellow-300'
                      : selectedUser === (user as unknown as UserList).UniqueId
                        ? 'bg-yellow-100'
                        : 'bg-slate-100'
                } w-full  outline outline-1`}
              >
                {(user as unknown as UserList).Username}
              </button>
            ))}
          </div>
        </div>
        <div className="flex h-[25em] flex-col justify-between gap-10">
          <div
            id="ChatBoxDiv"
            onScroll={() => {
              const ChatBoxDiv = document.getElementById('ChatBoxDiv');
              if (
                (ChatBoxDiv?.scrollHeight ?? 0) - (ChatBoxDiv?.scrollTop ?? 0) - (ChatBoxDiv?.clientHeight ?? 0) >=
                100
              )
                setIsSticky(false);
              else setIsSticky(true);
            }}
            className="mb-6 h-[18em] overflow-y-auto bg-cyan-50 px-2 py-1.5"
          >
            {serverStatus ? (
              <span className="text-green-700">Server Connected</span>
            ) : (
              <span className="text-red-600">Server Disconnected</span>
            )}
            {messages.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex w-full justify-center gap-2">
            <input
              autoComplete="off"
              className="w-[30em] px-2 py-1.5 outline outline-1"
              id="inputMessage"
              type="text"
              value={messageInput}
              onChange={handleMessageChange}
              placeholder="..."
              onKeyDown={handleKeyDown}
            />
            <button
              className="rounded-sm bg-slate-100 px-4 py-1.5 outline outline-1"
              id="sendMessage"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
          {jsxElementQuit}
        </div>
      </div>
    );
  else if ((multiplayerPhase as MultiplayerPhase) === MultiplayerPhase.setup)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        {jsxElement1}
        {jsxElement2}
      </div>
    );
  else if ((multiplayerPhase as MultiplayerPhase) === MultiplayerPhase.battle)
    return <div className="flex h-full w-full flex-col items-center justify-center">{jsxElement3}</div>;
};

export default function Home() {
  enum GamePhase {
    menu = 'Menu',
    options = 'Options',
    exit = 'Exit',
    preSetup = 'Enemy unit placement',
    setup = 'Own unit placement',
    multiplayer = 'Multiplayer',
    battle = 'Battle',
  }

  const Hourglass1 = () => {
    return (
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    );
  };

  //debug const [initialConfig, setInitialConfig] = useState<number[]>([2, 2, 1, 1]);
  const [initialConfig, setInitialConfig] = useState<number[]>([1, 0, 0, 0]);

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
  }, [initialConfig]);

  enum AutoloaderWarning {
    none = '',
    aborted1 = 'Deployment aborted!\nReduce number of ships.',
    aborted2 = 'Deployment aborted!\nRestart or reduce number of ships.',
  }
  const [informMultiplayerPhaseLobby, setInformMultiplayerPhaseLobby] = useState<boolean>(false);
  const [autoCombat, setAutoCombat] = useState<boolean>(false);
  const [honoraryMoveLeft, setHonoraryMoveLeft] = useState<boolean>(true);
  const [passWaitForMove, setWaitForMove] = useState<boolean>(false);
  const [moveAllowed, setMoveAllowed] = useState<boolean>(false);
  const [infoAboutPlayerMove, setInfoAboutPlayerMove] = useState<boolean>(false);
  const [multiplayerPhase, setMultiplayerPhase] = useState<MultiplayerPhase>(MultiplayerPhase.lobby);
  const [passMultiplayerBattleReady, setPassMultiplayerBattleReady] = useState<boolean>(false);
  const [multiplayerFeed, setMultiplayerFeed] = useState<[ShipSelection, number[][], string][] | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [opponentName, setOpponentName] = useState<string | null>(null);
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
  const [seek, setSeek] = useState<[number[], number[]]>([[], []]);
  const [seekLoader, setSeekLoader] = useState<boolean>(false);
  const autoloaderTime = 500;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  console.log();
  useEffect(() => {
    if (healthComputer === 0 && multiplayerPhase === MultiplayerPhase.battle) setHonoraryMoveLeft(false);
  }, [GamePhase.battle, gamePhase, healthComputer, multiplayerPhase]);

  //localStorage action - username
  useEffect(() => {
    if (!username) {
      const usernameFromStorage = localStorage.getItem('Username');
      if (usernameFromStorage) {
        localStorage.setItem('Username', usernameFromStorage);
        setUsername(usernameFromStorage);
      } else setUsername('defaultUsername');
    }
  }, [username]);

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
  }, [collection, computerMove, playerShipFound, seek, seekLoader]);

  useEffect(() => {
    //after last hit on ship (ship sunk) this reset to normal uncover
    if (
      playerShipFound[0] &&
      collection[playerShipFound[1] as unknown as number][1][0].filter((x) => !computerMove.includes(x)).length === 0
    ) {
      setPlayerShipFound([false, null]);
      setSeek([[], []]);
      setSeekLoader(false);
    }
  }, [collection, computerMove, playerShipFound]);

  //this is opponent's health bar update
  useEffect(() => {
    if (fogOfWar.length !== 0) {
      let shipTotalLengthEnemy = 0;
      if (gamePhase === GamePhase.battle) shipTotalLengthEnemy = enemyCollection.map((x) => x[1][0]).flat().length;
      else if (gamePhase === GamePhase.multiplayer && multiplayerFeed)
        shipTotalLengthEnemy = multiplayerFeed.map((x) => x[1][0]).flat().length;
      let shipCurrentLengthEnemy = 0;
      if (gamePhase === GamePhase.battle)
        shipCurrentLengthEnemy = enemyCollection
          .map((x) => x[1][0])
          .flat()
          .filter((x) => fogOfWar.includes(x)).length;
      else if (gamePhase === GamePhase.multiplayer && multiplayerFeed)
        shipCurrentLengthEnemy = multiplayerFeed
          .map((x) => x[1][0])
          .flat()
          .filter((x) => fogOfWar.includes(x)).length;
      setHealthComputer(100 - (shipCurrentLengthEnemy * 100) / shipTotalLengthEnemy);
      return void [];
    }
  }, [GamePhase.battle, GamePhase.multiplayer, enemyCollection, fogOfWar, gamePhase, multiplayerFeed]);

  //this is player's health bar update
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
  }, [GamePhase.battle, GamePhase.multiplayer, collection, computerMove, gamePhase]);

  const Buttons1 = Array.from({ length: 100 }, (_, iterator, i = iterator + 1) => (
    <button
      id={'' + i}
      onKeyUp={(key) => {
        (key.key === 'Enter' || key.key === ' ') && document.getElementById('' + i)?.blur();
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
    feed: [ShipSelection, number[][], string][];
    manipulative?: boolean;
  }) => {
    return Array.from({ length: 100 }, (_, iterator, i = iterator + 1) => (
      <button
        key={i}
        //id={`${manipulative && !fogOfWar.includes(i) && 'managed'}` + i}
        onClick={() => {
          if (
            manipulative &&
            !fogOfWar.includes(i) &&
            ((gamePhase !== GamePhase.multiplayer && healthPlayer !== 0 && healthComputer !== 0) ||
              (gamePhase === GamePhase.multiplayer && honoraryMoveLeft && moveAllowed))
          ) {
            //Player uncover Enemy
            setFogOfWar((value) => {
              const newValue = [...value];
              newValue.push(i);
              return newValue;
            });
            if ((gamePhase as GamePhase) !== GamePhase.multiplayer) {
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
            } else {
              if (healthPlayer === 0) setHonoraryMoveLeft(false);
              setInfoAboutPlayerMove(true);
              setMoveAllowed(false);
            }
          }
        }}
        className={`${manipulative && !fogOfWar.includes(i) && 'managed'} ' ' 
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
            //TODO
            feed
              .map((eCol, ib1) => !eCol[1][0].map((xb1) => fogOfWar.includes(xb1)).includes(false) && feed[ib1][1][1])
              .flat()
              .filter((xb2) => xb2 !== false)
              .includes(i)) &&
          (!manipulative ? (computerMove.includes(i) ? 'bg-red-300' : 'bg-cyan-100') : 'bg-red-300')
        } h-10 w-10 outline outline-1 active:border-[5px] active:border-blue-500`}
      ></button>
    ));
  };

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
      collection
        .map((x, i) => !x[1][0].map((x) => computerMove.includes(x)).includes(false) && collection[i][1][1])
        .flat()
        .filter((x) => x !== false) as number[],
    [collection, computerMove],
  );
  //Computer board
  const visibleBorder2Enemy = useCallback(() => {
    //TODO multiplayer feed in MP
    let opponentFeed = [] as [ShipSelection, number[][], string][];
    if (gamePhase === GamePhase.battle) opponentFeed = enemyCollection;
    else if (gamePhase === GamePhase.multiplayer && multiplayerPhase === MultiplayerPhase.battle && multiplayerFeed)
      opponentFeed = multiplayerFeed;
    return opponentFeed
      .map((x, i) => {
        const isVisible = !x[1][0].map((x) => fogOfWar.includes(x)).includes(false);
        return isVisible ? opponentFeed[i][1][1] : false;
      })
      .flat()
      .filter((x) => x !== false) as number[];
  }, [
    gamePhase,
    GamePhase.battle,
    GamePhase.multiplayer,
    enemyCollection,
    multiplayerPhase,
    multiplayerFeed,
    fogOfWar,
  ]);

  /*Here is the logic that makes Border2 of destroyed ship to appear*/
  //Player board
  useEffect(() => {
    if (
      gamePhase === GamePhase.battle ||
      (gamePhase === GamePhase.multiplayer && multiplayerPhase === MultiplayerPhase.battle)
    ) {
      const array = [] as number[];
      visibleBorder2Player().map((x) => !computerMove.includes(x) && array.push(x));
      if (array.length !== 0)
        setComputerMove((value) => {
          const newValue = [...value];
          array.map((x) => newValue.push(x));
          return newValue;
        });
      return void [];
    }
  }, [GamePhase.battle, GamePhase.multiplayer, computerMove, gamePhase, multiplayerPhase, visibleBorder2Player]);

  //Computer board
  useEffect(() => {
    if (
      gamePhase === GamePhase.battle ||
      (gamePhase === GamePhase.multiplayer && multiplayerPhase === MultiplayerPhase.battle)
    ) {
      const array = [] as number[];
      visibleBorder2Enemy().map((x) => !fogOfWar.includes(x) && array.push(x));
      if (array.length !== 0)
        setFogOfWar((value) => {
          const newValue = [...value];
          array.map((x) => newValue.push(x));
          return newValue;
        });
      return void [];
    }
  }, [GamePhase.battle, GamePhase.multiplayer, fogOfWar, gamePhase, multiplayerPhase, visibleBorder2Enemy]);

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
  // eslint-disable-next-line
  const AutoCombatButton = () => {
    return (
      <button
        onClick={() => {
          if (!(healthComputer === 0 || healthPlayer === 0)) setAutoCombat(!autoCombat);
        }}
        className="w-60 rounded-xl bg-slate-100 py-1.5 outline outline-1"
      >{`(Debug)Auto Combat ${autoCombat ? '(ON)' : '(OFF)'}`}</button>
    );
  };
  const elementRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (autoCombat) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * document.getElementsByClassName('managed').length);
        const element = document.getElementsByClassName('managed').item(randomIndex) as HTMLElement;
        elementRef.current = element;
        elementRef.current.click();
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  }, [autoCombat]);

  //disable AutoCombat after end of fight
  useEffect(() => {
    if (
      (healthPlayer === 0 || healthComputer === 0) &&
      (gamePhase !== GamePhase.multiplayer ||
        ((gamePhase as GamePhase) === GamePhase.multiplayer &&
          multiplayerPhase === MultiplayerPhase.battle &&
          !honoraryMoveLeft))
    ) {
      if (autoCombat) setAutoCombat(false);
    }
  }, [
    GamePhase.battle,
    GamePhase.multiplayer,
    autoCombat,
    gamePhase,
    healthComputer,
    healthPlayer,
    honoraryMoveLeft,
    multiplayerPhase,
  ]);

  const QuitButton = () => {
    return (
      <button
        onClick={() => {
          if (gamePhase === GamePhase.multiplayer && multiplayerPhase !== MultiplayerPhase.lobby) {
            setInformMultiplayerPhaseLobby(true);
            setMultiplayerPhase(MultiplayerPhase.lobby);
            setOpponentName(null);
            setHonoraryMoveLeft(true);
          } else {
            setGamePhase(GamePhase.menu);
          }
          setAutoCombat(false);
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
      (gamePhase === GamePhase.setup || multiplayerPhase === MultiplayerPhase.setup) && (
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

  const button1class =
    'w-48 rounded-xl bg-gradient-to-b from-[#F4DAAC] hover:from-orange-200 hover:to-red-300 to-[#E5C08A] py-1.5 text-orange-700 outline outline-2 -outline-offset-4 outline-orange-800 hover:text-red-700 hover:outline-red-700';

  const usernameEditor = (value: string) => {
    return value;
  };

  const Setup = () => {
    return (
      <div className={`${gamePhase === GamePhase.preSetup && 'invisible'} flex flex-row items-center`}>
        <div className="ml-[-15em] mr-[5em] flex w-[13em] flex-col justify-center">
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
          <div className="flex h-[30em] flex-col gap-1 overflow-y-auto rounded-md bg-blue-500   p-0.5">
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
                      unitSelected[1] === x[2] ? 'bg-yellow-100' : 'bg-neutral-100'
                    } w-full  rounded-sm outline outline-1`}
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
    );
  };

  const Setup_LowerButtons = () => {
    return (
      <div className="flex flex-col gap-2">
        {!collection.map((x) => x[1].length === 0).includes(true) && (
          <button
            onClick={() => {
              if (gamePhase === GamePhase.multiplayer) {
                setPassMultiplayerBattleReady(true);
                setMultiplayerPhase(MultiplayerPhase.battle);
              } else setGamePhase(GamePhase.battle);
            }}
            className="w-60 rounded-xl bg-green-200 py-1.5 outline outline-1"
          >
            Start battle
          </button>
        )}
        <ResetButton />
        <QuitButton />
      </div>
    );
  };

  const Battle = ({ feed }: { feed?: [ShipSelection, number[][], string][] | null }) => {
    return (
      <div className="flex flex-col">
        <div className="flex gap-8">
          <Board health={healthPlayer} title={username ?? ''} buttons={Buttons2({ feed: collection })} />
          {gamePhase === GamePhase.battle || (gamePhase === GamePhase.multiplayer && feed) ? (
            <Board
              health={healthComputer}
              title={(gamePhase as GamePhase) !== GamePhase.multiplayer ? `Computer` : opponentName ?? ''}
              buttons={Buttons2({ manipulative: true, feed: feed ? feed : enemyCollection })}
            />
          ) : (
            <div className="flex h-[30em] w-[25em] items-center justify-center">
              <Hourglass1 />
            </div>
          )}
        </div>
        <div className="mt-10 flex w-full flex-col items-center gap-2">
          {/*<AutoCombatButton />*/}
          <QuitButton />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (multiplayerPhase === MultiplayerPhase.lobby) setInitialConfig([1, 0, 0, 0]); //debug
  }, [multiplayerPhase]);

  return (
    <div className="flex min-h-screen flex-col  bg-[url('./images/summer_background_47_a.jpg')] bg-cover font-frijole font-[300]  text-black">
      <div className="container absolute flex h-screen w-full items-end">
        <span className="z-20 pb-1 pl-2 text-orange-700">v. 0.1.0 (in progress)</span>
      </div>
      <div className="z-10 flex min-h-screen w-full flex-col items-center justify-center">
        {gamePhase === GamePhase.multiplayer &&
          multiplayerPhase === MultiplayerPhase.battle &&
          !moveAllowed &&
          passWaitForMove && (
            <div className="absolute flex items-center justify-center">
              <Hourglass1 />
            </div>
          )}
        {gamePhase === GamePhase.exit && (
          <div className="flex h-screen w-screen items-center justify-center bg-black">
            <span className="whitespace-pre-line text-3xl text-amber-600">
              {"It's now safe to turn off\nthis site"}
            </span>
          </div>
        )}
        {gamePhase === GamePhase.menu && (
          <div className="flex h-full w-fit flex-col items-center gap-1 rounded-xl px-8 py-14">
            <span
              className="whitespace-pre-line rounded-xl bg-opacity-75 bg-[url('images/toppng.com-wooden-sign-600x187.png')] bg-contain bg-center bg-no-repeat p-10 	

text-3xl text-orange-700"
            >
              {'Nuts\non These Ships'}
            </span>
            <div className="flex h-[22em] w-full flex-col items-center justify-center gap-4 bg-[url('images/pngwing.com.png')] bg-cover bg-center bg-no-repeat py-2">
              {['Single Player', 'Multiplayer', 'Options', 'Exit'].map((x, i) => (
                <button
                  onClick={() => {
                    if (i === 0) {
                      setGamePhase(GamePhase.preSetup);
                      setAutoloader(true);
                    }
                    i === 1 && setGamePhase(GamePhase.multiplayer);
                    i === 2 && setGamePhase(GamePhase.options);
                    i === 3 && setGamePhase(GamePhase.exit);
                  }}
                  key={i}
                  className={button1class}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>
        )}
        {gamePhase === GamePhase.options && (
          <div className="flex flex-col items-center">
            <div className="mb-2 rounded-sm bg-teal-50 py-2 outline outline-1">
              <form className="px-2">
                <span>Username: </span>
                <input
                  value={username ?? ''}
                  onChange={(e) => {
                    const newName = usernameEditor(e.target.value);
                    setUsername(newName);
                    localStorage.setItem('Username', newName);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      (event.target as HTMLFormElement).blur();
                    }
                  }}
                  className="px-2 outline outline-1"
                  type="text"
                />
              </form>
            </div>
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
                if (initialConfig.reduce((p, n) => p + n) !== 0 && username != '') {
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

            {autoloaderControl < autoloaderTime && <Hourglass1 />}
            {autoloaderControl >= autoloaderTime && <QuitButton />}
          </div>
        )}
        {(gamePhase === GamePhase.preSetup || gamePhase === GamePhase.setup) && <Setup />}
        {gamePhase === GamePhase.setup && <Setup_LowerButtons />}
        {(gamePhase === GamePhase.battle ||
          ((gamePhase as GamePhase) === GamePhase.multiplayer && moveAllowed && !honoraryMoveLeft)) &&
          (healthComputer === 0 || healthPlayer === 0) && (
            <div className="absolute flex items-center justify-center">
              <div className="flex h-24  w-96 items-center justify-center rounded-lg bg-white outline outline-2 drop-shadow-xl">
                {healthComputer === 0 && healthPlayer !== 0 && <span className="text-3xl">{username} Wins!</span>}
                {healthPlayer === 0 && healthComputer !== 0 && (
                  <span className="text-3xl">{opponentName ? opponentName : 'Computer'} Wins!</span>
                )}
                {healthPlayer === 0 && healthComputer === 0 && <span className="text-3xl">Draw!</span>}
              </div>
            </div>
          )}
        {gamePhase === GamePhase.multiplayer && (
          <div className="flex h-full w-full items-center justify-center">
            <WebSocketComponent
              informMultiplayerPhaseLobby={informMultiplayerPhaseLobby}
              informMultiplayerPhaseLobbyReceived={() => {
                setInformMultiplayerPhaseLobby(false);
              }}
              fogOfWar={fogOfWar}
              infoAboutPlayerMove={infoAboutPlayerMove}
              multiplayerBattleReady={passMultiplayerBattleReady}
              collection={collection}
              jsxElement1={<Setup />}
              jsxElement2={<Setup_LowerButtons />}
              jsxElement3={<Battle feed={multiplayerFeed} />}
              jsxElementQuit={<QuitButton />}
              passMultiplayerFeed={(value) => {
                setMultiplayerFeed(value);
              }}
              passMultiplayerPhase={(value) => {
                setMultiplayerPhase(value);
              }}
              passOpponentName={(value) => {
                setOpponentName(value);
              }}
              passMoveAllowed={() => {
                setMoveAllowed(true);
              }}
              passInfoAboutPlayerMoveReceived={() => {
                setInfoAboutPlayerMove(false);
              }}
              passWaitForMove={(value) => {
                setWaitForMove(value);
              }}
              passFogReport={(value) => {
                setComputerMove(value);
              }}
              username={username}
            />
          </div>
        )}
        {gamePhase === GamePhase.battle && <Battle />}
      </div>
    </div>
  );
}
