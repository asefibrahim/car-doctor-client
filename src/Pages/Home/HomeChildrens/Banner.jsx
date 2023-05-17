import React from 'react';

import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (

        <div className="carousel w-full h-[600px] rounded-xl ">
            <div id="slide1" className="carousel-item relative w-full">
                <img className='w-full ' src={img1} />
                <div className="absolute left-0 top-0 flex items-center right-5  w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full ps-12">
                    <div className='w-1/3 space-y-7'>
                        <h1 className='text-gray-200 text-5xl font-bold'>Affordable price for car servicing</h1>
                        <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem voluptatem illum, mollitia obcaecati quas maiores. Adipisci saepe eius ex, asperiores, qui voluptatibus ut earum, consequuntur excepturi neque officia totam!</p>

                        <button className='btn btn-primary mr-5'>Discover More </button>
                        <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform left-5 right-5 bottom-0 mb-5">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full">
                <img className='w-full ' src={img1} />
                <div className="absolute left-0 top-0 flex items-center right-5  w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full ps-12">
                    <div className='w-1/3 space-y-7'>
                        <h1 className='text-gray-200 text-5xl font-bold'>Affordable price for car servicing</h1>
                        <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem voluptatem illum, mollitia obcaecati quas maiores. Adipisci saepe eius ex, asperiores, qui voluptatibus ut earum, consequuntur excepturi neque officia totam!</p>

                        <button className='btn btn-primary mr-5'>Discover More </button>
                        <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform left-5 right-5 bottom-0 mb-5">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img className='w-full ' src={img1} />
                <div className="absolute left-0 top-0 flex items-center right-5  w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full ps-12">
                    <div className='w-1/3 space-y-7'>
                        <h1 className='text-gray-200 text-5xl font-bold'>Affordable price for car servicing</h1>
                        <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem voluptatem illum, mollitia obcaecati quas maiores. Adipisci saepe eius ex, asperiores, qui voluptatibus ut earum, consequuntur excepturi neque officia totam!</p>

                        <button className='btn btn-primary mr-5'>Discover More </button>
                        <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform left-5 right-5 bottom-0 mb-5">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img className='w-full ' src={img1} />
                <div className="absolute left-0 top-0 flex items-center right-5  w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full ps-12">
                    <div className='w-1/3 space-y-7'>
                        <h1 className='text-gray-200 text-5xl font-bold'>Affordable price for car servicing</h1>
                        <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem voluptatem illum, mollitia obcaecati quas maiores. Adipisci saepe eius ex, asperiores, qui voluptatibus ut earum, consequuntur excepturi neque officia totam!</p>

                        <button className='btn btn-primary mr-5'>Discover More </button>
                        <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform left-5 right-5 bottom-0 mb-5">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>


    );
};

export default Banner;