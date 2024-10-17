import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { PiMedalFill } from 'react-icons/pi';
import { AiFillLike } from 'react-icons/ai';
import { ImEnlarge2 } from 'react-icons/im';
import { FaFaceSmileWink } from 'react-icons/fa6';
import { FaBoxes } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { BsRocketTakeoffFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

// Helper function to truncate text
const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return {
            truncated: words.slice(0, wordLimit).join(' '),
            isTruncated: true,
        };
    }
    return { truncated: text, isTruncated: false };
};

const Feature = ({ icon, title, description }) => {
    const [showFullText, setShowFullText] = useState(false);
    const { truncated, isTruncated } = truncateText(description, 20);
    const { t } = useTranslation();

    return (
        <div className='flex gap-4 items-start'>
            <span className='text-blue-900 bg-violet-500/10 p-3 rounded-full'>
                {icon}
            </span>
            <div>
                <h3 className='font-semibold text-xl'>{title}</h3>
                <p
                    className='mt-1 text-gray-500 text-justify'
                    style={{ whiteSpace: 'pre-line' }}
                >
                    {showFullText ? description : truncated}
                    {isTruncated && (
                        <span
                            onClick={() => setShowFullText(!showFullText)}
                            className='text-blue-900 cursor-pointer'
                        >
                            {showFullText
                                ? ` ${t('Show Less')}`
                                : ` ...${t('Show More')}`}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

const WhyChooseUs = () => {
    const [t] = useTranslation();
    return (
        <div className='mx-auto px-4 mt-8 mb-10'>
            <div className='text-center'>
                <h2 className='font-semibold text-3xl text-blue-900'>
                    Kenapa Memilih Kami
                </h2>
            </div>

            <div className='lg:w-[1200px] mx-auto bg-gradient-to-bl from-neutral-50 to-blue-100 p-5 rounded-xl mt-7'>
                <div className='grid md:grid-cols-2 gap-10 mt-10'>
                    {/* Use the Feature component with different props */}
                    <Feature
                        icon={<FaStar className='w-5 h-5' />}
                        title={t('High Quality Spare Parts')}
                        description={t(
                            'Providing original and complete aftermarket diesel and automotive spare parts with a wide selection of brands from Europe, Japan and China. And only sell original spare parts and quality replacement parts that we have tested and used in repairs in our workshop.',
                        )}
                    />
                    <Feature
                        icon={<FaFaceSmileWink className='w-5 h-5' />}
                        title={t('Professional, Friendly and Fast Service')}
                        description={t(
                            'We are committed to serving you to the best of our ability.',
                        )}
                    />
                    <Feature
                        icon={<AiFillLike className='w-5 h-5' />}
                        title={t('Best Price')}
                        description={t(
                            'Transparent and cheapest, ready to be sent throughout Indonesia and abroad.',
                        )}
                    />
                    <Feature
                        icon={<FaBoxes className='w-5 h-5' />}
                        title={t('Stock is always available')}
                        description={t(
                            'We always try to meet all diesel spare parts stock needs for all regions of Indonesia.',
                        )}
                    />
                    <Feature
                        icon={<FaTools className='w-5 h-5' />}
                        title={t('World Class Workshop')}
                        description={t(
                            'Our workshop has graduated to become a diesel center from Delphi, Bosch and ITech. So you can calmly entrust your diesel repairs to us. \nUsing the latest technology from Hartridge, Bosch, and Itech for accurate and precise calibration results. \nUsing special tools and the latest scanners to ensure precise results without damaging components. \nOur team of mechanics is reliable, experienced and regularly receives the latest training on developments in diesel engine technology.',
                        )}
                    />

                    <Feature
                        icon={<BsRocketTakeoffFill className='w-5 h-5' />}
                        title={t('Fast Service Work')}
                        description={t(
                            'Your time is money. We are committed to completing service work quickly.',
                        )}
                    />
                    <Feature
                        icon={<PiMedalFill className='w-5 h-5' />}
                        title={t('Service Guarantee')}
                        description={t(
                            'All service work is guaranteed to ensure customer satisfaction.',
                        )}
                    />
                    <Feature
                        icon={<ImEnlarge2 className='w-5 h-5' />}
                        title={t('Spacious Workshop Location')}
                        description={t(
                            'Adequate space for servicing trucks, cars and heavy equipment.',
                        )}
                    />
                </div>

                <div className='text-center mt-10'>
                    <p className='max-w-md mx-auto mt-2 text-gray-800 font-semibold'>
                        One stop solution for all your diesel needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
