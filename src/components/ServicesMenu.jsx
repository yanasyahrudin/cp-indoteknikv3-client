import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ServicesMenu = () => {
    const [activeService, setActiveService] = useState(null);

    const handleMouseEnter = (service) => {
        setActiveService(service);
    };

    const handleMouseLeave = () => {
        setActiveService(null);
    };

    const { t } = useTranslation();

    return (
        <ul className='absolute left-0 mt-2 w-56 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
            <li
                className='relative group'
                onMouseEnter={() => handleMouseEnter('Conventional')}
                onMouseLeave={handleMouseLeave}
            >
                <button className='block w-full text-left px-4 py-2 flex justify-between'>
                    {t('Conventional')} <MdArrowRight />
                </button>
                {activeService === 'Conventional' && (
                    <ul className='absolute left-full top-0 mt-0 w-48 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                        <li>
                            <Link
                                to='/services/conventional/fuel-injection-pump'
                                className='block px-4 py-2'
                            >
                                Fuel Injection Pump
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services/conventional/nozzle'
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
                onMouseEnter={() => handleMouseEnter('Common Rail')}
                onMouseLeave={handleMouseLeave}
            >
                <button className='block w-full text-left px-4 py-2 flex justify-between'>
                    Common Rail <MdArrowRight />
                </button>
                {activeService === 'Common Rail' && (
                    <ul className='absolute left-full top-0 mt-0 w-48 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                        <li>
                            <Link
                                to='/services/common-rail/supply-pump'
                                className='block px-4 py-2'
                            >
                                Supply Pump
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services/common-rail/injector'
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
                onMouseEnter={() => handleMouseEnter('Electric')}
                onMouseLeave={handleMouseLeave}
            >
                <button className='block w-full text-left px-4 py-2 flex justify-between'>
                    Electric <MdArrowRight />
                </button>
                {activeService === 'Electric' && (
                    <ul className='absolute left-full top-0 mt-0 w-48 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                        <li>
                            <Link
                                to='/services/electric/eui'
                                className='block px-4 py-2'
                            >
                                EUI
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services/electric/unit-pump'
                                className='block px-4 py-2'
                            >
                                Unit Pump
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services/electric/tics'
                                className='block px-4 py-2'
                            >
                                TICS
                            </Link>
                        </li>
                    </ul>
                )}
            </li>

            <li
                className='relative group'
                onMouseEnter={() => handleMouseEnter('Fabrication')}
                onMouseLeave={handleMouseLeave}
            >
                <button className='block w-full text-left px-4 py-2 flex justify-between'>
                    {t('Fabrication')} <MdArrowRight />
                </button>
                {activeService === 'Fabrication' && (
                    <ul className='absolute left-full top-0 mt-0 w-48 bg-gradient-to-bl from-neutral-50 to-blue-200 text-blue-900 rounded-xl'>
                        <li>
                            <Link
                                to='/services/fabrication/fabrication'
                                className='block px-4 py-2'
                            >
                                {t('Fabrication')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services/fabrication/welding'
                                className='block px-4 py-2'
                            >
                                {t('Welding')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services/fabrication/lathe'
                                className='block px-4 py-2'
                            >
                                {t('Lathe')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services/fabrication/press'
                                className='block px-4 py-2'
                            >
                                {t('Press')}
                            </Link>
                        </li>
                    </ul>
                )}
            </li>
        </ul>
    );
};

export default ServicesMenu;
