import React, { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import ServicesMenu from './ServicesMenu';
import ProductsMenu from './ProductsMenu';
import Sidebar from './SidebarMobile';
import { TiThMenu } from 'react-icons/ti';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';

const Menu = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { t, i18n } = useTranslation('global');
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    // Handle smooth scroll to the center of the page
    const handleLogoClick = () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth', // Enable smooth scrolling
        });
    };

    return (
        <>
            {/* Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <nav className='sticky top-4 z-50 flex items-center justify-between p-3 bg-white bg-opacity-90 backdrop-blur shadow-md rounded-xl lg:w-[1000px] lg:mx-auto ml-4 mr-4 mb-4'>
                {/* Logo */}
                <Link to='/' onClick={handleLogoClick} className='lg:mb-0'>
                    <img
                        src='https://res.cloudinary.com/dcbryptkx/image/upload/v1721288377/cp-indoteknik-v3/logo/LogoIndoTeknik_arqulc.png'
                        className='h-[30px] w-auto'
                        alt='Indo Teknik Logo'
                        width='120'
                    />
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button
                    className='lg:hidden flex items-center px-2 py-1 text-blue-900'
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                >
                    <TiThMenu />
                </button>

                {/* Desktop Menu Items */}
                <ul className='hidden lg:flex space-x-4 p-4 mx-auto'>
                    <li className='relative group'>
                        <Link
                            to='/'
                            className={`${activeLink === '/' ? 'text-blue-900 font-semibold' : 'text-blue-900'} font-normal `}
                        >
                            {t('header.home')}
                        </Link>
                    </li>
                    <li className='relative group'>
                        <a
                            className={`${activeLink.startsWith('/services') ? 'text-blue-900 font-semibold' : 'text-blue-900'} font-normal flex justify-between`}
                        >
                            {t('header.services')} <MdArrowDropDown />
                        </a>
                        <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg invisible group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                            <ServicesMenu />
                        </div>
                    </li>
                    <li className='relative group'>
                        <a
                            className={`${activeLink.startsWith('/products') ? 'text-blue-900 font-semibold' : 'text-blue-900'} font-normal flex justify-between`}
                        >
                            {t('header.products')} <MdArrowDropDown />
                        </a>
                        <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg invisible group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                            <ProductsMenu />
                        </div>
                    </li>

                    

                    <li>
                        <Link
                            to='/about'
                            className={`${activeLink === '/about' ? 'text-blue-900 font-semibold' : 'text-blue-900'} font-normal `}
                        >
                            {t('header.aboutUs')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/contact'
                            className={`${activeLink === '/contact' ? 'text-blue-900 font-semibold' : 'text-blue-900'} font-normal `}
                        >
                            {t('header.contact')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/blog'
                            className={`${activeLink === '/blog' ?  'text-blue-900 font-semibold' : 'text-blue-900'} font-normal `}
                        >
                            Blog
                        </Link>
                    </li>
                </ul>

                {/* Flag Buttons */}
                <div className='hidden lg:flex items-center space-x-3 bg-gradient-to-bl from-neutral-50 to-blue-100 p-3 rounded-xl'>
                    <button
                        onClick={() => handleChangeLanguage('en')}
                        className={`${i18n.language === 'en' ? 'opacity-50' : ''}`}
                    >
                        <ReactCountryFlag
                            countryCode='US'
                            svg
                            style={{ width: '1.2em', height: '1.2em' }}
                        />
                    </button>
                    <span className='font-bold text-gray-900'>|</span>
                    <button
                        onClick={() => handleChangeLanguage('id')}
                        className={`${i18n.language === 'id' ? 'opacity-50' : ''}`}
                    >
                        <ReactCountryFlag
                            countryCode='ID'
                            svg
                            style={{ width: '1.2em', height: '1.2em' }}
                        />
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Menu;
