import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const Carousel1Img =
    'https://res.cloudinary.com/dcbryptkx/image/upload/w_1000/v1726890490/cp-indoteknik-v3/carousel/1_z88cn7.jpg';
const Carousel2Img =
    'https://res.cloudinary.com/dcbryptkx/image/upload/w_1000/v1726890490/cp-indoteknik-v3/carousel/2_vhsmix.jpg';
const Carousel3Img =
    'https://res.cloudinary.com/dcbryptkx/image/upload/w_1000/v1726890497/cp-indoteknik-v3/carousel/3_ln7p1u.jpg';
const Carousel4Img =
    'https://res.cloudinary.com/dcbryptkx/image/upload/w_1000/v1726890491/cp-indoteknik-v3/carousel/4_bwbj6p.jpg';
const Carousel5Img =
    'https://res.cloudinary.com/dcbryptkx/image/upload/w_1000/v1726890495/cp-indoteknik-v3/carousel/5_weaosn.jpg';

const slides = [
    {
        id: 1,
        imageUrl: Carousel1Img,
        title: 'Penjualan Spare Part & Otomotif',
        description: 'Bengkel Resmi, Fabrikasi & Las Bubut Pekanbaru',
    },
    {
        id: 2,
        imageUrl: Carousel2Img,
        title: 'Spare Part',
        description: "SUPPLY PUMP & PART, INJECTOR & PART, EUI & UNIT PUMP FUEL INJECTION PUMP & PART, TURBO CHARGER & PART TESTER NOZZLE & TOOLS, BATTERY, SENSOR & ECU AUTOMOTIVE PART, STARTER & ALTERNATOR, DLL",
    },
    {
        id: 3,
        imageUrl: Carousel3Img,
        title: 'Workshop',
        description: 'COMMON RAIL SYSTEM & EUI',
    },
    {
        id: 4,
        imageUrl: Carousel4Img,
        title: 'Workshop',
        description: 'FUEL INJECTION PUMP',
    },
    {
        id: 5,
        imageUrl: Carousel5Img,
        title: 'Workshop',
        description: 'FABRICATION',
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [t] = useTranslation('global');

    const scrollCarousel = (direction) => {
        const totalSlides = slides.length;
        const newIndex = (currentIndex + direction + totalSlides) % totalSlides;
        setCurrentIndex(newIndex);
    };

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            scrollCarousel(1); // Move to next slide
        }, 5000); // 5 seconds

        // Clear the interval when component is unmounted
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='max-w-screen-lg mx-auto pt-10'>
            <div className='rounded overflow-hidden flex flex-col mx-auto text-center'>
                <h1 className='text-blue-900 max-w-xl mx-auto text-4xl sm:text-6xl font-bold mb-2 animate-bounceIn'>
                    {t('home.hello.hell1')}
                </h1>
                <h1 className='text-red-500 max-w-xl mx-auto text-4xl sm:text-6xl font-bold mb-2 animate-bounceIn'>
                    {t('home.hello.hell2')}
                </h1>

                <div className='flex items-center justify-center p-4 sm:p-10'>
                    <div className='relative w-full max-w-6xl mx-auto group'>
                        <div className='overflow-hidden relative rounded-lg'>
                            <div
                                className='flex transition-transform duration-700 ease-in-out transform will-change-transform'
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {slides.map((slide) => (
                                    <div key={slide.id} className='min-w-full'>
                                        <img
                                            src={slide.imageUrl}
                                            alt={`Slide ${slide.description}`}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Previous button */}
                        <button
                            className='absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out focus:outline-none'
                            onClick={() => scrollCarousel(-1)}
                        >
                            <IoIosArrowBack />
                        </button>

                        {/* Next button */}
                        <button
                            className='absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out focus:outline-none'
                            onClick={() => scrollCarousel(1)}
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
