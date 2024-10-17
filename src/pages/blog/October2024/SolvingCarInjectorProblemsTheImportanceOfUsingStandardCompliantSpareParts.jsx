import React, { useEffect } from 'react';
import SharePost from './../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SolvingCarInjectorProblemsTheImportanceOfUsingStandardCompliantSpareParts =
    () => {
        const currentPostTitle =
            'Mengatasi Masalah Injector Mobil: Pentingnya Menggunakan Sparepart yang Sesuai Standar';

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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728967398/cp-indoteknik-v3/blog/October2024/solvingCarInjectorProblems/1_sabzpj.png'
                                alt={currentPostTitle}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                Banyak pelanggan mengeluhkan bahwa{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    to='https://www.indo-teknik.com/services/common-rail/injector'
                                >
                                    servis injektor
                                </Link>{' '}
                                mobil mereka tidak tahan lama dan performanya
                                kurang memuaskan. Masalah ini sering kali
                                disebabkan oleh penggunaan sparepart yang tidak
                                sesuai dengan spesifikasi standar kendaraan.
                                Salah satu contoh nyata adalah kasus yang
                                baru-baru ini kami tangani dengan mobil Triton
                                25. Mobil ini telah beberapa kali diservis di
                                bengkel lain, tetapi tetap mengalami masalah
                                seperti asap berlebihan dan tenaga yang kurang
                                optimal.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Apa yang Terjadi?
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728967413/cp-indoteknik-v3/blog/October2024/solvingCarInjectorProblems/2_jub5eb.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah melakukan pemeriksaan dan membongkar
                                injektor, kami menemukan bahwa nozzle yang
                                terpasang tidak sesuai dengan standar untuk
                                Triton 25. Seharusnya nozzle yang digunakan
                                adalah P870, namun yang terpasang adalah nomor
                                P875. Perbedaan spesifikasi ini menjadi akar
                                penyebab keluhan yang dialami pemilik mobil.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Kenapa Sparepart yang Tidak Sesuai Berbahaya?
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728967403/cp-indoteknik-v3/blog/October2024/solvingCarInjectorProblems/3_dinjtq.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Penggunaan sparepart yang tidak sesuai standar
                                dapat menyebabkan berbagai masalah pada injektor
                                dan performa mesin. Jika sparepart dipaksakan
                                untuk digunakan, injektor tidak akan lulus
                                pengetesan. Hal ini bisa mengakibatkan performa
                                mesin menurun, pemborosan bahan bakar, dan dalam
                                jangka panjang, bisa merusak komponen mesin
                                lainnya.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Solusi Kami
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728967385/cp-indoteknik-v3/blog/October2024/solvingCarInjectorProblems/4_c7fv70.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Kami selalu menganjurkan untuk menggunakan
                                sparepart yang sesuai dengan standar agar
                                injektor dapat berfungsi dengan baik dan tahan
                                lama. Salah satu produk yang kami rekomendasikan
                                adalah{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    to='https://www.indo-teknik.com/products/fuel-injection-systems/common-rail/injector'
                                >
                                    nozzle P870
                                </Link>{' '}
                                dari merk Liwei, yang dapat Anda dapatkan di{' '}
                                <strong>Indo Teknik</strong>. Produk ini dibuat
                                dari material berkualitas, sehingga memiliki
                                daya tahan yang baik dan spek kalibrasi yang
                                dapat dengan mudah lulus pengujian.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Kenapa Memilih Liwei?
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <ul>
                                <li className='text-gray-600 mb-4'>
                                    <strong>Kualitas Terjamin:</strong> Material
                                    yang digunakan sangat baik, memastikan bahwa
                                    nozzle dapat bertahan lama dan tidak mudah
                                    rusak.
                                </li>
                                <li className='text-gray-600 mb-4'>
                                    <strong>Kesesuaian Standar:</strong>{' '}
                                    Memastikan bahwa nozzle yang digunakan
                                    sesuai dengan spesifikasi kendaraan Anda.
                                </li>
                                <li className='text-gray-600 mb-4'>
                                    <strong>Peningkatan Performa:</strong>{' '}
                                    Dengan menggunakan nozzle yang tepat,
                                    performa mobil Anda akan kembali optimal dan
                                    Anda akan merasakan peningkatan yang
                                    signifikan.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2 '>
                            Kesimpulan
                        </h2>
                        <p className='text-gray-600 mb-4 justify-content'>
                            Penting untuk selalu memperhatikan kualitas dan
                            spesifikasi sparepart yang digunakan saat melakukan{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='https://www.indo-teknik.com/services/common-rail/injector'
                            >
                                servis injektor
                            </Link>
                            . Dengan menggunakan nozzle P870 dari Liwei, Anda
                            tidak hanya akan memperpanjang usia injektor Anda
                            tetapi juga meningkatkan performa mobil secara
                            keseluruhan. Jangan ragu untuk berbelanja di{' '}
                            <strong>Indo Teknik</strong> dan pastikan mobil Anda
                            mendapatkan layanan terbaik!
                        </p>
                        <p className='text-gray-600 mb-4 justify-content'>
                            Ayo{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='https://www.indo-teknik.com/products/fuel-injection-systems/common-rail/injector'
                            >
                                cek produk kami
                            </Link>{' '}
                            dan nikmati kualitasnya!
                        </p>
                    </div>

                    <SharePost currentPostTitle={currentPostTitle} />
                </div>
                <SidebarPost latestPosts={latestPosts} />
            </div>
        );
    };

export default SolvingCarInjectorProblemsTheImportanceOfUsingStandardCompliantSpareParts;
