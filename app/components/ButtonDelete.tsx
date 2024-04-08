const ButtonDelete = ({ func, alwaysVisible }: { func(): void; alwaysVisible?: boolean }) => {
  return (
    <button
      className={`size-[20px] fill-white transition hover:fill-[orange] group-hover:opacity-100 ${!alwaysVisible && 'md:opacity-0'}`}
      onClick={func}
      style={{ touchAction: 'none' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
      </svg>
    </button>
  );
};

export default ButtonDelete;
