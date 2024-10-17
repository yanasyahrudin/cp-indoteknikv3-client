import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdArrowDropdownCircle } from 'react-icons/io';


const AboutHome = () => {
    const [t] = useTranslation('global');
    
    const [showMore, setShowMore] = useState(false);
    
    const contentRef = useRef(null);
    
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
      

    return (
        <div className='mx-auto mt-5 sm:mt-4 md:mt-4 lg:mt-4'>
            <div className='lg:mx-auto lg:w-[1200px] mx-4 bg-gradient-to-bl from-neutral-50 to-blue-100 p-8 rounded-xl text-justify'>
                <p className='text-gray-900 text-lg   mx-auto font-normal'>
                    {t('about.paragraph1')}
                </p>

                <br />
                <div
                    ref={contentRef}
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? 'max-h-screen' : 'max-h-0'}`}
                    style={{
                        maxHeight: showMore
                            ? `${contentRef.current?.scrollHeight}px`
                            : '0',
                    }}
                >
                    <p className='text-gray-900 text-lg  mx-auto font-normal'>
                        {t('about.paragraph2.cont1')}{' '}
                        <a
                            href='https://www.google.com/maps?q=INDO+TEKNIK+injector+injection+pump+part+&+service'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='underline text-blue-700'
                        >
                            <strong>Jl. Riau Ujung No.898-904 Pekanbaru</strong>
                        </a>
                        , {t('about.paragraph2.cont2')}
                    </p>
                    <br />
                    <p className='text-gray-900 text-lg  mx-auto font-normal'>
                        {t('about.paragraph3')}
                    </p>
                    <br />
                    <div>
                        <ul className='space-y-3 font-normal text-lg'>
                            {[
                                'item1',
                                'item2',
                                'item3',
                                'item4',
                                'item5',
                                'item6',
                                'item7',
                                'item8',
                            ].map((item, index) => (
                                <li
                                    className='flex items-start mt-5 lg:col-span-10 lg:mt-0'
                                    key={index}
                                >
                                    <div className='flex-shrink-0'>
                                        <FaCheckCircle className='text-blue-900 mt-2' />
                                    </div>
                                    <p className='ml-3 '>
                                        {t(`about.services.${item}`)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button
                    className='mt-4 text-blue-800 bg-gradient-to-bl from-neutral-50 to-blue-100 py-2 px-4 rounded-xl font-bold justify-center items-center flex gap-2 mx-auto shadow-md'
                    onClick={toggleShowMore}
                >
                    {showMore ? t('home.showLess') : t('home.showMore')}
                    <IoMdArrowDropdownCircle
                        className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                    />
                </button>
            </div>
        </div>
    );
};

export default AboutHome;
