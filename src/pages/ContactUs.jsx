import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    const [t, i18n] = useTranslation('global');

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
                <title>{t('header.contact')} | Indo Teknik</title>
                <meta
                    name='description'
                    content='Ini adalah halaman kontak indo teknik'
                />
                <meta
                    name='keywords'
                    content='alamat indo teknik, jam operasional indo teknik, kontak indo teknik'
                />
            </Helmet>

            <section className=''>
                <div className='lg:w-[1200px] mx-4 lg:mx-auto py-8 lg:py-10'>
                    <div className='max-w-2xl lg:max-w-4xl mx-auto text-center'>
                        <h2 className='text-blue-900 max-w-xl mx-auto text-4xl sm:text-6xl font-bold transition duration-500 ease-in-out inline-block mb-2 animate-bounceIn'>
                            {t('contact.title')}
                        </h2>
                    </div>
                    <div className='mt-8 lg:mt-10 '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='rounded-xl overflow-hidden animate-bounceIn'>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.551423491828!2d101.39168629724517!3d0.5449523911953816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5abb8cefa2a57%3A0x80d9f7c9ffbdf761!2sIndo%20Teknik!5e0!3m2!1sen!2sid!4v1717746911996!5m2!1sen!2sid'
                                    width='100%'
                                    height='350'
                                    style={{ border: 0 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                ></iframe>
                            </div>
                            <div className='animate-bounceIn'>
                                <div className='max-w-full mx-auto rounded-xl overflow-hidden bg-gradient-to-bl from-neutral-50 to-blue-100'>
                                    <div className='px-6 py-4'>
                                        <h3 className='text-lg font-medium text-gray-900 flex items-center'>
                                            <FaMapMarkerAlt className='text-blue-900 mr-2' />
                                            {t('contact.ourAddress.header')}
                                        </h3>

                                        <p className='mt-1 text-gray-600'>
                                            {t('contact.ourAddress.content')}
                                        </p>
                                        <p className='mt-1 text-gray-600'>
                                            {t('contact.ourAddress.content2')}
                                        </p>
                                    </div>
                                    <div className='border-t border-gray-200 px-6 py-4'>
                                        <h3 className='text-lg font-medium text-gray-900 flex items-center'>
                                            <IoIosTime className='text-blue-900 mr-2' />
                                            {t('contact.hours.header')}
                                        </h3>
                                        <p className='mt-1 text-gray-600'>
                                            {t('contact.hours.available')}
                                        </p>
                                        <p className='mt-1 text-gray-600'>
                                            {t('contact.hours.closed')}
                                        </p>
                                    </div>
                                    <div className='border-t border-gray-200 px-6 py-4'>
                                        <h3 className='text-lg font-medium text-gray-900 flex items-center '>
                                            <RiContactsBook2Fill className='text-blue-900 mr-2' />
                                            {t('contact.contactUs.header')}
                                        </h3>
                                        <p className='mt-1 text-gray-600'>
                                            {t('contact.contactUs.email')}
                                        </p>
                                        <p className='mt-1 text-gray-600'>
                                            {t('contact.contactUs.phone')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
