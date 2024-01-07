'use client';
import Image from 'next/image';
import iconReply from './images/icon-reply.svg';
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
    return (
      <div
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
                <span className="font-[500] text-darkBlue">{username}</span>
                <span className="text-grayishBlue">{createdAt}</span>
              </div>
              <div className="flex items-center gap-[0.45em]">
                <Image className="h-fit w-fit" src={iconReply as string} alt="reply" />
                <span className="font-[500] text-moderateBlue">Reply</span>
              </div>
            </div>
          </div>
          <div className="flex tracking-[0.001em] text-grayishBlue">
            <span>
              {replyingTo}
              <span>{content}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    data && (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F6FA] font-rubik">
        <div className="mt-[4em] flex h-[100em] w-full flex-col items-center">
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
                {comment.replies.length > 0 && <div className="h-[97%] w-0.5 bg-lightGray"></div>}
                <div className="flex flex-col gap-6">
                  {comment.replies.map((reply, iteration2) => (
                    <Block
                      key={iteration2}
                      content={reply.content}
                      createdAt={reply.createdAt}
                      score={reply.score}
                      replyingTo={reply.replyingTo}
                      username={reply.user.username}
                      webp={reply.user.image.webp.replace('images/', '')}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    )
  );
}
