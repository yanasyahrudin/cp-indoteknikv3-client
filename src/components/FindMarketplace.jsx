import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdArrowDropDown } from 'react-icons/md';

const FindMarketplace = () => {
    const {t} = useTranslation('');
    return (
        <div className='gap-4 justify-content items-center flex '>
            <a
                href='https://maps.app.goo.gl/Y3Tf9a8GNJ8TMsRX8'
                target='_blank'
                rel='noopener noreferrer'
            >
                <button className='self-start shdaow-md bg-blue-900 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-white hover:text-blue-900 transition duration-300 justify-center items-center flex gap-2'>
                    {t('Contact Us')}
                    <FaLocationDot />
                </button>
            </a>
            <div class='relative inline-block text-left '>
                <div class='group'>
                    <button
                        type='button'
                        className='self-start shadow-md bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900 font-semibold py-2 px-4 rounded-xl transition duration-300 justify-center items-center flex gap-2'
                        >
                        {t('Buy in Marketplace')}
                        
                        <MdArrowDropDown />
                    </button>
                    <div class='absolute left-0 w-40 origin-top-left divide-y divide-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50'>
                        <div class='absolute left-0 mt-2 w-48 md:w-44 xs:w-40 invisible group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                            <div className='bg-gradient-to-bl from-neutral-50 to-blue-200 rounded-xl shadow-md'>
                                <a
                                    href='https://tokopedia.link/qoZIKIkdcNb'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    class='block px-4 py-2 text-sm text-blue-900 flex justify-between items-center'
                                >
                                    Tokopedia
                                    <FaExternalLinkSquareAlt />
                                </a>
                                <a
                                    href='https://www.bukalapak.com/u/indoteknikriau'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    class='block px-4 py-2 text-sm text-blue-900 flex justify-between items-center'
                                >
                                    Bukalapak
                                    <FaExternalLinkSquareAlt />
                                </a>
                                <a
                                    href='https://shopee.co.id/indoteknikpekanbaru'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    class='block px-4 py-2 text-sm text-blue-900 flex justify-between items-center'
                                >
                                    Shopee
                                    <FaExternalLinkSquareAlt />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindMarketplace;
