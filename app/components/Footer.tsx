import Image from 'next/image';
import logoDark from '/public/assets/images/logo-dark.svg';
import socialMedia from '../lib/socialMedia';

const Footer = () => (
  <footer className="mt-[61px] flex h-[102px] w-[116px] flex-col items-center justify-between">
    <Image width={97} height={26} src={logoDark as string} alt="logo" />
    <ul className="flex h-fit w-full justify-between text-center">
      {socialMedia.map((item, index) => (
        <li key={index}>
          <button>
            <Image className="h-[20px] w-[20px]" height={20} width={20} src={item.src} alt={item.name} />
          </button>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
