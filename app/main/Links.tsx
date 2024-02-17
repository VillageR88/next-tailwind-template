const Links = () => {
  return (
    <div className="flex h-full w-full flex-col p-[40px]">
      <div className="flex h-[739px] w-full flex-col justify-between">
        <div className="flex h-[80px] w-full flex-col justify-between">
          <h1 className="headingM text-[#333333]">Customize your links</h1>
          <p className="text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <div className="flex h-[539px] w-full flex-col">
          <button className="buttonSecondary h-[46px] w-full">+ Add new link</button>
        </div>
      </div>
      <div className="h-[95px] w-full">DOWN</div>
    </div>
  );
};

export default Links;
