// "use client";
// import {
//   useState,
//   useEffect,
//   ForwardRefExoticComponent,
//   SVGProps,
// } from "react";

// import { FaceSmileIcon as FaceSmileIconOutline } from "@heroicons/react/24/outline";
// import {
//   Label,
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
//   Transition,
// } from "@headlessui/react";
// import {
//   FaceFrownIcon,
//   FaceSmileIcon as FaceSmileIconMini,
//   FireIcon,
//   HandThumbUpIcon,
//   HeartIcon,
//   XMarkIcon,
// } from "@heroicons/react/20/solid";
// import { createContent, getContent, getEmoji } from "@/apis/guestbook";
// import Image from "next/image";

// interface Content {
//   content: string;
// }

// interface Emoji {
//   emoji: string;
// }

// interface Create {
//   content: string;
//   emoji: string;
// }

// interface Mood {
//   name: string;
//   value: string | null;
//   icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
//   iconColor: string;
//   bgColor: string;
// }
// const moods: Mood[] = [
//   {
//     name: "excited",
//     value: "excited",
//     icon: FireIcon,
//     iconColor: "text-white",
//     bgColor: "bg-red-500",
//   },
//   {
//     name: "loved",
//     value: "loved",
//     icon: HeartIcon,
//     iconColor: "text-white",
//     bgColor: "bg-pink-400",
//   },
//   {
//     name: "happy",
//     value: "happy",
//     icon: FaceSmileIconMini,
//     iconColor: "text-white",
//     bgColor: "bg-green-400",
//   },
//   {
//     name: "sad",
//     value: "sad",
//     icon: FaceFrownIcon,
//     iconColor: "text-white",
//     bgColor: "bg-yellow-400",
//   },
//   {
//     name: "thumbsy",
//     value: "thumbsy",
//     icon: HandThumbUpIcon,
//     iconColor: "text-white",
//     bgColor: "bg-blue-500",
//   },
//   {
//     name: "I don't know",
//     value: null,
//     icon: XMarkIcon,
//     iconColor: "text-gray-400",
//     bgColor: "bg-transparent",
//   },
// ];

// function classNames(...classes: (string | undefined | null)[]): string {
//   return classes.filter(Boolean).join(" ");
// }

// const GuestbookPage = () => {
//   const [selected, setSelected] = useState(moods[5]);

//   const [param, setParam] = useState<Create>({
//     content: "",
//     emoji: selected.name,
//   });

//   const [content, setContent] = useState<Content[]>([]);
//   const [emoji, setEmoji] = useState<Emoji[]>([]);

//   useEffect(() => {
//     setParam((prev) => ({ ...prev, emoji: selected.name }));
//   }, [selected]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const resultGetContent = await getContent();
//       setContent((prev) => [...prev, ...resultGetContent]);

//       const resultGetEmoji = await getEmoji();
//       setEmoji((prev) => [...prev, ...resultGetEmoji]);

//       // await fetchContent();
//       // await fetchCEmoji();
//     };

//     fetchData();
//   }, []);

//   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setParam({
//       ...param,
//       content: e.target.value,
//     });
//   };

//   const handlePost = async (e: React.FormEvent) => {
//     e.preventDefault();

//     await createContent(param);
//     await fetchContent();
//     await fetchCEmoji();
//   };

//   const fetchContent = async () => {
//     try {
//       const result = await getContent();
//       setContent((prev) => [...prev, ...result]);
//     } catch (error) {
//       console.error("Error fetching content:", error);
//     }
//   };

//   const fetchCEmoji = async () => {
//     try {
//       const result = await getEmoji();
//       setEmoji((prev) => [...prev, ...result]);
//     } catch (error) {
//       console.error("Error fetching content:", error);
//     }
//   };

