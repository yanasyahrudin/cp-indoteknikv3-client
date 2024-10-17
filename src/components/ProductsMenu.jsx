import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowRight  } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductsMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const {t} = useTranslation()

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
        setActiveSubMenu(null);
    };

    const handleSubMenuMouseEnter = (subMenu) => {
        setActiveSubMenu(subMenu);
    };

    const handleSubMenuMouseLeave = () => {
        setActiveSubMenu(null);
    };

    return (
        <ul className='absolute left-0 mt-2 w-56 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
            <li
                className='relative group'
                onMouseEnter={() => handleMouseEnter('FuelInjectionSystem')}
                onMouseLeave={handleMouseLeave}
            >
                <button className='block w-full text-left px-4 py-2  flex justify-between'>
                    {t('Fuel Injection Systems')} <MdArrowRight />
                </button>
                {activeMenu === 'FuelInjectionSystem' && (
                    <ul className='absolute left-full top-0 mt-0 w-56 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                        <li
                            className='relative group'
                            onMouseEnter={() =>
                                handleSubMenuMouseEnter('Conventional')
                            }
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <button className='block w-full text-left px-4 py-2 flex justify-between'>
                                {t('Conventional')} <MdArrowRight />
                            </button>
                            {activeSubMenu === 'Conventional' && (
                                <ul className='absolute left-full top-0 mt-0 w-56 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                                    <li>
                                        <Link
                                            to='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                                            className='block px-4 py-2'
                                        >
                                            Fuel Injection Pump 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/products/fuel-injection-systems/conventional/nozzle'
                                            className='block px-4 py-2'
                                        >
                                            Nozzle
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li
                            className='relative group'
                            onMouseEnter={() =>
                                handleSubMenuMouseEnter('CommonRail')
                            }
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <button className='block w-full text-left px-4 py-2 flex justify-between'>
                                Common Rail <MdArrowRight />
                            </button>
                            {activeSubMenu === 'CommonRail' && (
                                <ul className='absolute left-full top-0 mt-0 w-56 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                                    <li>
                                        <Link
                                            to='/products/fuel-injection-systems/common-rail/supply-pump'
                                            className='block px-4 py-2'
                                        >
                                            Supply Pump
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/products/fuel-injection-systems/common-rail/injector'
                                            className='block px-4 py-2'
                                        >
                                            Injector
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li
                            className='relative group'
                            onMouseEnter={() => handleSubMenuMouseEnter('VP44')}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <button className='block w-full text-left px-4 py-2 flex justify-between'>
                                VP44 <MdArrowRight />
                            </button>
                            {activeSubMenu === 'VP44' && (
                                <ul className='absolute left-full top-0 mt-0 w-56 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                                    <li>
                                        <Link
                                            to='/products/fuel-injection-systems/vp44/distributor-pump'
                                            className='block px-4 py-2'
                                        >
                                            Distributor Pump
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li
                            className='relative group'
                            onMouseEnter={() =>
                                handleSubMenuMouseEnter('Electric')
                            }
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <button className='block w-full text-left px-4 py-2 flex justify-between'>
                                Electric <MdArrowRight />
                            </button>
                            {activeSubMenu === 'Electric' && (
                                <ul className='absolute left-full top-0 mt-0 w-56 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                                    <li>
                                        <Link
                                            to='/products/fuel-injection-systems/electric/eui'
                                            className='block px-4 py-2'
                                        >
                                            EUI
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/products/fuel-injection-systems/electric/unit-pump'
                                            className='block px-4 py-2'
                                        >
                                            Unit Pump
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                )}
            </li>
            <li
                className='relative group'
                onMouseEnter={() => handleMouseEnter('AutomotiveAftermarket')}
                onMouseLeave={handleMouseLeave}
            >
                <button className='block w-full text-left px-4 py-2  flex justify-between'>
                    Automotive Aftermarket <MdArrowRight />
                </button>
                {activeMenu === 'AutomotiveAftermarket' && (
                    <ul className='absolute left-full top-0 mt-0 w-56 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                        <li>
                            <Link
                                to='/products/automotive-aftermarket/battery'
                                className='block px-4 py-2'
                            >
                                {t('Battery')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/automotive-aftermarket/brake'
                                className='block px-4 py-2'
                            >
                                {t('Brake')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/automotive-aftermarket/bulb-lighting'
                                className='block px-4 py-2'
                            >
                                {t('Bulb and Lighting')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/automotive-aftermarket/filter'
                                className='block px-4 py-2'
                            >
                                Filter
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/automotive-aftermarket/gasoline-system'
                                className='block px-4 py-2'
                            >
                                Gasoline System
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/automotive-aftermarket/horn'
                                className='block px-4 py-2'
                            >
                                {t('Horn')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/automotive-aftermarket/relay'
                                className='block px-4 py-2'
                            >
                                Relay
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/automotive-aftermarket/spark-plug'
                                className='block px-4 py-2'
                            >
                                {t('Spark Plug')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/automotive-aftermarket/wiper'
                                className='block px-4 py-2'
                            >
                                Wiper
                            </Link>
                        </li>
                    </ul>
                )}
            </li>
            <li
                className='relative group'
                onMouseEnter={() => handleMouseEnter('OtherProducts')}
                onMouseLeave={handleMouseLeave}
            >
                <button className='block w-full text-left px-4 py-2  flex justify-between'>
                    {t('Other Products')} <MdArrowRight />
                </button>
                {activeMenu === 'OtherProducts' && (
                    <ul className='absolute left-full top-0 mt-0 w-56 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                        <li>
                            <Link
                                to='/products/other-products/ecu'
                                className='block px-4 py-2'
                            >
                                ECU
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/other-products/sensor'
                                className='block px-4 py-2'
                            >
                                Sensor
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/products/other-products/starter-alternator'
                                className='block px-4 py-2'
                            >
                                Starter & Alternator
                            </Link>
                        </li>
                        
                        <li>
                            <Link
                                to='/products/other-products/tools'
                                className='block px-4 py-2'
                            >
                                Tools
                            </Link>
                        </li>
                        
                        <li>
                            <Link
                                to='/products/other-products/turbo-charger'
                                className='block px-4 py-2'
                            >
                                Turbo Charger
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/products/other-products/power-tool'
                                className='block px-4 py-2'
                            >
                                Power Tool
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/products/other-products/socket'
                                className='block px-4 py-2'
                            >
                                Socket
                            </Link>
                        </li>
                       

                        <li>
                            <Link
                                to='/products/other-products/cover-injector'
                                className='block px-4 py-2'
                            >
                                Cover Injector
                            </Link>
                        </li>
                       
                    </ul>
                )}
            </li>
        </ul>
    );
};

export default ProductsMenu;
