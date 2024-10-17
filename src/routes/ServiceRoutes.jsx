// Services
import Nozzle from '../pages/services/Nozzle';
import FuelInjectionPump from '../pages/services/FuelInjectionPump';
import SupplyPump from '../pages/services/SupplyPump';
import Injector from '../pages/services/Injector';
import EUI from '../pages/services/EUI';
import TICS from '../pages/services/TICS';
import UnitPump from '../pages/services/UnitPump';
import Welding from '../pages/services/Welding';
import Lathe from '../pages/services/Lathe';
import Press from '../pages/services/Press';
import Fabrication from '../pages/services/Fabrication';


// Route configuration arrays
const serviceRoutes = [
    { path: '/services/conventional/nozzle', element: <Nozzle /> },
    { path: '/services/conventional/fuel-injection-pump', element: <FuelInjectionPump /> },
    { path: '/services/common-rail/supply-pump', element: <SupplyPump /> },
    { path: '/services/common-rail/injector', element: <Injector /> },
    { path: '/services/electric/eui', element: <EUI /> },
    { path: '/services/electric/tics', element: <TICS /> },
    { path: '/services/electric/unit-pump', element: <UnitPump /> },
    { path: '/services/fabrication/welding', element: <Welding /> },
    { path: '/services/fabrication/lathe', element: <Lathe /> },
    { path: '/services/fabrication/press', element: <Press /> },
    { path: '/services/fabrication/fabrication', element: <Fabrication /> },
];

export default serviceRoutes