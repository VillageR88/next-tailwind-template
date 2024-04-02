const ButtonDrag = ({ func, dragVisible }: { func(arg: React.PointerEvent): void; dragVisible?: boolean }) => {
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      className={`${dragVisible ?? dragVisible === undefined ? 'opacity-100' : 'opacity-0'} size-[20px] transition hover:cursor-grab active:cursor-grabbing`}
      onPointerDown={(e) => {
        e.preventDefault();
        func(e);
      }}
      style={{ touchAction: 'none' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
        <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" />
      </svg>
    </div>
  );
};

export default ButtonDrag;
