import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FacilitiesModal from '../modal/FacilitiesModal';
import { FaImage } from 'react-icons/fa6';

const Facilities = () => {
    const [t] = useTranslation('global');
    const [selectedFacilityIndex, setSelectedFacilityIndex] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const facilities = [
        {
            key: 'home.facilities.fac1',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1723450058/cp-indoteknik-v3/facilities/Untitled_design_hetwyi.png',
        },
        {
            key: 'home.facilities.fac2',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1723451552/cp-indoteknik-v3/facilities/Untitled_design_2_vnh5ri.png',
        },
        {
            key: 'home.facilities.fac3',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1723451787/cp-indoteknik-v3/facilities/Untitled_design_3_nfuf44.png',
        },
        {
            key: 'home.facilities.fac4',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1723452789/cp-indoteknik-v3/facilities/Untitled_design_4_matxg1.png',
        },
        {
            key: 'home.facilities.fac5',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1723453919/cp-indoteknik-v3/facilities/Untitled_design_6_gilnlc.png',
        },
        {
            key: 'home.facilities.fac6',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1723456834/cp-indoteknik-v3/facilities/Untitled_design_8_dborw0.png',
        },
        {
            key: 'home.facilities.fac7',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1723455978/cp-indoteknik-v3/facilities/Untitled_design_7_ubhbrw.png',
        },
        {
            key: 'home.facilities.fac8',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1723457749/cp-indoteknik-v3/facilities/Untitled_design_9_afzpqt.png',
        },
        {
            key: 'home.facilities.fac9',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1723518301/cp-indoteknik-v3/facilities/Untitled_design_11_nmmmut.png',
        },
        {
            key: 'home.facilities.fac10',
            image: 'https://i.ebayimg.com/images/g/oKcAAOSwNSxVd4cU/s-l1200.jpg',
        },
    ];

    const openModal = (index) => {
        if (index === 9) {
            window.location.href = '/test-bench-and-fabrication-machines';
        } else {
            setSelectedFacilityIndex(index);
            setIsModalVisible(true);
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedFacilityIndex(null);
    };

    const showNextFacility = () => {
        setSelectedFacilityIndex(
            (prevIndex) => (prevIndex + 1) % facilities.length,
        );
    };

    const showPreviousFacility = () => {
        setSelectedFacilityIndex(
            (prevIndex) =>
                (prevIndex - 1 + facilities.length) % facilities.length,
        );
    };

    return (
        <>
            <div className='text-center mx-auto py-5 px-4 md:px-0'>
                <h2 className='font-bold text-3xl text-blue-900'>
                    {t('home.facilities.title')}
                </h2>
                <div className='my-5  flex flex-wrap mx-auto lg:mx-auto p-5 lg:w-[1200px] sm:mx-auto sm:mb-2 justify-center rounded-xl mx-4 md:mx-4 bg-gradient-to-bl from-neutral-50 to-blue-100'>
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className='p-2 sm:w-1/2 w-full cursor-pointer'
                            onClick={() => openModal(index)}
                        >
                            <div className='rounded-xl flex h-full items-center shadow-md bg-gradient-to-bl from-neutral-50 to-blue-100'>
                                <span className='font-normal px-4 py-4 leading-5 text-start text-blue-900 p-2 rounded-xl flex '>
                                    <FaImage className='text-blue-900 w-5 h-5 flex-shrink-0 mr-4' />
                                    {t(facility.key)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedFacilityIndex !== null && (
                <FacilitiesModal
                    isVisible={isModalVisible}
                    onClose={closeModal}
                    image={facilities[selectedFacilityIndex].image}
                    title={t(facilities[selectedFacilityIndex].key)}
                    onNext={showNextFacility}
                    onPrevious={showPreviousFacility}
                    isTenthFacility={selectedFacilityIndex === 9}
                />
            )}
        </>
    );
};

export default Facilities;
