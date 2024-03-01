import Image from 'next/image';
import backgroundImage from '@/public/assets/images/illustration-article.svg';
import avatar from '@/public/assets/images/image-avatar.webp';
export default function Home() {
  return (
    <main className="font-figtree flex min-h-screen flex-col items-center justify-center">
      <div className="flex h-[525px] w-[384px] flex-col items-center gap-[24px] rounded-[20px] border-2 border-[hsl(0,0%,7%)] bg-white p-[22px] shadow-[8px_8px_0px_0px_rgb(0,0,0)]">
        <Image
          className="h-fit w-fit rounded-[12px]"
          width={10}
          height={10}
          src={backgroundImage as string}
          alt="backgroundImage"
        />
        <div className="flex h-full w-full flex-col">
          <div className="ml-[1px] flex h-[29px] w-[82px] items-center justify-center rounded-[4px] bg-[hsl(47,88%,63%)] text-[14px] font-[900] text-[hsl(0,0%,7%)]">
            Learning
          </div>
          <span className="ml-[1px] mt-[12px] text-[14px] font-[600]">Published 21 Dec 2023</span>
          <h1 className="ml-[1px] mt-[12px] text-[24px] font-[900]">HTML & CSS foundations</h1>
          <p className="ml-[1px] mt-[13px] font-[500] text-[hsl(0,0%,50%)]">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
          <div className="ml-[1px] mt-[23px] flex items-center gap-[12px]">
            <Image className="w-[32px]" width={64} height={65} src={avatar} alt="avatar" />
            <span className="text-[14px] font-[900]">Greg Hooper</span>
          </div>
        </div>
      </div>
    </main>
  );
}
