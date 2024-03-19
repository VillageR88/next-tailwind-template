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
      className={`${additionalClass} flex size-full min-h-[336px] items-center justify-center md:min-h-[244px] ${typeItems[type].backgroundColor}`}
    >
      <div className="flex size-full max-w-[1110px] flex-col justify-between gap-[38px] px-[40px] py-[48px] md:flex-row md:py-0 xl:px-0">
        <div className="flex size-full min-h-[84px] max-w-[550px] flex-col items-start justify-between gap-[38px] md:flex-row xl:max-w-[730px]">
          <Image className="h-[58px] w-[160px]" width={160} height={58} src={typeItems[type].logo} alt="logo" />
          <p className={`BodyS min-h-[84px] md:max-w-[290px] xl:max-w-[430px] ${typeItems[type].textColor}`}>
            The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99
            King Street, Newport, USA.
          </p>
        </div>
        <div className="flex h-[20px] w-[100px] min-w-[90px] justify-between">
          <Facebook hoverFill={typeItems[type].hoverFill} fill={typeItems[type].fill} />
          <Instagram hoverFill={typeItems[type].hoverFill} fill={typeItems[type].fill} />
          <Twitter hoverFill={typeItems[type].hoverFill} fill={typeItems[type].fill} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
