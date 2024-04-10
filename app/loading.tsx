'use client';
import { RotatingLines } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center md:min-h-screen">
      <RotatingLines width="200" strokeColor="orange" />
    </div>
  );
}
