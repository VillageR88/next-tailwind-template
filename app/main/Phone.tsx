import Image from 'next/image';
import Link from '../lib/interfaceLink';
import arrowRight from '@/public/assets/images/icon-arrow-right.svg';

const dataColors = {
  Github: ['/assets/images/icon-githubWhite.svg', 'bg-[#1A1A1A]'],
  'Frontend Mentor': ['/assets/images/icon-frontend-mentorColor.svg', 'bg-[#FFFFFF]'],
  Twitter: ['/assets/images/icon-twitterWhite.svg', 'bg-[#43B7E9]'],
  LinkedIn: ['/assets/images/icon-linkedinWhite.svg', 'bg-[#2D68FF]'],
  Youtube: ['/assets/images/icon-youtubeWhite.svg', 'bg-[#EE3939]'],
  Facebook: ['/assets/images/icon-facebookWhite.svg', 'bg-[#2442AC]'],
  Twitch: ['/assets/images/icon-twitchWhite.svg', 'bg-[#EE3FC8]'],
  'Dev.to': ['/assets/images/icon-devtoWhite.svg', 'bg-[#333333]'],
  Codewars: ['/assets/images/icon-codewarsWhite.svg', 'bg-[#8A1A50]'],
  freeCodeCamp: ['/assets/images/icon-freecodecampWhite.svg', 'bg-[#302267]'],
  GitLab: ['/assets/images/icon-gitlabWhite.svg', 'bg-[#EB4925]'],
  Hashnode: ['/assets/images/icon-hashnodeWhite.svg', 'bg-[#0330D1]'],
  'Stack Overflow': ['/assets/images/icon-stack-overflowWhite.svg', 'bg-[#EC7100]'],
};

const Phone = ({ socialInfo }: { socialInfo?: Link[] }) => {
  return (
    <div className="flex h-[631px] w-[307px] flex-col items-center justify-center bg-[url('/assets/images/illustration-phone-mockup.svg')] bg-center bg-no-repeat pt-[10px]">
      <div className="mr-[1px] flex h-[514px] w-[238px] flex-col justify-between">
        <div className="h-[158px] w-full"></div>
        <div className="flex h-[300px] w-full flex-col">
          <ul className="flex h-fit w-full flex-col gap-[20px] overflow-auto bg-white">
            {socialInfo?.map((item, index) => (
              <li key={index} className={`min-h-[44px] w-full rounded-[8px] ${dataColors[item.title][1]}`}>
                <button
                  onClick={() => {
                    void navigator.clipboard.writeText(item.url);
                  }}
                  className="flex h-full w-full items-center px-[16px]"
                >
                  <div
                    className={` flex h-full w-full items-center ${
                      (item.title as keyof typeof dataColors) !== 'Frontend Mentor'
                        ? 'text-[white]'
                        : 'rounded-[8px] border border-[#D9D9D9] text-[333333]'
                    }`}
                  >
                    <Image
                      color="inherit"
                      src={dataColors[item.title as keyof typeof dataColors][0]}
                      alt={item.title}
                      width={10}
                      height={10}
                      className="mr-[16px] h-[16px] w-[16px] fill-inherit text-inherit"
                    />

                    <span className="bodyS">{item.title}</span>
                  </div>
                  <Image className="h-fit w-fit" height={5} width={5} alt="arrow right" src={arrowRight as string} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Phone;
