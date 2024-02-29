'use client';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import StartDiv from '../components/StartDiv';
import supabase from '../lib/supabaseClient';
import SocialMedia from '../lib/enumSocialMedia';
import Link from '../lib/interfaceLink';
import urlPlaceholders from '../lib/urlPlaceholders';
import accessSocialIcons from '../lib/accessSocialIcons';

enum Phase {
  goodOrTyping,
  empty,
  checkAgain,
}
const errorMessages = {
  [Phase.empty]: `Can't be empty`,
  [Phase.checkAgain]: 'Check again',
};
const Links = ({
  passSavePopUp,
  userEmail,
  fetchLinks,
  setFetchLinks,
  fetchLinksInitial,
  setFetchLinksInitial,
  visible,
}: {
  passSavePopUp(): void;
  userEmail: string | undefined;
  fetchLinks: Link[];
  setFetchLinks: Dispatch<SetStateAction<Link[]>>;
  fetchLinksInitial: Link[];
  setFetchLinksInitial: Dispatch<SetStateAction<Link[]>>;
  visible: boolean;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const refs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();
  const [save, setSave] = useState<boolean>(false);
  const [checkInputs, setCheckInputs] = useState<boolean>(false);
  const [draggable, setDraggable] = useState<boolean>(false);
  const [linksErrorInfo, setLinksErrorInfo] = useState<Phase[]>([]);
  const [listOpen, setListOpen] = useState<SocialMedia | null>(null);
  const noChange = JSON.stringify(fetchLinks) === JSON.stringify(fetchLinksInitial);
  useEffect(() => {
    const handleClick = () => {
      setListOpen(null);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setListOpen(null);
        refs.current.forEach((item) => {
          item.blur();
        });
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [listOpen]);

  useEffect(() => {
    if (checkInputs) {
      const check = () => {
        const errorInfo: Phase[] = [];
        setFetchLinks((prev) => {
          const deepCopy = [...prev].map((item) => ({ ...item }));
          deepCopy.map((item) => {
            item.url = item.url.toLowerCase();
          });
          return deepCopy;
        });

        for (const link of fetchLinks) {
          if (link.url === '') errorInfo.push(Phase.empty);
          else if (
            !link.url.match(
              /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
            )
          )
            errorInfo.push(Phase.checkAgain);
          else errorInfo.push(Phase.goodOrTyping);
        }
        setLinksErrorInfo(errorInfo);
        setCheckInputs(false);
      };
      check();
      setSave(true);
    }
  }, [checkInputs, fetchLinks, setFetchLinks]);

  useEffect(() => {
    if (save && !linksErrorInfo.some((x: number) => x !== 0)) {
      passSavePopUp();
      const updateData = async () => {
        const { data, error } = await supabase
          .from('linkSharingAppData')
          .upsert({ email: userEmail, linksJSON: fetchLinks }, { onConflict: 'email' })
          .select();
        if (error) {
          console.error(error);
        } else {
          console.log(data);
        }
      };
      void updateData();
      setFetchLinksInitial([...fetchLinks].map((item) => ({ ...item })));
    }
    setSave(false);
  }, [
    fetchLinks,
    fetchLinksInitial,
    linksErrorInfo,
    passSavePopUp,
    save,
    setFetchLinks,
    setFetchLinksInitial,
    userEmail,
  ]);

  useEffect(() => {
    if (listOpen === null) {
      ref.current?.blur();
    }
  }, [listOpen]);

  const titleAvailable = () => {
    for (const i in SocialMedia) {
      if (fetchLinks.some((item) => item.title === SocialMedia[i as keyof typeof SocialMedia])) {
        if (fetchLinks.length === Object.keys(SocialMedia).length) break;
        continue;
      } else {
        return SocialMedia[i as keyof typeof SocialMedia];
      }
    }
  };
  const listAvailable = () => {
    return Object.values(SocialMedia).filter((item) => !fetchLinks.find((link) => link.title === item)?.title);
  };
  return (
    <div className={`${visible ? 'flex' : 'hidden'} h-full w-full flex-col items-center justify-center`}>
      <div className="flex h-full w-full flex-col justify-between gap-[40px] p-[24px] sm:h-[739px] sm:p-[40px]">
        <div className="flex h-full w-full flex-col justify-between gap-[8px] sm:h-[80px] sm:gap-0">
          <h1 className="headingM text-[#333333]">Customize your links</h1>
          <p className="text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <div className="flex h-full w-full flex-col justify-between gap-[24px] sm:h-[539px]">
          <button
            onClick={() => {
              const newTitle = titleAvailable();
              if (!newTitle) return;
              setFetchLinks(
                fetchLinks.concat({
                  id: fetchLinks.length + 1,
                  title: newTitle,
                  url: '',
                }),
              );
            }}
            className="buttonSecondary min-h-[46px] w-full"
          >
            + Add new link
          </button>
          {fetchLinks.length === 0 ? (
            <StartDiv />
          ) : (
            <div className="flex h-[469px] w-full flex-col gap-[24px] overflow-auto">
              {fetchLinks.map((item, index) => {
                return (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      !noChange && setCheckInputs(true);
                    }}
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
                      const newLinks = [...fetchLinks];
                      const item = newLinks.splice(from, 1)[0];
                      newLinks.splice(to, 0, item);
                      setFetchLinks(newLinks);
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
                            priority
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
                          const newLinks = [...fetchLinks];
                          newLinks.splice(index, 1);
                          setFetchLinks(newLinks);
                        }}
                        className="bodyM h-[24px] w-[61px] text-[#737373]"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex h-[70px] w-full flex-col justify-between">
                      <label htmlFor={'platform' + index} className="bodyS text-[#333333]">
                        Platform
                      </label>
                      <button
                        id={'platform' + index}
                        ref={listOpen !== item.title ? ref : undefined}
                        onClick={() => {
                          if (listOpen === item.title) {
                            setListOpen(null);
                          } else setListOpen(item.title);
                        }}
                        type="button"
                        className="textField textFieldEnhancedFocus flex h-[48px] w-full items-center justify-between rounded-[8px] bg-white p-[16px]"
                      >
                        <div className="flex items-center gap-[12px]">
                          <Image
                            priority
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
                          <span className="headingS font-[500] text-[#333333]">{item.title}</span>
                        </div>
                        <Image
                          priority
                          className="h-[10px] w-[14px]"
                          width={5}
                          height={5}
                          src={'/assets/images/icon-chevron-down.svg'}
                          alt="edit"
                        />
                      </button>
                    </div>
                    <div>
                      <div className="h-0 w-full">
                        {listOpen === item.title && (
                          <ul className="relative flex h-fit w-full flex-col gap-[12px] rounded-[8px] border-[1px] border-[#D9D9D9] bg-white px-[16px] py-[12px]">
                            {Object.values(SocialMedia).map((itemSocialMedia, indexOfSocialMedia) => (
                              <li className="flex flex-col gap-[12px] text-[#333333]" key={indexOfSocialMedia}>
                                <button
                                  onClick={() => {
                                    const newLinks = [...fetchLinks];
                                    newLinks.map((link) => {
                                      if (link.title === itemSocialMedia) {
                                        link.title = item.title;
                                      }
                                    });
                                    newLinks[index].title = itemSocialMedia;
                                    newLinks[index].url = '';
                                    setFetchLinks(newLinks);
                                  }}
                                  className={`list ${listOpen.includes(itemSocialMedia) && 'listActive'}`}
                                  disabled={listAvailable().includes(itemSocialMedia) ? false : true}
                                >
                                  <div className="flex h-[24px] items-center gap-[12px] *:fill-current">
                                    {accessSocialIcons[itemSocialMedia]}
                                    <p className="headingS font-[500]">{itemSocialMedia}</p>
                                  </div>
                                </button>
                                {indexOfSocialMedia !== itemSocialMedia.length - 2 && (
                                  <hr className="border-[#D9D9D9]" />
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="flex h-[70px] w-full flex-col justify-between">
                        <label htmlFor={'url' + index} className="bodyS text-[#333333]">
                          Link
                        </label>
                        <div className="w-full items-center gap-[12px]">
                          <input
                            ref={(el) => (el !== null ? (refs.current[index] = el) : null)}
                            onKeyDown={() => {
                              if (linksErrorInfo[index] === Phase.goodOrTyping) return;
                              const newLinksErrorInfo = [...linksErrorInfo];
                              setLinksErrorInfo(
                                newLinksErrorInfo.map((item, indexItem) => {
                                  if (indexItem === index) return Phase.goodOrTyping;
                                  return item;
                                }),
                              );
                            }}
                            id={'url' + index}
                            name={'url' + index}
                            content="/assets/images/icon-link.svg"
                            type="text"
                            placeholder={urlPlaceholders[item.title as keyof typeof urlPlaceholders]}
                            value={fetchLinks[index].url}
                            onChange={(e) => {
                              const newLinks = [...fetchLinks];
                              newLinks[index].url = e.target.value;
                              setFetchLinks(newLinks);
                            }}
                            className={`${
                              (linksErrorInfo[index] === Phase.empty || linksErrorInfo[index] === Phase.checkAgain) &&
                              'textFieldError'
                            } textField textFieldEnhancedFocus h-[48px] w-full rounded-[8px] bg-[url('/assets/images/icon-link.svg')] bg-[16px] bg-no-repeat pl-[44px] pr-[16px] text-[#333333]`}
                          />
                          {linksErrorInfo[index] !== Phase.goodOrTyping && (
                            <div className="flex h-0 w-full justify-end">
                              <span className="bodyS mr-[16px] mt-[-32px] text-[#FF3939]">
                                {errorMessages[linksErrorInfo[index] as keyof typeof errorMessages]}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="h-full w-full sm:h-[95px]">
        <hr className="border-[#D9D9D9]" />
        <div className="flex flex-col-reverse items-center justify-between gap-[18px] px-[16px] py-[24px] sm:flex-row">
          <button
            onClick={() => {
              void supabase.auth.signOut();
              router.replace('/login');
            }}
            className="buttonSecondary headingS min-h-[46px] w-full font-[500] sm:w-[91px]"
          >
            Log Out
          </button>
          <div className="flex w-full flex-col-reverse gap-[18px] sm:w-fit sm:flex-row">
            <button
              onClick={() => {
                setFetchLinks([...fetchLinksInitial].map((item) => ({ ...item })));
              }}
              className="buttonSecondary headingS min-h-[46px] w-full font-[500] sm:w-[91px]"
            >
              Cancel
            </button>
            <button
              disabled={noChange}
              onClick={() => {
                setCheckInputs(true);
              }}
              className="buttonPrimary headingS min-h-[46px] w-full font-[500] sm:w-[91px]"
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
