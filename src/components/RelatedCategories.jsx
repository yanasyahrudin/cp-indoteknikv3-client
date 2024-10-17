import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    BiSolidSkipNextCircle,
    BiSolidSkipPreviousCircle,
} from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const RelatedCategories = ({ categories }) => {
    const sliderRef = useRef(null);
    const sliderSettings = {
        infinite: true, // Loop the slides
        dots: true,
        speed: 500,
        slidesToShow: 4, // Number of slides to show at a time
        slidesToScroll: 4, // How many slides to scroll at a time
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Tablet view
                settings: {
                    arrows: false,
                    slidesToShow: 2, // 2 slides per row
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    rows: 2, // 2 rows
                    slidesPerRow: 1, // 1 slide per row
                },
            },
            {
                breakpoint: 768, // Mobile view
                settings: {
                    arrows: false,
                    slidesToShow: 2, // 2 slides per row
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    rows: 2, // 2 rows
                    slidesPerRow: 1, // 1 slide per row
                },
            },
            {
                breakpoint: 480, // Small mobile view
                settings: {
                    arrows: false,
                    slidesToShow: 2, // 2 slides per row
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    rows: 2, // 2 rows
                    slidesPerRow: 1, // 1 slide per row
                },
            },
        ],
    };

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };
    const { t } = useTranslation('');
    return (
        <div className='py-8 lg:py-8 sm:py-8 xs:py-6 px-8 lg:px-6 sm:px-6 xs:px-0 mt-10 rounded-xl p-6 lg:p-6 sm:p-0 xs:p-0 bg-gradient-to-bl from-neutral-50 to-blue-200'>
            <h2 className='text-3xl font-bold mb-4 text-center text-blue-900'>
                {t('Related Categories')}
            </h2>
            {categories.length > 0 ? (
                categories.length >= 4 ? (
                    // Kondisi jika ada 4 atau lebih kategori, gunakan slider
                    <Slider ref={sliderRef} {...sliderSettings}>
                        {categories.map((category) => (
                            <div key={category.id} className='p-4 '>
                                <a href={category.link}>
                                    <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 shadow-md rounded-lg '>
                                        <img
                                            src={category.imgSrc}
                                            alt={category.name}
                                            className='h-40 w-full object-contain p-2'
                                        />
                                        <div className='p-4'>
                                            <h3 className='text-xl font-semibold text-gray-800 text-center'>
                                                {category.name}
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    // Kondisi jika ada kurang dari 4 kategori, tampilkan biasa tanpa slider
                    <div className='flex flex-wrap justify-center gap-4'>
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className='p-2 w-full sm:max-w-72'
                            >
                                <a href={category.link}>
                                    <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 shadow-md rounded-lg '>
                                        <img
                                            src={category.imgSrc}
                                            alt={category.name}
                                            className='h-40 w-full object-contain p-2'
                                        />
                                        <div className='p-4'>
                                            <h3 className='text-xl font-semibold text-gray-800 text-center'>
                                                {category.name}
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                )
            ) : (
                <p className='text-gray-600 text-center items-center justify-content'>
                    No related categories available.
                </p>
            )}

            {categories.length > 4 && (
                <div className='flex justify-center gap-7 mt-8 '>
                    <button
                        onClick={previous}
                        className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-md items-center border px-3 py-1.5 rounded-xl text-blue-900 hover:text-blue-900 '
                    >
                        <BiSolidSkipPreviousCircle />
                        <span className='ml-1 font-bold text-lg'>{t('Prev')}</span>
                    </button>
                    <button
                        onClick={next}
                        className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-md  items-center border px-3 py-1.5 rounded-xl text-blue-900 '
                    >
                        <span className='mr-1 font-bold text-lg'>{t('Next')}</span>
                        <BiSolidSkipNextCircle />
                    </button>
                </div>
            )}
        </div>
    );
};

export default RelatedCategories;
