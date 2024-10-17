import React from 'react';
import { useTranslation } from 'react-i18next';

const ChatButtons = () => {
    const waImg =
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1720231534/cp-indoteknik-v3/chatButtons/wa_putl33.jpg';

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
        <div className='fixed bottom-24 right-4 md:bottom-[12%] md:right-[2%] z-[2147483647] flex flex-col space-y-4'>
            <div className='w-18 md:w-26'>
                <img
                    className='transition-transform shadow-md duration-300 ease-in-out transform hover:scale-110 rounded-lg cursor-pointer'
                    src={waImg}
                    alt='WhatsApp Logo'
                    onClick={openWhatsAppChat}
                />
            </div>
        </div>
    );
};

export default ChatButtons;
