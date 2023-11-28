'use client';
import '@fontsource/commissioner';
import '@fontsource/commissioner/400.css';
import '@fontsource/commissioner/500.css';
import '@fontsource/commissioner/700.css';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Image from 'next/image';
import logo from './images/logo.svg';
import bookmark from './images/icon-bookmark.svg';
import bookmarkClicked from './images/icon-bookmarked.svg';
import closeModal from './images/icon-close-modal.svg';
import closeModalBlack from './images/icon-close-modalBlack.svg';
import mastercraft from './images/logo-mastercraft.svg';

enum BookmarkStates {
  none,
  initialBookmark,
  pledgeWithNoReward,
  bambooStand,
  blackEditionStand,
  mahoganySpecialEdition,
}

const SingleBar = ({ value, target }: { value: number; target: number }) => {
  const progress = () => {
    return {
      width: `${(value / target) * 100}%`,
    };
  };
  return (
    <div className="h-full w-full px-[3em]">
      <div className="h-[0.8em] w-full rounded-full bg-[#F4F4F4]">
        <div className={`h-full rounded-full bg-moderateCyan duration-500 ease-in-out`} style={progress()}></div>
      </div>
    </div>
  );
};

const Loader = () => {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="#3CB4AC"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
};

const Pledge = ({
  header,
  main,
  value,
  pledge,
  action,
}: {
  header: string;
  main: string;
  value: number | undefined;
  pledge: number;
  action(): undefined;
}) => {
  return (
    <div
      className={`${
        value === 0 && 'opacity-[0.45]'
      } h-[15.35em] w-full rounded-[0.5em] outline outline-1 outline-slate-300`}
    >
      <div className="flex h-full flex-col justify-between px-[2em] pb-[2em]  pt-[2em]">
        <div className="flex justify-between">
          <span className="text-[1.14rem] font-[700]">{header}</span>
          <span className="mt-[0.3em] text-[0.95em] font-[500] text-moderateCyan">Pledge ${pledge} or more</span>
        </div>
        <span className="leading-[1.85em] text-darkGray">{main}</span>
        <div className="flex justify-between">
          <div className="flex items-center gap-[0.6em] text-[0.95rem] font-[400]">
            {value !== undefined ? <span className="text-[2rem] font-[700]">{value}</span> : <Loader />}
            <span className="text-darkGray">left</span>
          </div>
          {value !== undefined ? (
            <button
              onClick={() => {
                if (value !== 0) {
                  action();
                  topFunction(165);
                }
              }}
              className={`${
                value > 0 ? 'bg-moderateCyan hover:bg-darkCyan' : 'bg-darkGray'
              } w-[11.5em] rounded-[2em] py-[0.9em] text-[0.85em] font-[500] tracking-[0.035em] text-white`}
            >
              {value > 0 ? 'Select Reward' : 'Out of stock'}
            </button>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

const PledgeModal = ({
  header,
  main,
  pledge,
  amount,
  action,
  clicked,
}: {
  header: string;
  main: string;
  pledge?: number;
  amount?: number;
  action(): undefined;
  clicked: boolean;
}) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className={`${amount === 0 && 'opacity-50'} flex h-[9.82em] justify-start gap-[1.4em] rounded-[0.5em] ${
        clicked ? 'border-2 border-moderateCyan' : ' border border-y-2 border-[#ECECEC] border-x-gray-300'
      } pb-[1.9em] pl-[1.65em] pr-[1.63em] pt-[1.7em] tracking-[-0.004em]`}
    >
      <button
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={() => {
          amount !== 0 && action();
        }}
        className={`${
          amount !== 0 && hover ? 'border-moderateCyan' : 'border-[#ECECEC]'
        } mt-[0.2em] flex h-fit w-fit items-center justify-center rounded-full border-[0.13em] px-[0.62em] py-[0.62em]`}
      >
        {clicked && <div className="absolute h-3 w-3 rounded-full bg-moderateCyan"></div>}
      </button>
      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-[1.1em]">
            <button
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              onClick={() => {
                amount !== 0 && action();
              }}
              className={`${amount !== 0 && hover && 'text-moderateCyan'} font-[700]`}
            >
              {header}
            </button>
            {pledge && (
              <span className={`${clicked ? 'font-[700]' : 'font-[500]'} text-moderateCyan`}>
                Pledge ${pledge} or more
              </span>
            )}
          </div>
          {amount !== undefined && (
            <div className="flex items-center gap-[0.5em]">
              <span className="text-[1.15rem] font-[700]">{amount}</span>
              <span className="text-[0.95rem] text-darkGray">left</span>
            </div>
          )}
        </div>
        <span className="whitespace-pre-line text-[0.95rem] leading-[1.8em] text-darkGray">{main}</span>
      </div>
    </div>
  );
};

function topFunction(value: number) {
  // For modern browsers (Chrome, Firefox, Safari, Edge)
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: value,
      behavior: 'smooth',
    });
  } else {
    // For older browsers that don't support smooth scrolling
    document.body.scrollTop = value;
    document.documentElement.scrollTop = value;
  }
}

