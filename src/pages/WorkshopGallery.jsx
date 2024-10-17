import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageModal from '../modal/GalleryModal';
import { Helmet } from 'react-helmet';

const TestBenchAndFabricationMachines = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [images, setImages] = useState([]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleImageClick = (index, imageArray) => {
        setSelectedImageIndex(index);
        setImages(imageArray);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(0);
        setImages([]);
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const [t, i18n] = useTranslation('global');

    const tab1Images = [
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703566/cp-indoteknik-v3/commonRailSystem/ITECH_CR318C_CE_PRO_pcw0lb.png',
            name: 'ITECH CR318C CE PRO',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703555/cp-indoteknik-v3/commonRailSystem/ITECH_CR318-S_s9uz1b.png',
            name: 'ITECH CR318-S',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723704834/cp-indoteknik-v3/commonRailSystem/Untitled_design_13_d6fqpv.png',
            name: 'ITECH CR1016',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703558/cp-indoteknik-v3/commonRailSystem/BOSCH_EPS619_wmijmq.png',
            name: 'BOSCH EPS619',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703572/cp-indoteknik-v3/commonRailSystem/HARTRIDGE_IFT-70_dxcebh.png',
            name: 'HARTRIDGE IFT-70',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723705077/cp-indoteknik-v3/commonRailSystem/HARTRIDGE%20AVM2-PC_ugh4tu.png ',
            name: 'HARTRIDGE AVM2-PC',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703599/cp-indoteknik-v3/commonRailSystem/HARTRIDGE_SABRE_CRI_MASTER_v0kk0z.png',
            name: 'HARTRIDGE SABRE CRI MASTER',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723704176/cp-indoteknik-v3/commonRailSystem/BOSCH_EPS200_herjrn.png',
            name: 'BOSCH EPS200',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723705529/cp-indoteknik-v3/commonRailSystem/BOSCH_EPS_619_EPS_707_EPS_611.png',
            name: 'BOSCH EPS 619, EPS 707, EPS 611',
        },
    ];

    const tab2Images = [
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696297/cp-indoteknik-v3/fabrication/GAP_BED_LATHE_C6232A_soqqqt.png',
            name: 'GAP BED LATHE C6232A',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696303/cp-indoteknik-v3/fabrication/YUNGSAN_SN_6266D2000_mxlbx1.png',
            name: 'YUNGSAN SN 6266D/2000',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696381/cp-indoteknik-v3/fabrication/BOSHI_CS6266B_vpodvd.png',
            name: 'BOSHI CS6266B',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696293/cp-indoteknik-v3/fabrication/BOSHI_CQ6280B_vwfa5i.png',
            name: 'BOSHI CQ6280B',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696304/cp-indoteknik-v3/fabrication/MECMAC_CQ6280B3000_lhf8bp.png',
            name: 'MECMAC CQ6280B/3000',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696289/cp-indoteknik-v3/fabrication/BAOJI_MACHINE_TOOL_CS62660_t9jcx3.png',
            name: 'BAOJI MACHINE TOOL CS62660',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696954/cp-indoteknik-v3/fabrication/PRESS_MACHINE_500_BAR_3000_BAR_b4a3ob.png',
            name: 'PRESS MACHINE 500 BAR, 3000 BAR',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723697030/cp-indoteknik-v3/fabrication/MILLING-DRILLING%20ZX50C_p3fl8f.png',
            name: 'MILLING-DRILLING ZX50C',
        },
    ];

    return (
        <div className='w-full mt-10 mb-20 max-w-6xl mx-auto p-4'>
            <Helmet>
                <title>{t('galleries.title')} | Indo Teknik</title>
                <meta name="google-site-verification" content="LO_C11uw_PGqx_wVFy0U8Uk3WJQHEaDTPQ2RHZrdf2E" />
                <meta
                    name='description'
                    content='Halaman ini menampilkan gallery semua Mesin Test Bench dan Fabrikasi milik Indo Teknik'
                />
                <meta
                    name='keywords'
                    content='Test Bench Indo Teknik, Fabrikasi Indo Teknik, Galeri Indo Teknik'
                />
            </Helmet>
            
            <div className='mb-5 rounded overflow-hidden flex flex-col mx-auto text-center'>
                <h1 className='text-blue-900 max-w-xl mx-auto text-4xl sm:text-6xl font-bold transition duration-500 ease-in-out inline-block mb-2'>
                    {t('galleries.title')}
                </h1>
            </div>

            <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 p-2 rounded-t-xl'>
                <div className='flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4'>
                    <button
                        className={`px-4 py-2  font-normal  ${
                            activeTab === 'tab1'
                                ? 'border-blue-900 text-blue-900 font-semibold'
                                : 'border-transparent'
                        } focus:outline-none`}
                        onClick={() => handleTabClick('tab1')}
                        aria-controls='tab1'
                        aria-selected={activeTab === 'tab1'}
                    >
                        {t('galleries.testBenches')}
                    </button>
                    <button
                        className={`px-4 py-2  font-normal  ${
                            activeTab === 'tab2'
                                ? 'border-blue-900 text-blue-900 font-semibold' 
                                : 'border-transparent'
                        } focus:outline-none`}
                        onClick={() => handleTabClick('tab2')}
                        aria-controls='tab2'
                        aria-selected={activeTab === 'tab2'}
                    >
                        {t('galleries.fabrication')}
                    </button>
                </div>
            </div>

            <div className='p-4 tab-content  rounded-b-xl bg-gradient-to-bl from-neutral-50 to-blue-100 '>
                {activeTab === 'tab1' && (
                    <div id='tab1'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-auto-columns: auto; gap-5 p-4'>
                            {tab1Images.map((image, index) => (
                                <div
                                    key={index}
                                    className='group cursor-pointer relative'
                                >
                                    <a
                                        href='#'
                                        className='cursor-zoom-in'
                                        onClick={() =>
                                            handleImageClick(index, tab1Images)
                                        }
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.name}
                                            className='w-full h-[250px] object-cover rounded-lg transition-transform transform group-hover:scale-105'
                                        />
                                        <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 rounded-xl'>
                                            {image.name}
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'tab2' && (
                    <div id='tab2'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-auto-columns: auto; gap-5 p-4'>
                            {tab2Images.map((image, index) => (
                                <div
                                    key={index}
                                    className='group cursor-pointer relative'
                                >
                                    <a
                                        href='#'
                                        className='cursor-zoom-in'
                                        onClick={() =>
                                            handleImageClick(index, tab2Images)
                                        }
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.name}
                                            className='w-full h-[250px] object-cover rounded-lg transition-transform transform group-hover:scale-105'
                                        />
                                        <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 rounded-xl'>
                                            {image.name}
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <ImageModal
                isOpen={isModalOpen}
                image={images[selectedImageIndex]}
                onClose={handleCloseModal}
                onPrev={handlePrevImage}
                onNext={handleNextImage}
            />
        </div>
    );
};

export default TestBenchAndFabricationMachines;
