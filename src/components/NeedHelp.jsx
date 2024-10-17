import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';

const NeedHelp = () => {
    const { t } = useTranslation();

    const openWhatsAppChat = () => {
        const message = encodeURIComponent(
            t(
                "Hi, I'm interested in the offer on indo-teknik.com. Can you provide more details?",
            ),
        );
        window.open(`https://wa.me/+628117531881?text=${message}`, '_blank');
    };

    return (
        <div className='mx-4'>
            <div className='w-full max-w-2xl mx-auto px-4 py-8 sm:px-8 sm:py-12 bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl '>
                <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
                    <div className='text-center sm:text-left mb-6 sm:mb-0'>
                        <p className='text-blue-900 font-extrabold text-3xl sm:text-4xl tracking-tight '>
                            {t('Need a Diesel Solution?')}
                        </p>
                    </div>
                    <div className='flex justify-center '>
                        <div
                            className='shadow-md cursor-pointer flex items-center justify-center px-6 py-3 rounded-xl text-center bg-blue-900 text-white font-medium hover:bg-gradient-to-bl from-neutral-50 to-blue-100 hover:text-blue-900 duration-200'
                            onClick={openWhatsAppChat}
                        >
                            {t('Contact Us')} &nbsp;&nbsp;
                            <span className='font-bold text-2xl '>
                                <FaWhatsapp />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeedHelp;