export default function Home() {
  interface DataJSON {
    backed: number;
    backers: number;
    daysLeft: number;
    bamboo: number;
    blackEdition: number;
    mahogany: number;
  }
  const [modal, setModal] = useState<BookmarkStates>(BookmarkStates.none);
  const [hoverModalExitButton, setHoverModalExitButton] = useState<boolean>(false);
  console.log(modal);
  const [backed, setBacked] = useState<number>();
  const [backers, setBackers] = useState<number>();
  const [daysLeft, setDaysLeft] = useState<number>();
  const [bamboo, setBamboo] = useState<number>();
  const [blackEdition, setBlackEdition] = useState<number>();
  const [mahogany, setMahogany] = useState<number>();
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const formattedNumber = (value: number) =>
    value.toLocaleString('en-US', {
      style: 'decimal',
      maximumFractionDigits: 0,
    });
  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((fetchedData: DataJSON) => {
        setBacked(fetchedData.backed);
        setBackers(fetchedData.backers);
        setDaysLeft(fetchedData.daysLeft);
        setBamboo(fetchedData.bamboo);
        setBlackEdition(fetchedData.blackEdition);
        setMahogany(fetchedData.mahogany);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start pb-[8em] font-commissioner">
      <mask
        className={`${
          modal === BookmarkStates.none ? 'hidden' : 'flex'
        } fixed z-20 h-full w-full bg-black opacity-[50%]`}
      ></mask>
      <div
        className={`${
          modal === BookmarkStates.none ? 'hidden' : 'flex'
        } absolute z-30 mt-[11.5em] flex h-fit w-[45.6em] flex-col rounded-[0.5em] bg-white px-[3em] pb-[3em] pt-[2.9em]`}
      >
        <button
          onMouseEnter={() => {
            setHoverModalExitButton(true);
          }}
          onMouseLeave={() => {
            setHoverModalExitButton(false);
          }}
          onClick={() => {
            setModal(BookmarkStates.none);
          }}
          className="absolute right-[1.9em] top-8"
        >
          <Image src={(hoverModalExitButton ? closeModalBlack : closeModal) as string} alt="close button" />
        </button>
        <span className="text-[1.5rem] font-[700]">Back this project</span>
        <span className="mb-[2.1em] mt-[1em] text-darkGray">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </span>
        <div className="flex flex-col gap-[1.5em]">
          <PledgeModal
            header="Pledge with no reward"
            main="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up
          to receive product updates via email."
            action={() => {
              setModal(BookmarkStates.pledgeWithNoReward);
            }}
            clicked={modal === BookmarkStates.pledgeWithNoReward ? true : false}
          />
          <PledgeModal
            header="Bamboo Stand"
            main="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
            you’ll be added to a special Backer member list."
            pledge={25}
            amount={bamboo}
            action={() => {
              setModal(BookmarkStates.bambooStand);
            }}
            clicked={modal === BookmarkStates.bambooStand ? true : false}
          />
          <PledgeModal
            header="Black Edition Stand"
            main={
              'You get a Black Special Edition computer stand and a personal thank you.\nYou’ll be added to our Backer member list. Shipping is included.'
            }
            pledge={75}
            amount={blackEdition}
            action={() => {
              setModal(BookmarkStates.blackEditionStand);
            }}
            clicked={modal === BookmarkStates.blackEditionStand ? true : false}
          />
          <PledgeModal
            header="Mahogany Special Edition"
            main="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
            to our Backer member list. Shipping is included."
            pledge={200}
            amount={mahogany}
            action={() => {
              setModal(BookmarkStates.mahoganySpecialEdition);
            }}
            clicked={modal === BookmarkStates.mahoganySpecialEdition ? true : false}
          />
        </div>
      </div>

      <nav className="h-full w-full">
        <div className="h-[25em] w-full bg-[url('./images/image-hero-desktop.jpg')]">
          <div className="flex h-[8.05em] items-end justify-between bg-gradient-to-b from-customDark from-5% to-transparent to-100% pb-[3.8em] pl-[10.4em] pr-[10.3em]">
            <Image className="h-fit" src={logo as string} alt="logo image" />
            <div className="flex gap-[2.44em] text-[0.83rem] text-gray-50">
              <button className="decoration-darkGray decoration-1 hover:underline">About</button>
              <button className="decoration-darkGray decoration-1 hover:underline">Discover</button>
              <button className="decoration-darkGray decoration-1 hover:underline">Get Started</button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="flex flex-col gap-[1.6em]">
          {/*first block*/}
          <div className="border-1 mt-[-5.67em] flex h-[16.7em] w-[45.5em] flex-col items-center rounded-[0.5em] bg-white outline outline-1 outline-gray-100">
            <div className="z-10 mt-[-1.8em] h-0 pb-[1.8em]">
              <Image src={mastercraft as string} alt="mastercraft logo" />
            </div>
            <span className="mt-[1.88em] text-[1.72rem] font-[700] tracking-[0.010em]">
              Mastercraft Bamboo Monitor Riser
            </span>
            <span className="mt-[0.6em] font-[400] text-darkGray">
              A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </span>
            <div className="mt-[2.38em] flex w-full justify-between pl-[3em] pr-[3em]">
              <button
                onClick={() => {
                  setModal(BookmarkStates.initialBookmark);
                  topFunction(165);
                }}
                className="rounded-[1.8em] bg-moderateCyan px-[2.5em] py-[1em] text-[1rem] font-[500] text-white hover:bg-darkCyan"
              >
                Back this project
              </button>
              <button
                onClick={() => {
                  setBookmarked(!bookmarked);
                }}
                className="hover:opacity-80"
              >
                <div className="flex items-center gap-[1em] rounded-[3em] bg-[#F4F4F4] pr-[1.5em]">
                  <Image src={(!bookmarked ? bookmark : bookmarkClicked) as string} alt="bookmark image" />
                  <span
                    className={`font-[700] duration-300 ease-in-out ${
                      !bookmarked ? 'w-[5em] text-darkGray' : 'w-[5.8em] text-darkCyan'
                    }`}
                  >
                    {!bookmarked ? 'Bookmark' : 'Bookmarked'}
                  </span>
                </div>
              </button>
            </div>
          </div>
          {/*second block*/}
          <div className="border-1 flex h-[13.15em] w-full rounded-[0.5em] bg-white outline outline-1 outline-gray-100">
            <div className="flex w-full flex-col justify-center gap-[2em]">
              <div className="flex h-fit w-full items-center justify-start">
                <div className="flex min-w-[14em] flex-col content-center pl-[3em]">
                  {backed ? <span className="text-[2rem] font-[700]">${formattedNumber(backed)}</span> : <Loader />}
                  <span className="text-darkGray">of $100,000 backed</span>
                </div>
                <div className="flex items-center">
                  <span className="h-[4em] w-[1px] bg-slate-300"></span>
                  <div className="flex min-w-[14em] flex-col content-center pl-[3em]">
                    {backers ? <span className="text-[2rem] font-[700]">{formattedNumber(backers)}</span> : <Loader />}
                    <span className="text-darkGray">total backers</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="h-[4em] w-[1px] bg-slate-300"></span>
                  <div className="flex min-w-[14em] flex-col content-center pl-[3em]">
                    {daysLeft ? <span className="text-[2rem] font-[700]">{daysLeft}</span> : <Loader />}
                    <span className="text-darkGray">days left</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <SingleBar value={backed ?? 0} target={100000} />
              </div>
            </div>
          </div>
          <div className="border-1 h-full w-[45.5em] rounded-[0.5em] bg-white px-[3em] pb-[3em] pt-[2.8em] outline outline-1 outline-gray-100">
            <div className="flex flex-col gap-[1.98em]">
              <span className="text-[1.25rem] font-[700]">About this project</span>
              <span className="leading-[1.85em] text-darkGray">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a
                more comfortable viewing height. Placing your monitor at eye level has the potential to improve your
                posture and make you more comfortable while at work, helping you stay focused on the task at hand.
              </span>
              <span className="leading-[1.85em] text-darkGray">
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                to allow notepads, pens, and USB sticks to be stored under the stand.
              </span>
              <div className="mt-[0.75em] flex flex-col gap-[1.6em]">
                <Pledge
                  header="Bamboo Stand"
                  main="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list."
                  value={bamboo}
                  pledge={25}
                  action={() => {
                    setModal(BookmarkStates.bambooStand);
                  }}
                />
                <Pledge
                  header="Black Edition Stand"
                  main="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                  member list. Shipping is included."
                  value={blackEdition}
                  pledge={75}
                  action={() => {
                    setModal(BookmarkStates.blackEditionStand);
                  }}
                />
                <Pledge
                  header="Mahogany Special Edition"
                  main="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                  to our Backer member list. Shipping is included."
                  value={mahogany}
                  pledge={200}
                  action={() => {
                    setModal(BookmarkStates.mahoganySpecialEdition);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
