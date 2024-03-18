import Image from 'next/image';
import logoLight from '@/public/assets/images/logo-light.svg';
import logoDark from '@/public/assets/images/logo-dark.svg';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';

const Footer = ({ type, additionalClass }: { type: 1 | 2; additionalClass?: string }) => {
  const typeItems = {
    1: {
      backgroundColor: 'bg-almostBlack',
      textColor: 'text-white',
      fill: 'fill-[#FFF]',
      hoverFill: 'hover:fill-gold',
      logo: logoLight as string,
    },
    2: {
      backgroundColor: 'bg-gold',
      textColor: 'text-almostBlack',
      fill: 'fill-[#000]',
      hoverFill: 'hover:fill-white',
      logo: logoDark as string,
    },
  };
  return (
    <footer
      className={`${additionalClass} flex min-h-[244px] w-full items-center justify-center ${typeItems[type].backgroundColor}`}
    >
      <div className="flex size-full max-w-[1110px] justify-between">
        <div className="flex h-[84px] w-[730px] items-start justify-between">
          <Image width={160} height={58} src={typeItems[type].logo} alt="logo" />
          <p className={`BodyS h-[84px] w-[430px] ${typeItems[type].textColor}`}>
            The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99
            King Street, Newport, USA.
          </p>
        </div>
        <div className="flex h-[20px] w-[100px] justify-between">
          <Facebook hoverFill={typeItems[type].hoverFill} fill={typeItems[type].fill} />
          <Instagram hoverFill={typeItems[type].hoverFill} fill={typeItems[type].fill} />
          <Twitter hoverFill={typeItems[type].hoverFill} fill={typeItems[type].fill} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
