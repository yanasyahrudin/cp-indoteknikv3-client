import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import global_en from './translations/en/global.json';
import global_id from './translations/id/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'id';

i18next.init({
    interpolation: { escapeValue: false },
    lng: savedLanguage,
    resources: {
        en: {
            global: global_en,
        },
        id: {
            global: global_id,
            translation: {
                "Boost your vehicle's performance with our high-quality Turbo Cartridge. Designed for maximum durability and efficiency, this component ensures your engine operates at peak performance at all times.":
                    'Tingkatkan performa kendaraan Anda dengan Cartridge Turbo kualitas terbaik kami. Dirancang untuk daya tahan dan efisiensi maksimal, komponen ini memastikan mesin Anda bekerja pada performa terbaik setiap saat.',
                "Our reliable Fuel Injection Pump delivers precise fuel delivery to enhance your engine's fuel efficiency and power. The best choice for optimal engine performance.":
                    'Pompa Injeksi Bahan Bakar yang handal ini memberikan pengiriman bahan bakar yang presisi untuk meningkatkan efisiensi bahan bakar dan tenaga mesin Anda. Pilihan terbaik untuk kinerja mesin yang optimal.',
                'Our Supply Pump guarantees a consistent and efficient fuel flow to your engine. Featuring advanced technology and durable materials, this pump offers top-notch performance.':
                    'Supply Pump kami memastikan aliran bahan bakar yang konsisten dan efisien ke mesin Anda. Dengan teknologi canggih dan material tahan lama, pompa ini memberikan kinerja terbaik di kelasnya.',
                'Comprehensive overhaul engine kit for engine refurbishment.':
                    'Layanan Overhaul Engine kami memberikan perbaikan menyeluruh untuk mesin Anda. Dengan tenaga ahli dan suku cadang berkualitas, kami memastikan mesin Anda kembali ke kondisi prima.',
                'Our Turbo Charger provides an extra power boost for your engine, significantly improving efficiency and performance. The perfect solution for a more powerful and responsive driving experience.':
                    'Turbo Charger kami memberikan dorongan tenaga ekstra untuk mesin Anda, meningkatkan efisiensi dan performa secara signifikan. Solusi sempurna untuk pengalaman berkendara yang lebih kuat dan responsif.',
                "Our EGR Valve helps reduce emissions and improve your vehicle's fuel efficiency. With a durable design, this component offers the best performance for your vehicle.":
                    'Valve EGR kami membantu mengurangi emisi dan meningkatkan efisiensi bahan bakar kendaraan Anda. Dengan desain yang tahan lama, komponen ini memberikan performa terbaik untuk kendaraan Anda.',
                'Our high-quality Rotorhead for fuel injection pumps ensures precise and efficient fuel distribution to your engine.':
                    'Rotorhead kualitas terbaik untuk pompa injeksi bahan bakar, memastikan distribusi bahan bakar yang tepat dan efisien ke mesin Anda.',
                "Our Fuel Pump offers stable and consistent fuel flow, enhancing your engine's performance and fuel efficiency.":
                    'Pompa Bahan Bakar kami menawarkan aliran bahan bakar yang stabil dan konsisten, meningkatkan kinerja mesin dan efisiensi bahan bakar kendaraan Anda.',
                'Our high-precision Timing Gear ensures accurate engine timing for better performance and fuel efficiency.':
                    'Gigi Timer presisi tinggi dari kami memastikan timing mesin yang akurat untuk performa terbaik dan efisiensi bahan bakar yang lebih baik.',
                'Our high-quality Relief Regulator ensures precise pressure control for various industrial and automotive applications.':
                    'Relief Regulator kualitas terbaik dari kami memastikan kontrol tekanan yang tepat untuk berbagai aplikasi industri dan otomotif.',
                "Our ECU provides full control over your vehicle's engine performance. With advanced technology, this ECU enhances engine efficiency and performance.":
                    'ECU kami memberikan kontrol penuh atas kinerja mesin kendaraan Anda. Dengan teknologi canggih, ECU ini meningkatkan efisiensi dan performa mesin.',
                'Our high-quality Fuel Injector ensures precise and efficient fuel delivery to your engine, enhancing performance and fuel efficiency.':
                    'Injector bahan bakar kualitas terbaik kami memastikan pengiriman bahan bakar yang presisi dan efisien ke mesin Anda, meningkatkan kinerja dan efisiensi bahan bakar.',
                'Our Plunger for fuel injection pumps is designed for optimal durability and performance, ensuring precise fuel delivery.':
                    'Plunger untuk pompa injeksi bahan bakar kami dirancang untuk ketahanan dan kinerja yang optimal, memastikan pengiriman bahan bakar yang presisi.',
                'Our Unit Pump delivers consistent and efficient fuel delivery, ensuring your engine operates at its best.':
                    'Unit Pump kami memberikan pengiriman bahan bakar yang konsisten dan efisien, memastikan mesin Anda bekerja dengan performa terbaik.',
                'Our HEUI and EUI electronic fuel injection systems offer precise control and high efficiency, perfect for modern diesel engine applications.':
                    'Sistem injeksi bahan bakar elektronik HEUI dan EUI kami menawarkan kontrol yang presisi dan efisiensi yang tinggi, cocok untuk aplikasi mesin diesel modern.',
                'Our high-quality Limiter ensures precise pressure or speed control, keeping your engine performance optimal and safe.':
                    'Limiter berkualitas dari kami memastikan batasan tekanan atau kecepatan yang tepat, menjaga kinerja mesin tetap optimal dan aman.',
                'Our reliable Hand Pump is a dependable tool for various applications, providing full control and ease of use.':
                    'Pompa Manual kami adalah alat yang andal untuk berbagai aplikasi, memberikan pengendalian penuh dan kemudahan penggunaan.',
                'Our Hydraulic Solenoid is designed for precise control in hydraulic systems, ensuring reliable and efficient performance.':
                    'Solenoid Hidrolik kami dirancang untuk kontrol yang presisi dalam sistem hidrolik, memastikan kinerja yang handal dan efisien.',
                'Our high-quality Common Rail Pipe ensures smooth and efficient fuel flow in common rail injection systems.':
                    'Pipa Common Rail kualitas terbaik dari kami memastikan aliran bahan bakar yang lancar dan efisien dalam sistem injeksi common rail.',
                'Our Fuel Injector Nozzle ensures optimal fuel atomization, improving combustion efficiency and engine performance.':
                    'Nozel untuk injektor bahan bakar kami memastikan pengabutan bahan bakar yang optimal, meningkatkan efisiensi pembakaran dan performa mesin.',
                'Our Suction Control Valve provides precise control over fuel flow, ensuring optimal engine performance and efficiency.':
                    'SCV (Suction Control Valve) kami memberikan kontrol yang presisi atas aliran bahan bakar, memastikan efisiensi dan kinerja mesin yang optimal.',
                'Our high-quality Orifice Valve ensures precise fuel flow, maintaining optimal engine performance and efficiency.':
                    'Orifice valve dari kami memastikan aliran bahan bakar yang tepat, menjaga kinerja mesin tetap optimal dan efisien.',
                'Our Fuel Rail Pressure Sensor provides accurate readings, helping to optimize fuel injection system performance.':
                    'Sensor Tekanan Bahan Bakar kami memberikan pembacaan yang akurat, membantu mengoptimalkan kinerja sistem injeksi bahan bakar.',
                "Our Fuel Delivery Valve ensures consistent and precise fuel flow, enhancing your engine's efficiency and performance.":
                    'Fuel Delivery Valve kami memastikan aliran bahan bakar yang konsisten dan tepat, meningkatkan efisiensi dan kinerja mesin Anda.',
                'Our Camplate for fuel injection pumps is designed for durability and precision, ensuring optimal fuel delivery.':
                    'Piringan Cam untuk pompa injeksi bahan bakar kami dirancang untuk ketahanan dan presisi, memastikan pengiriman bahan bakar yang optimal.',
                'Our Injector Tools make it easy and efficient to maintain and repair fuel injectors, keeping your engine performing at its best.':
                    'Alat Injektor kami memungkinkan perawatan dan perbaikan injektor bahan bakar dengan mudah dan efisien, menjaga kinerja mesin tetap optimal.',
                'Our Repair Kit provides all the necessary components for engine maintenance and repair, ensuring durability and reliable performance.':
                    'Kit Perbaikan kami menyediakan semua komponen yang diperlukan untuk perbaikan dan pemeliharaan mesin Anda, memastikan daya tahan dan kinerja yang handal.',
                'Our Nozzle Cup is designed to ensure secure and efficient nozzle installation, enhancing fuel injection system performance.':
                    'Cangkir Nozel kami dirancang untuk memastikan pemasangan nozel yang aman dan efisien, meningkatkan kinerja sistem injeksi bahan bakar.',
                "Our high-quality Alternator ensures a stable electrical supply for your vehicle. With outstanding durability and reliable performance, you won't have to worry about electrical issues anymore.":
                    'Alternator kualitas terbaik kami menjamin pasokan listrik yang stabil untuk kendaraan Anda. Dengan daya tahan yang luar biasa dan performa yang handal, Anda tidak perlu khawatir tentang masalah kelistrikan lagi.',
                'Our high-quality Governor offers precise engine speed control, ensuring optimal performance and better fuel efficiency.':
                    'Governor berkualitas dari kami memberikan kontrol kecepatan mesin yang presisi, memastikan performa yang optimal dan efisiensi bahan bakar yang lebih baik.',
                'Our high-quality vehicle batteries offer exceptional durability and performance. With strong starting power, these batteries are the ideal choice for all types of vehicles.':
                    'Baterai kendaraan kualitas terbaik dari kami menawarkan daya tahan dan performa yang luar biasa. Dengan kemampuan start yang kuat, baterai ini adalah pilihan ideal untuk semua jenis kendaraan.',
                "Our Horn delivers a loud and clear sound, ensuring you're always heard on the road. Designed for reliability and durability.":
                    'Klakson Keong dengan suara yang kuat dan jelas, memastikan Anda selalu didengar di jalan. Dirancang untuk keandalan dan daya tahan.',
                'Our high-quality Ignition Coil boosts electrical voltage to the spark plugs, ensuring strong and efficient ignition.':
                    'Koil Pengapian kualitas terbaik kami meningkatkan tegangan listrik untuk busi, memastikan pengapian yang kuat dan efisien.',
                'Our Air Flow Sensor accurately measures the amount of air entering the engine, helping to improve fuel efficiency and engine performance.':
                    'Sensor Aliran Udara kami mengukur jumlah udara yang masuk ke mesin dengan akurat, membantu meningkatkan efisiensi bahan bakar dan performa mesin.',
                'Our high-quality Brake Pads provide safe and effective braking. Designed for durability and reliable performance.':
                    'Kampas Rem berkualitas dari kami memberikan pengereman yang aman dan efektif. Dirancang untuk daya tahan dan performa yang handal.',
                'Our Oil Filter keeps your engine oil clean by filtering out dirt and harmful particles, ensuring your engine runs optimally.':
                    'Filter Oli kami menjaga kebersihan oli mesin Anda dengan menyaring kotoran dan partikel berbahaya, memastikan mesin bekerja dengan optimal.',
                'Our high-quality Diesel Fuel Filter keeps your diesel fuel clean, improving engine efficiency and reducing the risk of damage.':
                    'Filter Solar kualitas terbaik dari kami memastikan bahan bakar diesel Anda tetap bersih, meningkatkan efisiensi mesin dan mengurangi risiko kerusakan.',
                'Our vehicle Wiper provides clear visibility in all weather conditions. With exceptional durability and performance, this wiper keeps your windshield clean.':
                    'Wiper kendaraan kami memberikan visibilitas yang jelas dalam kondisi cuaca apapun. Dengan daya tahan dan performa yang luar biasa, wiper ini menjaga kaca depan Anda tetap bersih.',
                "Our high-quality Spark Plug ensures strong and efficient ignition, enhancing your engine's performance and fuel efficiency.":
                    'Busi kualitas terbaik dari kami memastikan pengapian yang kuat dan efisien, meningkatkan kinerja dan efisiensi bahan bakar mesin Anda.',
                'Our vehicle Bulbs offer bright and long-lasting illumination, ensuring safety and comfort when driving at night.':
                    'Bohlam kendaraan kami menawarkan pencahayaan yang terang dan tahan lama, memastikan keselamatan dan kenyamanan Anda saat berkendara di malam hari.',
                'Our high-quality Brake Disc offers strong and consistent braking, ensuring better safety and control when driving.':
                    'Cakram Rem kualitas terbaik dari kami memberikan pengereman yang kuat dan konsisten, memastikan keselamatan dan kontrol yang lebih baik saat berkendara.',
                "Our vehicle Relay offers exceptional reliability and performance, ensuring your vehicle's electrical system operates efficiently and safely.":
                    'Relay kendaraan kami menawarkan keandalan dan performa yang luar biasa, memastikan sistem kelistrikan kendaraan Anda bekerja dengan efisien dan aman.',
                'Equip your workshop with our advanced Power Tools. Designed for reliability and durability, these tools make repair and maintenance jobs easier and more efficient.':
                    'Lengkapi bengkel Anda dengan Power Tools canggih dari kami. Didesain untuk keandalan dan daya tahan, alat-alat ini membuat pekerjaan perbaikan dan pemeliharaan menjadi lebih mudah dan efisien.',
                "Our Battery Charger is designed to recharge your vehicle's battery quickly and safely. With smart charging technology, your battery is always ready to go.":
                    'Battery Charger kami dirancang untuk mengisi ulang baterai kendaraan Anda dengan cepat dan aman. Dengan teknologi pengisian cerdas, baterai Anda selalu siap digunakan.',
                'Our precise Nozzle Tester allows you to easily test the performance of your fuel injectors. This tool ensures your injectors operate optimally, saving fuel and reducing emissions.':
                    'Nozzle Tester presisi dari kami memungkinkan Anda menguji kinerja injektor bahan bakar dengan mudah. Alat ini memastikan injektor Anda bekerja dengan optimal, menghemat bahan bakar dan mengurangi emisi.',
                'Our Dinamo Starter ensures a reliable and efficient start for your engine, offering durability and consistent performance.':
                    'Dinamo Starter kami memastikan start yang andal dan efisien untuk mesin Anda, menawarkan daya tahan dan kinerja yang konsisten.',
                'Learn More': 'Selengkapnya',
                'Product not found.': 'Produk tidak ditemukan.',
                'Why Choose Indo Teknik?': 'Mengapa Memilih Indo Teknik?',
                'Best and trusted product quality.':
                    'Produk kualitas terbaik dan terpercaya.',
                'Competitive prices.': 'Harga kompetitif.',
                'Friendly customer service.': 'Pelayanan pelanggan yang ramah.',
                'Fast and safe shipping.': 'Pengiriman cepat dan aman.',
                'Best after-sales service.': 'Layanan purna jual terbaik.',
                'Our Marketplace': 'Marketplace Kami',
                'Our products are available on various trusted e-commerce platforms:':
                    'Produk kami tersedia di berbagai platform e-commerce terpercaya:',
                'Find the right type of': 'Cari tipe',
                'for your needs in our marketplace and get the best deals!':
                    'yang sesuai dengan kebutuhan Anda di marketplace kami dan temukan penawaran terbaik!',
                'Fuel Injection Systems': 'Fuel Injection System',
                'Automotive Aftermarket': 'Automotive Aftermarket',
                'Other Products': 'Produk Lainnya',
                Next: 'Berikutnya',
                Prev: 'Sebelumnya',
                'Spark Plug': 'Busi',
                Battery: 'Baterai',
                Brake: 'Rem',
                Horn: 'Klakson',
                'Bulb and Lighting': 'Lampu Bohlam',
                'Starter and Alternator': 'Starter dan Alternator',
                'Need a Diesel Solution?': 'Butuh solusi diesel?',
                'Contact Us': 'Kontak Kami',
                Conventional: 'Konvensional',
                Welding: 'Las',
                Fabrication: 'Fabrikasi',
                Press: 'Pres',
                Lathe: 'Bubut',
                Home: 'Beranda',
                Services: 'Layanan',
                Products: 'Produk',
                About: 'Tentang',
                Contact: 'Kontak',
                'Battery Category': 'Kategori Baterai',
                'Brake Category': 'Kategori Rem',
                'Bulb and Lighting Category': 'Kategori Lampu Bohlam',
                'Distributor Pump Category': 'Kategori Distributor Pump',
                'ECU Category': 'Kategori ECU',
                'Cover Injector Category': 'Kategori Cover Injector',
                'EUI Category': 'Kategori EUI',
                'Filter Category': 'Kategori Filter',
                'Fuel Injection Pump Category': 'Kategori Fuel Injection Pump',
                'Gasoline System Category': 'Kategori Gasoline System',
                'Horn Category': 'Kategori Klakson',
                'Injector Category': 'Kategori Injector',
                'Nozzle Category': 'Kategori Nozzle',
                'Relay Category': 'Kategori Relay',
                'Sensor Category': 'Kategori Sensor',
                'Spark Plug Category': 'Kategori Busi',
                'Power Tool Category': 'Kategori Power Tool',
                'Starter and Alternator Category':
                    'Kategori Starter dan Alternator',
                'Supply Pump Category': 'Kategori Supply Pump',
                'Socket Category': 'Kategori Socket',
                'Tools Category': 'Kategori Tools',
                'Turbo Charger Category': 'Kategori Turbo Charger',
                'Unit Pump Category': 'Kategori Unit Pump',
                'Wiper Category': 'Kategori Wiper',
                "Hi, I'm interested in the offer on indo-teknik.com. Can you provide more details?":
                    'Halo, saya tertarik dengan tawaran di indo-teknik.com. Bisa beri info lebih lanjut?',
                'To ask about the availability of goods and also order the type of product you want, please contact us. You can also contact via the product list below.':
                    'Untuk menanyakan ketersediaan barang dan juga order tipe dari produk yang anda inginkan mohon hubungi kami. Anda juga bisa menghubungi melalui list produk di bawah ini.',
                'Electric Drill': 'Bor Listrik',
                'Electric Wall Drill': 'Bor Tembok Listrik',
                'Electric Concrete Drill': 'Bor Beton Listrik',
                'Electric Grinder': 'Gerinda Listrik',
                'Electric Circular Saw Machine': 'Mesin Gergaji Sirkel Listrik',
                'Distance Measuring Tool': 'Alat Ukur Jarak',
                'Laser Line': 'Laser Garis',
                'Detection Tool': 'Alat Deteksi',
                'Electric Drill Product': 'Produk Bor Listrik',
                'Electric Wall Drill Product': 'Produk Bor Tembok Listrik',
                'Electric Concrete Drill Product': 'Produk Bor Beton Listrik',
                'Electric Grinder Product': 'Produk Gerinda Listrik',
                'Electric Circular Saw Machine Product':
                    'Produk Mesin Gergaji Sirkel Listrik',
                'Distance Measuring Tool Product': 'Produk Alat Ukur Jarak',
                'Laser Line Product': 'Produk Laser Garis',
                'Detection Tool Product': 'Produk Alat Deteksi',
                'Battery Drill Product': 'Produk Bor Baterai',
                '18 V Battery Screwdriver': 'Screwdriver Baterai 18 V',
                '12 V Battery Wall Drill': 'Bor Tembok Baterai 12 V',
                '12 V Battery Impact Screwdriver':
                    'Impact Screwdriver Baterai 12 V',
                'Battery Drill': 'Bor Baterai',
                'Page Not Found': 'Halaman Tidak Ditemukan',
                'Go Home': 'Ke Beranda',
                'High Quality Spare Parts': 'Spare Part Berkualitas Tinggi',
                'Professional, Friendly and Fast Service':
                    'Pelayanan yang Profesional, Ramah dan Cepat',
                'Best Price': 'Harga Terbaik',
                'Stock is always available': 'Stok selalu tersedia',
                'World Class Workshop': 'Workshop Kelas Dunia',
                'Fast Service Work': 'Pekerjaan Servis yang Cepat',
                'Service Guarantee': 'Garansi Servis',
                'Spacious Workshop Location': 'Lokasi Workshop Luas',
                'Show More': 'Selengkapnya',
                'Show Less': 'Ringkas',
                'Providing original and complete aftermarket diesel and automotive spare parts with a wide selection of brands from Europe, Japan and China. And only sell original spare parts and quality replacement parts that we have tested and used in repairs in our workshop.':
                    'Menyediakan spare part diesel dan automotive aftermarket yang original dan lengkap dengan berbagai pilihan merk dari Eropa, Jepang, dan China. Dan hanya menjual suku cadang asli dan suku cadang pengganti yang berkualitas yang telah kami uji dan kami pakai di perbaikan di bengkel kami.',
                'We are committed to serving you to the best of our ability.':
                    'Kami berkomitmen untuk melayani anda dengan semua kemampuan terbaik kami.',
                'Transparent and cheapest, ready to be sent throughout Indonesia and abroad.':
                    'Transparan dan termurah, siap dikirim ke seluruh Indonesia dan luar negeri.',
                'We always try to meet all diesel spare parts stock needs for all regions of Indonesia.':
                    'Kami berusaha selalu memenuhi semua kebutuhan stok suku cadang diesel untuk seluruh wilayah Indonesia.',
                'Our workshop has graduated to become a diesel center from Delphi, Bosch and ITech. So you can calmly entrust your diesel repairs to us. \nUsing the latest technology from Hartridge, Bosch, and Itech for accurate and precise calibration results. \nUsing special tools and the latest scanners to ensure precise results without damaging components. \nOur team of mechanics is reliable, experienced and regularly receives the latest training on developments in diesel engine technology.':
                    'Workshop kami telah lulus menjadi diesel center dari Delphi, Bosch dan ITech. Sehingga anda bisa dengan tenang mempercayakan perbaikan diesel anda pada kami. \nMenggunakan teknologi terbaru dari Hartridge, Bosch, dan Itech untuk hasil kalibrasi yang akurat dan presisi. \nMenggunakan tool khusus dan scanner terkini untuk memastikan hasil yang tepat tanpa merusak komponen.\nTim mekanik kami yang handal, berpengalaman dan rutin mendapatkan pelatihan terkini tentang perkembangan teknologi mesin diesel.',
                'Your time is money. We are committed to completing service work quickly.':
                    'Waktu anda adalah uang. Kami berkomitmen agar pekerjaan servis selesai dalam waktu yang cepat.',
                'All service work is guaranteed to ensure customer satisfaction.':
                    'Semua pekerjaan servis bergaransi untuk menjamin kepuasan pelanggan.',
                'Adequate space for servicing trucks, cars and heavy equipment.':
                    'Ruang yang memadai untuk servis truk, mobil, dan alat berat.',
                'Buy in Marketplace': 'Beli di Marketplace',
                'Related Categories': 'Kategori Terkait',
                'Go Back': 'Kembali',
                'All of our products are original products from the brands Bosch, Denso, Itech and others, which have affordable prices and the best quality. If you are interested in our prices and product details, you can visit our location and marketplace via the button below.':
                    'Semua produk kami merupakan produk original merk Bosch, Denso, Itech dan lain-lain, yang mempunyai harga terjangkau dan kualitas terbaik. Jika Anda tertarik dengan harga dan detail produk kami, Anda dapat mengunjungi lokasi dan marketplace kami melalui tombol di bawah ini.',
            },
        },
    },
});

const root = document.getElementById('root');

if (root.hasChildNodes()) {
    hydrateRoot(
        root,
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
        </React.StrictMode>,
    );
} else {
    createRoot(root).render(
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
        </React.StrictMode>,
    );
}
