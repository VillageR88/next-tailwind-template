import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import facebook from '@/public/assets/images/icon-facebook.svg';
import twitter from '@/public/assets/images/icon-twitter.svg';
import instagram from '@/public/assets/images/icon-instagram.svg';

const socialItems = [
  {
    name: 'Facebook',
    icon: facebook as string,
  },
  {
    name: 'Twitter',
    icon: twitter as string,
  },
  {
    name: 'Instagram',
    icon: instagram as string,
  },
];

const Footer = () => (
  <div className="mt-[-265px] flex w-full justify-center bg-cream">
    <footer className=" flex min-h-[464px] w-full max-w-[689px] items-end justify-center xl:max-w-[1440px]">
      <div className="mb-[72px] flex h-[32px] w-full max-w-[1109px] items-center justify-between">
        <Image className="mt-[-6px] leading-[-0.44px]" width={81} height={32} src={logo as string} alt="Company Logo" />
        <p className="Footer text-grey">Copyright - Suite</p>
        <div className="flex h-[20px] w-[116px] items-center justify-between">
          {socialItems.map((item) => (
            <button key={item.name} className="transition hover:opacity-50">
              <Image className="size-fit" width={20} height={20} src={item.icon} alt={`${item.name} icon`} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
