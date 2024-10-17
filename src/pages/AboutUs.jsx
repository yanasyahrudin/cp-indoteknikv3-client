import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';
import AnimatedSection from './../components/AnimatedSection';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    const [t] = useTranslation('global');

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, []); // Empty dependency array to run only once on mount

    return (
        <>
            <Helmet>
                <title>{t('header.aboutUs')} | Indo Teknik</title>
                <meta
                    name='description'
                    content='Ini adalah halaman tentang Indo Teknik'
                />
                <meta
                    name='keywords'
                    content='tentang, sejarah, tentang indo teknik'
                />
            </Helmet>
            <div className='mx-auto py-10 lg:w-[1200px] px-4 lg:px-0'>
                <div className='rounded overflow-hidden flex flex-col mx-auto text-center'>
                    <h1 className='text-blue-900 max-w-xl mx-auto text-4xl sm:text-6xl font-bold transition duration-500 ease-in-out inline-block mb-2 animate-bounceIn'>
                        {t('about.title.title1')}
                    </h1>
                    <h1 className='text-red-500 max-w-xl mx-auto text-4xl sm:text-6xl font-bold transition duration-500 ease-in-out inline-block mb-2 animate-bounceIn'>
                        {t('about.title.title2')}
                    </h1>
                    <AnimatedSection zoomType='zoomIn'>
                        <div className='relative w-full sm:max-w-screen-lg my-4 rounded-xl sm:mt-10 mx-auto'>
                            <img
                                className='w-full rounded-xl'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_900/v1720083872/cp-indoteknik-v3/about/DSC_0387b_a7lshk.jpg'
                                alt={t('about.imageAlt')}
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent rounded-xl'></div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection zoomType='zoomIn'>
                        <div className='mt-5 bg-gradient-to-bl from-neutral-50 to-blue-100 p-8 rounded-xl text-justify'>
                            <p className='text-gray-900 text-lg   mx-auto font-normal'>
                                {t('about.paragraph1')}
                            </p>
                            <br />
                            <p className='text-gray-900 text-lg  mx-auto font-normal'>
                                {t('about.paragraph2.cont1')}{' '}
                                <a
                                    href='https://www.google.com/maps?q=INDO+TEKNIK+injector+injection+pump+part+&+service'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='underline text-blue-700'
                                >
                                    <strong>
                                        Jl. Riau Ujung No.898-904 Pekanbaru
                                    </strong>
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
                    </AnimatedSection>
                </div>
            </div>

            <AnimatedSection zoomType='zoomOut'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 lg:w-[1200px] lg:mx-auto mb-20 px-4 lg:px-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 '>
                        <figure className='relative w-full h-60 '>
                            <img
                                className='w-full h-full absolute top-0 start-0 object-cover rounded-xl'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1720080589/cp-indoteknik-v3/about/DSC_0371bb_mk3g3v.jpg'
                                alt={t('about.imageDescription')}
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent rounded-xl'></div>
                        </figure>
                        <figure className='relative w-full h-60'>
                            <img
                                className='w-full h-full absolute top-0 start-0 object-cover rounded-xl'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1720080611/cp-indoteknik-v3/about/DSC_0371b_vdjybw.jpg'
                                alt={t('about.imageDescription')}
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent rounded-xl'></div>
                        </figure>
                    </div>
                    <figure className='relative w-full h-72 sm:h-96 lg:h-full '>
                        <img
                            className='w-full h-full absolute top-0 start-0 object-cover rounded-xl'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/h_600/v1720080580/cp-indoteknik-v3/about/DSC_0380b_q17gkh.jpg'
                            alt={t('about.imageDescription')}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent rounded-xl'></div>
                    </figure>
                </div>
            </AnimatedSection>
        </>
    );
};

export default AboutUs;
