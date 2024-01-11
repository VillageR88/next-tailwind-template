'use client';
import Image from 'next/image';
import iconReply from './images/icon-reply.svg';
import iconEdit from './images/icon-edit.svg';
import iconDelete from './images/icon-delete.svg';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
interface replies {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  voted: string[];
  replyingTo: string;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}
interface comments {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  voted: string[];
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: replies[] | [];
}

interface dataJSON {
  currentUser: { image: { png: string; webp: string }; username: string };
  comments: comments[];
}

const IconPlus = ({ plusFunction }: { plusFunction(arg0: dataJSON | null): void }) => {
  const [color, setColor] = useState('#C5C6EF');
  return (
    <button
      onClick={plusFunction as () => void}
      onMouseEnter={() => {
        setColor('hsl(238, 40%, 52%)');
      }}
      onMouseLeave={() => {
        setColor('#C5C6EF');
      }}
      className="flex h-full w-full items-center justify-center"
    >
      <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
          fill={color}
        />
      </svg>
    </button>
  );
};

const IconMinus = ({ minusFunction }: { minusFunction(arg0: dataJSON | null): void }) => {
  const [color, setColor] = useState('#C5C6EF');
  return (
    <button
      onClick={minusFunction as () => void}
      onMouseEnter={() => {
        setColor('hsl(238, 40%, 52%)');
      }}
      onMouseLeave={() => {
        setColor('#C5C6EF');
      }}
      className="flex h-full w-full items-center justify-center"
    >
      <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
          fill={color}
        />
      </svg>
    </button>
  );
};
const BoxButtonType1 = ({
  icon,
  text,
  color,
  onButtonClick,
}: {
  icon: string;
  text: string;
  color: string;
  onButtonClick(): void;
}) => (
  <button onClick={onButtonClick} className="flex items-center gap-[0.45em] hover:opacity-40">
    <Image className="h-fit w-fit" src={icon} alt={text} />
    <span className={`font-[500] ${color}`}>{text}</span>
  </button>
);

const BoxButtonType2 = ({ text, onButtonClick }: { text: string; onButtonClick(): void }) => {
  return (
    <button
      onClick={onButtonClick}
      className="flex w-[6.5em] items-center justify-center rounded-[0.5em] bg-moderateBlue py-[0.75em] font-[500] text-white hover:opacity-40"
    >
      {text}
    </button>
  );
};

