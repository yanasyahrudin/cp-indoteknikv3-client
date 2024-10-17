import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import categories from '../../data/supplyPumpCategory';
import { Helmet } from 'react-helmet';

const SupplyPumpCategories = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const { t } = useTranslation();

    const filteredCategories =
        activeTab === 'All'
            ? categories
            : categories.filter((category) => category.type === activeTab);

    // Calculate total pages
    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

    // Get current items
    const currentItems = filteredCategories.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll ke atas ketika halaman berubah
    };

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className='mt-10 mb-20 max-w-6xl mx-auto'>
            <Helmet>
                <title>{t('Supply Pump Category')} | Indo Teknik</title>
                <meta
                    name='description'
                    content={t(
                        'Providing original and complete aftermarket diesel and automotive spare parts with a wide selection of brands from Europe, Japan and China. And only sell original spare parts and quality replacement parts that we have tested and used in repairs in our workshop.',
                    )}
                />
                <meta
                    name='keywords'
                    content={`${t('Supply Pump Category')}, ${t('Supply Pump Category')} Indo Teknik, Itech, Redat`}
                />
            </Helmet>

            <h1 className='text-center font-bold text-3xl text-blue-900 animate-bounceIn'>
                {t('Supply Pump Category')}
            </h1>
            <div className='flex justify-center space-x-4 mt-8'>
                {['All', 'Supply Pump'].map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 shadow-lg rounded-xl ${activeTab === tab ? 'bg-blue-900 text-white font-bold' : 'bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900'}`}
                        onClick={() => {
                            setActiveTab(tab);
                            setCurrentPage(1);
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className='h-full flex w-full justify-center items-center dark:bg-gray-800 p-2 mt-8'>
                <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5'>
                    {currentItems.map((category) => (
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
                    ))}
                </div>
            </div>

            <div className='flex justify-center space-x-4 mt-8'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 shadow-lg rounded-xl ${currentPage === index + 1 ? 'bg-blue-900 text-white font-bold' : 'bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900'}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SupplyPumpCategories;
