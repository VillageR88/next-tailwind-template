'use client';
import React, { useState } from 'react';

import '@fontsource/plus-jakarta-sans';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/800.css';
import Image from 'next/image';

interface Message {
  person: string;
  text1: string;
  text2: string;
  text3: string;
  boolean1: boolean;
  timestamp1: string;
  text4: string;
}

function MyComponent() {
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [initialCount, setInitialCount] = useState<number | null>(null);
  const [selectedMessageIndex, setSelectedMessageIndex] = useState<number | null>(null);
  let dummyCount = initialCount ?? null;

  const dataJson = './data.json';

  useState(() => {
    fetch(dataJson)
      .then((response) => response.json())
      .then((jsonData: { messages: Message[] }) => {
        setMessages(jsonData.messages);
        const count = jsonData.messages.filter((message) => message.boolean1).length;
        setInitialCount(count);
        console.log('test');
      })
      .catch((error) => {
        console.error('Error loading JSON: ', error);
      });
  });

  const prepDate = new Date('2023-11-01T10:00:00Z').getTime();
  function timeDiff(parameter: string | number | Date) {
    const days = Math.floor((prepDate - new Date(parameter).getTime()) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((prepDate - new Date(parameter).getTime()) / 3600000);
    const minutes = ((prepDate - new Date(parameter).getTime()) % (1000 * 60 * 60)) / (1000 * 60);
    return [
      (days || null)?.toString().concat(days === 1 ? ' day ago' : ' days ago'),
      hours < 24 ? (hours || null)?.toString().concat(' h ago') : null,
      hours < 1 && minutes < 60 ? (minutes || null)?.toString().concat(' m ago') : null,
    ];
  }

  if (messages) {
    return (
      <div className="flex flex-col gap-2 pb-6 pt-8">
        {/*top*/}
        <div className="flex w-[42em] justify-between pb-4">
          <span className="text-[1.5rem] font-bold text-veryDarkBlue">
            Notifications{' '}
            <span className="ml-1.5 rounded-md bg-blue px-[0.7em] py-0.5 align-[3px] text-[1rem] font-semibold text-white">
              {dummyCount}
            </span>
          </span>
          <button className="font-medium text-darkGrayishBlue">Mark all as read</button>
        </div>
        {/*comments section*/}
        {messages.map((message, index) => (
          <div
            onClick={() => {
              console.log('test3');
              setInitialCount(dummyCount ? (dummyCount -= 1) : 0);
              setSelectedMessageIndex(index);
            }}
            key={index}
            className={`${message.boolean1 ? 'cursor-pointer bg-veryLightGrayishBlue' : null}
              ${selectedMessageIndex === index ? (message.boolean1 = false) : null}
            } flex w-[42em] gap-2.5 rounded-xl px-5 py-4`}
          >
            <Image
              className="h-[2.7em] w-auto"
              src={`./images/${message.person}`}
              alt={`Image of ${message.person}`}
              width={45}
              height={10}
            />
            <div className="ml-2 flex flex-col">
              <div className="flex items-center">
                <div className="flex">
                  <span className="font-semibold">
                    {message.text1}
                    <span className="ml-1.5 font-medium text-darkGrayishBlue">
                      {message.text2}
                      <span className="ml-1.5 font-semibold text-darkGrayishBlue">{message.text3}</span>
                    </span>
                  </span>
                </div>
                <div className={`${message.boolean1 ? 'ml-1.5 flex h-1 w-1 rounded-full bg-red p-1' : null}`}></div>
              </div>
              <span className="font-medium text-grayishBlue">{timeDiff(message.timestamp1)}</span>
              <span
                className={`${
                  message.text4 != ''
                    ? 'mt-[0.6em] rounded-md border border-solid px-4 py-3.5 font-medium leading-5 text-darkGrayishBlue'
                    : null
                }`}
              >
                {message.text4}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <p className="static p-2 text-[1.5rem] font-bold text-veryDarkBlue">Loading database...</p>;
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center py-[4em] font-plusJakartaSans">
      {/*wrapper*/}
      <div className="flex flex-col items-center rounded-xl bg-white px-8">
        <div>
          <MyComponent></MyComponent>
        </div>
      </div>
    </main>
  );
}
