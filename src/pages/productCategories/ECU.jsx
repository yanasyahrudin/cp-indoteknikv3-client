import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const EcuCategories = () => {
    const [activeTab, setActiveTab] = useState('All');
    const { t } = useTranslation();

    const categories = [
        {
            id: 1,
            name: 'Engine Control Unit (ECU)',
            type: 'ECU',
            description:
                'High-performance engine control unit for precise engine management.',
            imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721376982/cp-indoteknik-v3/productsEcu/20190328_145254-removebg-preview_jgrz1x.png', // Replace with actual image URL
            link: '/products/other-products/ecu/ecu'
        },
        {
            id: 2,
            name: 'Engine Control Unit (ECU)',
            type: 'ECU',
            description:
                'High-performance engine control unit for precise engine management.',
            imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721378469/cp-indoteknik-v3/productsEcu/High-Quality-D04FR-Engine-Controller-ECU-D04FR-004559-0281020220-for-Kobelco-SK130-8-SK140-8-SK135SR-removebg-preview_fmdog4.png', // Replace with actual image URL
            link: '/products/other-products/ecu/ecu2'
        },
        {
            id: 3,
            name: 'Engine Control Unit (ECU)',
            type: 'ECU',
            description:
                'High-performance engine control unit for precise engine management.',
            imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721378638/cp-indoteknik-v3/productsEcu/S000000621-01-112500-1201-is-for-DENSO-engine-ECU-control-module-for-XCMG-Oman-trucks-and-removebg-preview_yt5baw.png', // Replace with actual image URL
            link: '/products/other-products/ecu/ecu2'
        },
    ];

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, []); // Empty dependency array to run only once on mount

    const filteredCategories =
        activeTab === 'All'
            ? categories
            : categories.filter((category) => category.type === activeTab);

    return (
        <div className='mt-10 mb-20 max-w-6xl mx-auto'>
            <Helmet>
                <title>{t('ECU Category')} | Indo Teknik</title>
                <meta
                    name='description'
                    content={t(
                        'Providing original and complete aftermarket diesel and automotive spare parts with a wide selection of brands from Europe, Japan and China. And only sell original spare parts and quality replacement parts that we have tested and used in repairs in our workshop.',
                    )}
                />
                <meta
                    name='keywords'
                    content={`${t('ECU Category')}, ${t('ECU Category')} Indo Teknik, Bosch`}
                />
            </Helmet>
            <h1 className='text-center font-bold text-3xl text-blue-900 animate-bounceIn'>
                {t('ECU Category')}
            </h1>
            <div className='flex justify-center space-x-4 mt-8'>
                {['All', 'ECU'].map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 shadow-lg rounded-xl ${activeTab === tab ? 'bg-blue-900 text-white font-bold' : 'bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className='h-full flex w-full justify-center items-center dark:bg-gray-800 p-2 mt-8'>
                <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5'>
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <div
                                key={category.id}
                                className='relative hover:scale-105 shadow-md animate-bounceIn animate-bounceIn bg-gradient-to-bl from-neutral-50 to-blue-100 border rounded-xl  dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 '
                            >
                                <a href={category.link}>
                                    <div className='p-2 flex justify-center'>
                                        <img
                                            className='rounded-md'
                                            src={category.imgSrc}
                                            loading='lazy'
                                            alt={category.name}
                                        />
                                    </div>
                                    <div className='px-4 pb-3'>
                                        <div>
                                            <a>
                                                <h5 className='text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white '>
                                                    {category.name}
                                                </h5>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className='text-center text-gray-600 dark:text-gray-400'>
                            No categories available.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EcuCategories;
