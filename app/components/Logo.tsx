import Image from 'next/image';
import editNote from '@/public/assets/images/edit_note_FILL0_wght400_GRAD0_opsz24.svg';

const Logo = ({ alternate }: { alternate?: boolean }) => (
  <div className="flex items-start justify-center gap-2">
    <Image src={editNote as string} alt="edit_note" width={45} height={45} />
    <div className="flex">
      <span className={`${alternate ? 'hidden md:block' : 'text-3xl'} font-bold text-[orange] md:text-4xl`}>My</span>
      <span className={`${alternate ? 'hidden md:block' : 'text-3xl'} font-medium text-white md:text-4xl`}>
        Notebook
      </span>
    </div>
  </div>
);
export default Logo;
