import Link from 'next/link';

const Start = () => {
  return (
    <div>
      <h1>Start</h1>
      <Link href="/">
        <a className="rounded bg-blue-500 p-4 text-white hover:bg-blue-700">Home</a>
      </Link>
    </div>
  );
};

export default Start;
