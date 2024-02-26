import Image from 'next/image';
import Link from '../lib/interfaceLink';
import Profile from '../lib/interfaceProfile';
import ArrowRight from '../components/ArrowRight';

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

const Phone = ({
  fetchLinks,
  fetchProfile,
  passCopiedToClipboardPopUp,
  imageSource,
}: {
  fetchLinks?: Link[];
  fetchProfile?: Profile | null;
  passCopiedToClipboardPopUp(): void;
  imageSource: string | null;
}) => {
  return (
    <div className="flex h-[631px] w-[307px] flex-col items-center justify-center bg-[url('/assets/images/illustration-phone-mockup.svg')] bg-center bg-no-repeat pt-[10px]">
      <div className="mr-[1px] flex h-[514px] w-[238px] flex-col justify-between">
        <div
          className={`flex min-h-[177px] w-full flex-col items-center ${
            imageSource ? 'justify-between' : 'justify-end'
          }`}
        >
          {imageSource && (
            <Image
              className="h-[96px] w-[96px] rounded-full outline outline-4 outline-[#633cff]"
              height={10}
              width={10}
              src={imageSource}
              alt="profile image"
            />
          )}
          <div
            className={`${
              fetchProfile && fetchProfile.firstName.concat(fetchProfile.lastName, fetchProfile.email).length > 0
                ? 'visible'
                : 'invisible'
            } flex min-h-[56px] w-full flex-col items-center justify-center bg-white text-center`}
          >
            <h2 className="line-clamp-2 max-w-full break-words font-instrumentSans text-[18px] font-semibold leading-[150%] text-[#333333]">
              {fetchProfile?.firstName.concat(' ', fetchProfile.lastName).trim()}
            </h2>
            <p className="line-clamp-2 max-w-full break-all font-instrumentSans text-[14px] leading-[150%] text-[#737373]">
              {fetchProfile?.email}
            </p>
          </div>
        </div>
        <div className="flex h-[300px] w-full flex-col">
          <ul className="flex h-fit w-full flex-col gap-[20px] overflow-auto bg-white">
            {fetchLinks?.map((item, index) => (
              <li key={index} className={`min-h-[44px] w-full rounded-[8px] ${dataColors[item.title][1]}`}>
                <button
                  onClick={() => {
                    void navigator.clipboard.writeText(item.url);
                    passCopiedToClipboardPopUp();
                  }}
                  className={` ${
                    (item.title as keyof typeof dataColors) !== 'Frontend Mentor'
                      ? 'text-[white] *:fill-[white]'
                      : 'rounded-[8px] border border-[#D9D9D9] text-[#333333] *:fill-[#737373]'
                  } flex h-full w-full items-center px-[16px]`}
                >
                  <div className={`flex h-full w-full items-center`}>
                    <Image
                      priority
                      color="inherit"
                      src={dataColors[item.title as keyof typeof dataColors][0]}
                      alt={item.title}
                      width={10}
                      height={10}
                      className="mr-[16px] h-[16px] w-[16px] fill-inherit text-inherit"
                    />

                    <span className="bodyS">{item.title}</span>
                  </div>
                  <ArrowRight />
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
