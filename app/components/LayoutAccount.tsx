import Logo from '../components/Logo';
import ButtonTheme from '../components/ButtonTheme';

import React from 'react';

export default function LayoutAccount({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center px-8 py-10 font-instrumentSans md:min-h-screen">
      <div className={`flex w-full max-w-[500px] flex-col items-center justify-between gap-3`}>
        <header className="flex w-full justify-between dark:drop-shadow-none">
          <Logo />
          <ButtonTheme />
        </header>
        {children}
      </div>
    </div>
  );
}
