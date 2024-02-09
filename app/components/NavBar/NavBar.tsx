import Logo from '../Logo';
import ButtonMobileMenu from '../ButtonMobileMenu';
import NavBarItemsFirst from './NavBarItemsFirst';
import NavBarItemsSecond from './NavBarItemsSecond';

const NavBar = () => {
  return (
    <nav className="flex h-[6em] w-full items-center justify-between bg-[#FFFFFF] px-6 md:h-[8.5em] md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className="ml-[0.2em] mt-[0.38em] flex gap-[2.76em]">
        <Logo />
        <NavBarItemsFirst forMobile={false} />
      </div>
      <NavBarItemsSecond forMobile={false} />
      <ButtonMobileMenu />
    </nav>
  );
};

export default NavBar;
