'use client';

import { useState, useEffect } from 'react';
const Form = () => {
  const [valueToShorten, setValueToShorten] = useState<string>('');
  const [sendRequest, setSendRequest] = useState<boolean>(false);

  interface dataJson {
    success: boolean;
    data?: {
      id: string;
      url: string;
      full: string;
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `url=${encodeURIComponent(valueToShorten)}`,
      };
      await fetch('https://ulvis.net/API/write/post', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log((data as dataJson).data?.url);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    if (sendRequest) {
      void fetchData();
      setSendRequest(false);
    }
  }, [sendRequest, valueToShorten]);

  return (
    <form
      className="mt-[-5.25em] flex h-[10.5em] w-[77%] items-center justify-center rounded-[0.6em] bg-[hsl(257,27%,26%)] bg-[url('../public/images/bg-shorten-desktop.svg')] bg-center"
      aria-label="Shorten Link Form"
    >
      <div className="flex h-[4em] w-[88.5%] gap-[1.5em]">
        <input
          value={valueToShorten}
          onChange={(e) => {
            setValueToShorten(e.target.value);
          }}
          placeholder="Shorten a link here..."
          type="url"
          className="w-full rounded-[0.5em] pl-[1.6em] pr-[1.6em] pt-[0.16em] text-[1.25rem]"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSendRequest(true);
              e.preventDefault();
            }
          }}
        />
        <button
          onClick={(e) => {
            setSendRequest(true);
            e.preventDefault();
          }}
          className="w-[12.6em] rounded-[0.5em] bg-[hsl(180,66%,49%)] pb-[0.67em] pt-[0.77em] text-[1.2rem] font-[700] text-[white] transition hover:bg-[#9BE3E2]"
        >
          Shorten It!
        </button>
      </div>
    </form>
  );
};

export default Form;
