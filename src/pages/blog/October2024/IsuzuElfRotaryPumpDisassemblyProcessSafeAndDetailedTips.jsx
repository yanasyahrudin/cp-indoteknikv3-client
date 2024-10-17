import React, { useEffect } from 'react';
import SharePost from '../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const IsuzuElfRotaryPumpDisassemblyProcessSafeAndDetailedTips = () => {
    const currentPostTitle =
        'Proses Pembongkaran Pump Rotary Isuzu Elf: Tips Aman dan Detail';
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
                    content='servis fuel injection pump pekanbaru, workshop indo teknik, workshop injection pump pekanbaru'
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
                            Category: <strong>{currentPost.category}</strong>
                        </span>
                    </div>

                    <div className='mt-5'>
                        <img
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136937/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/1_mfb9g4.png'
                            alt={currentPostTitle}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Halo Sobat Donik! Kali ini kita mau spill proses
                            pembongkaran{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='https://indo-teknik.com/services/conventional/fuel-injection-pump'
                            >
                                Pump Rotary
                            </Link>{' '}
                            dari <strong>Isuzu Elf</strong> di{' '}
                            <strong>Indo Teknik</strong>. Buat kalian yang
                            penasaran dengan langkah-langkahnya, yuk kita bahas
                            satu per satu!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Langkah Penting dalam Pembongkaran Pump Rotary
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136944/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/2_afqhtz.png'
                            alt=''
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Sebelum mulai, ada beberapa hal penting yang
                                harus diperhatikan saat membongkar{' '}
                                <strong>Pump Rotary</strong>. Jangan pernah
                                membongkar paksa komponen-komponennya. Ini
                                sangat krusial karena komponen{' '}
                                <strong>Pump Rotary</strong> sangat sensitif dan
                                mudah rusak jika tidak ditangani dengan
                                hati-hati. Pastikan kamu menggunakan{' '}
                                <strong>tools yang tepat</strong> agar tidak
                                merusak baut-baut Fuel Pump dan komponen lainnya
                                di dalamnya.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Proses Pembongkaran dan Pembersihan
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136947/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/3_ocess5.png'
                            alt=''
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Setelah semua komponen berhasil dilepas, kita
                                lanjutkan ke proses pembersihan. Setiap{' '}
                                <strong>part harus dicuci bersih </strong> untuk
                                mengetahui kondisi komponen yang ada di dalam
                                pump. Tujuannya, kita bisa melihat apakah ada
                                part yang sudah aus atau rusak dan harus segera
                                diganti. Selain itu, kita juga{' '}
                                <strong>perlu mengecek</strong> apakah part yang
                                ada masih sesuai dengan standar atau ada yang
                                tidak memenuhi kriteria.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Tips: Menyusun Komponen dengan Rapi
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136936/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/4_obcwxn.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            <strong> Satu tips penting:</strong> pastikan semua
                            part yang sudah dibongkar disusun rapi di satu
                            tempat. Ini penting supaya tidak ada komponen yang
                            hilang atau tercecer, yang nantinya akan mempersulit
                            pemasangan kembali. Ingat,{' '}
                            <strong>satu part saja lupa terpasang</strong>, bisa
                            berdampak buruk pada performa mobil dan bahkan bisa
                            berbahaya saat mobil digunakan.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Ayo Service Pump di Indo Teknik!
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            Nah, itu dia proses lengkap pembongkaran{' '}
                            <strong>Pump Rotary</strong> di{' '}
                            <strong>Indo Teknik</strong>. Untuk kalian yang
                            membutuhkan{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='https://indo-teknik.com/services/conventional/fuel-injection-pump'
                            >
                                service fuel injection pump
                            </Link>
                            , <strong>Indo Teknik</strong> siap jadi one-stop
                            solution buat semua kebutuhan diesel kalian. Dengan
                            tenaga ahli profesional dan peralatan lengkap,
                            kendaraan diesel kalian akan kembali dalam kondisi
                            prima. Jangan tunda lagi, segera lakukan service
                            berkala agar mobil selalu dalam kondisi terbaik.{' '}
                            <strong>Indo Teknik</strong> Teknik selalu siap
                            membantu!
                        </p>
                    </div>
                </div>

                <SharePost currentPostTitle={currentPostTitle} />
            </div>
            <SidebarPost latestPosts={latestPosts} />
        </div>
    );
};

export default IsuzuElfRotaryPumpDisassemblyProcessSafeAndDetailedTips;
