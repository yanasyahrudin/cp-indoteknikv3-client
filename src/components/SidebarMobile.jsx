import React, { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const SidebarMobile = ({ isOpen, onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [conventionalOpen, setConventionalOpen] = useState(false);
    const [commonRailOpen, setCommonRailOpen] = useState(false);
    const [vp44Open, setVp44Open] = useState(false);
    const [electricOpen, setElectricOpen] = useState(false);
    const [fabricationOpen, setFabricationOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [productTypeOpen, setProductTypeOpen] = useState('');
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
        setProductsOpen(false);
    };

    const toggleConventional = () => {
        setConventionalOpen(!conventionalOpen);
        setCommonRailOpen(false);
        setVp44Open(false);
        setElectricOpen(false);
        setFabricationOpen(false);
    };

    const toggleCommonRail = () => {
        setCommonRailOpen(!commonRailOpen);
        setConventionalOpen(false);
        setVp44Open(false);
        setElectricOpen(false);
        setFabricationOpen(false);
    };

    const toggleVp44 = () => {
        setVp44Open(!vp44Open);
        setConventionalOpen(false);
        setCommonRailOpen(false);
        setElectricOpen(false);
        setFabricationOpen(false);
    };

    const toggleElectric = () => {
        setElectricOpen(!electricOpen);
        setConventionalOpen(false);
        setCommonRailOpen(false);
        setVp44Open(false);
        setFabricationOpen(false);
    };

    const toggleFabrication = () => {
        setFabricationOpen(!fabricationOpen);
        setConventionalOpen(false);
        setCommonRailOpen(false);
        setVp44Open(false);
        setElectricOpen(false);
    };

    const toggleProducts = () => {
        setProductsOpen(!productsOpen);
        setServicesOpen(false);
    };

    const toggleProductType = (type) => {
        setProductTypeOpen(productTypeOpen === type ? '' : type);
        setProductsOpen(true);
    };

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <div
            className={`fixed z-[2147483647] inset-0 bg-gradient-to-bl from-neutral-50 to-blue-200 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
        >
            <div className='w-full h-full  p-4 '>
                <button
                    className='text-gray-900 float-right p-4'
                    onClick={onClose}
                >
                    <IoMdClose />
                </button>
                <ul className='space-y-4 shadow-lg bg-white p-4 rounded-xl'>
                    <li>
                        <Link
                            to='/'
                            className={`${activeLink === '/' ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 `}
                        >
                            {t('Home')}
                        </Link>
                    </li>
                    <li>
                        <button
                            className={`${activeLink.startsWith('/services') ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 w-full text-left flex items-center justify-between`}
                            onClick={toggleServices}
                        >
                            {t('Services')}
                            <MdArrowForwardIos
                                className={`transition-transform ${servicesOpen ? 'rotate-90' : ''}`}
                            />
                        </button>
                        {servicesOpen && (
                            <ul className='pl-4 mt-2 space-y-2 bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl p-2'>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={toggleConventional}
                                    >
                                        {t('Conventional')}
                                        <MdArrowForwardIos
                                            className={`transition-transform ${conventionalOpen ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {conventionalOpen && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <Link to='/services/conventional/fuel-injection-pump'>
                                                    Fuel Injection Pump
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/services/conventional/nozzle'>
                                                    Nozzle
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={toggleCommonRail}
                                    >
                                        Common Rail
                                        <MdArrowForwardIos
                                            className={`transition-transform ${commonRailOpen ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {commonRailOpen && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <Link to='/services/common-rail/supply-pump'>
                                                    Supply Pump
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/services/common-rail/injector'>
                                                    Injector
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={toggleElectric}
                                    >
                                        Electric
                                        <MdArrowForwardIos
                                            className={`transition-transform ${electricOpen ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {electricOpen && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <Link to='/services/electric/eui'>
                                                    EUI
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/services/electric/unit-pump'>
                                                    Unit Pump
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/services/electric/tics'>
                                                    TICS
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={toggleFabrication}
                                    >
                                        {t('Fabrication')}
                                        <MdArrowForwardIos
                                            className={`transition-transform ${fabricationOpen ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {fabricationOpen && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <Link to='/services/fabrication/fabrication'>
                                                    {t('Fabrication')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/services/fabrication/welding'>
                                                    {t('Welding')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/services/fabrication/lathe'>
                                                    {t('Lathe')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/services/fabrication/press'>
                                                    {t('Press')}
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            className={`${activeLink.startsWith('/products') ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 w-full text-left flex items-center justify-between`}
                            onClick={toggleProducts}
                        >
                            {t('Products')}
                            <MdArrowForwardIos
                                className={`transition-transform ${productsOpen ? 'rotate-90' : ''}`}
                            />
                        </button>
                        {productsOpen && (
                            <ul className='pl-4 mt-2 space-y-2 bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl p-2'>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={() =>
                                            toggleProductType('FuelInjection')
                                        }
                                    >
                                        {t('Fuel Injection Systems')}
                                        <MdArrowForwardIos
                                            className={`transition-transform ${productTypeOpen === 'FuelInjection' ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {productTypeOpen === 'FuelInjection' && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleConventional}
                                                >
                                                    {t('Conventional')}
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${conventionalOpen ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {conventionalOpen && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <Link to='/products/fuel-injection-systems/conventional/fuel-injection-pump'>
                                                                Fuel Injection
                                                                Pump
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to='/products/fuel-injection-systems/conventional/nozzle'>
                                                                Nozzle
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleCommonRail}
                                                >
                                                    Common Rail
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${commonRailOpen ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {commonRailOpen && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <Link to='/products/fuel-injection-systems/common-rail/supply-pump'>
                                                                Supply Pump
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to='/products/fuel-injection-systems/common-rail/injector'>
                                                                Injector
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleVp44}
                                                >
                                                    VP44
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${vp44Open ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {vp44Open && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <Link to='/products/fuel-injection-systems/vp44/distributor-pump'>
                                                                Distributor Pump
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleElectric}
                                                >
                                                    Electric
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${electricOpen ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {electricOpen && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <Link to='/products/fuel-injection-systems/electric/eui'>
                                                                EUI
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to='/products/fuel-injection-systems/electric/unit-pump'>
                                                                Unit Pump
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={() =>
                                            toggleProductType('Aftermarket')
                                        }
                                    >
                                        Automotive Aftermarket
                                        <MdArrowForwardIos
                                            className={`transition-transform ${productTypeOpen === 'Aftermarket' ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {productTypeOpen === 'Aftermarket' && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <Link to='/products/automotive-aftermarket/battery'>
                                                    {t('Battery')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/automotive-aftermarket/brake'>
                                                    {t('Brake')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/automotive-aftermarket/bulb-lighting'>
                                                    {t('Bulb and Lighting')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/automotive-aftermarket/filter'>
                                                    Filter
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/automotive-aftermarket/gasoline-system'>
                                                    Gasoline System
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/automotive-aftermarket/horn'>
                                                    {t('Horn')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/automotive-aftermarket/relay'>
                                                    Relay
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/automotive-aftermarket/spark-plug'>
                                                    {t('Spark Plug')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/automotive-aftermarket/wiper'>
                                                    Wiper
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={() =>
                                            toggleProductType('Other')
                                        }
                                    >
                                        {t('Other Products')}
                                        <MdArrowForwardIos
                                            className={`transition-transform ${productTypeOpen === 'Other' ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {productTypeOpen === 'Other' && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <Link to='/products/other-products/ecu'>
                                                    ECU
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/other-products/sensor'>
                                                    Sensor
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/other-products/starter-alternator'>
                                                    {t(
                                                        'Starter and Alternator',
                                                    )}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/other-products/tools'>
                                                    Tools
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/other-products/turbo-charger'>
                                                    Turbo Charger
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/other-products/power-tool'>
                                                    Power Tool
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/products/other-products/socket'>
                                                    Socket
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link
                            to='/about'
                            className={`${activeLink === '/about' ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 `}
                        >
                            {t('About')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/contact'
                            className={`${activeLink === '/contact' ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 `}
                        >
                            {t('Contact')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/blog'
                            className={`${activeLink === '/blog' || activeLink === '/2024' ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 `}
                        >
                            Blog
                        </Link>
                    </li>
                    <li className='flex items-center space-x-3 bg-gradient-to-bl from-neutral-50 to-blue-100 p-3 rounded-xl max-w-24'>
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
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SidebarMobile;
