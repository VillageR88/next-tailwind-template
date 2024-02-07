const Copyright = ({ forMobile }: { forMobile: boolean }) => {
  return (
    <span
      className={`${
        forMobile ? 'flex md:hidden' : 'hidden md:flex'
      } self-center text-[0.8rem] tracking-[-0.03em] text-[#7d7d83] md:self-end`}
    >
      Copyright 2020. All Rights Reserved
    </span>
  );
};

export default Copyright;
