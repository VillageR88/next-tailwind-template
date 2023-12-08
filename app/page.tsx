'use client';
import '@fontsource/inter';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import Image from 'next/image';
import iconFacebook from './images/icon-facebook.svg';
import iconTwitter from './images/icon-twitter.svg';
import iconInstagram from './images/icon-instagram.svg';
import iconYoutube from './images/icon-youtube.svg';
import iconUp from './images/icon-up.svg';
import iconDown from './images/icon-down.svg';
import { useEffect, useState } from 'react';
import { PuffLoader, PulseLoader, BarLoader, ClipLoader } from 'react-spinners';

enum Theme {
  light,
  dark,
}

const palette = {
  [Theme.light]: [
    'bg-white',
    'bg-veryPaleBlue_Top_BG_Pattern',
    'text-black',
    'text-darkGrayishBlue_Text',
    'text-[#8F93AD]',
    'text-darkGrayishBlue_Text',
    'bg-[#F0F3FA]',
    'text-darkGrayishBlue_Text',
    'text-black',
    'bg-toggleLight',
    'bg-[#F2F3F8]',
    'hover:bg-[#E1E3F0]',
  ],
  [Theme.dark]: [
    'bg-[#1D2029]',
    'bg-[#20222F]',
    'text-[#FEFFFF]',
    'text-[#919BBF]',
    'text-[#919BBF]',
    'text-[#FEFFFF]',
    'bg-[#252B43]',
    'text-[#919BBF]',
    'text-white',
    'bg-gradient-to-r from-toggleDarkColor1 to-toggleDarkColor2',
    'bg-[#262A46]',
    'hover:bg-[#333A56]',
  ],
};

enum Social {
  facebook,
  twitter,
  instagram,
  youtube,
}

enum SmallBoxVisibility {
  onlyOnAverageScreen,
  exceptAverageScreen,
}

interface dataJSON {
  facebook: {
    sumFollowers: number;
    dailyFollowersChange: number;
    dailyViews: number;
    dailyViewsChange: number;
    dailyLikes: number;
    dailyLikesChange: number;
  };
  twitter: {
    sumFollowers: number;
    dailyFollowersChange: number;
    dailyViews: number;
    dailyViewsChange: number;
    dailyLikes: number;
    dailyLikesChange: number;
  };
  instagram: {
    sumFollowers: number;
    dailyFollowersChange: number;
    dailyViews: number;
    dailyViewsChange: number;
    dailyLikes: number;
    dailyLikesChange: number;
  };
  youtube: {
    sumFollowers: number;
    dailyFollowersChange: number;
    dailyViews: number;
    dailyViewsChange: number;
    dailyLikes: number;
    dailyLikesChange: number;
  };
}

const fetchData = () => fetch('./data.json').then((response) => response.json());

const numberControl = (value: number): number | string =>
  value > 10000 && value < 99999 ? ('' + value).slice(0, -3).concat('k') : value;

const feed = {
  [Social.facebook]: [iconFacebook, 'facebook', '@nathanf'],
  [Social.twitter]: [iconTwitter, 'twitter', '@nathanf'],
  [Social.instagram]: [iconInstagram, 'instagram', '@realnathanf'],
  [Social.youtube]: [iconYoutube, 'youtube', 'Nathan F.'],
};

const BigBox = ({
  theme,
  top,
  social,
  textSubscribers,
}: {
  theme: Theme;
  top: string;
  social: keyof typeof feed;
  textSubscribers?: boolean;
}) => {
  const [hoverOn, setHoverOn] = useState<boolean>(false);
  const [data, setData] = useState<dataJSON>();
  useEffect(() => {
    const getData = async () => {
      setData((await fetchData()) as dataJSON);
    };

    void getData();
  }, []);

  return (
    <div
      onMouseEnter={() => {
        setHoverOn(true);
      }}
      onMouseLeave={() => {
        setHoverOn(false);
      }}
      className="flex h-[13.5em] w-full flex-col items-center hover:cursor-pointer"
    >
      <div
        style={{
          height: '4.1px',
          width: '100%',
          background: `${top}`,
          clipPath: 'polygon(1% 0, 99% 0, 100% 100%, 0 100%)',
        }}
      ></div>
      <div
        className={`${palette[theme][6]} ${
          hoverOn && palette[theme][11]
        } flex h-full w-full flex-col items-center justify-between rounded-b-[0.3em] pb-[1.3em] pt-[1.8em] transition-colors duration-300`}
      >
        <div className={` flex items-center gap-[0.47em] `}>
          <Image className="h-fit" src={feed[social][0] as string} alt={`${feed[social][1]} logo`} />
          <span className={`${palette[theme][7]} text-[0.75rem] font-[700] transition-colors duration-300`}>
            {feed[social][2]}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span
            className={`${palette[theme][8]} text-[3.5rem] font-[700] leading-[1.12em] tracking-[-0.04em] transition-colors duration-300`}
          >
            {data ? (
              numberControl(data[Social[social] as keyof dataJSON].sumFollowers)
            ) : (
              <PuffLoader className="mb-[0.1em]" size={50} color="#36d7b7" />
            )}
          </span>
          <span className={`${palette[theme][7]} text-[0.75rem] tracking-[0.42em] transition-colors duration-300`}>
            {textSubscribers ? 'SUBSCRIBERS' : 'FOLLOWERS'}
          </span>
        </div>
        <div className="flex items-center gap-[0.23em]">
          {data &&
            (data[Social[social] as keyof dataJSON].dailyFollowersChange > 0 ? (
              <Image className="h-fit" src={iconUp as string} alt="more" />
            ) : (
              data[Social[social] as keyof dataJSON].dailyFollowersChange < 0 && (
                <Image className="h-fit" src={iconDown as string} alt="less" />
              )
            ))}

          {data ? (
            <span
              className={`${
                data[Social[social] as keyof dataJSON].dailyFollowersChange > 0
                  ? 'text-limeGreen'
                  : data[Social[social] as keyof dataJSON].dailyFollowersChange < 0 && 'text-brightRed'
              } text-[0.77rem] font-[700]`}
            >
              {Math.abs(data[Social[social] as keyof dataJSON].dailyFollowersChange) + ' Today'}
            </span>
          ) : (
            <PulseLoader size={5} color="#36d7b7" />
          )}
        </div>
      </div>
    </div>
  );
};

