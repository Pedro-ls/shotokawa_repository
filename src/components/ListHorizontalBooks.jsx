"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, A11y } from 'swiper';
import Book from './Book';
import { useEffect, useState } from 'react';

export default function ListHorizontalBooks({ titleList, mode, comicsData }) {
        const [comicsCustom, setComicsData] = useState(comicsData);
    
        useEffect(()=> {
           (async () => setComicsData(
                [
                    ...comicsCustom,
                    ...(await (
                        await fetch("http://localhost:3001/comics")
                    )?.json())
                ]
            ))()

        }, [])

    return (
       <>
        <div className='text-white px-4 pt-4 font-semibold'>
             {titleList}
        </div>
        <Swiper
            modules={[Navigation, A11y]}

            aria-orientation='horizontal'
            slidesPerView={7}
            spaceBetween={1}
            navigation={true}
            title={titleList}
        >
            {comicsCustom.map(({
                id,
                title,
                description,
                cover_photo
            }, index) => {
                return <SwiperSlide key={index}>
                    <Book
                        id={id}
                        title={title}
                        description={description}
                        cover_photo={cover_photo}
                    />
                </SwiperSlide>
            })}

        </Swiper>
        </>
    );
}