import MainRow1 from './MainRow1';
import MainRow2 from './MainRow2';
import MainRow3 from './MainRow3';
import MainRow4 from './MainRow4';

const Main = () => {
  return (
    <main className="flex w-full flex-col">
      <MainRow1 />
      <MainRow2 />
      <MainRow3 />
      <MainRow4 />
    </main>
  );
};

export default Main;
