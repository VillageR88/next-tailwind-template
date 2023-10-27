import Image from 'next/image';
import iconArrow from './assets/images/icon-arrow.svg';

export default function Home() {
  return (
    <main className="flex h-screen  items-center justify-center">
      {/* wrapper */}
      <div className="flex flex-col bg-white">
        {/* sub_wrapper1 */}
        <div className="flex">
          <div className="flex flex-col">
            <span>DAY</span>
            <input type="text" name="dayInput" id="" placeholder="DD" />
          </div>
          <div className="flex flex-col">
            <span>MONTH</span>
            <input type="text" name="monthInput" id="" placeholder="MM" />
          </div>
          <div className="flex flex-col">
            <span>YEAR</span>
            <input type="text" name="yearInput" id="" placeholder="YYYY" />
          </div>
        </div>

        {/* sub_wrapper2 */}
        <div className="flex justify-between">
          <hr className="flex w-full self-center"></hr>
          <Image
            className="h-auto w-20 border-spacing-2 rounded-full bg-[#864CFF]"
            src={iconArrow as string}
            alt="arrow image"
          />
        </div>
        {/* sub_wrapper3 */}
        <div></div>
      </div>
    </main>
  );
}
