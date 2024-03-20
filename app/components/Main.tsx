import MainPart1 from './MainPart1';
import MainPart2 from './MainPart2';
import MainPart3 from './MainPart3';
import MainPart4 from './MainPart4';
import Footer from './Footer';

const Main = () => (
  <div className="flex size-full flex-col items-center pb-[39px] pt-[55px]">
    <MainPart1 />
    <MainPart2 />
    <MainPart3 />
    <MainPart4 />
    <Footer />
  </div>
);

export default Main;
