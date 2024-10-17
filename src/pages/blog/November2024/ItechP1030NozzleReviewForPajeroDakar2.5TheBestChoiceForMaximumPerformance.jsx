import React, { useEffect } from 'react';
import SharePost from '../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ItechP1030NozzleReviewForPajeroDakar2_5TheBestChoiceForMaximumPerformance =
    () => {
        const currentPostTitle =
            'Review Nozzle P1030 Itech untuk Pajero Dakar 2.5: Pilihan Terbaik untuk Performa Maksimal';
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
                        content='product itech persada nusantara, spare part diesel pekanbaru, spare part indo teknik'
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136937/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/1_mfb9g4.png'
                                alt={currentPostTitle}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                Nozzle P1030 ITech adalah salah satu komponen
                                yang sering dicari oleh para pemilik Pajero
                                Dakar 2.5. Ini bukan tanpa alasan, karena produk
                                ini dikenal dengan kualitas yang unggul dan daya
                                tahan yang luar biasa. Jika kamu sedang mencari
                                spare part yang dapat meningkatkan performa
                                mobil dan membuat sistem bahan bakar lebih
                                stabil, nozzle ini mungkin jawabannya.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Material Berkualitas, Tahan Lama
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136944/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/2_afqhtz.png'
                                alt=''
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    Nozzle P1030 dari ITech ini dibuat dengan
                                    material pilihan yang membuatnya awet dan
                                    tahan lama. Kualitas material ini sangat
                                    penting, terutama dalam menjaga performa
                                    mesin diesel yang terkenal dengan tuntutan
                                    performa tinggi. Material yang digunakan
                                    membantu mencegah aus dan kerusakan akibat
                                    gesekan di dalam sistem injektor.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Nozzle P1030 dari iTech ini dibuat dengan material
                            pilihan yang membuatnya awet dan tahan lama.
                            Kualitas material ini sangat penting, terutama dalam
                            menjaga performa mesin diesel yang terkenal dengan
                            tuntutan performa tinggi. Material yang digunakan
                            membantu mencegah aus dan kerusakan akibat gesekan
                            di dalam sistem injektor.
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136947/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/3_ocess5.png'
                                alt=''
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    Salah satu keunggulan dari nozzle P1030 ini
                                    adalah lapisan coating hitamnya. Tidak
                                    seperti nozzle dengan lapisan coating
                                    asal-asalan yang cepat aus, nozzle iTech
                                    menggunakan coating berkualitas yang
                                    memperpanjang usia pakai produk ini. Coating
                                    ini melindungi nozzle dari gesekan intens
                                    yang terjadi di dalam injektor, sehingga
                                    tidak hanya membantu menjaga kualitas bahan
                                    bakar, tetapi juga performa mesin secara
                                    keseluruhan.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Meningkatkan Performa Mobil
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136936/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/4_obcwxn.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Dengan nozzle P1030 iTech, sistem bahan bakar
                                mobil Pajero Dakar 2.5 kamu akan lebih stabil
                                dan optimal. Komponen ini berperan penting dalam
                                memastikan aliran bahan bakar yang lancar dan
                                efisien ke mesin, yang pada akhirnya dapat
                                membantu meningkatkan tenaga dan efisiensi bahan
                                bakar.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Keunggulan Belanja di Indo Teknik
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136936/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/4_obcwxn.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Indo Teknik menjadi tempat yang tepat untuk
                                memenuhi kebutuhan sparepart diesel kamu. Mereka
                                menyediakan berbagai macam komponen berkualitas
                                tinggi, termasuk nozzle P1030 ini. Indo Teknik
                                dikenal sebagai one-stop solution untuk semua
                                kebutuhan diesel, dari komponen kecil hingga
                                besar. Produk yang ditawarkan juga terjamin
                                keasliannya, sehingga kamu tidak perlu ragu soal
                                kualitasnya.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Kesimpulan
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                Nozzle P1030 iTech untuk Pajero Dakar 2.5 adalah
                                pilihan yang tepat jika kamu menginginkan
                                performa mesin diesel yang lebih baik dan tahan
                                lama. Material berkualitas serta lapisan coating
                                hitam yang kuat membuat nozzle ini lebih unggul
                                dibandingkan produk sejenis. Jangan ragu untuk
                                mempercayakan kebutuhan sparepart diesel kamu
                                pada Indo Teknik, solusi lengkap untuk semua
                                kebutuhan mobil diesel kamu.
                            </p>
                            <p className='text-gray-600 mb-4'>
                                Tunggu apalagi? Tingkatkan performa Pajero Dakar
                                2.5 kamu sekarang juga dengan nozzle P1030 dari
                                iTech, hanya di Indo Teknik!
                            </p>
                        </div>
                    </div>

                    <SharePost currentPostTitle={currentPostTitle} />
                </div>
                <SidebarPost latestPosts={latestPosts} />
            </div>
        );
    };

export default ItechP1030NozzleReviewForPajeroDakar2_5TheBestChoiceForMaximumPerformance;
