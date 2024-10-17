import React from 'react';
import FindMarketplace from '../../../components/FindMarketplace';
import GoBack from '../../../components/GoBack';
import RelatedCategories from '../../../components/RelatedCategories';
import categories from '../../../data/bulbCategory'; // Update to the appropriate category data if needed
import { descriptionDetailCategory } from '../../../data/descriptionDetailCategory';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const categoryDetails = {
    name: 'Fusion Bright Bulb',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723111450/cp-indoteknik-v3/productsBulbLighting/fusion_bright-removebg-preview_zkz36n.png', // Replace with actual image URL
};

// Function to shuffle array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const FusionBrightBulbDetails = () => {
    const filteredCategories = categories.filter(
        (category) => category.name !== categoryDetails.name,
    );

    const shuffledCategories = shuffleArray([...filteredCategories]);

    const {t} = useTranslation()

        // Dynamically generated meta description and keywords
        const metaDescription = `Telusuri kategori ${categoryDetails.name} untuk komponen otomotif dan mesin berkualitas terbaik. Temukan informasi detail tentang ${categoryDetails.name} dan suku cadang terkait di Indo Teknik.`;
        const metaKeywords = `${categoryDetails.name}, komponen otomotif, part diesel, Indo Teknik, Automotive Aftermarket`;

    return (
        <div className='mx-auto py-10 lg:w-[1200px] px-4 lg:px-0'>
            <Helmet>
                <title>{categoryDetails.name} | Indo Teknik</title>
                <meta name='description' content={metaDescription} />
                <meta name='keywords' content={metaKeywords} />
            </Helmet>
            <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl'>
                <GoBack />
                <div className='flex flex-col md:flex-row rounded-xl'>
                    <div className='md:w-1/2 lg:ml-8 md:ml-8 xs:m-6 mb-8 bg-gradient-to-bl from-neutral-50 to-blue-200 rounded-xl'>
                        <img
                            src={categoryDetails.imageUrl}
                            alt={categoryDetails.name}
                            className='h-full w-full object-contain'
                        />
                    </div>
                    <div className='md:w-1/2 py-6 lg:pr-8 md:pr-8 xs:pr-6 xs:pl-6 md:pl-0 lg:pl-0 flex flex-col justify-start pb-10'>
                        <h3 className='text-4xl font-bold text-gray-800 mb-4'>
                            {categoryDetails.name}
                        </h3>
                        <p className='text-lg text-gray-600 mb-6 text-justify'>
                            {categoryDetails.description}
                        </p>

                        <FindMarketplace />
                    </div>
                </div>
            </div>

            {/* Use the RelatedCategories component */}
            <RelatedCategories categories={shuffledCategories} />
        </div>
    );
};

export default FusionBrightBulbDetails;
