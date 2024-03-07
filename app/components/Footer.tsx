const Footer = () => (
  <footer className="mt-[-28px] min-h-[428px] w-full bg-[#4D96A9] xl:min-h-[308px]">
    <div className="opacity flex min-h-[428px] w-full items-center justify-center bg-[url('../public/assets/images/tablet/image-footer.jpg')] bg-cover bg-center bg-no-repeat min-[800px]:bg-[url('../public/assets/images/desktop/image-footer.jpg')] xl:min-h-[308px]">
      <div className="flex min-h-[428px] w-full  items-center justify-center bg-[#4D96A9] bg-opacity-90 xl:min-h-[308px]">
        <div className="flex min-h-[88px] max-w-[1110px] flex-col items-center justify-center gap-[40px] xl:flex-row xl:gap-[92px]">
          <section className="flex flex-col items-center justify-center gap-[32px] text-center xl:flex-row xl:gap-[125px] xl:text-left">
            <h2 className="max-w-[350px] text-[40px] font-[900] leading-[44px] text-[#FAFAFA]">
              Experience more together
            </h2>
            <p className="max-w-[560px] text-[18px] leading-[26px] text-[#FAFAFA] xl:max-w-[340px] ">
              Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
            </p>
          </section>
          <button
            aria-label="Download ver v1.3 button"
            className="flex h-[58px] w-[193px] items-center justify-center gap-[4px] rounded-[29px] bg-[#855FB1] font-[900] transition hover:bg-[#B18BDD]"
          >
            <span className="text-white">Download</span>
            <span className="text-[#D9B8FF]">v1.3</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
