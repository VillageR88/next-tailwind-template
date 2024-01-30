export default function Home() {
  return (
    <main className="font-rubik flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex h-[50em] w-full justify-between bg-[#FAFAFA]">
        <div className="absolute inset-0 ml-[6.6em] flex items-center justify-center gap-[7.8em]">
          <div className="flex h-[31.5em] min-w-[15.45em] items-center justify-center rounded-[2em] bg-[#FFFFFF] px-[0.6em] py-3 shadow-2xl">
            <div className="flex h-full w-[99.5%] flex-col items-center justify-center rounded-[1.2em] bg-[#EDE5F4]">
              <div className="h-[4.7em] w-full rounded-[0.3em] rounded-t-[1.2em] bg-gradient-to-r from-[#8C3AFE] to-[#E044FF]"></div>
              <div className="h-full w-[100.5%] rounded-b-[1.2em] bg-[#EDE5F4]"></div>
            </div>
          </div>
          <div className="flex w-[28em] flex-col gap-[1.1em]">
            <span className="text-[2.5rem] font-[500] text-[#452E5D]">{'Simple booking'}</span>
            <span className="leading-[1.75em] text-[#a8a7ad]">
              {
                'Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.                '
              }
            </span>
          </div>
        </div>
        <div className="ml-[-5.75em] h-[87.5%] w-[32em] rounded-b-full bg-gradient-to-b from-[#CE43FF] to-[#903AFF]"></div>
        <div className="flex flex-col justify-end">
          <div className="mr-[-11.75em] h-[85.1%] w-[32em] rounded-t-full bg-[#F7F5FA]"></div>
        </div>
      </div>
    </main>
  );
}
