import React, { useEffect } from 'react';
import SharePost from '../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import PublishedDateCategory from '../../../components/blog/PublishedDateCategoryPost';
import { Helmet } from 'react-helmet';

const HinoLohanInjectionPumpServiceBackOnTheRoadWithOptimalPerformance = () => {
    const currentPostTitle =
        'Service Injection Pump Hino Lohan: Kembali ke Jalan dengan Kinerja Optimal';

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
                    content='servis injection pump pekanbaru, workshop indo teknik, fuel injection pump'
                />
            </Helmet>
            
            <div className='max-w-4xl px-8 py-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100'>
                <div>
                    <h1 className='text-4xl font-bold text-blue-900 mb-4'>
                        {currentPostTitle}
                    </h1>

                    <PublishedDateCategory
                        publicationDate={publicationDate}
                        category={currentPost.category}
                    />

                    <div className='mt-5'>
                        <img
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066690/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/1_i4eefv.png'
                            alt={currentPostTitle}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Halo, sobat Donik! Kali ini kita kedatangan tamu
                            istimewa, si putih raksasa,{' '}
                            <strong>truk Hino Lohan</strong>, untuk melakukan
                            service pada{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='http://indo-teknik.com/services/conventional/fuel-injection-pump'
                            >
                                injection pump
                            </Link>
                            -nya. Mari kita simak prosesnya bersama!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Proses Pembongkaran Injection Pump
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066712/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/2_lufnwk.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Pertama-tama, kita mulai dengan membongkar injection
                            pump dari truk Hino Lohan ini. Setelah dibongkar,
                            kita melakukan pemeriksaan menyeluruh untuk
                            memastikan semua komponen dalam keadaan baik. Nah,
                            ternyata ada masalah! Setelah kita cek,{' '}
                            <strong>plungernya mengalami kerusakan</strong> dan
                            perlu segera diganti.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pembersihan dan Penggantian Komponen
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066697/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/3_nhv9r4.png'
                            alt=''
                        />
                        <div className='gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                Sebelum melakukan penggantian, kita bersihkan
                                terlebih dahulu bagian dalam (inner part) dan
                                komponen lainnya. Ini penting agar semua bagian
                                bersih dari kotoran dan sisa-sisa bahan bakar
                                yang bisa memengaruhi kinerja mesin.
                            </p>
                            <p className='text-gray-600 mb-4'>
                                Untuk penggantian sparepart, kita memilih{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    to='https://itechpersadanusantara.com/products/fuel-injection-systems/conventional/fuel-injection-pump'
                                >
                                    merek ITech
                                </Link>{' '}
                                yang terkenal dengan harga terjangkau dan{' '}
                                <strong>
                                    kualitas yang tak perlu diragukan lagi
                                </strong>
                                . Mari kita lanjut ke proses pemasangan komponen
                                baru ini!
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pemasangan dan Kalibrasi
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066688/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/4_rncfvr.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Dalam tahap ini, kita menggunakan tenaga ahli
                            profesional untuk memastikan semuanya terpasang
                            dengan tepat. Setelah semua komponen terpasang, kita
                            lakukan kalibrasi terlebih dahulu di{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='http://indo-teknik.com/test-bench-and-fabrication-machines'
                            >
                                mesin tes bench
                            </Link>
                            . Proses kalibrasi ini penting untuk memastikan
                            bahwa injection pump berfungsi dengan optimal
                            sebelum dipasang kembali ke truk.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Hasil Akhir yang Memuaskan
                    </h2>
                    {/* Add video here */}
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <video className='rounded-xl mx-auto' controls>
                            <source
                                src='https://res.cloudinary.com/dcbryptkx/video/upload/w_300/v1729065295/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/Untitled_video_-_Made_with_Clipchamp_1_if6xqw.mp4'
                                type='video/mp4'
                            />
                            Your browser does not support the video tag.
                        </video>
                        <div className='gap-6 text-justify mt-5 lg:mt-0 md:mt-0'>
                            <p className='text-gray-600 mb-4 justify-content'>
                                Setelah semua proses selesai, kita pasang
                                kembali injection pump ke truknya. Suara mesin
                                pun jadi <strong>lebih halus</strong>, dan
                                tenaga yang dihasilkan
                                <strong>semakin optimal</strong>. Dengan{' '}
                                <strong>service yang tepat</strong>, truk Hino
                                Lohan ini siap kembali beroperasi di jalan!
                            </p>
                            <p className='text-gray-600 mb-4 justify-content'>
                                Jadi, jika kalian memiliki masalah serupa pada
                                truk atau kendaraan lainnya, jangan ragu untuk
                                melakukan service secara berkala.{' '}
                                <strong>
                                    Kualitas komponen dan profesionalisme
                                </strong>{' '}
                                dalam pemasangan sangat menentukan kinerja
                                kendaraan kalian. Sampai jumpa di postingan
                                selanjutnya, sobat Donik!
                            </p>
                        </div>
                    </div>
                </div>

                <SharePost currentPostTitle={currentPostTitle} />
            </div>
            <SidebarPost latestPosts={latestPosts} />
        </div>
    );
};

export default HinoLohanInjectionPumpServiceBackOnTheRoadWithOptimalPerformance;
