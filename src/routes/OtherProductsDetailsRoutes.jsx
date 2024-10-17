import EngineControlUnit3Details from '../pages/productDetails/OtherProducts/ECU3';
import EngineControlUnitDetails from './../pages/productDetails/OtherProducts/ECU';
import EngineControlUnit2Details from './../pages/productDetails/OtherProducts/ECU2';
import CkpSensorDetails from './../pages/productDetails/OtherProducts/CKPSensor';
import MapSensorDetails from './../pages/productDetails/OtherProducts/MAPSensor';
import LimiterSensorDetails from './../pages/productDetails/OtherProducts/LimiterSensor';
import CommonRailSensorDetails from './../pages/productDetails/OtherProducts/CommonRailSensor';
import AlternatorDetails from './../pages/productDetails/OtherProducts/Alternator';
import StarterDynamoDetails from '../pages/productDetails/OtherProducts/StarterDynamo';
import CommonRailCRCTesterDetails from './../pages/productDetails/OtherProducts/CRCTester';
import NozzleTesterDetails from './../pages/productDetails/OtherProducts/NozzleTester';
import InjectorBracketDetails from './../pages/productDetails/OtherProducts/InjectorBracket';
import HandTapTDetails from './../pages/productDetails/OtherProducts/HandTapT';
import DigitalCaliperDetails from './../pages/productDetails/OtherProducts/DigitalCaliper';
import PinToolDetails from './../pages/productDetails/OtherProducts/PinTool';
import InjectorToolDetails from './../pages/productDetails/OtherProducts/InjectorTool';
import UniversalInjectorToolDetails from './../pages/productDetails/OtherProducts/UniversalInjectorTool';
import SealKitRemovalToolDetails from './../pages/productDetails/OtherProducts/SealKitRemovalTool';
import InjectorRemovalToolDetails from '../pages/productDetails/OtherProducts/InjectorRemovalTool';
import InjectorToolSetDetails from './../pages/productDetails/OtherProducts/InjectorToolSet';
import NozzleTesterPipeDetails from './../pages/productDetails/OtherProducts/NozzleTesterPipe';
import PlungerTesterDetails from './../pages/productDetails/OtherProducts/PlungerTester';
import InjectorPressureGaugeDetails from './../pages/productDetails/OtherProducts/InjectorPressureGauge';
import SketmatDetails from '../pages/productDetails/OtherProducts/StandSketmat';
import PressureGaugeItechDetails from './../pages/productDetails/OtherProducts/PressureGaugeItech';
import FilterOpeningToolDetails from './../pages/productDetails/OtherProducts/FilterOpeningTool';
import ToolInjectorDetails from './../pages/productDetails/OtherProducts/ToolInjector';
import ToolShimE1024072Details from './../pages/productDetails/OtherProducts/ToolShim';
import HexKeyNo05123_5MMDetails from './../pages/productDetails/OtherProducts/HexKey';
import ToolInjectorCaterpillarDetails from '../pages/productDetails/OtherProducts/ToolsCat';
import TurboAssyDetails from '../pages/productDetails/OtherProducts/TurboAssy';
import CartridgeTurboDetails from './../pages/productDetails/OtherProducts/CartridgeTurbo';
import SelenoidTurboDetails from '../pages/productDetails/OtherProducts/SolenoidTurbo';
import RepairKitTurboDetails from './../pages/productDetails/OtherProducts/RepairKitTurbo';
import BatteryDrillDetails from './../pages/productDetails/OtherProducts/BatteryDrill';
import ElectricDrillDetails from './../pages/productDetails/OtherProducts/ElectricDrill';
import ElectricWallDrillDetails from './../pages/productDetails/OtherProducts/ElectricWallDrill';
import ElectricGrinderDetails from './../pages/productDetails/OtherProducts/ElectricGrinder';
import ElectricCircularSawMachineDetails from './../pages/productDetails/OtherProducts/ElectricCircularSawMachine';
import DistanceMeasuringToolDetails from './../pages/productDetails/OtherProducts/DistanceMeasuringTool';
import LaserLineDetails from './../pages/productDetails/OtherProducts/LaserLine';
import DetectionToolDetails from './../pages/productDetails/OtherProducts/DetectionTool';
import JetCleanerDetails from './../pages/productDetails/OtherProducts/JetCleaner';
import ScvInjectorSocketDetails from './../pages/productDetails/OtherProducts/SCVInjectorSocket';
import OilTemperatureSensorSocketDetails from './../pages/productDetails/OtherProducts/OilTemperatureSensor';
import SolenoidValveHydraulicSocketDetails from './../pages/productDetails/OtherProducts/SolenoidValveHydraulicSocket';
import CoverInjectorTDetails from './../pages/productDetails/OtherProducts/CoverInjectorT';
import CoverInjectorLDetails from './../pages/productDetails/OtherProducts/CoverInjectorL';
import ElectricConcreteDrillDetails from './../pages/productDetails/OtherProducts/ElectricConcreteDrill';

