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
  <footer className="mt-[-134px] flex w-full justify-center bg-cream md:mt-[-265px]">
    <div className=" flex min-h-[420px] w-full max-w-[689px] items-end justify-center md:min-h-[464px] xl:max-w-[1440px]">
      <div className="mb-[80px] flex w-full max-w-[1109px] flex-col items-center justify-between gap-[33px] md:mb-[72px] md:h-[32px] md:flex-row md:gap-0">
        <Image
          className="mt-[-6px] size-fit leading-[-0.44px]"
          width={81}
          height={32}
          src={logo as string}
          alt="Company Logo"
        />
        <p className="Footer text-grey">Copyright - Suite</p>
        <div className="flex w-[116px] items-center justify-between md:h-[20px]">
          {socialItems.map((item) => (
            <button key={item.name} className="transition hover:opacity-50">
              <Image className="h-auto w-full" width={16} height={16} src={item.icon} alt={`${item.name} icon`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
