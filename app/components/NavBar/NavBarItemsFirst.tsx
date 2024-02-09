import navBarItems from './navBarItems';

const NavBarItemsFirst = ({ forMobile }: { forMobile: boolean }) => (
  <ul className={forMobile ? 'flex flex-col items-center gap-[1.7em]' : 'mt-[0.18em] hidden gap-[1.95em] md:flex'}>
    {navBarItems.firstPart.map((item, iterator) => (
      <li key={iterator}>
        <button
          aria-label={item}
          className={`${
            forMobile ? 'text-[1.1rem] text-[white]' : 'text-[0.95rem] text-[#AAA9AE] hover:text-[#343339]'
          } font-[700] tracking-[-0.01em] transition`}
        >
          {item}
        </button>
      </li>
    ))}
  </ul>
);

export default NavBarItemsFirst;
