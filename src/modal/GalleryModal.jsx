// GalleryModal.js
import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCloseCircle } from 'react-icons/io';
import {
    BiSolidSkipNextCircle,
    BiSolidSkipPreviousCircle,
} from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const GalleryModal = ({ isOpen, image, onClose, onPrev, onNext }) => {
    if (!isOpen) return null;

    const { t } = useTranslation();

    const handleBackgroundClick = (e) => {
        // Close the modal if the user clicks on the background
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            onClick={handleBackgroundClick}
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[2147483647]'
        >
            <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 p-5 rounded-xl relative max-w-full w-[90%] sm:w-[600px] md:w-[800px] lg:w-[900px]'>
                <button
                    className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
                    onClick={onClose}
                >
                    <IoIosCloseCircle size={24} />
                </button>
                <h2 className='text-lg md:text-xl font-semibold text-center mb-3'>
                    {image.name}
                </h2>
                <div className='rounded-xl flex justify-center items-center h-[250px] sm:h-[400px] md:h-[500px] w-full'>
                    <img
                        src={image.src}
                        alt={image.name}
                        className='w-full h-full object-contain '
                    />
                </div>

                <div className='flex justify-center gap-5 mt-4'>
                    <button
                        className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-lg items-center border px-3 py-1.5 rounded-xl text-blue-900'
                        onClick={onPrev}
                    >
                        <BiSolidSkipPreviousCircle size={24} />
                        <span className='ml-1 font-bold text-md md:text-lg'>
                            {t('Prev')}
                        </span>
                    </button>
                    <button
                        className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-lg items-center border px-3 py-1.5 rounded-xl text-blue-900'
                        onClick={onNext}
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

GalleryModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};

export default GalleryModal;
