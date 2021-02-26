
import React, { useEffect, useRef } from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/swiper.scss'

const Gallery = () => {
    const gallerySwiperRef = useRef([]);
    const thumbnailSwiperRef = useRef([]);

    const thumbnailSwiper = useRef(null);

    const gallerySwiperParams = {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    };

    const thumbnailSwiperParams = {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    };

    useEffect(() => {
        const gallerySwiper = gallerySwiperRef.current.swiper;

        const thumbnailSwiper = thumbnailSwiperRef && thumbnailSwiperRef.current && thumbnailSwiperRef.current.swiper;

        if (gallerySwiper.controller && thumbnailSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, []);

    return (
        <div>
            <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
                <img src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?cs=srgb&dl=pexels-syed-qaarif-andrabi-6685428.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/3551245/pexels-photo-3551245.jpeg?cs=srgb&dl=pexels-aleksey-kuprikov-3551245.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/5710628/pexels-photo-5710628.jpeg?cs=srgb&dl=pexels-kei-scampa-5710628.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/6243297/pexels-photo-6243297.jpeg?cs=srgb&dl=pexels-meru-bi-6243297.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/6497802/pexels-photo-6497802.jpeg?cs=srgb&dl=pexels-jonathan-borba-6497802.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/6129591/pexels-photo-6129591.jpeg?cs=srgb&dl=pexels-julia-volk-6129591.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/6662604/pexels-photo-6662604.jpeg?cs=srgb&dl=pexels-anastasiya-vragova-6662604.jpg&fm=jpg' />
            </Swiper>
            <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiper}>
                <img src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?cs=srgb&dl=pexels-syed-qaarif-andrabi-6685428.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/3551245/pexels-photo-3551245.jpeg?cs=srgb&dl=pexels-aleksey-kuprikov-3551245.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/5710628/pexels-photo-5710628.jpeg?cs=srgb&dl=pexels-kei-scampa-5710628.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/6243297/pexels-photo-6243297.jpeg?cs=srgb&dl=pexels-meru-bi-6243297.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/6497802/pexels-photo-6497802.jpeg?cs=srgb&dl=pexels-jonathan-borba-6497802.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/6129591/pexels-photo-6129591.jpeg?cs=srgb&dl=pexels-julia-volk-6129591.jpg&fm=jpg' />
                <img src='https://images.pexels.com/photos/6662604/pexels-photo-6662604.jpeg?cs=srgb&dl=pexels-anastasiya-vragova-6662604.jpg&fm=jpg' />
            </Swiper>

        </div>
    );
};

export default Gallery;
    