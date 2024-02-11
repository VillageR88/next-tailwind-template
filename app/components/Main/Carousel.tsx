const Carousel = () => {
  return (
    <div className="flex h-[17.5em] w-full items-center justify-center rounded-[0.5em] bg-[hsl(0,0%,98%)]">
      <div className="flex h-[100%] w-[80%] items-center justify-between">
        <div className="flex h-[3.5em] w-[3.5em] items-center justify-center rounded-[50%] bg-[hsl(0,0%,100%)]">
          <p>image</p>{' '}
        </div>
        <div className="flex h-[3.5em] w-[3.5em] items-center justify-center rounded-[50%] bg-[hsl(0,0%,100%)]">
          <p>image</p>{' '}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
