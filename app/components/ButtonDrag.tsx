import { Dispatch, SetStateAction } from 'react';

const ButtonDrag = ({
  func,
  mouseDownHandler,
}: {
  func(arg: React.PointerEvent): void;
  mouseDownHandler?: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onMouseDown={() => {
        mouseDownHandler && mouseDownHandler(true);
      }}
      onMouseUp={() => {
        mouseDownHandler && mouseDownHandler(false);
      }}
      className="size-[20px] hover:cursor-grab active:cursor-grabbing"
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
