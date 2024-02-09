import navBarItems from './navBarItems';

const NavBarItemsSecond = ({ forMobile }: { forMobile: boolean }) => (
  <div className={forMobile ? 'flex w-full flex-col items-center gap-[1.4em] px-6' : 'hidden gap-[2.4em] md:flex'}>
    <button
      className={`${
        forMobile ? 'text-[1.1rem] text-[white]' : 'text-[0.95rem] text-[#AAA9AE] hover:text-[#343339]'
      } text-[0.95rem] font-[700] text-[#AAA9AE] transition`}
    >
      {navBarItems.login}
    </button>
    <button
      className={`${
        forMobile ? 'w-full text-[1.1rem]' : 'text-[0.95rem]'
      } rounded-[2em] bg-[hsl(180,66%,49%)] px-[1.62em] pb-[0.64em] pt-[0.64em] text-[0.92rem] font-[700] text-[white] transition hover:bg-[#99E3E4]`}
    >
      {navBarItems.signUp}
    </button>
  </div>
);
export default NavBarItemsSecond;
