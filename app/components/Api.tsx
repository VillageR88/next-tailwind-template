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

enum ErrorStatus {
  none,
  emptyUrl,
  invalidUrl,
}
const errorStatusMessages = {
  [ErrorStatus.none]: '',
  [ErrorStatus.emptyUrl]: 'Please add a link',
  [ErrorStatus.invalidUrl]: 'Please add a valid link',
};

const Api = () => {
  const [valueToShorten, setValueToShorten] = useState<string>('');
  const [sendRequest, setSendRequest] = useState<boolean>(false);
  const [newLink, setNewLink] = useState<[string, string] | null>(null);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.idle);
  const [addressListIndex, setAddressListIndex] = useState<number | null>(null);
  const [addressList, setAddressList] = useState<[string, string][] | null>(null);
  const [errorStatus, setErrorStatus] = useState<ErrorStatus>(ErrorStatus.none);

  useEffect(() => {
    if (addressList === null)
      setAddressList([
        ['https://www.fronetmentor.io', 'https://rel.inkk4lKyk/'],
        ['https://www.froneasdfasdfadstmentor.io', 'https://rel.inkk4lKyk/'],
        ['https://www.fronetmentor.io', 'https://re12312312l.inkk4lKyk/'],
      ]);
  }, [addressList]);

  useEffect(() => {
    const fetchData = async () => {
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
            setErrorStatus(ErrorStatus.none);
          } else {
            setFetchStatus(FetchStatus.rejected);
            setErrorStatus(ErrorStatus.invalidUrl);
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
              setErrorStatus(ErrorStatus.none);
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
              e.preventDefault();
              if (valueToShorten === '') setErrorStatus(ErrorStatus.emptyUrl);
              else setSendRequest(true);
            }}
            className="w-[12.6em] rounded-[0.5em] bg-[hsl(180,66%,49%)] pb-[0.67em] pt-[0.77em] text-[1.2rem] font-[700] text-[white] transition hover:bg-[#9BE3E2] disabled:hover:bg-[hsl(180,66%,49%)]"
          >
            {fetchStatus === FetchStatus.pending ? 'Processing...' : 'Shorten It!'}
          </button>
          <span className="absolute ml-[-0.1em] mt-[4.45em] italic text-[#cc6b7b]">
            {errorStatusMessages[errorStatus]}
          </span>
        </div>
      </form>
      <div className="mt-[1.5em] flex h-full w-[77%] flex-col items-center gap-[1em]">
        {addressList?.map((item, index) => (
          <div
            key={index}
            className="flex min-h-[4.5em] w-full items-center justify-between gap-[4em] break-all rounded-[0.3em] bg-white pl-[0.75em] pr-[1.5em]"
          >
            <div className="flex gap-[0.6em]">
              <button
                onClick={() => {
                  setAddressList((value) => {
                    if (value) {
                      const newValue = [...value];
                      newValue.splice(index, 1);
                      return newValue;
                    } else return null;
                  });
                }}
                className="text-[700] text-gray-700"
              >
                ✕
              </button>
              <span className="flex text-clip break-words text-[1.25rem] text-[#34313C]">{item[0]}</span>
            </div>
            <div className="flex items-center gap-[1.3em]">
              <span className="text-[1.25rem] text-[hsl(180,66%,49%)]">{item[1]}</span>
              <button
                onClick={() => {
                  setAddressListIndex(index);
                  void navigator.clipboard.writeText(item[1]);
                }}
                className={`${
                  addressListIndex === index ? 'bg-[#3A3053]' : 'bg-[hsl(180,66%,49%)] hover:bg-[#9BE3E2]'
                } h-[2.8em] min-w-[7.1em] rounded-[0.4em] pt-[0.1em] text-[0.9rem] font-[700] text-[white] transition`}
              >
                {addressListIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
