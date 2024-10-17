import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    BiSolidSkipNextCircle,
    BiSolidSkipPreviousCircle,
} from 'react-icons/bi';
import { IoIosCloseCircle } from 'react-icons/io';

const FacilitiesModal = ({
    isVisible,
    onClose,
    image,
    title,
    onNext,
    onPrevious,
    isTenthFacility,
}) => {
    if (!isVisible) return null;

    const { t } = useTranslation();

    const handleBackgroundClick = (e) => {
        // Close the modal if the user clicks on the background
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            onClick={handleBackgroundClick} // Close modal when background is clicked
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[2147483647]'
        >
            <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 p-5 rounded-xl relative max-w-full w-[90%] sm:w-[600px] md:w-[800px] lg:w-[900px]'>
                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
                >
                    <IoIosCloseCircle size={24} />
                </button>
                <h2 className='text-lg md:text-xl font-semibold text-start mb-3'>
                    {title}
                </h2>
                <div className='flex justify-center items-center  w-full'>
                    {isTenthFacility ? (
                        <div className='flex justify-center items-center md:h-[515px] w-full'>
                            <a
                                href='/workshop-gallery'
                                className='bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-lg items-center border px-5 py-2.5 rounded-xl text-blue-900 text-lg'
                            >
                                <span className='font-bold text-lg'>
                                    Go to Gallery
                                </span>
                            </a>
                        </div>
                    ) : (
                        <img
                            src={image}
                            alt={title}
                            className='w-full h-full object-cover rounded-xl'
                        />
                    )}
                </div>
                <div className='flex justify-center gap-5 mt-4'>
                    <button
                        onClick={onPrevious}
                        className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-lg items-center border px-3 py-1.5 rounded-xl text-blue-900'
                    >
                        <BiSolidSkipPreviousCircle size={24} />
                        <span className='ml-1 font-bold text-md md:text-lg'>
                            {t('Prev')}
                        </span>
                    </button>
                    <button
                        onClick={onNext}
                        className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-lg items-center border px-3 py-1.5 rounded-xl text-blue-900'
                    >
                        <span className='mr-1 font-bold text-md md:text-lg'>
                            {t('Next')}
                        </span>
                        <BiSolidSkipNextCircle size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesModal;
