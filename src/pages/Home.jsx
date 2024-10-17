import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import ProductSlide from '../components/ProductSlide';
import NeedHelp from './../components/NeedHelp';
import Facilities from '../components/Facilities';
import WhyChooseUs from './../components/WhyChooseUs';
import BrandLogos from '../components/BrandLogos';
import AnimatedSection from '../components/AnimatedSection';
import AboutHome from './../components/AboutHome';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation('global');
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, []); // Empty dependency array to run only once on mount
    return (
        <>
            <Helmet>
                <title>{`${t('header.home')} | Indo Teknik`}</title>
                <meta
                    name='description'
                    content='Ini adalah halaman beranda Indo Teknik'
                />
                <meta
                    name='keywords'
                    content='Spare part diesel berkualitas, Distributor spare part diesel Pekanbaru, Indo Teknik Pekanbaru'
                />
            </Helmet>
            <AnimatedSection zoomType='zoomIn'>
                <Carousel />
            </AnimatedSection>
            <AnimatedSection zoomType='zoomIn'>
                <AboutHome />
            </AnimatedSection>
            <AnimatedSection zoomType='zoomIn'>
                <Facilities />
            </AnimatedSection>
            <AnimatedSection zoomType='zoomIn'>
                <NeedHelp />
            </AnimatedSection>
            <AnimatedSection zoomType='zoomOut'>
                <ProductSlide />
            </AnimatedSection>
            <AnimatedSection zoomType='zoomIn'>
                <WhyChooseUs />
            </AnimatedSection>
            <AnimatedSection zoomType='zoomOut'>
                <BrandLogos />
            </AnimatedSection>
        </>
    );
};

export default Home;
