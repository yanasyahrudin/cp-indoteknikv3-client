import React, { useEffect } from 'react';
import SharePost from '../../../components/blog/SharePost';
import SidebarPost from '../../../components/blog/SidebarPost';
import blogPosts from '../../../data/blogPostsData';
import { Link } from 'react-router-dom';
import PublishedDateCategory from '../../../components/blog/PublishedDateCategoryPost';
import { Helmet } from 'react-helmet';

const DetailedColtDieselInjectionPumpServiceProcessAtIndoTeknik = () => {
    const currentPostTitle =
        'Proses Detil Service Injection Pump Colt Diesel di Indo Teknik';

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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151893/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/1_fulc1c.png'
                            alt={currentPostTitle}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Halo Sobat Donik! Mau tau kenapa{' '}
                            <strong>Injection Pump Colt Diesel</strong> kalian
                            bisa lebih bertenaga setelah service di Indo Teknik?
                            Berikut ini spill lengkapnya!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pembongkaran Menyeluruh, Bukan Setengah-Setengah
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151916/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/2_zv1xkr.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Ketika kalian <Link className='font-bold text-blue-900 underline' to='http://indo-teknik.com/services/conventional/fuel-injection-pump'>service Injection Pump</Link> di Indo Teknik,
                            kami tidak hanya membongkar bagian atas atau
                            sebagian saja, tapi <strong>membongkar seluruh komponen</strong>. Ini
                            penting agar semua bagian dicek dan diperiksa dengan
                            detail. Jadi, tidak ada part yang terlewat!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pembersihan dan Pemeriksaan Part yang Akurat
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/v1729151894/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/3_rj5jas.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah pembongkaran, <strong>semua komponen dicuci bersih</strong>.
                            Tujuannya, agar kondisi setiap part terlihat jelas,
                            sehingga kita bisa mengetahui part mana yang sudah
                            rusak atau aus dan harus segera diganti.
                            Selanjutnya, setiap part diperiksa ulang dengan <strong>part
                            list</strong> untuk memastikan nomor komponennya sesuai
                            dengan spesifikasi asli. Jika ada part yang tidak
                            sesuai, kita ganti dengan yang seharusnya.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pembersihan dan Pemeriksaan Part yang Akurat
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151906/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/4_yd0f4c.png'
                            alt=''
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah semua part dalam kondisi bersih dan sesuai
                            standar, kami merakitnya kembali dengan teliti.
                            Setelah itu, kita lanjut ke tahap kalibrasi
                            menggunakan <Link className='font-bold text-blue-900 underline' to='http://indo-teknik.com/test-bench-and-fabrication-machines'>mesin test bench</Link>. Ini adalah langkah
                            penting untuk memastikan Injection Pump berfungsi
                            maksimal sebelum dipasang kembali ke mesin.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Hasilnya? Diesel Lebih Bertenaga!
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <img
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/v1729151899/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/5_imqcl9.png'
                            alt=''
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Taraaa! Begitu proses selesai, hasilnya langsung
                                terasa—Colt Diesel kalian akan jadi lebih
                                bertenaga dan halus. Jangan lupa untuk terus
                                rutin melakukan service di Indo Teknik agar
                                kendaraan kalian selalu dalam kondisi prima.
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <strong>
                                    Indo Teknik: One Stop Solution for All Your
                                    Diesel Needs!
                                </strong>
                            </p>
                            <p className='text-gray-600 mb-4'>
                                Sampai jumpa di service berikutnya, Pak!
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

export default DetailedColtDieselInjectionPumpServiceProcessAtIndoTeknik;
