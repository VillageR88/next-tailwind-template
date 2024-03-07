import Image from 'next/image';
import logo from '../public/assets/images/desktop/logo.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-chivo">
      <div className="flex min-h-[900px] w-full items-center justify-end bg-[#121725]">
        <div className="h-[640px] w-[1275px]  bg-[url('../public/assets/images/desktop/image-host.jpg')] bg-[length:888px_100%] bg-right bg-no-repeat">
          <div className="flex h-[640px] flex-col items-start justify-between">
            <Image className="mt-[-28px]" src={logo as string} width={135} height={56} alt="pod logo" />
            <div className="size-0">
              <div className="mt-[-509px] flex h-[509px] w-[732px] items-end bg-[#121725]">
                <div className="h-[421px] w-[665px]">
                  <h1 className="flex h-[124px] w-[665px] flex-col justify-between">
                    <span className="text-[52px] font-[100] leading-[62px] text-[#54E6AF]">
                      {'Publish your podcasts'.toUpperCase()}
                    </span>
                    <span className="text-[52px] font-[100] leading-[62px] text-[#FFFFFF]">
                      {'Everywhere.'.toUpperCase()}
                    </span>
                  </h1>
                  <p className="mt-[24px] h-[84px] w-[445px] text-[18px] font-[100] leading-[28px] text-[#C2CBE5]">
                    Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple
                    Podcasts, Google Podcasts, Pocket Casts and more!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
