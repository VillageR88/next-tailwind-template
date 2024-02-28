'use client';
import { Dispatch, SetStateAction } from 'react';

const Modal = ({
  emailValue,
  showModal,
  setShowModal,
}: {
  emailValue: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  {
    return (
      <div
        className={`${
          showModal ? 'opacity-100' : 'pointer-events-none select-none opacity-0'
        } absolute left-0 top-0 z-20 flex h-screen w-screen items-center justify-center transition duration-200`}
      >
        <div className="headingS border-1 max-w-screen flex w-[500px] flex-col gap-4 rounded-[12px] border bg-white p-[30px] text-center">
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
                setShowModal(false);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