//   return (
//     <div
//       id="guestbook"
//       className="mt-10 flex flex-col items-center justify-center selection:bg-brown_color pb-24 "
//     >
//       <h2 className="my-2 font-dohyeon text-brown_color text-xl md:text-3xl selection:bg-redbrown_color">
//         Guestbook
//       </h2>
//       <div className="w-3/4 mt-10 ">
//         <div className="flex-shrink-0">
//           {/* <Image
//             className="inline-block h-10 w-10 rounded-full"
//             src={generalProfile}
//             alt="Sample Image"
//             width={256}
//             height={256}
//           /> */}
//         </div>
//         <div className="min-w-0 flex-1 border-3">
//           <form onSubmit={handlePost}>
//             <div className=" border-2  focus-within:border-indigo-600">
//               <label htmlFor="comment" className="sr-only">
//                 Add your comment
//               </label>
//               <textarea
//                 rows={3}
//                 onChange={handleTextChange}
//                 name="comment"
//                 id="comment"
//                 className="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6"
//                 placeholder="Add your comment..."
//                 defaultValue={""}
//               />
//             </div>
//             <div className="flex justify-between pt-2">
//               <div className="space-x-5">
//                 <div className="flow-root">
//                   <Listbox value={selected} onChange={setSelected}>
//                     {({ open }) => (
//                       <>
//                         <Label className="sr-only">Your mood</Label>
//                         <div className="relative">
//                           <ListboxButton className="relative -m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500 ">
//                             <span className="flex items-center justify-center">
//                               {selected.value === null ? (
//                                 <span>
//                                   <FaceSmileIconOutline
//                                     className="h-6 w-6 flex-shrink-0"
//                                     aria-hidden="true"
//                                   />
//                                   <span className="sr-only">Add your mood</span>
//                                 </span>
//                               ) : (
//                                 <span>
//                                   <span
//                                     className={classNames(
//                                       selected.bgColor,
//                                       "flex h-8 w-8 items-center justify-center rounded-full"
//                                     )}
//                                   >
//                                     <selected.icon
//                                       className="h-5 w-5 flex-shrink-0 text-white"
//                                       aria-hidden="true"
//                                     />
//                                   </span>
//                                   <span className="sr-only">
//                                     {selected.name}
//                                   </span>
//                                 </span>
//                               )}
//                             </span>
//                           </ListboxButton>

//                           <Transition
//                             show={open}
//                             leave="transition ease-in duration-100"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                           >
//                             <ListboxOptions className="absolute z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
//                               {moods.map((mood) => (
//                                 <ListboxOption
//                                   key={mood.value}
//                                   className={({ focus }) =>
//                                     classNames(
//                                       focus ? "bg-gray-100" : "",
//                                       !focus ? "bg-white" : "",
//                                       "relative cursor-default select-none px-3 py-2"
//                                     )
//                                   }
//                                   value={mood}
//                                 >
//                                   <div className="flex items-center">
//                                     <div
//                                       className={classNames(
//                                         mood.bgColor,
//                                         "flex h-8 w-8 items-center justify-center rounded-full"
//                                       )}
//                                     >
//                                       <mood.icon
//                                         className={classNames(
//                                           mood.iconColor,
//                                           "h-5 w-5 flex-shrink-0"
//                                         )}
//                                         aria-hidden="true"
//                                       />
//                                     </div>
//                                     <span className="ml-3 block truncate font-medium">
//                                       {mood.value}
//                                     </span>
//                                   </div>
//                                 </ListboxOption>
//                               ))}
//                             </ListboxOptions>
//                           </Transition>
//                         </div>
//                       </>
//                     )}
//                   </Listbox>
//                 </div>
//               </div>
//               <div className="flex-shrink-0">
//                 <button
//                   type="submit"
//                   className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Post
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="w-full p-4 mt-10 border border-dashed rounded-2xl border-red_color">
//           <div className="flex flex-row justify-between items-center">
//             <div>
//               {content.map((item, index) => (
//                 <div key={index}>{item.content}</div>
//               ))}
//             </div>
//             <div>
//               {emoji.map((item, index) => {
//                 const mood = moods.find((mood) => mood.name === item.emoji);
//                 return (
//                   <div key={index}>
//                     {mood?.icon && <mood.icon className="h-5 w-5 my-1" />}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GuestbookPage;

"use client";
import {
  useState,
  useEffect,
  ForwardRefExoticComponent,
  SVGProps,
} from "react";

import { FaceSmileIcon as FaceSmileIconOutline } from "@heroicons/react/24/outline";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { createContent, getContent, getEmoji } from "@/apis/guestbook";
import Image from "next/image";

interface Content {
  content: string;
}

interface Emoji {
  emoji: string;
}

interface Create {
  content: string;
  emoji: string;
}

