"use client"
import { TbArrowBadgeRight } from 'react-icons/tb'
import PopoverCategories from './PopoverCategories';
import { List, ListItem } from 'konsta/react';
import { useRef, useState } from "react";

export default () => {
   const [popoverManhuas, setPopoverManhuas] = useState(false);
   const [popoverWebtoons, setPopoverWebtoons] = useState(false);
   const [popoverNovels, setPopoverNovels] = useState(false);
   const [popoverMangas, setPopoverMangas] = useState(false);
   const [popoverHQS, setPopoverHQS] = useState(false);

   const popoverManhuasTargetRef = useRef(null);
   const popoverWebtoonsTargetRef = useRef(null);
   const popoverNovelsTargetRef = useRef(null);
   const popoverMangasTargetRef = useRef(null);
   const popoverHQSTargetRef = useRef(null);

   const popoverManhuasOpenFunction = (targetRef) => {
       popoverManhuasTargetRef.current = targetRef;
       setPopoverManhuas(true);
   };
   const popoverWebtoonsOpenFunction = (targetRef) => {
       popoverWebtoonsTargetRef.current = targetRef;
       setPopoverWebtoons(true);
   };
   const popoverNovelsOpenFunction = (targetRef) => {
       popoverNovelsTargetRef.current = targetRef;
       setPopoverNovels(true);
   };
   const popoverMangasOpenFunction = (targetRef) => {
       popoverMangasTargetRef.current = targetRef;
       setPopoverMangas(true);
   };
   const popoverHQSOpenFunction = (targetRef) => {
       popoverHQSTargetRef.current = targetRef;
       setPopoverHQS(true);
   };
   return (
      <>
          <section className="object-flex flex flex-col justify-end items-end">
                    <ul>
                        <li>
                            <button className="text-xs text-white">Inicio</button>
                        </li>
                        <li>
                            <button onClick={() => popoverManhuasOpenFunction(".popover-manhuas")} className="popover-manhuas text-xs text-white flex flex-row w-24 pr-2 justify-between items-center">Manhuas <TbArrowBadgeRight color="white" size="12" /></button>
                        </li>
                        <li>
                            <button onClick={() => popoverWebtoonsOpenFunction(".popover-webtools")} className="popover-webtools text-xs text-white flex flex-row w-24 pr-2 justify-between items-center">Webtoons<TbArrowBadgeRight color="white" size="12" /></button>
                        </li>
                        <li>
                            <button onClick={() => popoverNovelsOpenFunction(".popover-novels")} className="popover-novels text-xs text-white flex flex-row w-24 pr-2 justify-between items-center">Novels<TbArrowBadgeRight color="white" size="12" /></button>
                        </li>
                        <li>
                            <button onClick={() => popoverMangasOpenFunction(".popover-mangas")} className="popover-mangas text-xs text-white flex flex-row w-24 pr-2 justify-between items-center">Mangas<TbArrowBadgeRight color="white" size="12" /></button>
                        </li>
                        <li>
                            <button onClick={() => popoverHQSOpenFunction(".popover-hqs")} className="popover-hqs text-xs text-white flex flex-row w-24 pr-2 justify-between items-center">HQ´S<TbArrowBadgeRight color="white" size="12" /></button>
                        </li>
                    </ul>
                </section>
                
                <>
                <PopoverCategories
                    popoverOpened={popoverManhuas}
                    setPopoverOpened={setPopoverManhuas}
                    popoverTargetRef={popoverManhuasTargetRef}
                    initPopover={() => { }}
                    openPopover={popoverManhuasOpenFunction}
                >
                    <List nested>
                        <ListItem
                            title="List Item 1"
                            link
                        />
                        <ListItem
                            title="Item 2"
                            link
                        />
                        <ListItem
                            title="List Item 3"
                            link
                        />
                        <ListItem
                            title="Item 4"
                            link
                        />
                    </List>
                </PopoverCategories>

                <PopoverCategories
                    popoverOpened={popoverHQS}
                    setPopoverOpened={setPopoverHQS}
                    popoverTargetRef={popoverHQSTargetRef}
                    initPopover={() => { }}
                    openPopover={popoverHQSOpenFunction}
                >
                    <List nested>
                        <ListItem
                            title="List Item 1"
                            link
                        />
                        <ListItem
                            title="Item 2"
                            link
                        />
                        <ListItem
                            title="List Item 3"
                            link
                        />
                        <ListItem
                            title="Item 4"
                            link
                        />
                    </List>
                </PopoverCategories>
                <PopoverCategories
                    popoverOpened={popoverMangas}
                    setPopoverOpened={setPopoverMangas}
                    popoverTargetRef={popoverMangasTargetRef}
                    initPopover={() => { }}
                    openPopover={popoverMangasOpenFunction}
                >
                    <List nested>
                        <ListItem
                            title="List Item 1"
                            link
                        />
                        <ListItem
                            title="Item 2"
                            link
                        />
                        <ListItem
                            title="List Item 3"
                            link
                        />
                        <ListItem
                            title="Item 4"
                            link
                        />
                    </List>
                </PopoverCategories>
                <PopoverCategories
                    popoverOpened={popoverNovels}
                    setPopoverOpened={setPopoverNovels}
                    popoverTargetRef={popoverNovelsTargetRef}
                    initPopover={() => { }}
                    openPopover={popoverNovelsOpenFunction}
                >
                    <List nested>
                        <ListItem
                            title="List Item 1"
                            link
                        />
                        <ListItem
                            title="Item 2"
                            link
                        />
                        <ListItem
                            title="List Item 3"
                            link
                        />
                        <ListItem
                            title="Item 4"
                            link
                        />
                    </List>
                </PopoverCategories>
                <PopoverCategories
                    popoverOpened={popoverWebtoons}
                    setPopoverOpened={setPopoverWebtoons}
                    popoverTargetRef={popoverWebtoonsTargetRef}
                    initPopover={() => { }}
                    openPopover={popoverWebtoonsOpenFunction}
                >
                    <List nested>
                        <ListItem
                            title="List Item 1"
                            link
                        />
                        <ListItem
                            title="Item 2"
                            link
                        />
                        <ListItem
                            title="List Item 3"
                            link
                        />
                        <ListItem
                            title="Item 4"
                            link
                        />
                    </List>
                </PopoverCategories>

            </>
                
                </>
   )
}