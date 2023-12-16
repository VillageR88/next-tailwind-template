import Image from 'next/image';
import picture1 from './images/avatars/image-amyrobson.webp';
import iconReply from './images/icon-reply.svg';

export default function Home() {
  const Block = () => {
    return (
      <div className="flex h-[10.45em] w-[45.625em] gap-[1.5em] rounded-[0.5em] bg-white py-[1.5em] pl-[1.5em] pr-[1.55em]">
        <div className="flex h-[6.25em] w-[2.8em] flex-col items-center justify-between rounded-[0.65em] bg-[#F5F6FA] pb-[0.3em] pt-[0.2em]">
          <button>
            <span className="p-2 text-[1.1rem] font-[600] text-[#CFCDE2]">+</span>
          </button>
          <span className="text-[1.05rem] font-[500] text-moderateBlue">12</span>
          <button>
            <span className="p-2 text-[1.1rem] font-[600] text-[#CFCDE2]">—</span>
          </button>
        </div>
        <div className="flex w-full flex-col gap-[0.9em]">
          <div>
            <div className="flex justify-between text-[1.05rem] tracking-[-0.03em]">
              <div className="flex items-center gap-[1em]">
                <Image src={picture1} height={32} alt="avatar" />
                <span className="font-[500] text-darkBlue">amyrobson</span>
                <span className="text-grayishBlue">1 month ago</span>
              </div>
              <div className="flex items-center gap-[0.45em]">
                <Image className="h-fit w-fit" src={iconReply as string} alt="reply" />
                <span className="font-[500] text-moderateBlue">Reply</span>
              </div>
            </div>
          </div>
          <div className='tracking-[0.001em] text-grayishBlue'>
            Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've
            nailed the design and the responsiveness at various breakpoints works really well.
          </div>
        </div>
      </div>
    );
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F6FA] font-rubik">
      <div className="mt-[4em] flex h-[100em] w-full flex-col items-center">
        <Block />
      </div>
    </main>
  );
}