const otherProductsDetailsRoutes = [
    {
        path: '/products/other-products/ecu/ecu',
        element: <EngineControlUnitDetails />,
    },
    {
        path: '/products/other-products/ecu/ecu2',
        element: <EngineControlUnit2Details />,
    },
    {
        path: '/products/other-products/ecu/ecu3',
        element: <EngineControlUnit3Details />,
    },
    {
        path: '/products/other-products/sensor/ckp-sensor',
        element: <CkpSensorDetails />,
    },
    {
        path: '/products/other-products/sensor/map-sensor',
        element: <MapSensorDetails />,
    },
    {
        path: '/products/other-products/sensor/limiter-sensor',
        element: <LimiterSensorDetails />,
    },
    {
        path: '/products/other-products/sensor/common-rail-sensor',
        element: <CommonRailSensorDetails />,
    },
    {
        path: '/products/other-products/starter-alternator/alternator',
        element: <AlternatorDetails />,
    },
    {
        path: '/products/other-products/starter-alternator/starter-dynamo',
        element: <StarterDynamoDetails />,
    },
    {
        path: '/products/other-products/starter-alternator/common-rail-crc-tester',
        element: <CommonRailCRCTesterDetails />,
    },
    {
        path: '/products/other-products/tester/nozzle-tester',
        element: <NozzleTesterDetails />,
    },

    {
        path: '/products/other-products/tools/common-rail-crc-tester',
        element: <CommonRailCRCTesterDetails />,
    },
    {
        path: '/products/other-products/tools/nozzle-tester',
        element: <NozzleTesterDetails />,
    },
    {
        path: '/products/other-products/tools/injector-bracket',
        element: <InjectorBracketDetails />,
    },
    {
        path: '/products/other-products/tools/hand-tap-t',
        element: <HandTapTDetails />,
    },
    {
        path: '/products/other-products/tools/digital-caliper',
        element: <DigitalCaliperDetails />,
    },
    {
        path: '/products/other-products/tools/pin-tool',
        element: <PinToolDetails />,
    },
    {
        path: '/products/other-products/tools/injector-tool',
        element: <InjectorToolDetails />,
    },
    {
        path: '/products/other-products/tools/universal-injector-tool',
        element: <UniversalInjectorToolDetails />,
    },
    {
        path: '/products/other-products/seal-kit/seal-kit-removal-tool',
        element: <SealKitRemovalToolDetails />,
    },
    {
        path: '/products/other-products/tools/injector-removal-tool',
        element: <InjectorRemovalToolDetails />,
    },
    {
        path: '/products/other-products/tools/injector-tool-set',
        element: <InjectorToolSetDetails />,
    },
    {
        path: '/products/other-products/tools/nozzle-tester-pipe',
        element: <NozzleTesterPipeDetails />,
    },
    {
        path: '/products/other-products/tools/plunger-tester',
        element: <PlungerTesterDetails />,
    },
    {
        path: '/products/other-products/tools/injector-pressure-gauge',
        element: <InjectorPressureGaugeDetails />,
    },
    {
        path: '/products/other-products/tools/stand-sketmat',
        element: <SketmatDetails />,
    },
    {
        path: '/products/other-products/tools/pressure-gauge-itech',
        element: <PressureGaugeItechDetails />,
    },
    {
        path: '/products/other-products/tools/filter-opening-tool',
        element: <FilterOpeningToolDetails />,
    },
    {
        path: '/products/other-products/tools/tool-injector',
        element: <ToolInjectorDetails />,
    },
    {
        path: '/products/other-products/tools/tool-shim-e1024072',
        element: <ToolShimE1024072Details />,
    },
    {
        path: '/products/other-products/tools/hex-key-no-0512-3-5mm',
        element: <HexKeyNo05123_5MMDetails />,
    },
    {
        path: '/products/other-products/tools/tools-cat',
        element: <ToolInjectorCaterpillarDetails/>,
    },
    {
        path: '/products/other-products/turbo-charger/turbo-assy',
        element: <TurboAssyDetails/>,
    },
    {
        path: '/products/other-products/turbo-charger/cartridge-turbo',
        element: <CartridgeTurboDetails/>,
    },
    {
        path: '/products/other-products/turbo-charger/solenoid-turbo',
        element: <SelenoidTurboDetails/>,
    },
    {
        path: '/products/other-products/turbo-charger/repair-kit-turbo',
        element: <RepairKitTurboDetails/>,
    },
    {
        path: '/products/other-products/power-tool/battery-drill',
        element: <BatteryDrillDetails/>,
    },
    {
        path: '/products/other-products/power-tool/electric-drill',
        element: <ElectricDrillDetails/>,
    },
    {
        path: '/products/other-products/power-tool/electric-concrete-drill',
        element: <ElectricConcreteDrillDetails/>,
    },
    {
        path: '/products/other-products/power-tool/electric-wall-drill',
        element: <ElectricWallDrillDetails/>,
    },
    {
        path: '/products/other-products/power-tool/electric-grinder',
        element: <ElectricGrinderDetails/>,
    },
    {
        path: '/products/other-products/power-tool/electric-circular-saw-machine',
        element: <ElectricCircularSawMachineDetails/>,
    },
    {
        path: '/products/other-products/power-tool/distance-measuring-tool',
        element: <DistanceMeasuringToolDetails/>,
    },
    {
        path: '/products/other-products/power-tool/laser-line',
        element: <LaserLineDetails/>,
    },
    {
        path: '/products/other-products/power-tool/detection-tool',
        element: <DetectionToolDetails/>,
    },
    {
        path: '/products/other-products/power-tool/jet-cleaner',
        element: <JetCleanerDetails/>,
    },
    {
        path: '/products/other-products/socket/scv-injector-socket',
        element: <ScvInjectorSocketDetails/>,
    },
    {
        path: '/products/other-products/socket/solenoid-valve-hydraulic-socket',
        element: <SolenoidValveHydraulicSocketDetails/>,
    },
    {
        path: '/products/other-products/socket/oil-temperature-sensor-socket',
        element: <OilTemperatureSensorSocketDetails/>,
    },
    {
        path: '/products/other-products/cover-injector/cover-t',
        element: <CoverInjectorTDetails/>,
    },
    {
        path: '/products/other-products/cover-injector/cover-l',
        element: <CoverInjectorLDetails/>,
    },
];

export default otherProductsDetailsRoutes;
