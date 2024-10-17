import React, { useEffect } from 'react';
import SharePost from './../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const L300CarInjectorRepairSolutionToPowerAndEmissionProblems = () => {
    const currentPostTitle =
        'Perbaikan Injector Mobil L300: Solusi untuk Masalah Tenaga dan Emisi';
    // Sort blog posts by date (latest first)

    // Find the current post in blogPosts using the title
    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle,
    );

    // Extract the publication date from the current post
    const publicationDate = currentPost
        ? new Date(currentPost.date).toLocaleDateString()
        : 'Unknown Date';

    // Sort blog posts by date (latest first)
    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date) - new Date(a.date),
    );

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className='my-16 lg:flex max-w-[1200px] lg:mx-auto gap-8 rounded-xl md:mx-4 mx-4'>
            <Helmet>
                <title>{currentPostTitle} | Indo Teknik</title>
                <meta
                    name='description'
                    content='Ini adalah halaman post dari blog indo teknik'
                />
                <meta
                    name='keywords'
                    content='servis injector pekanbaru, workshop indo teknik, workshop injector pekanbaru'
                />
            </Helmet>

            <div className='max-w-4xl px-8 py-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100'>
                <div>
                    <h1 className='text-4xl font-bold text-blue-900 mb-4'>
                        {currentPostTitle}
                    </h1>

                    <div className='flex justify-between'>
                            <span className='text-gray-500 text-sm'>
                                Published by <strong>Admin</strong> on{' '}
                                <strong>{publicationDate}</strong>
                            </span>
                            <span className='text-gray-500 text-sm'>
                                Category:{' '}
                                <strong>{currentPost.category}</strong>
                            </span>
                        </div>

                    <div className='mt-5'>
                        <img
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888378/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/1_yni2hh.png'
                            alt={currentPostTitle}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Halo Sobat Donik! Kali ini kita akan membahas kasus
                            menarik yang terjadi pada mobil L300 yang masuk ke
                            Indo Teknik dengan beberapa keluhan serius. Mari
                            kita simak bagaimana kami menangani masalah tersebut
                            dan apa hasil akhirnya!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Keluhan Awal
                    </h2>
                    <div className='gap-6 text-justify'>
                        <p>
                            Mobil L300 ini datang dengan beberapa masalah yang
                            cukup signifikan:
                        </p>
                        <ul>
                            <li className='mx-5 list-disc'>
                                <strong>Tenaga Tidak Ada:</strong> Pengemudi
                                merasa mobil tidak memiliki tenaga saat
                                digunakan.
                            </li>
                            <li className='mx-5 list-disc'>
                                <strong>Starter Panjang:</strong> Diperlukan
                                waktu lama untuk memulai mesin.
                            </li>
                            <li className='mx-5 list-disc'>
                                <strong>Asap Hitam Tebal:</strong> Tanda bahwa
                                ada masalah dalam pembakaran bahan bakar.
                            </li>
                            <li className='mx-5 list-disc'>
                                <strong> Lampu Engine Menyala:</strong>{' '}
                                Indikator bahwa ada masalah serius yang perlu
                                ditangani.
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Proses Diagnosa
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728889247/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/2_ymipmp.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah menerima mobil, langkah pertama kami adalah
                            melakukan pengecekan di{' '}
                            <Link
                                className='font-bold text-blue-900'
                                to='https://www.indo-teknik.com/test-bench-and-fabrication-machines'
                            >
                                mesin tes
                            </Link>
                            . Hasilnya? Ternyata{' '}
                            <strong>keempat injektor</strong> perlu diperbaiki.
                            Ini adalah masalah yang umum terjadi dan bisa sangat
                            mempengaruhi performa kendaraan.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pembongkaran dan Penggantian Sparepart
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888392/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/3_t05suq.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah mengetahui masalahnya, kami segera
                            membongkar injektor menggunakan tool khusus. Selama
                            proses pembongkaran, kami menemukan bahwa beberapa
                            bagian dari injektor perlu diganti. Kami mengganti
                            sparepart tersebut dengan merek original, yaitu{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='https://itechpersadanusantara.com/'
                            >
                                ITech
                            </Link>{' '}
                            dan <strong>Liwei</strong>, yang terkenal akan
                            kualitasnya.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Perakitan Kembali Injektor
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888389/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/4_jwlmwn.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah mengganti komponen yang rusak, injektor
                            dirakit kembali menggunakan tool khusus. Kami
                            memastikan bahwa semua proses perakitan sesuai
                            dengan <strong>standar perakitan injektor</strong>.
                            Proses ini sangat penting untuk memastikan injektor
                            bekerja dengan optimal.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pengujian dan Kalibrasi
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888380/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/5_aytji3.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4 justify-content'>
                            Setelah perakitan selesai, injektor kembali dites di
                            mesin tes untuk memastikan bahwa semuanya berfungsi
                            dengan baik. Selanjutnya, injektor dilanjutkan ke{' '}
                            <strong>mesin kalibrasi</strong> untuk melihat hasil
                            kalibrasi injektornya. Kalibrasi ini penting untuk
                            memastikan bahwa injektor dapat menyuplai bahan
                            bakar dengan tepat sesuai kebutuhan mesin.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Penasaran dengan Hasilnya?
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        Tunggu{' '}
                        <Link
                            className='font-bold text-blue-900 underline    '
                            to='http://www.indo-teknik.com/2024/10/l300-car-injector-repair-part-ii'
                        >
                            part II
                        </Link>{' '}
                        ya! Kami akan segera membagikan hasil akhir perbaikan
                        ini dan bagaimana performa mobil L300 setelah{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            to='https://www.indo-teknik.com/services/common-rail/injector'
                        >
                            {' '}
                            servis injektor
                        </Link>
                        .
                    </p>
                    <p className='text-gray-600 mb-4'>
                        Indo Teknik adalah solusi lengkap untuk memenuhi segala
                        kebutuhan diesel Anda. Jika Anda memiliki masalah serupa
                        atau ingin melakukan perawatan pada kendaraan Anda,
                        jangan ragu untuk menghubungi kami!
                    </p>
                </div>

                <SharePost currentPostTitle={currentPostTitle} />
            </div>
            <SidebarPost latestPosts={latestPosts} />
        </div>
    );
};

export default L300CarInjectorRepairSolutionToPowerAndEmissionProblems;
