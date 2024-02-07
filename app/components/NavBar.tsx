import Logo from './Logo';
import ButtonMobileMenu from './ButtonMobileMenu';

const navBarItems = ['Features', 'Pricing', 'Resources'];
const NavBar = () => {
  return (
    <nav className="z-10 flex h-[8.5em] w-full items-center justify-between bg-[#FFFFFF] px-6 md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className="ml-[0.2em] mt-[0.38em] flex gap-[2.76em]">
        <Logo />
        <ul className="mt-[0.18em] hidden gap-[1.95em] md:flex">
          {navBarItems.map((item, iterator) => (
            <li key={iterator}>
              <button
                aria-label={item}
                className="text-[0.95rem] font-[700] tracking-[-0.01em] text-[#AAA9AE] transition hover:text-[#343339]"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden gap-[2.4em] md:flex">
        <button className="text-[0.96rem] font-[700] text-[#AAA9AE] transition hover:text-[#343339]">Login</button>
        <button className="rounded-[2em] bg-[hsl(180,66%,49%)] px-[1.62em] pb-[0.64em] pt-[0.64em] text-[0.92rem] font-[700] text-[white] transition hover:bg-opacity-60">
          Sign Up
        </button>
      </div>
      <ButtonMobileMenu />
    </nav>
  );
};

export default NavBar;
