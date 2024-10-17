import FuelInjectionPumpCategories from '../pages/productCategories/FuelInjectionPump';
import NozzleCategories from '../pages/productCategories/Nozzle';
import SupplyPumpCategories from '../pages/productCategories/SupplyPump';
import InjectorCategories from '../pages/productCategories/Injector';
import EUICategories from '../pages/productCategories/EUI';
import DistributorPumpCategories from '../pages/productCategories/DistributorPump';
import UnitPumpCategories from '../pages/productCategories/UnitPump';
import BulbsLightingCategories from '../pages/productCategories/BulbLighting';
import HornCategories from '../pages/productCategories/Horn';
import RelayCategories from '../pages/productCategories/Relay';
import GasolineSystemCategory from '../pages/productCategories/GasolineSystem';
import SparkPlugCategories from '../pages/productCategories/SparkPlug';
import FilterCategories from '../pages/productCategories/Filter';
import BatteryCategories from '../pages/productCategories/Battery';
import WiperCategories from '../pages/productCategories/Wiper';
import BrakeCategories from '../pages/productCategories/Brake';
import TurboChargerCategories from '../pages/productCategories/TurboCharger';
import SensorCategories from '../pages/productCategories/Sensor';
import StarterAlternatorCategories from '../pages/productCategories/StartersAlternator';
import EcuCategories from '../pages/productCategories/ECU';
import ToolsCategories from '../pages/productCategories/Tools';
import PowerToolCategories from '../pages/productCategories/PowerTool';
import SocketCategories from '../pages/productCategories/Socket';
import CoverInjector from '../pages/productCategories/CoverInjector';

const productCategoriesRoutes = [
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump', element: <FuelInjectionPumpCategories /> },
    { path: '/products/fuel-injection-systems/conventional/nozzle', element: <NozzleCategories /> },
    { path: '/products/fuel-injection-systems/common-rail/supply-pump', element: <SupplyPumpCategories /> },
    { path: '/products/fuel-injection-systems/common-rail/injector', element: <InjectorCategories /> },
    { path: '/products/fuel-injection-systems/electric/eui', element: <EUICategories /> },
    { path: '/products/fuel-injection-systems/vp44/distributor-pump', element: <DistributorPumpCategories /> },
    { path: '/products/fuel-injection-systems/electric/unit-pump', element: <UnitPumpCategories /> },
    { path: '/products/automotive-aftermarket/bulb-lighting', element: <BulbsLightingCategories /> },
    { path: '/products/automotive-aftermarket/horn', element: <HornCategories /> },
    { path: '/products/automotive-aftermarket/relay', element: <RelayCategories /> },
    { path: '/products/automotive-aftermarket/gasoline-system', element: <GasolineSystemCategory /> },
    { path: '/products/automotive-aftermarket/spark-plug', element: <SparkPlugCategories /> },
    { path: '/products/automotive-aftermarket/filter', element: <FilterCategories /> },
    { path: '/products/automotive-aftermarket/battery', element: <BatteryCategories /> },
    { path: '/products/automotive-aftermarket/wiper', element: <WiperCategories /> },
    { path: '/products/automotive-aftermarket/brake', element: <BrakeCategories /> },
    { path: '/products/other-products/turbo-charger', element: <TurboChargerCategories /> },
    { path: '/products/other-products/sensor', element: <SensorCategories /> },
    { path: '/products/other-products/starter-alternator', element: <StarterAlternatorCategories /> },
    { path: '/products/other-products/ecu', element: <EcuCategories /> },
    { path: '/products/other-products/tools', element: <ToolsCategories /> },
    { path: '/products/other-products/power-tool', element: <PowerToolCategories /> },
    { path: '/products/other-products/socket', element: <SocketCategories /> },
    { path: '/products/other-products/cover-injector', element: <CoverInjector /> },
];


export default productCategoriesRoutes