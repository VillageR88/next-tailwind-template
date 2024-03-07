const Footer = () => (
  <footer className="mt-[-28px] min-h-[308px] w-full bg-[#4D96A9]">
    <div className="opacity flex min-h-[308px] w-full items-center justify-center bg-no-repeat bg-cover bg-center bg-[url('../public/assets/images/desktop/image-footer.jpg')]">
      <div className="flex min-h-[308px] w-full items-center justify-center bg-[#4D96A9] bg-opacity-90">
        <div className="flex min-h-[88px] max-w-[1110px] items-center justify-center gap-[92px]">
          <section className="flex items-center justify-center gap-[125px]">
            <h2 className="max-w-[350px] text-[40px] font-[900] leading-[44px] text-[#FAFAFA]">
              Experience more together
            </h2>
            <p className="max-w-[340px] text-[18px] leading-[26px] text-[#FAFAFA] ">
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
