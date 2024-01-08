'use client';
import Image from 'next/image';
import iconReply from './images/icon-reply.svg';
import iconEdit from './images/icon-edit.svg';
import iconDelete from './images/icon-delete.svg';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<JSON | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        const jsonData = (await response.json()) as JSON;
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    void fetchData();
  }, []);
  interface dataJSON {
    currentUser: { image: { png: string; webp: string }; username: string };
    comments: [
      {
        id: number;
        content: string;
        createdAt: string;
        score: number;
        user: {
          image: {
            png: string;
            webp: string;
          };
          username: string;
        };
        replies: [
          {
            id: number;
            content: string;
            createdAt: string;
            score: number;
            replyingTo: string;
            user: {
              image: {
                png: string;
                webp: string;
              };
              username: string;
            };
          },
        ];
      },
    ];
  }
  //q:fix this dataJSON bellow
  data && console.log((data as unknown as dataJSON).comments);

  const Block = ({
    content,
    createdAt,
    score,
    replyingTo,
    username,
    webp,
  }: {
    content: string;
    createdAt: string;
    score: number;
    replyingTo?: string;
    username: string;
    webp: string;
  }) => {
    const isUser = username === (data as unknown as dataJSON).currentUser.username;
    return (
      <div
        //q: how to break 'library/framework' in textarea //a: use &#8203; (zero-width space)
        className={`flex h-[10.45em] ${
          replyingTo ? 'w-[40.1em]' : 'w-[45.625em]'
        } gap-[1.5em] rounded-[0.5em] bg-white py-[1.5em] pl-[1.5em] pr-[1.55em]`}
      >
        <div className="flex h-[6.25em] w-[2.8em] flex-col items-center justify-between rounded-[0.65em] bg-[#F5F6FA] pb-[0.3em] pt-[0.2em]">
          <button>
            <span className="p-2 text-[1.1rem] font-[600] text-[#CFCDE2]">+</span>
          </button>
          <span className="text-[1.05rem] font-[500] text-moderateBlue">{score}</span>
          <button>
            <span className="p-2 text-[1.1rem] font-[600] text-[#CFCDE2]">—</span>
          </button>
        </div>
        <div className="flex w-full flex-col gap-[0.9em]">
          <div>
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
                <div className="flex gap-6">
                  <button className="flex items-center gap-[0.45em]">
                    <Image className="h-fit w-fit" src={iconDelete as string} alt="reply" />
                    <span className="font-[500] text-softRed">Delete</span>
                  </button>
                  <button className="flex items-center gap-[0.45em]">
                    <Image className="h-fit w-fit" src={iconEdit as string} alt="reply" />
                    <span className="font-[500] text-moderateBlue">Edit</span>
                  </button>
                </div>
              ) : (
                <button className="flex items-center gap-[0.45em]">
                  <Image className="h-fit w-fit" src={iconReply as string} alt="reply" />
                  <span className="font-[500] text-moderateBlue">Reply</span>
                </button>
              )}
            </div>
          </div>
          <div className="flex tracking-[0.001em] text-grayishBlue">
            <div className="space-x-1">
              {replyingTo && <span className="font-[500] text-moderateBlue">{replyingTo}</span>}
              <span>{content}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    data && (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F6FA] font-rubik">
        <div className="mb-[4em] mt-[4em] flex w-full flex-col items-center">
          {(data as unknown as dataJSON).comments.map((comment, iteration) => (
            <div className="flex flex-col items-center gap-5" key={iteration}>
              <Block
                content={comment.content}
                createdAt={comment.createdAt}
                score={comment.score}
                username={comment.user.username}
                webp={comment.user.image.webp.replace('images/', '')}
              />
              <div className="flex w-full justify-end gap-[2.7em]">
                {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                {comment.replies.length > 0 && <div className="mb-[0.7em] w-0.5 bg-lightGray"></div>}
                <div className="flex flex-col gap-6">
                  {comment.replies.map((reply, iteration2) => (
                    <Block
                      key={iteration2}
                      content={reply.content}
                      createdAt={reply.createdAt}
                      score={reply.score}
                      replyingTo={'@'.concat(reply.replyingTo)}
                      username={reply.user.username}
                      webp={reply.user.image.webp.replace('images/', '')}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="mt-5 flex h-[9em] w-[45.625em] items-start gap-[1.1em] rounded-[0.5em] bg-white py-[1.6em] pl-[1.5em] pr-[1.4em]">
            <Image
              className="mt-[0.18em]"
              src={(data as unknown as dataJSON).currentUser.image.webp.replace('images/', '')}
              height={40}
              width={40}
              alt="avatar"
            />
            <textarea
              placeholder="Add a comment…"
              className="h-[5.8em] w-[31.5em] resize-none rounded-[0.5em] px-6 py-3 placeholder-grayishBlue outline outline-1 outline-lightGray focus:outline-moderateBlue"
            ></textarea>
            <button className="flex items-center justify-center rounded-[0.5em] bg-moderateBlue px-[1.92em] py-[0.75em] font-[500] text-white">
              SEND
            </button>
          </div>
        </div>
      </main>
    )
  );
}
