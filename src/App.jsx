import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useGaTracker from './useGaTracker'; // Import the custom hook

// Routes
import serviceRoutes from './routes/ServiceRoutes';
import productCategoriesRoutes from './routes/ProductCategoriesRoutes';
import conventionalDetailsRoutes from './routes/ConventionalDetailsRoutes';
import commonRailDetailsRoutes from './routes/CommonRailDetailsRoutes';
import automotiveAfterMarketDetailsRoutes from './routes/AutomotiveAftermarketDetailsRoutes';
import otherProductsDetailsRoutes from './routes/OtherProductsDetailsRoutes';
import blogRoutes from './routes/BlogRoutes';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import DistributorPumpVP44Details from './pages/productDetails/DistributorPump/DistributorPumpVP44';
import UnitPumpDetails from './pages/productDetails/Electric/UnitPump';
import EUIDetails from './pages/productDetails/Electric/EUI';
import TestBenchAndFabricationMachines from './pages/WorkshopGallery';

// Components
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTopButton = lazy(() => import('./components/ScrollToTop'));
const ContactModal = lazy(() => import('./components/ContactModal'));


// Dynamically map routes
const Routing = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route
            path='/test-bench-and-fabrication-machines'
            element={<TestBenchAndFabricationMachines />}
        />
        <Route
            path='/products/fuel-injection-systems/vp44/distributor-pump/distributor-pump-vp44'
            element={<DistributorPumpVP44Details />}
        />
        <Route
            path='/products/fuel-injection-systems/electric/eui/eui'
            element={<EUIDetails />}
        />
        <Route
            path='/products/fuel-injection-systems/electric/unit-pump/unit-pump'
            element={<UnitPumpDetails />}
        />
        {/* Service Routes */}
        {serviceRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}
        {/* Product Categories Routes */}
        {productCategoriesRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}
        {/* Conventional Details Routes */}
        {conventionalDetailsRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}
        {/* Common Rail Details Routes */}
        {commonRailDetailsRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}
        {/* Automotive Aftermarket Details Routes */}
        {automotiveAfterMarketDetailsRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}
        {/* Other Products Details Routes */}
        {otherProductsDetailsRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}
        {/* Blog Routes */}
        {blogRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}
        <Route path='/*' element={<NotFound />} />
    </Routes>
);

function App() {
    useGaTracker(); // Track page views

    return (
        <BrowserRouter>
            <div className='bg-gradient-to-bl from-neutral-50 to-blue-200 pb-10 font-play'>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routing />
                </Suspense>
                <ScrollToTopButton />
                <ContactModal />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