const SmallBox = ({
  theme,
  social,
  isSecond,
  header,
  visibilityRule,
}: {
  theme: Theme;
  social: Social;
  isSecond?: boolean;
  header?: string;
  visibilityRule?: SmallBoxVisibility;
}) => {
  const [hoverOn, setHoverOn] = useState<boolean>(false);
  const [data, setData] = useState<dataJSON>();
  useEffect(() => {
    const getData = async () => {
      setData((await fetchData()) as dataJSON);
    };

    void getData();
  }, []);

  return (
    <div
      onMouseEnter={() => {
        setHoverOn(true);
      }}
      onMouseLeave={() => {
        setHoverOn(false);
      }}
      className={`${
        visibilityRule === SmallBoxVisibility.onlyOnAverageScreen
          ? 'hidden md:flex lg:hidden'
          : visibilityRule === SmallBoxVisibility.exceptAverageScreen
          ? 'flex md:hidden lg:flex'
          : 'flex'
      } h-[7.8em] w-full items-center justify-center rounded-[0.3em] ${palette[theme][6]} ${
        hoverOn && palette[theme][11]
      } cursor-pointer transition-colors duration-300`}
    >
      <div className="mt-[0.66em] flex h-[5.37em] w-full flex-col justify-between pl-[1.5em] pr-[1.92em]">
        <div className="flex items-center justify-between">
          <span className={`${palette[theme][7]} text-[0.88rem] font-[700] transition-colors duration-300`}>
            {isSecond ? 'Likes' : header}
          </span>
          <Image className="mt-[0.1em] h-fit" src={feed[social][0] as string} alt={`${feed[social][1]} logo`} />
        </div>
        <div className="flex justify-between">
          <span className={`${palette[theme][8]} text-[2rem] font-[700] transition-colors duration-300`}>
            {data ? (
              numberControl(
                isSecond
                  ? data[Social[social] as keyof dataJSON].dailyLikes
                  : data[Social[social] as keyof dataJSON].dailyViews,
              )
            ) : (
              <ClipLoader color="rgba(54, 215, 183, 1)" />
            )}
          </span>
          {data ? (
            <div className="mb-[0.4em] flex items-center gap-[0.2em] self-end">
              {data[Social[social] as keyof dataJSON][isSecond ? 'dailyLikesChange' : 'dailyViewsChange'] > 0 ? (
                <Image className="h-fit" src={iconUp as string} alt="more" />
              ) : (
                data[Social[social] as keyof dataJSON][isSecond ? 'dailyLikesChange' : 'dailyViewsChange'] < 0 && (
                  <Image className="h-fit" src={iconDown as string} alt="less" />
                )
              )}
              <span
                className={`${
                  data[Social[social] as keyof dataJSON][isSecond ? 'dailyLikesChange' : 'dailyViewsChange'] > 0
                    ? 'text-limeGreen'
                    : data[Social[social] as keyof dataJSON].dailyLikesChange < 0 && 'text-brightRed'
                } text-[0.77rem] font-[700]`}
              >
                {isSecond
                  ? Math.abs(data[Social[social] as keyof dataJSON].dailyLikesChange)
                  : Math.abs(data[Social[social] as keyof dataJSON].dailyViewsChange)}
                %
              </span>
            </div>
          ) : (
            <ClipLoader color="rgba(54, 215, 183, 1)" />
          )}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [hoverOn, setHoverOn] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(Theme.light);
  const [data, setData] = useState<dataJSON>();
  useEffect(() => {
    const getData = async () => {
      setData((await fetchData()) as dataJSON);
    };

    void getData();
  }, []);

  useEffect(() => {
    theme === Theme.dark && localStorage.setItem('preferredTheme', 'dark');
    theme === Theme.light && localStorage.setItem('preferredTheme', 'light');
  }, [theme]);
  useEffect(() => {
    localStorage.getItem('preferredTheme') === Theme.dark.toString() && setTheme(Theme.dark);
    localStorage.getItem('preferredTheme') === Theme.light.toString() && setTheme(Theme.light);
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center font-inter">
      <div className={`${palette[theme][0]} h-full w-full pb-[4.68em] transition-colors duration-300`}>
        <nav
          className={`${palette[theme][1]} h-[15.3em] w-full rounded-b-[1.3em] px-6 transition-colors duration-300 md:px-0`}
        >
          <div className="flex flex-col items-center justify-between pt-[2.3em] md:flex-row md:px-[3em] lg:px-[5em] xl:px-[10.1em]">
            <div className="flex w-full flex-col justify-start md:w-fit">
              <span
                className={`${palette[theme][2]} text-[1.75rem] font-[700] leading-[1.25em] transition-colors duration-300`}
              >
                Social Media Dashboard
              </span>
              <span className={`${palette[theme][3]} text-[0.9rem] font-[700] transition-colors duration-300`}>
                {data ? (
                  'Total Followers: ' +
                  (
                    data.facebook.sumFollowers +
                    data.instagram.sumFollowers +
                    data.twitter.sumFollowers +
                    data.youtube.sumFollowers
                  ).toLocaleString('en-US')
                ) : (
                  <BarLoader className="mt-[0.7em]" height={4} color="#36d7b7" />
                )}
              </span>
            </div>
            <div className="my-4 flex h-[1px] w-full bg-darkGrayishBlue_Text md:hidden"></div>
            <div className="flex w-full flex-row justify-between gap-[0.88em] pb-[0.5em] pr-[0.2em] md:w-fit">
              <span
                className={`${palette[theme][4]} ${
                  theme === Theme.dark && hoverOn && 'text-[#FEFFFF] duration-300'
                } pt-[0.2em] text-[0.87rem] font-[700]`}
              >
                Dark Mode
              </span>
              <button
                onMouseEnter={() => {
                  setHoverOn(true);
                }}
                onMouseLeave={() => {
                  setHoverOn(false);
                }}
                onClick={() => {
                  theme === Theme.light ? setTheme(Theme.dark) : setTheme(Theme.light);
                }}
                className={`${palette[theme][9]} from-toggleDarkColor1 to-toggleDarkColor2 flex w-[3em] items-center justify-end rounded-[2em] px-[0.2em] py-[0.75em] transition-colors duration-300 hover:bg-gradient-to-r`}
              >
                <div
                  className={`${theme === Theme.dark && '-translate-x-6'} ${
                    palette[theme][10]
                  } absolute h-[1.12em] w-[1.12em] rounded-full duration-300 ${
                    theme === Theme.dark && hoverOn && 'bg-[#353853]'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </nav>
        <main className="h-fit w-full px-6 md:px-0">
          <div className="mt-[-3em] flex h-full w-full flex-col md:mt-[-6.8em] md:px-[3em] lg:px-[5em] xl:px-[10.3em]">
            <div className="grid w-full gap-[1.9em] md:grid-cols-2 lg:grid-cols-4">
              <BigBox theme={theme} social={Social.facebook} top="hsl(208 92% 53%)" />
              <BigBox theme={theme} social={Social.twitter} top="hsl(203, 89%, 53%)" />
              <BigBox
                theme={theme}
                social={Social.instagram}
                top="linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
              />
              <BigBox theme={theme} social={Social.youtube} top="hsl(348, 97%, 39%)" textSubscribers={true} />
            </div>
            <span
              className={`${palette[theme][5]} mt-[1.8em] flex items-center pb-[0.85em] text-[1.5rem] font-[700] duration-300`}
            >
              Overview <span className="px-[0.22em]">-</span>
              <span>T</span>oday
            </span>
            <div className="gri grid gap-x-[1.9em] gap-y-[1.5em] md:grid-cols-2 lg:grid-cols-4">
              <SmallBox theme={theme} social={Social.facebook} header="Page Views" />
              <SmallBox theme={theme} social={Social.facebook} isSecond={true} />
              <SmallBox
                theme={theme}
                visibilityRule={SmallBoxVisibility.exceptAverageScreen}
                social={Social.instagram}
                isSecond={true}
              />
              <SmallBox theme={theme} social={Social.instagram} header="Profile Views" />
              <SmallBox
                theme={theme}
                visibilityRule={SmallBoxVisibility.onlyOnAverageScreen}
                social={Social.instagram}
                isSecond={true}
              />
              <SmallBox theme={theme} social={Social.twitter} header="Retweets" />
              <SmallBox theme={theme} social={Social.twitter} isSecond={true} />
              <SmallBox
                theme={theme}
                visibilityRule={SmallBoxVisibility.exceptAverageScreen}
                social={Social.youtube}
                isSecond={true}
              />
              <SmallBox theme={theme} social={Social.youtube} header="Total Views" />
              <SmallBox
                theme={theme}
                visibilityRule={SmallBoxVisibility.onlyOnAverageScreen}
                social={Social.youtube}
                isSecond={true}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
