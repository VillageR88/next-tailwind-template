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
  rejected,
}

enum ErrorStatus {
  none,
  emptyUrl,
  duplicateUrl,
  invalidUrl,
}
const errorStatusMessages = {
  [ErrorStatus.none]: '',
  [ErrorStatus.emptyUrl]: 'Please add a link',
  [ErrorStatus.duplicateUrl]: 'Link already shortened',
  [ErrorStatus.invalidUrl]: 'Please add a valid link',
};

const Api = () => {
  const [valueToShorten, setValueToShorten] = useState<string>('');
  const [sendRequest, setSendRequest] = useState<boolean>(false);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.idle);
  const [addressListIndex, setAddressListIndex] = useState<number | null>(null);
  const [addressList, setAddressList] = useState<[string, string][]>([]);
  const [addressListHoverIndex, setAddressListHoverIndex] = useState<number | null>(null);
  const [errorStatus, setErrorStatus] = useState<ErrorStatus>(ErrorStatus.none);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  useEffect(() => {
    {
      /*
    const mockupData = [
      ['https://www.frontendmentor.io', 'https://ulvis.net/lV5g'],
      ['https://www.frontendmentor.io', 'https://ulvis.net/YjmC'],
      ['https://www.linkedin.com/company/frontend-mentor', 'https://ulvis.net/vftR'],
    ] as [string, string][];
  */
    }
    const data = localStorage.getItem('shortenedLinks');
    if (data && data.length > 2) setAddressList(JSON.parse(data) as [string, string][]);
    //else setAddressList(mockupData);
  }, []);

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
            setErrorStatus(ErrorStatus.none);
            setAddressList((value) => {
              const newValue = [...value];
              newValue.push([data.data.full, data.data.url]);
              localStorage.setItem('shortenedLinks', JSON.stringify(newValue));
              setFetchStatus(FetchStatus.idle);
              return newValue;
            });
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
      if (valueToShorten === '') setErrorStatus(ErrorStatus.emptyUrl);
      else if (addressList.some((item) => item[0] === valueToShorten)) setErrorStatus(ErrorStatus.duplicateUrl);
      else {
        void fetchData();
        setFetchStatus(FetchStatus.pending);
      }
      setSendRequest(false);
    }
  }, [addressList, sendRequest, valueToShorten]);

  return (
    <div className="flex h-full w-full flex-col items-center pb-[2em] md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <form
        className="mt-[-5.25em] flex h-[10.5em] w-full items-center justify-center rounded-[0.6em] bg-[hsl(257,27%,26%)] bg-[url('../public/images/bg-shorten-desktop.svg')] bg-center"
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
            className={`${
              errorStatus && 'outline-3 text-[#cc6b7b] placeholder-[#EAB6BA] outline outline-[#cc6b7b]'
            } w-full rounded-[0.5em] pl-[1.6em] pr-[1.6em] pt-[0.16em] text-[1.25rem] disabled:bg-slate-400`}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                setSendRequest(true);
              }
            }}
          />
          <button
            disabled={fetchStatus === FetchStatus.pending}
            onClick={(e) => {
              e.preventDefault();
              setSendRequest(true);
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
        {addressList.map((item, index) => (
          <div
            onMouseEnter={() => {
              setAddressListHoverIndex(index);
            }}
            onMouseLeave={() => {
              setAddressListHoverIndex(null);
            }}
            key={index}
            className="flex min-h-[4.5em] w-full items-center justify-between gap-[4em] break-all rounded-[0.3em] bg-white pl-[0.75em] pr-[1.5em]"
          >
            <div className="flex gap-[0.6em]">
              <button
                onClick={() => {
                  setAddressList((value) => {
                    const newValue = [...value];
                    newValue.splice(index, 1);
                    localStorage.setItem('shortenedLinks', JSON.stringify(newValue));
                    return newValue;
                  });
                }}
                className={`${
                  !isMobile && addressListHoverIndex !== index ? 'invisible' : 'visible'
                } text-[700] text-gray-700`}
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
