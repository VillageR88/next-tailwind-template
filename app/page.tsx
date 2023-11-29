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
import check from './images/icon-check.svg';
import mastercraft from './images/logo-mastercraft.svg';
import hamburger from './images/icon-hamburger.svg';

enum BookmarkStates {
  none,
  initialBookmark,
  pledgeWithNoReward,
  bambooStand,
  blackEditionStand,
  mahoganySpecialEdition,
  completed,
}

const SingleBar = ({ value, target }: { value: number; target: number }) => {
  const result = (value / target) * 100;
  const progress = () => {
    return {
      width: `${result < 100 ? result : 100}%`,
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
  stage,
}: {
  header: string;
  main: string;
  value: number | undefined;
  pledge: number;
  action(): undefined;
  stage: BookmarkStates;
}) => {
  return (
    <div
      className={`${
        value === 0 && 'opacity-[0.45]'
      } h-full w-full rounded-[0.5em] outline outline-1 outline-slate-300 md:h-[15.35em]`}
    >
      <div className="flex h-full flex-col justify-between gap-[1.5em] p-[1.5em] md:gap-0 md:p-0 md:px-[2em] md:pb-[2em] md:pt-[2em]">
        <div className="flex flex-col justify-between md:flex-row">
          <span className="text-[1.14rem] font-[700]">{header}</span>
          <span className="mt-[0.3em] font-[500] text-moderateCyan md:text-[0.95em]">Pledge ${pledge} or more</span>
        </div>
        <span className="leading-[1.85em] text-darkGray">{main}</span>
        <div className="flex flex-col justify-between gap-[1.5em] md:flex-row md:gap-0">
          <div className="flex items-center gap-[0.6em] text-[0.95rem] font-[400]">
            {value !== undefined ? <span className="text-[2rem] font-[700]">{value}</span> : <Loader />}
            <span className="text-darkGray">left</span>
          </div>
          {value !== undefined ? (
            <button
              disabled={stage !== BookmarkStates.none}
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
  completed,
  valueFeedback,
  clicked,
}: {
  header: string;
  main: string;
  pledge?: number;
  amount?: number;
  action(): undefined;
  completed(): undefined;
  valueFeedback(value: number): undefined;
  clicked: boolean;
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const [fieldLength, setFieldLength] = useState<number>(96);
  const [currentValue, setCurrentValue] = useState<number>(pledge ?? 1);
  const updateCurrentValue = (value: number) => {
    setCurrentValue(value);
  };

  return (
    <div
      className={`${amount === 0 && 'opacity-50'} ${
        clicked ? 'border-2 border-moderateCyan' : ' border border-y-2 border-[#ECECEC] border-x-gray-300'
      } rounded-[0.5em] px-[1.5em] py-[2em] md:px-0 md:py-0`}
    >
      <div
        className={`flex h-full justify-start gap-[1.4em] tracking-[-0.004em] md:pb-[1.83em] md:pl-[1.65em] md:pr-[1.63em] md:pt-[1.83em]`}
      >
        {/*button for desktop*/}
        <button
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => {
            amount !== 0 && action();
            valueFeedback(currentValue);
          }}
          className={`${
            amount !== 0 && hover ? 'border-moderateCyan' : 'border-[#ECECEC]'
          } mt-[0.2em] hidden h-fit w-fit items-center justify-center rounded-full border-[0.13em] px-[0.62em] py-[0.62em] md:flex`}
        >
          {clicked && <div className="absolute h-3 w-3 rounded-full bg-moderateCyan"></div>}
        </button>
        <div className="flex h-full w-full flex-col items-start justify-between gap-[0.95em]">
          <div className="flex w-full items-center justify-start gap-[1em] md:justify-between">
            {/*button for mobile*/}
            <button
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              onClick={() => {
                amount !== 0 && action();
                valueFeedback(currentValue);
              }}
              className={`${
                amount !== 0 && hover ? 'border-moderateCyan' : 'border-[#ECECEC]'
              } mt-[0.2em] flex h-fit w-fit items-center justify-center rounded-full border-[0.13em] px-[0.8em] py-[0.8em] md:hidden`}
            >
              {clicked && <div className="absolute h-3.5 w-3.5 rounded-full bg-moderateCyan"></div>}
            </button>
            <div className="flex flex-col items-start gap-[0.3em] md:flex-row md:gap-[1.1em]">
              <button
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                onClick={() => {
                  amount !== 0 && action();
                  valueFeedback(currentValue);
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
            {/*left for desktop*/}
            {amount !== undefined && (
              <div className="hidden items-center gap-[0.5em] md:flex">
                <span className="text-[1.15rem] font-[700]">{amount}</span>
                <span className="text-[0.95rem] text-darkGray">left</span>
              </div>
            )}
          </div>
          <span className="text-[0.95rem] leading-[1.8em] text-darkGray md:whitespace-pre-line">{main}</span>
          {/*left for mobile*/}
          {amount !== undefined && (
            <div className="flex items-center gap-[0.5em] md:hidden pb-[1em]">
              <span className="text-[1.15rem] font-[700]">{amount}</span>
              <span className="text-[0.95rem] text-darkGray">left</span>
            </div>
          )}
        </div>
      </div>
      {clicked && <hr className="h-[2px] w-full justify-center bg-[#ECECEC]"></hr>}
      {clicked && (
        <div className="flex flex-col items-center justify-between gap-[1.5em] px-[1.5em] pt-[1.5em] md:flex-row md:gap-0 md:py-[1.4em] md:pt-[1.5]">
          <span className="text-[0.95rem] text-darkGray">Enter your pledge</span>
          <div className="flex gap-[1.1em]">
            <div className="flex items-center">
              <span className="absolute ml-[1.5em] font-mono font-[700] text-darkGray opacity-60">$</span>
              <input
                style={{ width: fieldLength }}
                defaultValue={pledge ?? 1}
                className="flex rounded-[2em] px-[1.7em] py-[0.8em] text-center text-[0.88rem] font-[700] outline outline-2 outline-[#ECECEC] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                type="number"
                min={pledge ?? 1}
                onChange={(e) => {
                  setFieldLength(80 + e.target.value.length * 8);
                  +e.target.value >= 1000000 && (e.target.value = '1000000');
                  +e.target.value < 0 && (e.target.value = '0');
                  e.target.value = e.target.value.replace(/^0+/, '');
                  e.target.value = e.target.value.replace(/^-+/, '');
                  updateCurrentValue(+e.target.value);
                  valueFeedback(+e.target.value);
                }}
              />
            </div>
            <button
              onClick={() => {
                currentValue >= (pledge ?? 1) && completed();
                topFunction(300);
              }}
              className="rounded-[2em] bg-moderateCyan px-[1.7em] py-[0.9em] text-[0.88rem] font-[500] text-white hover:bg-darkCyan"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function topFunction(value: number) {
  const scrollDuration = 300;
  const scrollStep = (value - window.scrollY) / (scrollDuration / 15);
  const scrollInterval = setInterval(() => {
    if (Math.abs(window.scrollY - value) > Math.abs(scrollStep)) {
      window.scrollBy(0, scrollStep);
    } else {
      window.scrollTo(0, value);
      clearInterval(scrollInterval);
    }
  }, 15);
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
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [modal, setModal] = useState<BookmarkStates>(BookmarkStates.none);
  const [hoverModalExitButton, setHoverModalExitButton] = useState<boolean>(false);
  const [backed, setBacked] = useState<number>();
  const [valueFeedback, setValueFeedback] = useState<number>();
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
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768 && setMobileNav(false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        mobileNav ? 'h-screen overflow-y-hidden' : 'min-h-screen'
      } flex w-full flex-col items-center justify-start pb-[2em] font-commissioner md:pb-[8em]`}
    >
      {modal !== BookmarkStates.none && <div className={'fixed z-20 h-full w-full bg-black opacity-[50%]'}></div>}
      {modal !== BookmarkStates.none && modal !== BookmarkStates.completed && (
        <div
          className={
            'absolute z-30 mt-[11.5em] flex h-fit w-[92%] flex-col rounded-[0.5em] bg-white px-[1.5em] py-[2em] md:w-[45.6em] md:px-[3em] md:py-0 md:pb-[3em] md:pt-[2.9em]'
          }
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
          <div className="flex flex-col gap-[1.34em]">
            <PledgeModal
              header="Pledge with no reward"
              main="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up
          to receive product updates via email."
              action={() => {
                setModal(BookmarkStates.pledgeWithNoReward);
              }}
              clicked={modal === BookmarkStates.pledgeWithNoReward ? true : false}
              completed={() => {
                backers && setBackers(backers + 1);
                setBacked((backed ?? 0) + (valueFeedback ?? 0));
                setModal(BookmarkStates.completed);
              }}
              valueFeedback={(value) => {
                setValueFeedback(value);
              }}
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
              completed={() => {
                backers && setBackers(backers + 1);
                setBacked((backed ?? 0) + (valueFeedback ?? 0));
                bamboo && setBamboo(bamboo - 1);
                setModal(BookmarkStates.completed);
              }}
              valueFeedback={(value) => {
                setValueFeedback(value);
              }}
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
              completed={() => {
                backers && setBackers(backers + 1);
                setBacked((backed ?? 0) + (valueFeedback ?? 0));
                blackEdition && setBlackEdition(blackEdition - 1);
                setModal(BookmarkStates.completed);
              }}
              valueFeedback={(value) => {
                setValueFeedback(value);
              }}
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
              completed={() => {
                backers && setBackers(backers + 1);
                backed && valueFeedback && setBacked(backed + valueFeedback);
                mahogany && setMahogany(mahogany - 1);
                setModal(BookmarkStates.completed);
              }}
              valueFeedback={(value) => {
                setValueFeedback(value);
              }}
            />
          </div>
        </div>
      )}
      {modal === BookmarkStates.completed && (
        <div className="absolute z-30 mt-[28.75em] flex h-fit w-[92%] flex-col items-center rounded-[0.5em] bg-white px-[1.5em] pb-[4em] pt-[3em] text-center md:h-[28.05em] md:w-[33.7em] md:px-[3em] md:pb-0">
          <Image className="h-[5.6em] w-fit" src={check as string} alt="check image" />
          <span className="mt-[1.9em] text-[1.5rem] font-[700]">Thanks for your support!</span>
          <span className="mt-[0.8em] text-[1rem] leading-[1.85em] text-darkGray">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
            email once our campaign is completed.
          </span>
          <button
            onClick={() => {
              setModal(BookmarkStates.none);
            }}
            className="mt-[2.4em] rounded-[2em] bg-moderateCyan px-[2.5em] py-[1em] text-[0.85rem] font-[500] text-white hover:bg-darkCyan"
          >
            Got it!
          </button>
        </div>
      )}
      <nav className="h-full w-full">
        <div className="h-[25em] w-full bg-[url('./images/image-hero-mobile.jpg')] bg-cover md:h-[25em] md:bg-[url('./images/image-hero-desktop.jpg')]">
          <div className="flex h-[8.05em] items-center justify-between bg-gradient-to-b from-customDark from-5% to-transparent to-100% px-[1.5em] pb-[3.8em] pt-[1em] md:items-end md:px-[6em] md:pt-0 lg:px-0 lg:pl-[10.4em] lg:pr-[10.3em]">
            <Image className="h-fit" src={logo as string} alt="logo image" />
            {/*right nav desktop*/}
            <div className="hidden gap-[2.44em] text-[0.83rem] text-gray-50 md:flex">
              <button
                disabled={modal !== BookmarkStates.none}
                className="decoration-darkGray decoration-1 hover:underline"
              >
                About
              </button>

              <button
                disabled={modal !== BookmarkStates.none}
                className="decoration-darkGray decoration-1 hover:underline"
              >
                Discover
              </button>
              <button
                disabled={modal !== BookmarkStates.none}
                className="decoration-darkGray decoration-1 hover:underline"
              >
                Get Started
              </button>
            </div>
            {/*right nav mobile*/}
            <div className="flex md:hidden">
              <button
                onClick={() => {
                  setMobileNav(!mobileNav);
                }}
              >
                <Image src={hamburger as string} alt="mobile navigation button" />
              </button>
              <div className="absolute right-0 top-[6em] flex h-fit w-full justify-center ">
                {mobileNav && (
                  <div className="flex h-full w-[90%] flex-col items-start justify-around gap-[1em] rounded-[0.5em] bg-white py-[1em] text-[1.1rem] font-[500]">
                    <button className="pl-[1.5em]">About</button>
                    <hr className="h-[1px] w-full bg-black" />
                    <button className="pl-[1.5em]">Discover</button>
                    <hr className="h-[1px] w-full bg-black" />
                    <button className="pl-[1.5em]">Get Started</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="w-full px-[1em] md:w-auto md:px-0">
        <div className="flex flex-col gap-[1.6em]">
          {/*first block*/}
          <div className="border-1 mt-[-5.67em] flex h-full w-full flex-col items-center rounded-[0.5em] bg-white pb-[2.5em] outline outline-1 outline-gray-100 md:h-[16.7em] md:w-[45.5em] md:pb-0">
            <div className="z-10 mt-[-1.8em] h-0 pb-[1.8em]">
              <Image src={mastercraft as string} alt="mastercraft logo" />
            </div>
            <span className="mt-[1.88em] text-center text-[1.72rem] font-[700] tracking-[0.010em]">
              Mastercraft Bamboo Monitor Riser
            </span>
            <span className="mt-[0.6em] text-center font-[400] text-darkGray">
              A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </span>
            <div className="mt-[2.38em] flex w-full justify-around md:justify-between md:pl-[3em] md:pr-[3em]">
              <button
                disabled={modal !== BookmarkStates.none}
                onClick={() => {
                  setModal(BookmarkStates.initialBookmark);
                  topFunction(165);
                }}
                className="rounded-[1.8em] bg-moderateCyan px-[2.5em] py-[1em] text-[1rem] font-[500] text-white hover:bg-darkCyan"
              >
                Back this project
              </button>
              <button
                disabled={modal !== BookmarkStates.none}
                onClick={() => {
                  setBookmarked(!bookmarked);
                }}
                className="hover:opacity-80"
              >
                <div className="flex items-center gap-[1em] rounded-[3em] bg-[#F4F4F4] md:pr-[1.5em]">
                  <Image src={(!bookmarked ? bookmark : bookmarkClicked) as string} alt="bookmark image" />
                  <span
                    className={`hidden font-[700] duration-300 ease-in-out md:block ${
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
          <div className="border-1 flex h-full w-full rounded-[0.5em] bg-white pb-[3em] outline outline-1 outline-gray-100 md:h-[13.15em] md:pb-0">
            <div className="flex w-full flex-col justify-center gap-[2em]">
              <div className="flex h-fit w-full flex-col items-center gap-[2em] md:flex-row md:gap-0">
                <div className="flex w-full flex-col items-center pt-[2em] text-center md:w-[14em] md:items-start md:pl-[3em] md:pt-0">
                  {backed ? <span className="text-[2rem] font-[700]">${formattedNumber(backed)}</span> : <Loader />}
                  <span className="text-darkGray">of $100,000 backed</span>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                  <div className="mb-[2em] h-[1px] w-[5em] bg-slate-300 md:mb-0 md:h-[4em] md:w-[1px]"></div>
                  <div className="flex w-full flex-col content-center text-center md:w-[14em] md:pl-[3em] md:text-left">
                    {backers ? <span className="text-[2rem] font-[700]">{formattedNumber(backers)}</span> : <Loader />}
                    <span className="text-darkGray">total backers</span>
                  </div>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                  <div className="mb-[1em] h-[1px] w-[5em] bg-slate-300 md:mb-0 md:h-[4em] md:w-[1px]"></div>
                  <div className="flex w-full flex-col content-center text-center md:w-[14em] md:pl-[3em] md:text-left">
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
          {/*third block*/}
          <div className="border-1 h-full w-full rounded-[0.5em] bg-white px-[1.5em] pb-[3em] pt-[2.8em] outline outline-1 outline-gray-100 md:w-[45.5em] md:px-[3em]">
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
                  stage={modal}
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
                  stage={modal}
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
                  stage={modal}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
