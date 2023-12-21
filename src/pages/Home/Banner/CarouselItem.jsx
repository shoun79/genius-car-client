import React from 'react';

const CarouselItem = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full  ">
            <div className='carousel-img'>
                <img src={image} className="w-full" />
            </div>
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-24 top-1/4 hidden lg:block">
                <h1 className='text-6xl text-white font-bold'>
                    Affordable <br />
                    Price for car <br />
                    Servicing
                </h1>

            </div>
            <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 top-1/2 hidden lg:block">
                <p className='w-2/4 text-white'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit doloribus tenetur similique optio. </p>

            </div>
            <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 lg:left-24 top-3/4 ">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5" >❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default CarouselItem;