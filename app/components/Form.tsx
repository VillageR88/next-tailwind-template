'use client';
import { useState } from 'react';

const Form = () => {
  enum EmailStatus {
    Valid,
    Invalid,
    Typing,
  }
  const [email, setEmail] = useState<string>('');
  const [emailStatus, setEmailStatus] = useState<EmailStatus>(EmailStatus.Typing);
  const checkEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  return (
    <form className="flex w-full" action="#">
      <div className="flex h-full w-full flex-wrap gap-[0.5em]">
        <input
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (checkEmail(email)) {
                setEmailStatus(EmailStatus.Valid);
              } else {
                setEmailStatus(EmailStatus.Invalid);
              }
            } else {
              setEmailStatus(EmailStatus.Typing);
            }
          }}
          aria-label="Email"
          placeholder="Updates in your inbox…"
          type="email"
          className={`w-full rounded-[2em] border-red-400 py-[0.9em] pl-[1.2em] text-[0.8rem] outline outline-1 min-[250px]:w-[19em] md:w-[15.5em] ${
            emailStatus === EmailStatus.Invalid
              ? 'text-[#df4242] outline-[#df4242]'
              : emailStatus === EmailStatus.Valid && 'outline-[#42dfb0]'
          }`}
        />
        <button
          onClick={() => {
            if (checkEmail(email)) {
              setEmailStatus(EmailStatus.Valid);
            } else {
              setEmailStatus(EmailStatus.Invalid);
            }
          }}
          aria-label="Go"
          type="button"
          className="rounded-[2em] bg-[hsl(12,88%,59%)] px-[2.5em] pb-[0.9em] pt-[1.25em] text-[0.75rem] font-[500] text-[hsl(13,100%,96%)] transition hover:bg-[#F98F75] md:px-[2em]"
        >
          Go
        </button>
      </div>
      <span
        className={`${
          emailStatus === EmailStatus.Invalid ? 'block' : 'hidden'
        } absolute ml-[1.5em] mt-[0.8em] text-[0.6rem] italic text-[#df4242]`}
      >
        Please insert a valid email
      </span>
      <span
        className={`${
          emailStatus === EmailStatus.Valid ? 'block' : 'hidden'
        } absolute ml-[1.5em] mt-[0.8em] text-[0.6rem] italic text-[#42dfb0]`}
      >
        Thank you!
      </span>
    </form>
  );
};

export default Form;
