'use client';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import StartDiv from '../components/StartDiv';
import supabase from '../lib/supabaseClient';
import SocialMedia from '../lib/enumSocialMedia';
import Link from '../lib/interfaceLink';
import urlPlaceholders from '../lib/urlPlaceholders';
import accessSocialIcons from '../lib/accessSocialIcons';

const Links = ({
  passSocialInfoToMain,
  userEmail,
  fetchLinks,
}: {
  passSocialInfoToMain(arg0?: string[]): void;
  userEmail: string | undefined;
  fetchLinks: Link[];
}) => {
  const router = useRouter();
  const [save, setSave] = useState<boolean>(false);
  const [draggable, setDraggable] = useState<boolean>(false);
  const [linksInitialRef, setLinksInitialRef] = useState<Link[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [listOpen, setListOpen] = useState<SocialMedia | null>(null);
  const titlesFromLinks = useMemo(() => {
    return links.map((item) => item.title);
  }, [links]);

  useEffect(() => {
    setLinks(fetchLinks);
    setLinksInitialRef(fetchLinks);
  }, [fetchLinks]);

  useEffect(() => {
    passSocialInfoToMain(titlesFromLinks);
  }, [passSocialInfoToMain, titlesFromLinks]);

  useEffect(() => {
    const handleClick = () => {
      setListOpen(null);
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [listOpen]);

  useEffect(() => {
    if (save) {
      setLinksInitialRef(links);
      const updateData = async () => {
        const { data, error } = await supabase
          .from('linkSharingAppData')
          .update({ linksJSON: links })
          .eq('email', userEmail)
          .select();
        if (error) {
          console.error(error);
        } else {
          console.log(data);
        }
      };

      void updateData();
      setSave(false);
    }
  }, [links, save, userEmail]);

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
  const listAvailable = () => {
    return Object.values(SocialMedia).filter((item) => !links.find((link) => link.title === item)?.title);
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
                    onDragStart={(e) => {
                      e.dataTransfer.setData('text/plain', index.toString());
                      e.dataTransfer.effectAllowed = 'move';
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      const from = Number(e.dataTransfer.getData('text/plain'));
                      const to = index;
                      const newLinks = [...links];
                      const item = newLinks.splice(from, 1)[0];
                      newLinks.splice(to, 0, item);
                      setLinks(newLinks);
                    }}
                    draggable={draggable}
                    key={index}
                    className="flex min-h-[228px] w-full flex-col gap-[12px] rounded-[8px] bg-[#FAFAFA] p-[20px]"
                  >
                    <div className="flex h-[24px] items-center justify-between">
                      <div className="flex gap-[8px]">
                        <button
                          onMouseEnter={() => {
                            setDraggable(true);
                          }}
                          onMouseLeave={() => {
                            setDraggable(false);
                          }}
                          type="button"
                        >
                          <Image
                            draggable={false}
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
                        onClick={() => {
                          if (listOpen === item.title) setListOpen(null);
                          else setListOpen(item.title);
                        }}
                        type="button"
                        className="textField flex h-[48px] w-full items-center justify-between rounded-[8px] bg-white p-[16px]"
                      >
                        <div className="flex items-center gap-[12px]">
                          <Image
                            draggable={false}
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
                          width={5}
                          height={5}
                          src={'/assets/images/icon-chevron-down.svg'}
                          alt="edit"
                        />
                      </button>
                    </div>
                    <div>
                      <div className="h-0">
                        {listOpen === item.title && (
                          <ul className="relative flex h-[20em] w-full flex-col bg-white">
                            {Object.values(SocialMedia).map((itemSocialMedia, indexOfSocialMedia) => (
                              <li className="text-black" key={indexOfSocialMedia}>
                                <button
                                  onClick={() => {
                                    const newLinks = [...links];
                                    newLinks[index].title = itemSocialMedia;
                                    newLinks[index].url = '';
                                    setLinks(newLinks);
                                  }}
                                  className={`list ${listOpen.includes(itemSocialMedia) && 'listActive'}`}
                                  disabled={listAvailable().includes(itemSocialMedia) ? false : true}
                                >
                                  <div className="flex items-center *:fill-current">
                                    {accessSocialIcons[itemSocialMedia as keyof typeof accessSocialIcons]}
                                    <span>{itemSocialMedia}</span>
                                  </div>
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="flex h-[70px] w-full flex-col justify-between">
                        <label className="bodyS">Link</label>
                        <input
                          type="text"
                          placeholder={urlPlaceholders[item.title as keyof typeof urlPlaceholders]}
                          value={item.url}
                          onChange={(e) => {
                            const newLinks = [...links];
                            newLinks[index].url = e.target.value;
                            setLinks(newLinks);
                          }}
                          className="textField h-[48px] w-full rounded-[8px] border-[1px] border-[#D9D9D9] px-[16px]"
                        />
                      </div>
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
            <button
              onClick={() => {
                setLinks(linksInitialRef);
              }}
              className="buttonSecondary headingS h-[46px] w-[91px]"
            >
              Cancel
            </button>
            <button
              disabled={links === linksInitialRef}
              onClick={() => {
                setSave(true);
              }}
              className="buttonPrimary headingS h-[46px] w-[91px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
