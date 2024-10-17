import React, { useEffect } from 'react';
import SharePost from './../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ReplaceRotorHeadAtIndoTeknikSafePocketsAndGuaranteedResults = () => {
    const currentPostTitle =
        'Ganti Rotor Head di Indo Teknik, Kantong Aman dan Hasil Terjamin!';

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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987448/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/1_jjiddx.png'
                            alt={currentPostTitle}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Halo sobat otomotif! Buat kalian yang punya
                            kendaraan diesel dan lagi butuh <Link className='font-bold text-blue-900 underline' to='http://indo-teknik.com/services/conventional/fuel-injection-pump'>servis untuk pump
                            Isuzu</Link>, kali ini Mimin mau kasih kabar baik! Di{' '}
                            <strong>Indo Teknik</strong>, ganti{' '}
                            <strong>Rotor Head</strong> nggak akan bikin kantong
                            jebol. Nah, kali ini Mimin mau share cerita soal
                            pump Isuzu yang baru aja masuk untuk servis di
                            bengkel kami. Yuk, simak prosesnya!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Masalah yang Ditemukan: As Rotor Aus
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987466/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/2_d24w9p.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Ketika pump Isuzu ini dibongkar dan dicek, ternyata{' '}
                            <strong>as rotornya sudah aus</strong> dan wajib
                            diganti. Keausan seperti ini sering terjadi karena
                            pemakaian dalam jangka panjang atau kualitas bahan
                            bakar yang kurang baik. Namun, jangan khawatir! Di{' '}
                            <strong>Indo Teknik</strong>, kami punya solusi
                            terbaik untuk masalah ini.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Proses Servis: Pemasangan Rotor Head Original ITech
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987457/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/3_gfpbjt.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah semua komponen dibongkar dan dicuci bersih,
                            kami melanjutkan pemasangan{' '}
                            <Link className='font-bold text-blue-900 underline' to='https://itechpersadanusantara.com/products/fuel-injection-systems/conventional/fuel-injection-pump/rotorhead'>
                                Rotor Head original ITech
                            </Link>
                            . <strong>Rotor Head</strong> ini terkenal akan
                            kualitasnya dan sudah terbukti kehandalannya.
                            Pemasangan dilakukan oleh <strong>mekanik ahli</strong> kami
                            menggunakan <strong>tool khusus</strong> untuk memastikan semuanya
                            terpasang dengan benar dan rapi.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Kalibrasi dengan Mesin Test Khusus
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987462/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/4_lnuown.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah pemasangan selesai, pump langsung
                            dikalibrasi menggunakan <Link className='font-bold text-blue-900 underline' to='http://indo-teknik.com/test-bench-and-fabrication-machines'>mesin test khusus</Link>. Proses
                            kalibrasi ini bukan sekadar untuk mengecek retina
                            atau angka saja, tapi harus benar-benar <strong>lulus semua
                            data kalibrasi</strong> sesuai dengan nomor <Link className='font-bold text-blue-900 underline' to='http://indo-teknik.com/services/conventional/fuel-injection-pump'>fuel injection pump</Link>. Hal ini penting banget supaya pump bisa
                            bekerja maksimal ketika dipasang kembali di mobil.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Siap Dipasang Tanpa Perlu Penyetelan Tambahan
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987447/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/5_ax0cp1.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Yang paling penting, setelah kalibrasi selesai, pump
                            bisa langsung diserahkan ke customer dan dipasang ke
                            mobil tanpa harus disetel lagi. Jadi, kalian nggak
                            perlu repot-repot menyetel ulang saat pemasangan di
                            mobil. Simple dan praktis!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2 '>
                        Indo Teknik: One Stop Solution for All Your Diesel Needs
                    </h2>
                    <p className='text-gray-600 mb-4 justify-content'>
                        Jadi, buat kalian yang punya masalah dengan diesel, percayakan urusan dieselnya ke{' '}
                        <strong>Indo Teknik</strong>. Dengan layanan lengkap dan
                        kualitas sparepart original seperti{' '}
                        <strong>Rotor Head</strong> dari ITech, kendaraan diesel
                        kalian pasti kembali bekerja dengan optimal.
                    </p>
                    <p className='text-gray-600 mb-4 justify-content'>
                        Ayo segera datang ke <strong>Indo Teknik</strong>,
                        one stop solution all your diesel needs!
                    </p>
                </div>

                <SharePost currentPostTitle={currentPostTitle} />
            </div>
            <SidebarPost latestPosts={latestPosts} />
        </div>
    );
};

export default ReplaceRotorHeadAtIndoTeknikSafePocketsAndGuaranteedResults;
