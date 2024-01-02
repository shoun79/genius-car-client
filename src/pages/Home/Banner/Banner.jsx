import React from 'react';
import img1 from './../../../assets/images/banner/1.jpg'
import img2 from './../../../assets/images/banner/2.jpg'
import img3 from './../../../assets/images/banner/3.jpg'
import img4 from './../../../assets/images/banner/4.jpg'
import img5 from './../../../assets/images/banner/5.jpg'
import img6 from './../../../assets/images/banner/6.jpg'
import './Banner.css'
import CarouselItem from './CarouselItem';

const Banner = () => {
    const carouselData = [
        {
            id: 1,
            image: img1,
            prev: 6,
            next: 2
        },
        {
            id: 2,
            image: img2,
            prev: 1,
            next: 3
        },
        {
            id: 3,
            image: img3,
            prev: 2,
            next: 4
        },
        {
            id: 4,
            image: img4,
            prev: 3,
            next: 5
        },
        {
            id: 5,
            image: img5,
            prev: 4,
            next: 6
        },
        {
            id: 6,
            image: img6,
            prev: 5,
            next: 1
        },
    ]
    return (
        <div className="carousel w-full  rounded-lg py-10">
            {
                carouselData.map(slide => <CarouselItem
                    key={slide.id}
                    slide={slide}
                ></CarouselItem>)
            }

        </div>
    );
};

export default Banner;