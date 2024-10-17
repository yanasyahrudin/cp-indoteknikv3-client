// Common Rail Details
import SupplyPumpAssyDetails from '../pages/productDetails/CommonRail/SupplyPumpAssy';
import PlungerSupplyPumpDetails from '../pages/productDetails/CommonRail/Plunger';
import RotorSetFeedPumpDetails from '../pages/productDetails/CommonRail/RotorSetFeedPump';
import CamshaftSupplyPumpDetails from '../pages/productDetails/CommonRail/CamshaftSupplyPump';
import TemperatureSensorDetails from '../pages/productDetails/CommonRail/SensorTemperature';
import SCVSupplyPumpDetails from '../pages/productDetails/CommonRail/SCV';
import RepairKitSupplyPumpDetails from '../pages/productDetails/CommonRail/RepairKit';
import ValvePressureRegulatorDetails from '../pages/productDetails/CommonRail/ValvePressureRegulator';
import NepelPlungerSupplyPumpDetails from '../pages/productDetails/CommonRail/NepelPlunger';
import FilterSupplyPumpDetails from '../pages/productDetails/CommonRail/FilterSupplyPump';
import PipeHoseDetails from '../pages/productDetails/CommonRail/PipeHose';
import SpringPlungerDetails from '../pages/productDetails/CommonRail/SpringPlunger';
import CommandPiston from '../pages/productDetails/CommonRail/CommandPiston';
import NozzleInjectorDetails from '../pages/productDetails/CommonRail/Nozzle';
import InjectorAssyDetails from '../pages/productDetails/CommonRail/InjectorAssy';
import SolenoidInjectorDetails from '../pages/productDetails/CommonRail/SolenoidInjector';
import OrificeValveDetails from '../pages/productDetails/CommonRail/OrificeValve';
import ValveSeatRetainingNutDetails from '../pages/productDetails/CommonRail/ValveSeatRetainingNut';
import NopShimInjectorDetails from '../pages/productDetails/CommonRail/NopShim';
import SolenoidSpringShimDetails from '../pages/productDetails/CommonRail/SolenoidSpringShim';
import CupNozzleInjectorDetails from '../pages/productDetails/CommonRail/CupNozzleInjector';
import NopSpringDetails from '../pages/productDetails/CommonRail/NopSpring';
import HalfBallValveDetails from '../pages/productDetails/CommonRail/HalfBallValve';
import ShimCalibrationDetails from '../pages/productDetails/CommonRail/ShimCalibration';
import SolenoidSpringDetails from '../pages/productDetails/CommonRail/SolenoidSpring';
import SolenoidValveDetails from '../pages/productDetails/CommonRail/SolenoidValve';
import ControlValveDetails from '../pages/productDetails/CommonRail/ControlValve';

const commonRailDetailsRoutes = [
        //Supply Pump Details
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/supply-pump-assy', element: <SupplyPumpAssyDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/plunger', element: <PlungerSupplyPumpDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/rotor-set-feed-pump', element: <RotorSetFeedPumpDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/camshaft-supply-pump', element: <CamshaftSupplyPumpDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/sensor-temperature', element: <TemperatureSensorDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/scv', element: <SCVSupplyPumpDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/repair-kit', element: <RepairKitSupplyPumpDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/valve-pressure-regulator', element: <ValvePressureRegulatorDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/nepel-plunger', element: <NepelPlungerSupplyPumpDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/filter-supply-pump', element: <FilterSupplyPumpDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/pipe-hose', element: <PipeHoseDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/supply-pump/spring-plunger', element: <SpringPlungerDetails /> },
        //Injector Details
        { path: '/products/fuel-injection-systems/common-rail/injector/injector-assy', element: <InjectorAssyDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/nozzle', element: <NozzleInjectorDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/solenoid', element: <SolenoidInjectorDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/orifice-valve', element: <OrificeValveDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/command-piston', element: <CommandPiston /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/valve-seat-retaining-nut', element: <ValveSeatRetainingNutDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/nop-shim', element: <NopShimInjectorDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/solenoid-spring-shim', element: <SolenoidSpringShimDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/nop-shim', element: <NopShimInjectorDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/cup-nozzle-injector', element: <CupNozzleInjectorDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/half-ball-valve', element: <HalfBallValveDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/shim-calibration', element: <ShimCalibrationDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/solenoid-spring', element: <SolenoidSpringDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/solenoid-valve', element: <SolenoidValveDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/nop-spring', element: <NopSpringDetails /> },
        { path: '/products/fuel-injection-systems/common-rail/injector/control-valve', element: <ControlValveDetails /> },
]

export default commonRailDetailsRoutes