import PumpAssyList from '../pages/productDetails/Conventional/PumpAssy';
import GovernorDetails from '../pages/productDetails/Conventional/Governor';
import DeliveryValveInlineDetails from '../pages/productDetails/Conventional/DeliveryValveInline';
import PlungerDetails from '../pages/productDetails/Conventional/Plunger';
import HandPumpDetails from '../pages/productDetails/Conventional/HandPump';
import TimerDetails from '../pages/productDetails/Conventional/Timer';
import CamshaftDetails from '../pages/productDetails/Conventional/Camshaft';
import RotorHeadDetails from '../pages/productDetails/Conventional/Rotorhead';
import PumpValveDetails from '../pages/productDetails/Conventional/PumpValve';
import PlateCouplingDetails from '../pages/productDetails/Conventional/PlateCoupling';
import FuelHandPumpAssyDetails from '../pages/productDetails/Conventional/FuelHandPumpAssy';
import ArmAssyDetails from '../pages/productDetails/Conventional/ArmAssy';
import RollerInlineDetails from '../pages/productDetails/Conventional/RollerInline';
import SpringInlineDetails from '../pages/productDetails/Conventional/SpringInline';
import BushingDetails from '../pages/productDetails/Conventional/Bushing';
import RubberDamperBufferDetails from '../pages/productDetails/Conventional/RubberDamperBuffer';
import GasketInlineDetails from '../pages/productDetails/Conventional/GasketInline';
import CouplingDetails from '../pages/productDetails/Conventional/Coupling';
import DriveShaftDetails from '../pages/productDetails/Conventional/DriveShaft';
import GasketRotaryDetails from '../pages/productDetails/Conventional/GasketRotary';
import LinerFeedPumpDetails from '../pages/productDetails/Conventional/LinerFeedPump';
import PistonTimerDetails from '../pages/productDetails/Conventional/PistonTimer';
import RollerRotaryDetails from '../pages/productDetails/Conventional/RollerRotary';
import CamplateDetails from '../pages/productDetails/Conventional/Camplate';
import SolenoidFIPDetails from '../pages/productDetails/Conventional/SolenoidFIP';
import SpringRotaryDetails from '../pages/productDetails/Conventional/SpringRotary';
import DeliveryValveRotaryDetails from '../pages/productDetails/Conventional/DeliveryValveRotary';
import NozzleAssyPencilDetails from '../pages/productDetails/Conventional/NozzleAssyPencil';
import NozzleAssyInjectorDetails from '../pages/productDetails/Conventional/NozzleAssyInjector';
import NozzleAssyInjector2Details from '../pages/productDetails/Conventional/NozzleAssyInjector2';
import NozzleFIPDetails from '../pages/productDetails/Conventional/NozzleFIP';
import NozzleFIP2Details from '../pages/productDetails/Conventional/NozzleFIP2';
import NozzleFIP3Details from '../pages/productDetails/Conventional/NozzleFIP3';


const conventionalDetailsRoutes = [

    //fip routes
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/pump-assy', element: <PumpAssyList /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/governor', element: <GovernorDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/delivery-valve-inline', element: <DeliveryValveInlineDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/plunger', element: <PlungerDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/handpump', element: <HandPumpDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/timer', element: <TimerDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/camshaft', element: <CamshaftDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/pump-valve', element: <PumpValveDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/plate-coupling', element: <PlateCouplingDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/fuel-hand-pump-assy', element: <FuelHandPumpAssyDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/arm-assy', element: <ArmAssyDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/roller-inline', element: <RollerInlineDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/spring-inline', element: <SpringInlineDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/bushing', element: <BushingDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/rubber-damper-buffer', element: <RubberDamperBufferDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/gasket-inline', element: <GasketInlineDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/rotor-head', element: <RotorHeadDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/coupling', element: <CouplingDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/drive-shaft', element: <DriveShaftDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/gasket-rotary', element: <GasketRotaryDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/drive-shaft', element: <DriveShaftDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/liner-feed-pump', element: <LinerFeedPumpDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/piston-timer', element: <PistonTimerDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/roller-rotary', element: <RollerRotaryDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/camplate', element: <CamplateDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/solenoid-fip', element: <SolenoidFIPDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/spring-rotary', element: <SpringRotaryDetails /> },
    { path: '/products/fuel-injection-systems/conventional/fuel-injection-pump/delivery-valve-rotary', element: <DeliveryValveRotaryDetails /> },
    //nozzle routes
    { path: '/products/fuel-injection-systems/conventional/nozzle/nozzle-assy-pencil', element: <NozzleAssyPencilDetails /> },
    { path: '/products/fuel-injection-systems/conventional/nozzle/nozzle-assy-injector', element: <NozzleAssyInjectorDetails /> },
    { path: '/products/fuel-injection-systems/conventional/nozzle/nozzle-assy-injector2', element: <NozzleAssyInjector2Details /> },
    { path: '/products/fuel-injection-systems/conventional/nozzle/nozzle-fip', element: <NozzleFIPDetails /> },
    { path: '/products/fuel-injection-systems/conventional/nozzle/nozzle-fip2', element: <NozzleFIP2Details /> },
    { path: '/products/fuel-injection-systems/conventional/nozzle/nozzle-fip3', element: <NozzleFIP3Details /> },
]

export default conventionalDetailsRoutes