import React, { useState, useEffect, useRef } from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosCloseCircle, IoLogoWhatsapp } from 'react-icons/io';
import { FaSquareInstagram } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null); // Create a reference for the modal

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const openWhatsAppChat = () => {
        const message = encodeURIComponent(
            "Hi, I'm interested in the offer on indo-teknik.com. Can you provide more details?",
        );
        window.open(`https://wa.me/+628117531881?text=${message}`, '_blank');
    };

    // Function to close modal when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className='fixed z-[2147483647] right-8 bottom-24'>
            <button
                className='bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900 rounded-xl p-3 shadow-md hover:scale-105 transition-transform duration-200 flex justify-center items-center gap-2'
                onClick={handleToggleModal}
            >
                <BiSolidContact /> Hubungi Kami
            </button>

            <div
                ref={modalRef} // Attach ref to modal div
                className={`fixed right-8 bottom-24 bg-gradient-to-bl from-neutral-50 to-blue-200 rounded-xl shadow-lg p-8 lg:w-1/5 space-y-2 transform transition-all duration-300 ease-in-out ${
                    isOpen
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-90 pointer-events-none'
                }`}
            >
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl font-semibold mx-auto text-blue-900'>
                        Kontak Kami
                    </h2>
                    <button
                        onClick={handleToggleModal}
                        className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
                    >
                        <IoIosCloseCircle size={24} />
                    </button>
                </div>

                {/* Contact List */}
                <ul className='list-disc space-y-2'>
                    
                    <li
                        className='flex justify-center items-center gap-2  bg-gradient-to-bl from-neutral-50 to-blue-100 p-2 rounded-xl hover:scale-105 shadow-md transition-transform duration-200'
                        onClick={openWhatsAppChat}
                    >
                        <IoLogoWhatsapp className='text-blue-900' />
                        Whatsapp
                    </li>
                    <li className='flex justify-center items-center gap-2  bg-gradient-to-bl from-neutral-50 to-blue-100 p-2 rounded-xl hover:scale-105 shadow-md transition-transform duration-200'>
                        <FaSquareInstagram className='text-blue-900' />
                        <a
                            href='https://www.instagram.com/indoteknik/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Instagram
                        </a>
                    </li>

                    <li className='flex justify-center items-center gap-2  bg-gradient-to-bl from-neutral-50 to-blue-100 p-2 rounded-xl hover:scale-105 shadow-md transition-transform duration-200'>
                        <AiFillTikTok className='text-blue-900' />
                        <a
                            href='https://www.tiktok.com/@indoteknikofficial'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            TikTok
                        </a>
                    </li>
                </ul>

                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl font-semibold mx-auto text-blue-900'>
                        Market Place
                    </h2>
                </div>
                <ul className='gap-2 flex justify-center'>
                    <li className='bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-full shadow-md hover:scale-105 transition-transform duration-200'>
                        <a
                            href='https://tokopedia.link/qoZIKIkdcNb'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_50,h_50/v1726902598/cp-indoteknik-v3/contactModal/pngwing.com_2_yhcgv7.png'
                                alt='marketplace-logo-1'
                            />
                        </a>
                    </li>
                    <li className='bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-full shadow-md hover:scale-105 transition-transform duration-200'>
                        <a
                            href='https://shopee.co.id/indoteknikpekanbaru'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_50,h_50/v1726902598/cp-indoteknik-v3/contactModal/pngwing.com_1_tkaloy.png'
                                alt='marketplace-logo-2'
                            />
                        </a>
                    </li>
                    <li className='bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-full shadow-md hover:scale-105 transition-transform duration-200'>
                        <a
                            href='https://www.bukalapak.com/u/indoteknikriau'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_50,h_50/v1726902598/cp-indoteknik-v3/contactModal/new-bukalapak-logo-vector-01-1-768x672_ivrc36.png'
                                alt='marketplace-logo-3'
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactModal;
