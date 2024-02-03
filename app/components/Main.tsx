import MainRow1 from './MainRow1';
import MainRow2 from './MainRow2';

const Main = () => {
  return (
    <div className="flex h-full w-full flex-col ">
      <MainRow1 />
      <MainRow2 />
      <div className="h-[30em] w-full bg-[#F7F9F9]" />
    </div>
  );
};

export default Main;
