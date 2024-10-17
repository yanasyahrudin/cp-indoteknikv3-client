// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: 'Optimalkan Performa Hilux Revo Anda dengan Service Injector di Indo Teknik',
        category: 'Workshop',
        content:
            'Proses dimulai dengan pembongkaran injektor oleh mekanik kami yang berpengalaman dan terlatih...',
        link: '/blog/2024/10/optimize-the-performance-of-your-hilux-revo',
        date: '2024-10-4', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722214/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/1_w52apy.png',
    },
    {
        id: 2,
        title: 'Perbaikan Injector Mobil L300: Solusi untuk Masalah Tenaga dan Emisi',
        category: 'Workshop',
        content:
            'Setelah menerima mobil, langkah pertama kami adalah melakukan pengecekan di mesin tes...',
        link: '/blog/2024/10/l300-car-injector-repair',
        date: '2024-10-7', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888378/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/1_yni2hh.png',
    },
    {
        id: 3,
        title: 'Perbaikan Injector Mobil L300: Part II - Pencucian Tangki dan Pemasangan Injektor',
        category: 'Workshop',
        content:
            'Setelah membongkar injektor, langkah selanjutnya adalah memeriksa tangki bahan bakar...',
        link: '/blog/2024/10/l300-car-injector-repair-part-ii',
        date: '2024-10-10', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728894957/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepairPartII/1_ziprej.png',
    },
    {
        id: 4,
        title: 'Mengatasi Masalah Injector Mobil: Pentingnya Menggunakan Sparepart yang Sesuai Standar',
        category: 'Workshop',
        content:
            'Banyak pelanggan mengeluhkan bahwa servis injektor mobil mereka tidak tahan lama dan performanya kurang memuaskan...',
        link: '/blog/2024/10/solving-car-injector-problems',
        date: '2024-10-14', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728967398/cp-indoteknik-v3/blog/October2024/solvingCarInjectorProblems/1_sabzpj.png',
    },
    {
        id: 5,
        title: 'Proses Pengetesan dan Kalibrasi Electronic Unit Injector (EUI) Caterpillar C9 di Indo Teknik',
        category: 'Workshop',
        content:
            'Di Indo Teknik, kami menggunakan mesin dan data khusus untuk kalibrasi injektor Caterpillar C9...',
        link: '/blog/2024/10/caterpillar-c9-electronic-unit-injector-eui',
        date: '2024-10-17', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729159574/cp-indoteknik-v3/blog/October2024/caterpillarC9ElectronicUnitInjectorEUI/1_mdxe7q.png',
    },
    {
        id: 6,
        title: 'Ganti Rotor Head di Indo Teknik, Kantong Aman dan Hasil Terjamin!',
        category: 'Workshop',
        content:
            'Ketika pump Isuzu ini dibongkar dan dicek, ternyata as rotornya sudah aus dan wajib diganti...',
        link: '/blog/2024/10/replace-rotor-head-at-indo-teknik',
        date: '2024-10-20', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987448/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/1_jjiddx.png',
    },
    {
        id: 7,
        title: 'Service Injection Pump Hino Lohan: Kembali ke Jalan dengan Kinerja Optimal',
        category: 'Workshop',
        content:
            'Pertama-tama, kita mulai dengan membongkar injection pump dari truk Hino Lohan ini...',
        link: '/blog/2024/10/hino-lohan-injection-pump-service',
        date: '2024-10-24', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066690/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/1_i4eefv.png',
    },
    {
        id: 8,
        title: 'Proses Pembongkaran Pump Rotary Isuzu Elf: Tips Aman dan Detail',
        category: 'Workshop',
        content:
            'Sebelum mulai, ada beberapa hal penting yang harus diperhatikan saat membongkar Pump Rotary...',
        link: '/blog/2024/10/isuzu-elf-rotary-pump-disassembly-process',
        date: '2024-10-27',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136937/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/1_mfb9g4.png',
    },
    {
        id: 9,
        title: 'Proses Detil Service Injection Pump Colt Diesel di Indo Teknik',
        category: 'Workshop',
        content:
            'Ketika kalian service Injection Pump di Indo Teknik, kami tidak hanya membongkar bagian atas atau sebagian saja, tapi membongkar seluruh komponen...',
        link: '/blog/2024/10/detailed-colt-diesel-njection-pump',
        date: '2024-10-30',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151893/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/1_fulc1c.png',
    },
    {
        id: 10,
        title: 'Review Nozzle P1030 Itech untuk Pajero Dakar 2.5: Pilihan Terbaik untuk Performa Maksimal',
        category: 'Spare Parts',
        content:
            'Nozzle P1030 ITech adalah salah satu komponen yang sering dicari oleh para pemilik Pajero Dakar 2.5...',
        link: '/blog/2024/10/itech-p1030-nozzle-review-for-pajero-dakar-2.5',
        date: '2024-11-3',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151893/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/1_fulc1c.png',
    },
];

export default blogPosts;
