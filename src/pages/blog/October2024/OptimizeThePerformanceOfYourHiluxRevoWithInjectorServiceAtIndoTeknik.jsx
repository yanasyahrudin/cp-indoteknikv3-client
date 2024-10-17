import React, { useEffect } from 'react';
import SharePost from './../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const OptimizeThePerformanceOfYourHiluxRevoWithInjectorServiceAtIndoTeknik =
    () => {
        const currentPostTitle =
            'Optimalkan Performa Hilux Revo Anda dengan Service Injector di Indo Teknik';

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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722214/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/1_w52apy.png'
                                alt={currentPostTitle}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                Halo Sobat Donik! Jika Anda pemilik Toyota Hilux
                                Revo dan merasakan penurunan performa, saatnya
                                untuk mempertimbangkan{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    to='https://www.indo-teknik.com/services/common-rail/injector'
                                >
                                    service injector
                                </Link>{' '}
                                di Indo Teknik. Kami menawarkan layanan terbaik
                                yang dapat mengembalikan performa kendaraan Anda
                                ke kondisi optimal. Yuk, simak proses
                                lengkapnya!
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Pembongkaran oleh Mekanik Ahli
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722232/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/2_twxjgd.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Proses dimulai dengan pembongkaran injektor oleh
                                mekanik kami yang berpengalaman dan terlatih.
                                Kami menggunakan <strong>special tools</strong>{' '}
                                untuk memastikan bahwa injektor tidak rusak
                                selama proses pembongkaran. Ini adalah langkah
                                penting yang sering diabaikan di tempat lain.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Pembersihan Ultrasonik
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722234/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/3_puuclv.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah injektor berhasil dibongkar, kami
                                melanjutkan ke tahap pembersihan menggunakan{' '}
                                <strong>mesin ultrasonic</strong>. Teknologi ini
                                memastikan bahwa semua kotoran dan endapan yang
                                mengganggu kinerja injektor dihilangkan secara
                                menyeluruh. Dengan pembersihan yang efektif,
                                injektor Anda akan berfungsi lebih baik.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Pengecekan Detail dan Penggantian Sparepart
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722236/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/4_nmswie.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah pembersihan, kami melakukan pengecekan
                                detail pada injektor. Jika ada sparepart yang
                                perlu diganti, kami hanya menggunakan{' '}
                                <strong>sparepart baru dan berkualitas</strong>{' '}
                                dengan nomor part yang sesuai dengan bawaan
                                injektor. Kami tidak menggunakan persamaan part,
                                sparepart berkualitas rendah, atau sparepart
                                bekas, karena kami ingin memberikan yang terbaik
                                untuk kendaraan Anda.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Uji Coba di Mesin Tes Terkini
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722224/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/5_najwgq.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah semua proses di atas selesai, injektor
                                akan dinaikkan ke{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    to='https://www.indo-teknik.com/test-bench-and-fabrication-machines'
                                >
                                    mesin tes terkini
                                </Link>
                                . Di sini, semua spesifikasi harus lulus
                                pengetesan sebelum injektor siap digunakan. Ini
                                adalah langkah terakhir untuk memastikan bahwa
                                injektor Anda berfungsi dengan optimal.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2 '>
                            Kenapa Memilih Indo Teknik?
                        </h2>
                        <p className='text-gray-600 mb-4 justify-content'>
                            Indo Teknik adalah solusi lengkap untuk memenuhi
                            segala kebutuhan diesel Anda. Kami berkomitmen untuk
                            memberikan layanan berkualitas tinggi dengan harga
                            yang bersaing. Jangan tunggu lagi! Buruan{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='https://www.indo-teknik.com/services/common-rail/injector'
                            >
                                service injector
                            </Link>{' '}
                            Anda di Indo Teknik dan rasakan perbedaannya!
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Kontak Kami:
                        </h2>
                        <p className='text-gray-600 mb-4'>
                            Untuk informasi lebih lanjut atau untuk membuat
                            janji, jangan ragu untuk menghubungi kami. Kami siap
                            membantu Anda!
                        </p>
                    </div>

                    <SharePost currentPostTitle={currentPostTitle} />
                </div>
                <SidebarPost latestPosts={latestPosts} />
            </div>
        );
    };

export default OptimizeThePerformanceOfYourHiluxRevoWithInjectorServiceAtIndoTeknik;