interface Mood {
  name: string;
  value: string | null;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
  iconColor: string;
  bgColor: string;
}
const moods: Mood[] = [
  {
    name: "excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "happy",
    value: "happy",
    icon: FaceSmileIconMini,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "sad",
    value: "sad",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "thumbsy",
    value: "thumbsy",
    icon: HandThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I don't know",
    value: null,
    icon: XMarkIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

function classNames(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

const GuestbookPage = () => {
  const [selected, setSelected] = useState(moods[5]);

  const [param, setParam] = useState<Create>({
    content: "",
    emoji: selected.name,
  });

  const [content, setContent] = useState<Content[]>([]);
  const [emoji, setEmoji] = useState<Emoji[]>([]);

  useEffect(() => {
    setParam((prev) => ({ ...prev, emoji: selected.name }));
  }, [selected]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const resultGetContent = await getContent();
        const resultGetEmoji = await getEmoji();

        if (isMounted) {
          setContent(resultGetContent);
          setEmoji(resultGetEmoji);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setParam({
      ...param,
      content: e.target.value,
    });
  };

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createContent(param);
      await fetchContent();
      await fetchCEmoji();
    } catch (error) {
      console.error("Error posting content:", error);
    }
  };

  const fetchContent = async () => {
    try {
      const result = await getContent();
      setContent(result);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  const fetchCEmoji = async () => {
    try {
      const result = await getEmoji();
      setEmoji(result);
    } catch (error) {
      console.error("Error fetching emoji:", error);
    }
  };

  return (
    <div
      id="guestbook"
      className="mt-10 flex flex-col items-center justify-center selection:bg-brown_color pb-24 "
    >
      <h2 className="my-2 font-dohyeon text-brown_color text-xl md:text-3xl selection:bg-redbrown_color">
        Guestbook
      </h2>
      <div className="w-3/4 mt-10 ">
        <div className="flex-shrink-0">
          {/* <Image
            className="inline-block h-10 w-10 rounded-full"
            src={generalProfile}
            alt="Sample Image"
            width={256}
            height={256}
          /> */}
        </div>
        <div className="min-w-0 flex-1 border-3">
          <form onSubmit={handlePost}>
            <div className=" border-2  focus-within:border-indigo-600">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                onChange={handleTextChange}
                name="comment"
                id="comment"
                className="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Add your comment..."
                defaultValue={""}
              />
            </div>
            <div className="flex justify-between pt-2">
              <div className="space-x-5">
                <div className="flow-root">
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <Label className="sr-only">Your mood</Label>
                        <div className="relative">
                          <ListboxButton className="relative -m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500 ">
                            <span className="flex items-center justify-center">
                              {selected.value === null ? (
                                <span>
                                  <FaceSmileIconOutline
                                    className="h-6 w-6 flex-shrink-0"
                                    aria-hidden="true"
                                  />
                                  <span className="sr-only">Add your mood</span>
                                </span>
                              ) : (
                                <span>
                                  <span
                                    className={classNames(
                                      selected.bgColor,
                                      "flex h-8 w-8 items-center justify-center rounded-full"
                                    )}
                                  >
                                    <selected.icon
                                      className="h-5 w-5 flex-shrink-0 text-white"
                                      aria-hidden="true"
                                    />
                                  </span>
                                  <span className="sr-only">
                                    {selected.name}
                                  </span>
                                </span>
                              )}
                            </span>
                          </ListboxButton>

                          <Transition
                            show={open}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <ListboxOptions className="absolute z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                              {moods.map((mood) => (
                                <ListboxOption
                                  key={mood.value}
                                  className={({ focus }) =>
                                    classNames(
                                      focus ? "bg-gray-100" : "",
                                      !focus ? "bg-white" : "",
                                      "relative cursor-default select-none px-3 py-2"
                                    )
                                  }
                                  value={mood}
                                >
                                  <div className="flex items-center">
                                    <div
                                      className={classNames(
                                        mood.bgColor,
                                        "flex h-8 w-8 items-center justify-center rounded-full"
                                      )}
                                    >
                                      <mood.icon
                                        className={classNames(
                                          mood.iconColor,
                                          "h-5 w-5 flex-shrink-0"
                                        )}
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <span className="ml-3 block truncate font-medium">
                                      {mood.value}
                                    </span>
                                  </div>
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full p-4 mt-10 border border-dashed rounded-2xl border-red_color">
          <div className="flex flex-row justify-between items-center">
            <div>
              {content.map((item, index) => (
                <div key={index}>{item.content}</div>
              ))}
            </div>
            <div>
              {emoji.map((item, index) => {
                const mood = moods.find((mood) => mood.name === item.emoji);
                return (
                  <div key={index}>
                    {mood?.icon && <mood.icon className="h-5 w-5 my-1" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestbookPage;
