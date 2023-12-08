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
import { PuffLoader, PulseLoader, BarLoader } from 'react-spinners';

enum Social {
  facebook,
  twitter,
  instagram,
  youtube,
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

const numberControl = (value: number): number | string =>
  value > 10000 && value < 99999 ? ('' + value).slice(0, -3).concat('k') : value;

const feed = {
  [Social.facebook]: [iconFacebook, 'facebook', '@nathanf'],
  [Social.twitter]: [iconTwitter, 'twitter', '@nathanf'],
  [Social.instagram]: [iconInstagram, 'instagram', '@realnathanf'],
  [Social.youtube]: [iconYoutube, 'youtube', 'Nathan F.'],
};

const BigBox = ({
  top,
  social,
  textSubscribers,
}: {
  top: string;
  social: keyof typeof feed;
  textSubscribers?: boolean;
}) => {
  const [data, setData] = useState<dataJSON>();
  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((response: dataJSON) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex h-[13.5em] max-w-[15.95em] flex-col items-center">
      <div
        style={{
          marginBottom: '-1%',
          height: '4.2px',
          width: '100%',
          background: `${top}`,
          clipPath: 'polygon(1% 0, 99% 0, 100% 100%, 0 100%)',
        }}
      ></div>
      <div
        style={{
          height: '2px',
          width: '100%',
          background: `${top}`,
          clipPath: 'polygon(0.5% 0, 99.5% 0, 100% 100%, 0 100%)',
        }}
      ></div>
      <div className="flex h-full w-full flex-col items-center justify-between rounded-b-[0.3em] bg-[#F0F3FA] pb-[1.3em] pt-[1.8em]">
        <div className="flex items-center gap-[0.47em] text-darkGrayishBlue_Text">
          <Image className="h-fit" src={feed[social][0] as string} alt={`${feed[social][1]} logo`} />
          <span className="text-[0.75rem] font-[700]">{feed[social][2]}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[3.5rem] font-[700] leading-[1.12em] tracking-[-0.04em]">
            {data ? (
              numberControl(data[Social[social] as keyof dataJSON].sumFollowers)
            ) : (
              <PuffLoader className="mb-[0.1em]" size={50} color="#36d7b7" />
            )}
          </span>
          <span className="text-[0.75rem] tracking-[0.42em] text-darkGrayishBlue_Text">
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

const SmallBox = ({ social, isSecond, header }: { social: Social; isSecond?: boolean; header?: string }) => {
  const [data, setData] = useState<dataJSON>();
  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((response: dataJSON) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex h-[7.8em] max-w-[15.95em] items-center justify-center rounded-[0.3em] bg-[#F0F3FA]">
      <div className="mt-[0.66em] flex h-[5.37em] w-full flex-col justify-between pl-[1.5em] pr-[1.92em]">
        <div className="flex items-center justify-between">
          <span className="text-[0.88rem] font-[700] text-darkGrayishBlue_Text">{isSecond ? 'Likes' : header}</span>
          <Image className="mt-[0.1em] h-fit" src={feed[social][0] as string} alt={`${feed[social][1]} logo`} />
        </div>
        <div className="flex justify-between">
          <span className="text-[2rem] font-[700]">
            {numberControl(
              (isSecond
                ? data?.[Social[social] as keyof dataJSON].dailyLikes
                : data?.[Social[social] as keyof dataJSON].dailyViews) ?? 0,
            )}
          </span>
          <div className="mb-[0.4em] flex items-center gap-[0.2em] self-end">
            {(data?.[Social[social] as keyof dataJSON][isSecond ? 'dailyLikesChange' : 'dailyViewsChange'] ?? 0) > 0 ? (
              <Image className="h-fit" src={iconUp as string} alt="more" />
            ) : (
              (data?.[Social[social] as keyof dataJSON][isSecond ? 'dailyLikesChange' : 'dailyViewsChange'] ?? 0) <
                0 && <Image className="h-fit" src={iconDown as string} alt="less" />
            )}
            <span
              className={`${
                (data?.[Social[social] as keyof dataJSON][isSecond ? 'dailyLikesChange' : 'dailyViewsChange'] ?? 0) > 0
                  ? 'text-limeGreen'
                  : (data?.[Social[social] as keyof dataJSON].dailyLikesChange ?? 0) < 0 && 'text-brightRed'
              } text-[0.77rem] font-[700]`}
            >
              {isSecond
                ? Math.abs(data?.[Social[social] as keyof dataJSON].dailyLikesChange ?? 0)
                : Math.abs(data?.[Social[social] as keyof dataJSON].dailyViewsChange ?? 0)}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [data, setData] = useState<dataJSON>();
  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((response: dataJSON) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="flex min-h-screen w-full items-center font-inter">
      <div className="h-full w-full bg-white pb-[4.68em]">
        <nav className="h-[15.3em] w-full rounded-b-[1.3em] bg-veryPaleBlue_Top_BG_Pattern">
          <div className="flex flex-row items-center justify-between pt-[2.3em] md:px-[3em] lg:px-[5em] xl:px-[10.1em]">
            <div className="flex flex-col">
              <span className="text-[1.75rem] font-[700] leading-[1.25em]">Social Media Dashboard</span>
              <span className="text-[0.9rem] font-[700] text-darkGrayishBlue_Text">
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
            <div className="flex flex-row gap-[0.88em] pb-[0.5em] pr-[0.2em]">
              <span className="pt-[0.2em] text-[0.87rem] font-[700] text-[#8F93AD]">Dark Mode</span>
              <button className="flex w-[3em] items-center justify-end rounded-[2em] bg-toggleLight px-[0.2em] py-[0.75em]">
                <div className="absolute h-[1.12em] w-[1.12em] rounded-full bg-[#F2F3F8]"></div>
              </button>
            </div>
          </div>
        </nav>
        <main className="h-fit w-full">
          <div className="mt-[-6.8em] flex h-full w-full flex-col md:px-[3em] lg:px-[5em] xl:px-[10.3em]">
            <div className="grid w-full gap-[1.9em] md:grid-cols-3 lg:grid-cols-4">
              <BigBox social={Social.facebook} top="hsl(208 92% 53%)" />
              <BigBox social={Social.twitter} top="hsl(203, 89%, 53%)" />
              <BigBox
                social={Social.instagram}
                top="linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
              />
              <BigBox social={Social.youtube} top="hsl(348, 97%, 39%)" textSubscribers={true} />
            </div>
            <span className="mt-[1.8em] flex items-center pb-[0.85em] text-[1.5rem] font-[700] text-darkGrayishBlue_Text">
              Overview <span className="px-[0.22em]">-</span>
              <span>T</span>oday
            </span>
            <div className="grid grid-cols-4 gap-x-[1.9em] gap-y-[1.5em]">
              <SmallBox social={Social.facebook} header="Page Views" />
              <SmallBox social={Social.facebook} isSecond={true} />
              <SmallBox social={Social.instagram} isSecond={true} />
              <SmallBox social={Social.instagram} header="Profile Views" />
              <SmallBox social={Social.twitter} header="Retweets" />
              <SmallBox social={Social.twitter} isSecond={true} />
              <SmallBox social={Social.youtube} isSecond={true} />
              <SmallBox social={Social.youtube} header="Total Views" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
