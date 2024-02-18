import StartDiv from '../components/StartDiv';
import supabase from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';

const Links = () => {
  const router = useRouter();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center ">
      <div className="flex h-[739px] w-full flex-col justify-between p-[40px]">
        <div className="flex h-[80px] w-full flex-col justify-between">
          <h1 className="headingM text-[#333333]">Customize your links</h1>
          <p className="text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <div className="flex h-[539px] w-full flex-col justify-between">
          <button className="buttonSecondary h-[46px] w-full">+ Add new link</button>
          <StartDiv />
        </div>
      </div>
      <div className="h-[95px} w-full ">
        <hr className="border-[#D9D9D9]" />
        <div className="flex items-center justify-between px-[40px] py-[24px]">
          <button
            onClick={() => {
              void supabase.auth.signOut();
              router.replace('/login');
            }}
            className="buttonSecondary headingS h-[46px] w-[91px]"
          >
            Log Out
          </button>
          <div className="flex gap-[18px]">
            <button className="buttonSecondary headingS h-[46px] w-[91px]">Cancel</button>
            <button disabled className="buttonPrimary headingS h-[46px] w-[91px]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
