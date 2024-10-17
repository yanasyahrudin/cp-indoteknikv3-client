import React, { useEffect } from 'react';
import SharePost from './../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const L300CarInjectorRepairSolutionToPowerAndEmissionProblems = () => {
    const currentPostTitle =
        'Perbaikan Injector Mobil L300: Part II - Pencucian Tangki dan Pemasangan Injektor';
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728894957/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepairPartII/1_ziprej.png'
                            alt={currentPostTitle}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Halo Sobat Donik! Selamat datang di Part II dari
                            perjalanan perbaikan mobil L300 kami. Di{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='https://www.indo-teknik.com/2024/10/l300-car-injector-repair'
                            >
                                part sebelumnya
                            </Link>
                            , kita sudah membahas proses{' '}
                            <strong>pembongkaran injektor</strong> dan{' '}
                            <strong>kalibrasi injektor</strong>. Kali ini, kami
                            akan membahas proses{' '}
                            <strong>pencucian tangki</strong> dan{' '}
                            <strong>pengetesan di mobil</strong>.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Proses Pencucian Tangki
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728894947/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepairPartII/2_c86oeq.png'
                            alt=''
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Setelah membongkar injektor, langkah selanjutnya
                                adalah memeriksa{' '}
                                <strong>tangki bahan bakar</strong>. Ketika kami
                                membuka tangki, kami menemukan bahwa tangki
                                dalam kondisi kotor dan sangat perlu
                                dibersihkan. Tangki yang kotor dapat
                                mempengaruhi performa mesin dan kualitas bahan
                                bakar yang disuplai ke injektor.
                            </p>
                            <ul>
                                <li className='mx-5 list-disc text-gray-600'>
                                    <strong>Pembersihan Tangki:</strong> Kami
                                    melakukan pembersihan menyeluruh pada tangki
                                    untuk menghilangkan kotoran dan endapan yang
                                    menempel. Proses ini sangat penting untuk
                                    memastikan tangki dapat menyuplai bahan
                                    bakar dengan bersih dan lancar.
                                </li>
                                <li className='mx-5 list-disc text-gray-600 '>
                                    <strong>Pengujian Kebocoran:</strong>{' '}
                                    Setelah tangki bersih, kami melakukan{' '}
                                    <strong>tes kebocoran</strong>. Ini adalah
                                    langkah kritis untuk memastikan bahwa tidak
                                    ada kebocoran yang dapat menyebabkan masalah
                                    di masa depan. Tangki yang bocor akan
                                    diperbaiki agar tidak menimbulkan masalah
                                    saat digunakan.
                                </li>
                                <li className='mx-5 list-disc text-gray-600'>
                                    <strong>Quality Control:</strong> Setelah
                                    semua proses pembersihan dan perbaikan
                                    selesai, tangki menjalani{' '}
                                    <strong>quality control</strong>. Kami
                                    memastikan bahwa tangki memenuhi standar
                                    sebelum dipasang kembali ke mobil.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pemasangan Injektor dan Pengetesan
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728894985/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepairPartII/3_cn35fo.png'
                            alt=''
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Setelah tangki siap, kami melanjutkan ke proses
                                pemasangan injektor. Proses ini dilakukan oleh
                                mekanik kami yang ahli dan handal.
                            </p>
                            <ul>
                                <li className='mx-5 list-disc text-gray-600'>
                                    <strong>Pemasangan Injektor:</strong>{' '}
                                    Injektor dipasang dengan hati-hati ke dalam
                                    mesin, mengikuti prosedur yang telah
                                    ditetapkan untuk memastikan semuanya
                                    terpasang dengan benar.
                                </li>
                                <li className='mx-5 list-disc text-gray-600'>
                                    <strong>Pengujian Akhir:</strong> Setelah
                                    semua komponen terpasang, kami melakukan{' '}
                                    <strong>pengetesan</strong> untuk memastikan
                                    bahwa semua sistem bekerja dengan baik dan
                                    tidak ada masalah yang tersisa. Tes ini
                                    mencakup pengujian performa mesin dan emisi.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Serah Terima ke Customer
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888392/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/3_t05suq.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah semua proses selesai, kami akhirnya siap
                            untuk menyerahkan mobil L300 ini kepada pemiliknya.
                            Kami selalu melakukan yang terbaik untuk memastikan
                            bahwa kendaraan yang kami servis kembali dalam
                            kondisi optimal.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Apa Kata Customer?
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722224/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/5_najwgq.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah mengganti komponen yang rusak, injektor
                            dirakit kembali menggunakan tool khusus. Kami
                            memastikan bahwa semua proses perakitan sesuai
                            dengan{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='https://www.indo-teknik.com/services/common-rail/injector'
                            >
                                standar perakitan injektor
                            </Link>{' '}
                            . Proses ini sangat penting untuk memastikan
                            injektor bekerja dengan optimal.
                        </p>
                    </div>
                </div>

                <div>
                    <p className='text-gray-600 my-4'>
                        <strong>Indo Teknik</strong> tetap menjadi solusi satu
                        atap untuk semua kebutuhan diesel Anda! Jika Anda
                        memiliki masalah dengan kendaraan Anda, jangan ragu
                        untuk menghubungi kami. Sampai jumpa di artikel
                        selanjutnya!
                    </p>
                </div>

                <SharePost currentPostTitle={currentPostTitle} />
            </div>
            <SidebarPost latestPosts={latestPosts} />
        </div>
    );
};

export default L300CarInjectorRepairSolutionToPowerAndEmissionProblems;
