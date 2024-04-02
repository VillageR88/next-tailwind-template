const ButtonDrag = ({ func }: { func(arg: React.PointerEvent): void }) => (
  <button className="size-[20px] hover:cursor-grab active:cursor-grabbing" onPointerDown={func}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
      <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" />
    </svg>
  </button>
);

export default ButtonDrag;
