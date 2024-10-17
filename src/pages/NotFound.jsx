import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <body class='flex flex-col h-screen justify-center items-center '>
            <Helmet>
                <title>{t('Page Not Found')} | Indo Teknik</title>
                <meta
                    name='description'
                    content='Halaman ini muncul ketika halaman yang dicari tidak ditemuka'
                />
                <meta
                    name='keywords'
                    content='servis diesel pekanbaru, diesel part pekanbaru, Indo Teknik Pekanbaru'
                />
            </Helmet>
            <div class='flex flex-col items-center'>
                <h1 class='text-[120px] font-extrabold text-gray-700 animate-bounceIn'>
                    404
                </h1>
                <p class='text-2xl font-medium text-gray-600 mb-6 animate-bounceIn'>
                    {t('Page Not Found')}
                </p>
                <a
                    href='/'
                    class='px-4 py-2 font-medium text-white bg-blue-900 rounded-xl hover:text-blue-900 hover:bg-gradient-to-bl from-neutral-50 to-blue-100 transition-all duration-200 ease-in-out'
                >
                    {t('Go Home')}
                </a>
            </div>
        </body>
    );
};

export default NotFound;
