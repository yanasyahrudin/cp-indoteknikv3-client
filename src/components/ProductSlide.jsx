import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { BiSolidSkipNextCircle } from 'react-icons/bi';
import { BiSolidSkipPreviousCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const fuelInjectionPump =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234576/cp-indoteknik-v3/products/fuelInjectionPump_psuhsw.png';
const starterAlternator =
    'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_600/v1721792006/cp-indoteknik-v3/products/starter_alternator_category_w9zses.png';
const supplyPump =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234469/cp-indoteknik-v3/products/supplyPump_lso4ni.png';
const turboCharger =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234469/cp-indoteknik-v3/products/turboCharger_pqqpnc.png';
const battery =
    'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_600/v1721790414/cp-indoteknik-v3/products/battery_category_pvdusd.png';
const gasolineSystem =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1722334447/cp-indoteknik-v3/products/gasoline_system_DSC_0343_copy1-1_c5htw2.png';
const ecu =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234552/cp-indoteknik-v3/products/ecu_xn4ucf.png';
const horn =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234577/cp-indoteknik-v3/products/klaksonKeong_thtc47.png';
const filter =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234554/cp-indoteknik-v3/products/filterOli_fqw4ry.png';
const injector =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234562/cp-indoteknik-v3/products/injector_szejle.png';
const unitPump =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1721790128/cp-indoteknik-v3/products/unit_pump_category_rj88jy.png';
const wiper =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234467/cp-indoteknik-v3/products/wiper_duzqzb.png';
const sparkPlug =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234516/cp-indoteknik-v3/products/busi_yfovyr.png';
const bulbLighting =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234488/cp-indoteknik-v3/products/bohlam_rxnepv.png';
const nozzle =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1724815529/cp-indoteknik-v3/products/nozzle_fip_DSC_0102b-removebg-preview_2_yxn0n6.png';
const relay =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1720234571/cp-indoteknik-v3/products/relay_gg0xhi.png';
const eui =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1721789616/cp-indoteknik-v3/products/eui_category_cvdpbn.png';
const brake =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1722937495/cp-indoteknik-v3/products/brake%202_smls1r.png';
const powerTool =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1724135895/cp-indoteknik-v3/products/Bosch_-_Bor_Tembok_Baterai_12_V-removebg-preview_swirsd.png';
const socket =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1724816220/cp-indoteknik-v3/products/Soket_-removebg-preview_l891oi.png';
const coverInjector =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1724912558/cp-indoteknik-v3/products/cover_injector_dywk0q.png';
const distributorPumpVP44 =
    'https://res.cloudinary.com/dcbryptkx/image/upload/v1725335553/cp-indoteknik-v3/products/CIMG4447-removebg-preview_pzeimm_at6yc4.png';


const ProductSlide = ({ product }) => {
    const { t } = useTranslation();
    return (
        <div className='p-2 sm:p-4 '>
            <Link to={`${product.link}`}>
                <div className='relative bg-gradient-to-bl lg:h-[330px] from-neutral-50 to-blue-100 p-4 sm:p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105  '>
                    <img
                        className='w-full object-cover rounded-md mb-2 sm:mb-4 '
                        src={product.imageUrl}
                        alt={t(product.name)}
                        loading='lazy'
                    />
                    <h1 className='text-lg sm:text-2xl font-semibold text-gray-800 '>
                        {t(product.name)}
                    </h1>
                    <div className='absolute  inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100'>
                        <button className='bg-blue-800 text-white py-2 px-4 rounded-xl hover:bg-blue-900'>
                            {t('Learn More')}
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const ProductCarousel = ({ products }) => {
    const { t } = useTranslation();
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    rows: 1,
                    slidesPerRow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                    rows: 1,
                    slidesPerRow: 2,
                },
            }
            
        ],
    };

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className='mx-auto p-2 sm:p-4 w-full max-w-6xl '>
            <Slider ref={sliderRef} {...settings}>
                {products.map((product) => (
                    <ProductSlide key={product.id} product={product} />
                ))}
            </Slider>

            <div class='flex justify-center gap-7 mt-7 '>
                <button
                    onClick={previous}
                    class='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-md items-center border px-3 py-1.5 rounded-xl text-blue-900 hover:text-blue-900 '
                >
                    <BiSolidSkipPreviousCircle />
                    <span class='ml-1 font-bold text-lg'>{t('Prev')}</span>
                </button>
                <button
                    onClick={next}
                    class='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-md  items-center border px-3 py-1.5 rounded-xl text-blue-900 '
                >
                    <span class='mr-1 font-bold text-lg'>{t('Next')}</span>
                    <BiSolidSkipNextCircle />
                </button>
            </div>
        </div>
    );
};

