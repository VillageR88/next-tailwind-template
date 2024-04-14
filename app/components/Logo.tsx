const Logo = ({ alternate }: { alternate?: boolean }) => (
  <div className={`${alternate ? 'hidden md:flex' : 'flex'} items-start justify-center gap-2`}>
    <svg
      className="fill-[darkorange] dark:fill-[rgb(255,165,0)] dark:drop-shadow-none"
      xmlns="http://www.w3.org/2000/svg"
      height="45"
      viewBox="0 -960 960 960"
      width="45"
    >
      <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
    </svg>
    <div className="flex">
      <span
        // eslint-disable-next-line tailwindcss/classnames-order
        className="text-3xl font-bold text-[darkorange] dark:text-[orange] md:text-4xl"
      >
        My
      </span>
      <span
        // eslint-disable-next-line tailwindcss/classnames-order
        className="text-3xl font-medium transition dark:text-white md:text-4xl"
      >
        Notebook
      </span>
    </div>
  </div>
);
export default Logo;
