import React, { useEffect } from 'react';
import SharePost from '../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import PublishedDateCategory from '../../../components/blog/PublishedDateCategoryPost';
import { Helmet } from 'react-helmet';

const CaterpillarC9UnitInjectorEUITestingAndCalibrationProcessAtIndoTeknik =
    () => {
        const currentPostTitle =
            'Proses Pengetesan dan Kalibrasi Electronic Unit Injector (EUI) Caterpillar C9 di Indo Teknik';

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
                        content='servis eui pekanbaru, workshop indo teknik, electronic unit injector'
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729159574/cp-indoteknik-v3/blog/October2024/caterpillarC9ElectronicUnitInjectorEUI/1_mdxe7q.png'
                                alt={currentPostTitle}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                Halo sobat otomotif! Kali ini Mimin mau berbagi
                                tentang proses pengetesan dan kalibrasi{' '}
                                <strong>
                                    electronic unit injector Caterpillar C9
                                </strong>{' '}
                                yang dilakukan di <strong>Indo Teknik</strong>.
                                Buat kalian yang punya alat berat atau kendaraan
                                dengan mesin Caterpillar, penting banget nih
                                buat tahu bagaimana injektor diuji dan diservis
                                agar performanya optimal.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Pengetesan Electronic Unit Injector dengan Mesin
                            Khusus
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729159598/cp-indoteknik-v3/blog/October2024/caterpillarC9ElectronicUnitInjectorEUI/2_qdpalf.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Di Indo Teknik, kami menggunakan{' '}
                                <strong>mesin dan data khusus</strong> untuk
                                kalibrasi injektor Caterpillar C9. Mesin ini
                                dirancang untuk melakukan pengetesan dengan
                                sangat akurat, memastikan bahwa injektor
                                berfungsi sesuai dengan spesifikasi pabrikan.
                                Semua prosedur dilakukan sesuai dengan{' '}
                                <strong>standarisasi bengkel resmi</strong>,
                                sehingga kamu nggak perlu ragu dengan hasilnya.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Pentingnya Kalibrasi Injector yang Tepat
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <img
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729159598/cp-indoteknik-v3/blog/October2024/caterpillarC9ElectronicUnitInjectorEUI/3_epcmbs.png'
                                alt=''
                            />
                            <p className='text-gray-600 mb-4'>
                                Kalibrasi yang tepat sangat penting untuk
                                menjaga kinerja mesin agar tetap efisien dan
                                kuat. Jika kalibrasi tidak akurat, bisa
                                menyebabkan masalah seperti penurunan tenaga,
                                konsumsi bahan bakar yang boros, hingga
                                kerusakan komponen mesin lainnya. Di Indo
                                Teknik, setiap injektor Caterpillar C9 melalui
                                proses kalibrasi dengan{' '}
                                <strong>akurasi tinggi</strong> menggunakan data
                                yang disesuaikan untuk injektor tipe ini.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Layanan Kalibrasi Berkualitas di Indo Teknik
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                Kami memahami pentingnya injektor bagi performa
                                kendaraan atau alat berat kamu. Oleh karena itu,
                                kami selalu menggunakan{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    to='http://indo-teknik.com/test-bench-and-fabrication-machines'
                                >
                                    peralatan terbaik
                                </Link>{' '}
                                dan didukung oleh teknisi yang berpengalaman
                                dalam penanganan injektor Caterpillar. Hasilnya?
                                <strong> Kalibrasi akurat</strong> yang membuat
                                injektor kamu bekerja optimal dan tahan lama.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2 '>
                            Ayo Servis Electronic Unit Injector Kamu di Indo
                            Teknik!
                        </h2>
                        <p className='text-gray-600 mb-4 justify-content'>
                            Jangan tunggu sampai masalah injektor mengganggu
                            pekerjaan atau proyek kamu! Segera servis{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                to='http://indo-teknik.com/services/electric/eui'
                            >
                                electronic unit injector Caterpillar C9
                            </Link>{' '}
                            kamu di Indo Teknik untuk mendapatkan hasil yang
                            maksimal.
                        </p>
                        <p className='text-gray-600 mb-4 justify-content'>
                            Untuk <string>informasi lebih lanjut</string> dan{' '}
                            <strong>pemesanan</strong>, jangan ragu hubungi
                            Mimin. Kami siap membantu kebutuhan injektor kamu
                            dengan layanan yang terpercaya!
                        </p>
                    </div>

                    <SharePost currentPostTitle={currentPostTitle} />
                </div>
                <SidebarPost latestPosts={latestPosts} />
            </div>
        );
    };

export default CaterpillarC9UnitInjectorEUITestingAndCalibrationProcessAtIndoTeknik;
