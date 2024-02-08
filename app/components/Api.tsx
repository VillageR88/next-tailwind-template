'use client';

import { useState, useEffect } from 'react';

interface dataJson {
  success: boolean;
  data: {
    id: string;
    url: string;
    full: string;
  };
}

enum FetchStatus {
  idle,
  pending,
  resolved,
  rejected,
}

const Api = () => {
  const [valueToShorten, setValueToShorten] = useState<string>('');
  const [sendRequest, setSendRequest] = useState<boolean>(false);
  const [newLink, setNewLink] = useState<[string, string] | null>(null);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.idle);
  console.log(newLink);

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
        .then((data: dataJson) => {
          if (data.success) {
            setNewLink([data.data.full, data.data.url]);
            setFetchStatus(FetchStatus.resolved);
          } else {
            setFetchStatus(FetchStatus.rejected);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    if (sendRequest) {
      void fetchData();
      setSendRequest(false);
      setFetchStatus(FetchStatus.pending);
    }
  }, [sendRequest, valueToShorten]);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <form
        className="mt-[-5.25em] flex h-[10.5em] w-[77%] items-center justify-center rounded-[0.6em] bg-[hsl(257,27%,26%)] bg-[url('../public/images/bg-shorten-desktop.svg')] bg-center"
        aria-label="Shorten Link Form"
      >
        <div className="flex h-[4em] w-[88.5%] gap-[1.5em]">
          <input
            disabled={fetchStatus === FetchStatus.pending}
            value={valueToShorten}
            onChange={(e) => {
              setValueToShorten(e.target.value);
            }}
            placeholder="Shorten a link here..."
            type="url"
            className="w-full rounded-[0.5em] pl-[1.6em] pr-[1.6em] pt-[0.16em] text-[1.25rem] disabled:bg-slate-400"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSendRequest(true);
                e.preventDefault();
              }
            }}
          />
          <button
            disabled={fetchStatus === FetchStatus.pending}
            onClick={(e) => {
              setSendRequest(true);
              e.preventDefault();
            }}
            className="w-[12.6em] rounded-[0.5em] bg-[hsl(180,66%,49%)] pb-[0.67em] pt-[0.77em] text-[1.2rem] font-[700] text-[white] transition hover:bg-[#9BE3E2] disabled:hover:bg-[hsl(180,66%,49%)]"
          >
            {fetchStatus === FetchStatus.pending ? 'Processing...' : 'Shorten It!'}
          </button>
        </div>
      </form>
      <div className="flex h-full w-full flex-col items-center gap-[1em]"></div>
    </div>
  );
};

export default Api;
