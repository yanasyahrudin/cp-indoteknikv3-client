import DryChargedMotorcycleDetails from '../pages/productDetails/AutomotiveAftermarket/DCMotorcycleBattery';
import MaintenanceFreeDetails from '../pages/productDetails/AutomotiveAftermarket/MaintenanceFreeBattery';
import DryChargedDetails from './../pages/productDetails/AutomotiveAftermarket/DryChargedBattery';
import BrakePadDetails from './../pages/productDetails/AutomotiveAftermarket/BrakePad';
import BrakeDiscDetails from '../pages/productDetails/AutomotiveAftermarket/BrakeDisc';
import AllWeatherPlusBulbDetails from './../pages/productDetails/AutomotiveAftermarket/AllWeatherPlusBulb';
import FusionBrightBulbDetails from './../pages/productDetails/AutomotiveAftermarket/FusionBrightBulb';
import Plus120BulbDetails from './../pages/productDetails/AutomotiveAftermarket/Plus120Bulb';
import RallyeBulbDetails from './../pages/productDetails/AutomotiveAftermarket/RallyeBulb';
import SportecBulbDetails from './../pages/productDetails/AutomotiveAftermarket/SportecBulb';
import StandardBulbDetails from '../pages/productDetails/AutomotiveAftermarket/StandardBulb';
import OilFilterDetails from './../pages/productDetails/AutomotiveAftermarket/OilFilter';
import AirFilterDetails from './../pages/productDetails/AutomotiveAftermarket/AirFilter';
import FuelFilterDetails from './../pages/productDetails/AutomotiveAftermarket/FuelFilter';
import IgnitionCoilDetails from './../pages/productDetails/AutomotiveAftermarket/IgnitionCoilGasolineS';
import ElectricFuelPumpDetails from './../pages/productDetails/AutomotiveAftermarket/ElectricFuelPumpGasolineS';
import EuropaHornDetails from '../pages/productDetails/AutomotiveAftermarket/EuropaHorn';
import MegatoneHornDetails from './../pages/productDetails/AutomotiveAftermarket/MegatoneHorn';
import MotorcycleMiniHornDetails from './../pages/productDetails/AutomotiveAftermarket/MotorcycleMiniHorn';
import PiccoloHornDetails from './../pages/productDetails/AutomotiveAftermarket/PiccoloHorn';
import FanfareCompactHornDetails from './../pages/productDetails/AutomotiveAftermarket/FanfareCompactHorn';
import DiscCompactHornDetails from '../pages/productDetails/AutomotiveAftermarket/DiscCompactHorn';
import FourPinRelayDetails from './../pages/productDetails/AutomotiveAftermarket/4PinRelay';
import FivePinRelayDetails from './../pages/productDetails/AutomotiveAftermarket/5PinRelay';
import DoubleIridiumSparkPlugDetails from './../pages/productDetails/AutomotiveAftermarket/DoubleIridiumSparkP';
import DoublePlatinumSparkPlugDetails from './../pages/productDetails/AutomotiveAftermarket/DoublePlatinumSparkP';
import IridiumSparkPlugDetails from './../pages/productDetails/AutomotiveAftermarket/IridiumSparkP';
import PlatinumSparkPlugDetails from './../pages/productDetails/AutomotiveAftermarket/PlatinumSparkP';
import Super4SparkPlugDetails from './../pages/productDetails/AutomotiveAftermarket/Super4SparkP';
import AdvantageWiperDetails from './../pages/productDetails/AutomotiveAftermarket/AdvantageWiper';
import AerofitWiperDetails from './../pages/productDetails/AutomotiveAftermarket/AerofitWiper';
import AerotwinWiperDetails from './../pages/productDetails/AutomotiveAftermarket/AerotwinWiper';
import AerotwinPlusWiperDetails from './../pages/productDetails/AutomotiveAftermarket/AerotwinPlusWiper';
import ClearAdvantageWiperDetails from './../pages/productDetails/AutomotiveAftermarket/ClearAdvantageWiper';
import EcoPlusWiperDetails from './../pages/productDetails/AutomotiveAftermarket/EcoPlusWiper';
import RearWiperDetails from './../pages/productDetails/AutomotiveAftermarket/RearWiper';

