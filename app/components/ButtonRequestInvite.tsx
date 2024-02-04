const ButtonRequestInvite = ({ mobileHidden }: { mobileHidden?: boolean }) => (
  <button
    aria-label="Request Invite"
    className={`${
      mobileHidden && 'hidden md:block'
    } w-fit rounded-[2em] bg-slate-200 bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] px-[2.35em] py-[0.8em] text-[0.9rem] text-[white] transition hover:opacity-65`}
  >
    Request Invite
  </button>
);

export default ButtonRequestInvite;
