import Image from 'next/image';
import Profile from '../lib/interfaceProfile';
import Link from '../lib/interfaceLink';
import ArrowRight from '../components/ArrowRight';
import dataColors from '../lib/dataColors';

const Preview = ({
  imageSource,
  fetchProfile,
  fetchLinks,
  passCopiedToClipboardPopUp,
  preloadComplete,
}: {
  imageSource?: string;
  fetchProfile?: Profile | null;
  fetchLinks?: Link[];
  passCopiedToClipboardPopUp(): void;
  preloadComplete?: boolean;
}) => {
  const caseLengthAbove = (length: number): boolean => {
    if (fetchProfile) {
      if (fetchProfile.firstName) return fetchProfile.firstName.length > length;
      if (fetchProfile.lastName) return fetchProfile.lastName.length > length;
    }
    return false;
  };
  const conditionalTextSize = caseLengthAbove(20)
    ? 'text-[1rem]'
    : caseLengthAbove(16)
      ? 'text-[1.2rem]'
      : caseLengthAbove(14)
        ? 'text-[1.5rem]'
        : caseLengthAbove(11)
          ? 'text-[1.7rem]'
          : 'headingM';

  fetchProfile && fetchProfile.firstName.length < 20;
  return (
    <main className={`${!preloadComplete && preloadComplete !== undefined && 'hidden'} w-full`}>
      <div className="h-0 w-full">
        <div className="-z-10 h-[357px] w-full bg-[#633CFF]"></div>
      </div>
      <div className="flex h-0 w-full justify-center">
        <div className="mt-[208px] flex h-[569px] w-[349px] items-center justify-center rounded-[24px] bg-white">
          <div className="flex h-[473px] w-[237px] flex-col justify-between">
            <div
              className={`flex min-h-[209px] w-full flex-col items-center gap-2 ${
                imageSource ? 'justify-between' : 'justify-end'
              }`}
            >
              {imageSource && (
                <Image
                  priority
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
                } flex min-h-[80px] w-full flex-col items-center justify-center bg-white text-center`}
              >
                <h2
                  className={`${conditionalTextSize} line-clamp-2 max-w-full break-words font-instrumentSans font-semibold text-[#333333]`}
                >
                  {fetchProfile?.firstName.concat(' ', fetchProfile.lastName || '').trim()}
                </h2>
                <p className="bodyM line-clamp-2 max-w-full break-all font-instrumentSans leading-[150%] text-[#737373]">
                  {fetchProfile?.email}
                </p>
              </div>
            </div>
            <div className="flex h-[208px] w-full flex-col">
              <ul className="flex h-fit w-full flex-col gap-[20px] overflow-auto bg-white">
                {fetchLinks?.map((item, index) => (
                  <li key={index} className={`min-h-[56px] w-full rounded-[8px] ${dataColors[item.title][1]}`}>
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
                          className="mr-[16px] h-[20px] w-[20px] fill-inherit text-inherit"
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
      </div>
    </main>
  );
};

export default Preview;
