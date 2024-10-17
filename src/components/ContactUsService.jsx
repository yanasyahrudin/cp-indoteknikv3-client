import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactUsService = () => {
    const [t] = useTranslation('global');
    return (
        <div className='lg:w-[1200px] mx-auto p-4 sm:p-4 md:p-4 lg:p-0'>
            <div className='rounded overflow-hidden flex flex-col mx-auto text-center'>
                <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 p-6 rounded-xl'>
                    <div className='lg:max-w-full'>
                        <h4 className='mt-2 text-2xl text-center font-extrabold leading-8 text-blue-900 sm:text-3xl sm:leading-9'>
                            {t('services.contactUs')}
                        </h4>
                        <ul className='mt-8 space-y-3 font-medium'>
                            <li className='flex items-start lg:col-span-1'>
                                <p className='leading-5 text-gray-600 text-center mx-auto'>
                                    {t('services.contactUsDesc')}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsService;