const automotiveAfterMarketDetailsRoutes = [
    { path: '/products/automotive-aftermarket/battery/dry-charged', element: <DryChargedDetails /> },
    { path: '/products/automotive-aftermarket/battery/maintenance-free', element: <MaintenanceFreeDetails /> },
    { path: '/products/automotive-aftermarket/battery/dry-charged-motorcycle', element: <DryChargedMotorcycleDetails /> },
    { path: '/products/automotive-aftermarket/brake/brake-pad', element: <BrakePadDetails /> },
    { path: '/products/automotive-aftermarket/brake/brake-disc', element: <BrakeDiscDetails /> },
    { path: '/products/automotive-aftermarket/bulb-lighting/all-weather-plus', element: <AllWeatherPlusBulbDetails /> },
    { path: '/products/automotive-aftermarket/bulb-lighting/fusion-bright', element: <FusionBrightBulbDetails /> },
    { path: '/products/automotive-aftermarket/bulb-lighting/plus-120', element: <Plus120BulbDetails /> },
    { path: '/products/automotive-aftermarket/bulb-lighting/rallye', element: <RallyeBulbDetails /> },
    { path: '/products/automotive-aftermarket/bulb-lighting/sportec-bright', element: <SportecBulbDetails /> },
    { path: '/products/automotive-aftermarket/bulb-lighting/standard', element: <StandardBulbDetails /> },
    { path: '/products/automotive-aftermarket/filter/air-filter', element: <AirFilterDetails /> },
    { path: '/products/automotive-aftermarket/filter/oil-filter', element: <OilFilterDetails /> },
    { path: '/products/automotive-aftermarket/filter/fuel-filter', element: <FuelFilterDetails /> },
    { path: '/products/automotive-aftermarket/gasoline-system/ignition-coil', element: <IgnitionCoilDetails /> },
    { path: '/products/automotive-aftermarket/gasoline-system/electric-fuel-pump', element: <ElectricFuelPumpDetails /> },
    { path: '/products/automotive-aftermarket/horn/europa', element: <EuropaHornDetails /> },
    { path: '/products/automotive-aftermarket/horn/megatone', element: <MegatoneHornDetails /> },
    { path: '/products/automotive-aftermarket/horn/motorcycle-mini', element: <MotorcycleMiniHornDetails /> },
    { path: '/products/automotive-aftermarket/horn/piccolo', element: <PiccoloHornDetails /> },
    { path: '/products/automotive-aftermarket/horn/fanfare-compact', element: <FanfareCompactHornDetails /> },
    { path: '/products/automotive-aftermarket/horn/disc-compact', element: <DiscCompactHornDetails /> },
    { path: '/products/automotive-aftermarket/relay/4-pin-relay', element: <FourPinRelayDetails /> },
    { path: '/products/automotive-aftermarket/relay/5-pin-relay', element: <FivePinRelayDetails /> },
    { path: '/products/automotive-aftermarket/spark-plug/double-iridium', element: <DoubleIridiumSparkPlugDetails /> },
    { path: '/products/automotive-aftermarket/spark-plug/double-platinum', element: <DoublePlatinumSparkPlugDetails /> },
    { path: '/products/automotive-aftermarket/spark-plug/iridium', element: <IridiumSparkPlugDetails /> },
    { path: '/products/automotive-aftermarket/spark-plug/platinum', element: <PlatinumSparkPlugDetails /> },
    { path: '/products/automotive-aftermarket/spark-plug/super-4', element: <Super4SparkPlugDetails /> },
    { path: '/products/automotive-aftermarket/wiper/advantage', element: <AdvantageWiperDetails /> },
    { path: '/products/automotive-aftermarket/wiper/aerofit', element: <AerofitWiperDetails /> },
    { path: '/products/automotive-aftermarket/wiper/aerotwin', element: <AerotwinWiperDetails /> },
    { path: '/products/automotive-aftermarket/wiper/aerotwin-plus', element: <AerotwinPlusWiperDetails /> },
    { path: '/products/automotive-aftermarket/wiper/clear-advantage', element: <ClearAdvantageWiperDetails /> },
    { path: '/products/automotive-aftermarket/wiper/eco-plus', element: <EcoPlusWiperDetails /> },
    { path: '/products/automotive-aftermarket/wiper/rear', element: <RearWiperDetails /> },
]

export default automotiveAfterMarketDetailsRoutes