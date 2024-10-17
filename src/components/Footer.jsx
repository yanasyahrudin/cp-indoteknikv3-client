import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Footer = () => {
    const { t } = useTranslation('global');

    const handleEmailClick = () => {
        window.location.href = 'mailto:customerservice@indo-teknik.com';
    };

    const handleWhatsappClick = () => {
        let phoneNumber = '+628117531881';
        let message = t('footer.whatsappMessage');
        let encodedMessage = encodeURIComponent(message);
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
            '_blank',
        );
    };

    return (
        <footer className='text-center bg-blue-900 pt-5 pb-5 rounded-xl lg:w-[1200px] lg:mx-auto mt-4 ml-4 mr-4 '>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap text-left lg:text-left'>
                    <div className='w-full lg:w-6/12 px-4'>
                        <h4 className='text-3xl font-semibold text-gray-200'>
                            {t('footer.stayConnected')}
                        </h4>
                        <h5 className='text-lg mt-0 mb-2 text-gray-100 mt-2'>
                            {t('footer.findUs')}
                        </h5>
                        <div className='mt-6 lg:mb-0 mb-6'>
                            <a
                                href='https://www.instagram.com/indoteknik'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button
                                    className='bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 '
                                    type='button'
                                >
                                    <FaInstagram className='bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-xl outline-none focus:outline-none mr-2 p-1 hover:bg-blue-900 hover:text-white' />
                                </button>
                            </a>
                            <a
                                href='https://www.tiktok.com/@indoteknikofficial'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button
                                    className='bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                                    type='button'
                                >
                                    <FaTiktok className='bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-xl outline-none focus:outline-none mr-2 p-2 hover:bg-blue-900 hover:text-white' />
                                </button>
                            </a>
                            <a
                                href='https://www.facebook.com/indoteknikriau?mibextid=LQQJ4d'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button
                                    className='bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                                    type='button'
                                >
                                    <FaFacebook className='bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-xl outline-none focus:outline-none mr-2 p-2 hover:bg-blue-900 hover:text-white' />
                                </button>
                            </a>
                            <button
                                className='bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                                type='button'
                                onClick={handleEmailClick}
                            >
                                <MdOutlineEmail className='bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-xl outline-none focus:outline-none mr-2 p-2 hover:bg-blue-900 hover:text-white' />
                            </button>
                            <button
                                className='bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                                type='button'
                                onClick={handleWhatsappClick}
                            >
                                <FaWhatsapp className='bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-xl outline-none focus:outline-none mr-2 p-2 hover:bg-blue-900 hover:text-white' />
                            </button>
                        </div>
                    </div>

                    <div className='w-full lg:w-6/12 px-4 '>
                        <div className='flex flex-wrap items-top mb-6'>
                            <div className='w-full lg:w-6/12 ml-auto '>
                                <span className='block text-gray-200 text-sm font-semibold mb-5'>
                                {t('footer.serviceCategories.title')}
                                </span>
                                <ul class='flex divide-border flex-row flex-wrap text-gray-200 max-w-2xl leading-tight text-sm font-normal gap-4 cursor-pointer'>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/conventional/fuel-injection-pump'>
                                        {t('footer.serviceCategories.list1')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/conventional/nozzle'>
                                        {t('footer.serviceCategories.list2')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/common-rail/supply-pump'>
                                        {t('footer.serviceCategories.list3')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/common-rail/injector'>
                                        {t('footer.serviceCategories.list4')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/electric/eui'>
                                        {t('footer.serviceCategories.list5')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/electric/unit-pump'>
                                        {t('footer.serviceCategories.list6')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/electric/tics'>
                                        {t('footer.serviceCategories.list7')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/fabrication/fabrication'>
                                        {t('footer.serviceCategories.list8')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/fabrication/welding'>
                                        {t('footer.serviceCategories.list9')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/fabrication/lathe'>
                                        {t('footer.serviceCategories.list10')}
                                        </Link>
                                    </li>
                                    <li class='list-disc hover:text-gray-100 mx-2'>
                                        <Link to='/services/fabrication/press'>
                                        {t('footer.serviceCategories.list11')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-full lg:w-4/12 lg:mt-0 mt-5 '>
                                <span className='block text-gray-200 text-sm font-semibold mb-5'>
                                    {t('footer.ourLocation')}
                                </span>
                                <iframe
                                    className='rounded-xl md:h-[250px] lg:h-[150px]'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.551423491828!2d101.39168629724517!3d0.5449523911953816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5abb8cefa2a57%3A0x80d9f7c9ffbdf761!2sIndo%20Teknik!5e0!3m2!1sen!2sid!4v1717746911996!5m2!1sen!2sid'
                                    width='100%'
                                    height='130'
                                    style={{ border: 0 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap items-center md:justify-between justify-center mt-10'>
                    <div className='w-full md:w-4/4 px-4 mx-auto text-center'>
                        <div className='text-sm text-gray-200 font-normal py-1'>
                            <span className='font-semibold'>Disclaimer:</span>
                            <div className='mt-2'>
                                <span>{t('footer.disclaimer')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap items-center md:justify-between justify-center mt-10'>
                    <div className='w-full md:w-4/8 px-4 mx-auto text-center'>
                        <div className='text-sm text-gray-200 font-semibold py-1'>
                            <span>
                                © {new Date().getFullYear()} Indo Teknik.
                                {t('footer.copyright')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
