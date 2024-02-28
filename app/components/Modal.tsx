'use client';
import { Dispatch, SetStateAction } from 'react';
import supabase from '../lib/supabaseClient';

const Modal = ({
  emailValue,
  showModal,
  setShowModal,
}: {
  emailValue: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const handlePasswordReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(emailValue);
    if (error) {
      console.log('error', error);
    }
  };

  return (
    <div
      className={`${
        showModal ? 'opacity-100' : 'pointer-events-none select-none opacity-0'
      } absolute left-0 top-0 z-20 flex h-screen w-screen items-center justify-center transition duration-200`}
    >
      <div className="headingS border-1 max-w-screen flex w-[500px] flex-col gap-4 rounded-[12px] border border-[#beadff] bg-white p-[30px] text-center shadow-[0_0px_30px_3px_#beadff]">
        <h2 className="leading-6">
          The provided email address is already in use. <br />
          Would you like us to send a password reset link to this email: <br /> {emailValue}?
        </h2>
        <div className="flex w-full items-center justify-center gap-[10px]">
          <button
            type="button"
            className="buttonSecondary h-9 w-20"
            onClick={() => {
              setShowModal(false);
            }}
          >
            No
          </button>
          <button
            type="button"
            className="buttonPrimary h-9 w-20"
            onClick={() => {
              alert(
                'Password reset link will be sent to your email. Please check your email. Due to server limitations, time to receive the email may vary. Thank you!',
              );
              setShowModal(false);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
