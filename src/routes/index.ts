import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));
const Home = lazy(() => import('../pages/Dashboard/Home'));
const Report = lazy(() => import('../pages/Report'));
const MvarTransmisi = lazy (() => import('../pages/MasterData/MvarTransmisi'));
const MwTransmisi = lazy (() => import('../pages/MasterData/MwTransmisi'));
const Transmisi = lazy (() => import('../pages/MasterData/Transmisi'));
const MonitoringRow = lazy (() => import('../pages/MonitoringRow'));
const helpFeedback = lazy (() => import('../pages/HelpFeedback'));
const NewDataMR = lazy (() => import('../components/NewDataMR'));
const EditDataMonitoring = lazy (() => import('../components/EdtiDataMonitoring'));
const BeritaAcara = lazy (() => import('../pages/BeritaAcara'));
const NewDataBA = lazy (() => import('../components/NewDataBA'));

const coreRoutes = [
  {
    path: '/Home',
    title: 'Home',
    component: Home,
  },
  {
    path: '/Ecommerce',
    title: 'Ecommerce',
    component: ECommerce,
  },
  {
    path: '/Report',
    title: 'Report',
    component: Report,
  },
  {
    path: '/masterdata/transmisi',
    title: 'Transmisi',
    component: Transmisi,
  },
  {
    path: '/masterdata/mwtransmisi',
    title: 'MwTransmisi',
    component: MwTransmisi,
  },
  {
    path: '/masterdata/mvartransmisi',
    title: 'MvarTransmisi',
    component: MvarTransmisi,
  },
  {
    path: '/monitoringrow',
    title: 'monitoringrow',
    component: MonitoringRow,
  },
  {
    path: '/newdatamr',
    title: 'newdatamr',
    component: NewDataMR,
  },
  {
    path: '/editdatamonitoring',
    title: 'editdatamonitoring',
    component: EditDataMonitoring,
  },
  {
    path: '/beritaacara',
    title: 'beritaacara',
    component: BeritaAcara,
  },
  {
    path: '/newdataba',
    title: 'newdataba',
    component: NewDataBA,
  },
  {
    path: '/helpfeedback',
    title: 'helpfeedback',
    component: helpFeedback,
  },
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
