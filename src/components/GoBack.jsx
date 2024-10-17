import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const GoBack = () => {
    // Handle the "Go Back" button using window.history.back()
    const handleGoBack = () => {
        window.history.back(); // Navigate back to the previous page
    };
    const {t } = useTranslation('')
    return (
        <div>
            <div className='pt-6 pl-6'>
                    <button
                        onClick={handleGoBack}
                        className=' px-4 py-2 bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900 font-semibold rounded-xl shadow-md flex justify-center items-center gap-2'
                    >
                        <FaArrowAltCircleLeft />
                        {t('Go Back')}
                    </button>
                </div>
        </div>
    );
};

export default GoBack;