export default function Home() {
  const [data, setData] = useState<dataJSON | null>(null);
  const [textareaActive, setTextareaActive] = useState<boolean>(false);
  const currentReplyRef = useRef<number[] | null>(null);
  const currentReplyIsFirstOne = useRef<boolean>(false);

  let addCommentBlockText: string;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        const jsonData = (await response.json()) as dataJSON;
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    void fetchData();
  }, []);

  const CommentBlock = ({
    content,
    createdAt,
    score,
    replyingTo,
    username,
    webp,
    plusFunction,
    minusFunction,
    onButtonDeleteClick,
    onButtonReplyClick,
    passEditedData,
  }: {
    content: string;
    createdAt: string;
    score: number;
    replyingTo?: string;
    username: string;
    webp: string;
    plusFunction(arg0: dataJSON | null): void;
    minusFunction(arg0: dataJSON | null): void;
    onButtonDeleteClick(): void;
    onButtonReplyClick(): void;
    passEditedData(arg0: string): void;
  }) => {
    const isUser = data && username === data.currentUser.username;
    const [isEdited, setIsEdited] = useState<boolean>(false);
    const [text, setText] = useState<string>(content);
    const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
    useEffect(() => {
      !text && setIsEdited(true);
    }, [text]);
    return (
      <div
        className={`flex min-h-[9.45em] gap-[1.5em] py-[1.5em] ${
          replyingTo && !currentReplyIsFirstOne.current ? 'w-[40.1em]' : 'w-[45.625em]'
        }  rounded-[0.5em] bg-white pl-[1.5em] ${isEdited && 'mt-[-0.6em]'}`}
      >
        {!isEdited && isFirstTime ? (
          <div className="flex h-[6.25em] w-[2.8em] flex-col items-center justify-between rounded-[0.65em] bg-[#F5F6FA]">
            <IconPlus plusFunction={plusFunction} />
            <span className="text-[1.05rem] font-[500] text-moderateBlue">{score}</span>
            <IconMinus minusFunction={minusFunction} />
          </div>
        ) : (
          <div className="h-fit w-fit">
            <Image src={webp} height={45} width={45} alt="avatar" />
          </div>
        )}
        <div className="flex w-full flex-col justify-start gap-[0.9em]">
          {!isEdited && (
            <div className="flex justify-between text-[1.05rem] tracking-[-0.03em]">
              <div className="flex items-center gap-[1em]">
                <Image src={webp} height={32} width={32} alt="avatar" />
                <div className="flex items-center gap-2">
                  <span className="font-[500] text-darkBlue">{username}</span>
                  {isUser && (
                    <span className="mb-[-1px] flex h-[1.48em] w-[2.85em] items-center justify-center rounded-sm bg-moderateBlue px-2 text-[0.8rem] tracking-wide text-white">
                      you
                    </span>
                  )}
                </div>
                <span className="text-grayishBlue">{createdAt}</span>
              </div>
              {isUser ? (
                <div className="flex gap-6 pr-[1.55em]">
                  <BoxButtonType1
                    onButtonClick={onButtonDeleteClick}
                    icon={iconDelete as string}
                    text="Delete"
                    color="text-softRed"
                  />
                  <BoxButtonType1
                    onButtonClick={() => {
                      setIsFirstTime(false);
                      setIsEdited(true);
                    }}
                    icon={iconEdit as string}
                    text="Edit"
                    color="text-moderateBlue"
                  />
                </div>
              ) : (
                <div className="flex pr-[1.55em]">
                  <BoxButtonType1
                    onButtonClick={() => {
                      if (textareaActive) {
                        setData((value): dataJSON => {
                          const newValue = { ...value } as dataJSON;
                          currentReplyRef.current &&
                            newValue.comments[currentReplyRef.current[0]].replies.splice(
                              currentReplyRef.current[1] - 1,
                              1,
                            );
                          return newValue;
                        });
                      }
                      setTextareaActive(true);
                      onButtonReplyClick();
                    }}
                    icon={iconReply as string}
                    text="Reply"
                    color="text-moderateBlue"
                  />
                </div>
              )}
            </div>
          )}
          <div className="flex h-full tracking-[0.001em] text-grayishBlue">
            {!isEdited ? (
              <div className={`${replyingTo ? 'w-[33em]' : 'w-[38em]'} space-x-1 `}>
                {replyingTo && <span className="font-[500]  text-moderateBlue">{replyingTo}</span>}
                {text && <span className="break-words">{text}</span>}
              </div>
            ) : (
              <div className={`flex gap-4 ${replyingTo && !currentReplyIsFirstOne.current ? 'w-[33em]' : 'w-[38em]'}`}>
                <textarea
                  rows={1}
                  autoFocus
                  value={[replyingTo, text].join(' ')}
                  onChange={(e) => {
                    replyingTo && setText(e.target.value.slice(replyingTo.length + 1));
                  }}
                  className={`${
                    replyingTo && !currentReplyIsFirstOne.current ? 'w-[33em]' : 'w-[38em]'
                  } min-h-[6em] resize-none space-x-1 rounded-[0.5em] px-6 py-2 placeholder-grayishBlue outline outline-1 outline-lightGray focus:outline-moderateBlue`}
                >
                  {content}
                </textarea>
                {isFirstTime && (
                  <div className="h-fit w-fit">
                    <BoxButtonType2
                      text="REPLY"
                      onButtonClick={() => {
                        if (text) {
                          setTextareaActive(false);
                          passEditedData(text);
                          setIsEdited(false);
                          currentReplyIsFirstOne.current = false;
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          {!isFirstTime && (
            <div className="flex w-full justify-end pb-[1.5em] pr-[1.5em]">
              {isEdited && (
                <BoxButtonType2
                  text="UPDATE"
                  onButtonClick={() => {
                    if (text) {
                      passEditedData(text);
                      setIsEdited(false);
                    }
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  };
  const AddCommentBlock = () => {
    const [text, setText] = useState<string>('');
    return (
      <div className="flex min-h-[9em] w-[45.625em] items-start gap-[1.1em] rounded-[0.5em] bg-white py-[1.6em] pl-[1.5em] pr-[1.4em]">
        <Image
          className="mt-[0.18em]"
          src={data ? data.currentUser.image.webp.replace('images/', '') : ''}
          height={40}
          width={40}
          alt="avatar"
        />
        <textarea
          rows={1}
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          placeholder="Add a comment…"
          className="min-h-[5.8em] w-[31.5em] resize-none rounded-[0.5em] px-6 py-3 placeholder-grayishBlue outline outline-1 outline-lightGray focus:outline-moderateBlue"
        ></textarea>
        <BoxButtonType2
          text="SEND"
          onButtonClick={() => {
            if (text)
              data &&
                setData((value): dataJSON => {
                  const newValue = { ...value } as dataJSON;
                  const newReply: comments = {
                    id: data.comments.length + 1,
                    content: text,
                    createdAt: 'now',
                    score: 0,
                    voted: [],
                    user: {
                      image: {
                        png: data.currentUser.image.png,
                        webp: data.currentUser.image.webp,
                      },
                      username: data.currentUser.username,
                    },
                    replies: [],
                  };
                  newValue.comments.push(newReply);
                  return newValue;
                });
          }}
        />
      </div>
    );
  };
  return (
    data && (
      <main className="flex min-h-screen flex-col items-center justify-start bg-[#F5F6FA] font-rubik">
        <div className="mb-[4em] mt-[4em] flex w-full flex-col items-center">
          {data.comments.map((comment, iteration) => {
            const isUserComment = data.comments[iteration].user.username === data.currentUser.username;
            return (
              <div className="flex flex-col items-center gap-[1.2em]" key={iteration}>
                <CommentBlock
                  passEditedData={(text) => {
                    setData((value: dataJSON | null) => {
                      const newValue: dataJSON = { ...value } as dataJSON;
                      newValue.comments[iteration].content = text;
                      return newValue;
                    });
                  }}
                  onButtonDeleteClick={() => {
                    setData((value: dataJSON | null) => {
                      const newValue: dataJSON = { ...value } as dataJSON;
                      newValue.comments.splice(iteration, 1);
                      return newValue;
                    });
                  }}
                  onButtonReplyClick={() => {
                    if (data.comments[iteration].replies.length === 0) currentReplyIsFirstOne.current = true;
                    else currentReplyIsFirstOne.current = false;
                    setData((value): dataJSON => {
                      const newValue = { ...value };
                      const reply = {
                        id: data.comments[iteration].replies.length + 1,
                        content: addCommentBlockText,
                        createdAt: 'now',
                        score: 0,
                        voted: [],
                        replyingTo: data.comments[iteration].user.username,
                        user: {
                          image: {
                            png: data.currentUser.image.png,
                            webp: data.currentUser.image.webp,
                          },
                          username: data.currentUser.username,
                        },
                      };
                      ((newValue as dataJSON).comments[iteration].replies as replies[]).push(reply);
                      currentReplyRef.current = [iteration, data.comments[iteration].replies.length];
                      return newValue as dataJSON;
                    });
                  }}
                  content={comment.content}
                  createdAt={comment.createdAt}
                  score={comment.score}
                  username={comment.user.username}
                  webp={comment.user.image.webp.replace('images/', '')}
                  plusFunction={() => {
                    if (!isUserComment && !data.comments[iteration].voted.includes(data.currentUser.username))
                      setData((value: dataJSON | null) => {
                        const newValue: dataJSON = { ...value } as dataJSON;
                        newValue.comments[iteration].voted.push(data.currentUser.username);
                        newValue.comments[iteration].score++;
                        return newValue;
                      });
                  }}
                  minusFunction={() => {
                    if (!isUserComment && !data.comments[iteration].voted.includes(data.currentUser.username))
                      setData((value: dataJSON | null) => {
                        const newValue: dataJSON = { ...value } as dataJSON;
                        newValue.comments[iteration].voted.push(data.currentUser.username);
                        newValue.comments[iteration].score--;
                        return newValue;
                      });
                  }}
                />
                <div className="flex w-full justify-end gap-[2.7em]">
                  {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                  {comment.replies.length > 0 && !currentReplyIsFirstOne.current && (
                    <div className="mb-[1.8em] w-0.5 bg-lightGray"></div>
                  )}
                  {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                  {comment.replies.length > 0 && (
                    <div className="mb-5 flex flex-col gap-6">
                      {comment.replies.map((reply, iteration2) => {
                        const isUserReply =
                          data.comments[iteration].replies[iteration2].user.username === data.currentUser.username;
                        return (
                          <CommentBlock
                            passEditedData={(text) => {
                              setData((value: dataJSON | null) => {
                                const newValue: dataJSON = { ...value } as dataJSON;
                                newValue.comments[iteration].replies[iteration2].content = text;
                                return newValue;
                              });
                            }}
                            onButtonReplyClick={() => {
                              setData((value): dataJSON => {
                                const newValue = { ...value };
                                const reply = {
                                  id: data.comments[iteration].replies.length + 1,
                                  content: addCommentBlockText,
                                  createdAt: 'now',
                                  score: 0,
                                  voted: [],
                                  replyingTo: data.comments[iteration].replies[iteration2].user.username,
                                  user: {
                                    image: {
                                      png: data.currentUser.image.png,
                                      webp: data.currentUser.image.webp,
                                    },
                                    username: data.currentUser.username,
                                  },
                                };
                                ((newValue as dataJSON).comments[iteration].replies as replies[]).push(reply);

                                return newValue as dataJSON;
                              });
                            }}
                            onButtonDeleteClick={() => {
                              setData((value: dataJSON | null) => {
                                const newValue: dataJSON = { ...value } as dataJSON;
                                newValue.comments[iteration].replies.splice(iteration2, 1);
                                return newValue;
                              });
                            }}
                            key={iteration2}
                            content={reply.content}
                            createdAt={reply.createdAt}
                            score={reply.score}
                            replyingTo={'@'.concat(reply.replyingTo)}
                            username={reply.user.username}
                            webp={reply.user.image.webp.replace('images/', '')}
                            plusFunction={() => {
                              if (
                                !isUserReply &&
                                !data.comments[iteration].replies[iteration2].voted.includes(data.currentUser.username)
                              )
                                setData((value: dataJSON | null) => {
                                  const newValue: dataJSON = { ...value } as dataJSON;
                                  newValue.comments[iteration].replies[iteration2].voted.push(
                                    data.currentUser.username,
                                  );
                                  newValue.comments[iteration].replies[iteration2].score++;
                                  return newValue;
                                });
                            }}
                            minusFunction={() => {
                              if (
                                !isUserReply &&
                                !data.comments[iteration].replies[iteration2].voted.includes(data.currentUser.username)
                              )
                                setData((value: dataJSON | null) => {
                                  const newValue: dataJSON = { ...value } as dataJSON;
                                  newValue.comments[iteration].replies[iteration2].voted.push(
                                    data.currentUser.username,
                                  );
                                  newValue.comments[iteration].replies[iteration2].score--;
                                  return newValue;
                                });
                            }}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <AddCommentBlock />
        </div>
      </main>
    )
  );
}
