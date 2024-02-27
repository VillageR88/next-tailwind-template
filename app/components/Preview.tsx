import Image from 'next/image';
import Profile from '../lib/interfaceProfile';

const Preview = ({ imageSource, fetchProfile }: { imageSource?: string; fetchProfile?: Profile | null }) => {
  return (
    <main className="w-full">
      <div className="h-0 w-full">
        <div className="-z-10 h-[357px] w-full bg-[#633CFF]"></div>
      </div>
      <div className="flex h-0 w-full justify-center">
        <div className="mt-[208px] flex h-[569px] w-[349px] items-center justify-center rounded-[24px] bg-white">
          <div className="h-[473px] w-[237px]">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Preview;
