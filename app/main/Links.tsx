'use client';
import { useState } from 'react';
import Image from 'next/image';
import StartDiv from '../components/StartDiv';
import supabase from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';

enum SocialMedia {
  github = 'Github',
  frontendMentor = 'Frontend Mentor',
  twitter = 'Twitter',
  linkedIn = 'LinkedIn',
  youtube = 'Youtube',
  facebook = 'Facebook',
  twitch = 'Twitch',
  devTo = 'Dev.to',
  codewars = 'Codewars',
  freeCodeCamp = 'freeCodeCamp',
  gitLab = 'GitLab',
  hashnode = 'Hashnode',
  stackOverflow = 'Stack Overflow',
}

interface Link {
  id: number;
  title: SocialMedia;
  url: string;
}

const Links = () => {
  const router = useRouter();
  const [links, setLinks] = useState<Link[]>([]);
  const titleAvailable = () => {
    for (const i in SocialMedia) {
      if (links.some((item) => item.title === SocialMedia[i as keyof typeof SocialMedia])) {
        if (links.length === Object.keys(SocialMedia).length) break;
        continue;
      } else {
        return SocialMedia[i as keyof typeof SocialMedia];
      }
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center ">
      <div className="flex h-[739px] w-full flex-col justify-between p-[40px]">
        <div className="flex h-[80px] w-full flex-col justify-between">
          <h1 className="headingM text-[#333333]">Customize your links</h1>
          <p className="text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <div className="flex h-[539px] w-full flex-col justify-between">
          <button
            onClick={() => {
              const newTitle = titleAvailable();
              if (!newTitle) return;
              setLinks(
                links.concat({
                  id: links.length + 1,
                  title: newTitle,
                  url: '',
                }),
              );
            }}
            className="buttonSecondary h-[46px] w-full"
          >
            + Add new link
          </button>
          {links.length === 0 ? (
            <StartDiv />
          ) : (
            <div className="flex h-[469px] w-full flex-col gap-[24px] overflow-auto">
              {links.map((item, index) => {
                return (
                  <form
                    key={index}
                    className="flex min-h-[228px] w-full flex-col gap-[12px] rounded-[8px] bg-[#FAFAFA] p-[20px]"
                  >
                    <div className="flex h-[24px] items-center justify-between">
                      <div className="flex gap-[8px]">
                        <button type="button">
                          <Image
                            className="h-fit w-[12px]"
                            width={10}
                            height={10}
                            src={'/assets/images/icon-drag-and-drop.svg'}
                            alt="drag and drop"
                          />
                        </button>
                        <h2 className="font-[700] text-[#737373]">{'Link #' + (index + 1)}</h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const newLinks = [...links];
                          newLinks.splice(index, 1);
                          setLinks(newLinks);
                        }}
                        className="bodyM h-[24px] w-[61px] text-[#737373]"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex h-[70px] w-full flex-col justify-between">
                      <label className="bodyS">Platform</label>
                      <button
                        type="button"
                        className="textField flex h-[48px] w-full items-center justify-between rounded-[8px] bg-white p-[16px]"
                      >
                        <div className="flex items-center gap-[12px]">
                          <Image
                            className="h-[16px] w-[16px]"
                            width={10}
                            height={10}
                            src={`/assets/images/icon-${item.title
                              .toLowerCase()
                              .replace(' ', '-')
                              .replace('.', '')}.svg`}
                            alt={item.title}
                          />
                          <span className="headingS">{item.title}</span>
                        </div>
                        <Image
                          className="h-[10px] w-[14px]"
                          width={10}
                          height={10}
                          src={'/assets/images/icon-chevron-down.svg'}
                          alt="edit"
                        />
                      </button>
                    </div>
                    <div className="flex h-[70px] w-full flex-col justify-between">
                      <label className="bodyS">Link</label>
                      <input
                        type="text"
                        placeholder="https://"
                        value={item.url}
                        onChange={(e) => {
                          const newLinks = [...links];
                          newLinks[index].url = e.target.value;
                          setLinks(newLinks);
                        }}
                        className="textField h-[48px] w-full rounded-[8px] border-[1px] border-[#D9D9D9] px-[16px]"
                      />
                    </div>
                  </form>
                );
              })}
            </div>
          )}
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