const ProductCategories = ({ categories }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(Object.keys(categories)[0]);

    return (
        <div>
            <div className='flex justify-center ml-4 mr-4'>
                <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl mt-5 shadow-md flex '>
                    {Object.keys(categories).map((category) => (
                        <button
                            key={category}
                            className={`p-2 sm:p-4 text-l font-normal  ${activeTab === category ? ' text-blue-900 rounded-xl font-semibold' : 'text-gray-800'}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {t(category)}
                        </button>
                    ))}
                </div>
            </div>
            <ProductCarousel products={categories[activeTab]} />
        </div>
    );
};

const categories = {
    'Fuel Injection Systems': [
        {
            id: 1,
            name: 'Fuel Injection Pump',
            imageUrl: fuelInjectionPump,
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump',
        },
        {
            id: 4,
            name: 'Injector',
            imageUrl: injector,
            link: '/products/fuel-injection-systems/common-rail/injector',
        },
        {
            id: 3,
            name: 'Supply Pump',
            imageUrl: supplyPump,
            link: '/products/fuel-injection-systems/common-rail/supply-pump',
        },
        {
            id: 2,
            name: 'Nozzle',
            imageUrl: nozzle,
            link: '/products/fuel-injection-systems/conventional/nozzle',
        },
        
        {
            id: 7,
            name: 'Distributor Pump',
            imageUrl: distributorPumpVP44,
            link: '/products/fuel-injection-systems/vp44/distributor-pump',
        },

        {
            id: 5,
            name: 'EUI',
            imageUrl: eui,
            link: '/products/fuel-injection-systems/electric/eui',
        },
        {
            id: 6,
            name: 'Unit Pump',
            imageUrl: unitPump,
            link: '/products/fuel-injection-systems/electric/unit-pump',
        },
    ],
    'Automotive Aftermarket': [
        {
            id: 1,
            name: 'Battery',
            imageUrl: battery,
            link: '/products/automotive-aftermarket/battery',
        },
        {
            id: 9,
            name: 'Brake',
            imageUrl: brake,
            link: '/products/automotive-aftermarket/brake',
        },
        {
            id: 2,
            name: 'Bulb and Lighting',
            imageUrl: bulbLighting,
            link: '/products/automotive-aftermarket/bulb-lighting',
        },
        {
            id: 3,
            name: 'Filter',
            imageUrl: filter,
            link: '/products/automotive-aftermarket/filter',
        },
        {
            id: 4,
            name: 'Gasoline System',
            imageUrl: gasolineSystem,
            link: '/products/automotive-aftermarket/gasoline-system',
        },
        {
            id: 5,
            name: 'Horn',
            imageUrl: horn,
            link: '/products/automotive-aftermarket/horn',
        },
        {
            id: 6,
            name: 'Relay',
            imageUrl: relay,
            link: '/products/automotive-aftermarket/relay',
        },
        {
            id: 7,
            name: 'Spark Plug',
            imageUrl: sparkPlug,
            link: '/products/automotive-aftermarket/spark-plug',
        },
        {
            id: 8,
            name: 'Wiper',
            imageUrl: wiper,
            link: '/products/automotive-aftermarket/wiper',
        },
    ],
    'Other Products': [
        {
            id: 1,
            name: 'Turbo Charger',
            imageUrl: turboCharger,
            link: '/products/other-products/turbo-charger',
        },
        {
            id: 2,
            name: 'ECU',
            imageUrl: ecu,
            link: '/products/other-products/ecu',
        },
        {
            id: 3,
            name: 'Sensor',
            imageUrl:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1721791250/cp-indoteknik-v3/products/sensor%20DSC_0160b-removebg-preview_d27pkp_db975c.png',
            link: '/products/other-products/sensor',
        },
        {
            id: 4,
            name: 'Starter and Alternator',
            imageUrl: starterAlternator,
            link: '/products/other-products/starter-alternator',
        },
        {
            id: 5,
            name: 'Power Tool',
            imageUrl: powerTool,
            link: '/products/other-products/power-tool',
        },
        {
            id: 6,
            name: 'Tools',
            imageUrl:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1721977147/cp-indoteknik-v3/products/tools_DSC_0544_copy_a0etak.png',
            link: '/products/other-products/tools',
        },
        {
            id: 7,
            name: 'Socket',
            imageUrl: socket,
            link: '/products/other-products/socket',
        },
        {
            id: 8,
            name: 'Cover Injector',
            imageUrl: coverInjector,
            link: '/products/other-products/cover-injector',
        },
    ],
};

const App = () => {
    const [t] = useTranslation('global');
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-3xl text-blue-900 text-center'>
                    {t('home.products')}
                </h2>
            <ProductCategories categories={categories} />
        </div>
    );
};

export default App;
