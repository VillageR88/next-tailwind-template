import Image from 'next/image';
import backgroundImage from '@/public/assets/images/illustration-article.svg';
import avatar from '@/public/assets/images/image-avatar.webp';
export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center py-10 font-figtree sm:min-h-screen">
      <div className="flex min-h-[500px] w-full max-w-[328px] flex-col items-center gap-[24px] rounded-[20px] border-2 border-[hsl(0,0%,7%)] bg-white p-[23px] shadow-[8px_8px_0px_0px_rgb(0,0,0)] sm:h-[525px] sm:min-h-full sm:w-[384px] sm:max-w-full sm:p-[22px]">
        <Image
          className="h-[200px] w-fit rounded-[12px] object-cover sm:h-fit"
          width={10}
          height={10}
          src={backgroundImage as string}
          alt="backgroundImage"
          priority
        />
        <div className="flex h-full w-full flex-col">
          <div className="flex h-fit w-fit items-center justify-center rounded-[4px] bg-[hsl(47,88%,63%)] px-[12px] py-[4px] text-[12px] font-[900] text-[hsl(0,0%,7%)] sm:ml-[1px] sm:text-[14px]">
            Learning
          </div>
          <span className="mt-[12px] text-[12px] font-[600] sm:ml-[1px] sm:text-[14px]">Published 21 Dec 2023</span>
          <h1 className="mt-[12px] text-[20px] font-[900] sm:ml-[1px] sm:text-[24px]">HTML & CSS foundations</h1>
          <p className="mt-[13px] text-[14px] font-[500] text-[hsl(0,0%,50%)] sm:ml-[1px] sm:text-[16px]">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
          <div className="mt-[23px] flex items-center gap-[12px] sm:ml-[1px]">
            <Image className="w-[32px]" width={64} height={65} src={avatar} alt="avatar" />
            <span className="text-[14px] font-[900]">Greg Hooper</span>
          </div>
        </div>
      </div>
    </main>
  );
}
