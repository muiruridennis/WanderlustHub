import { ROUTES } from './routes';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BookIcon from '@mui/icons-material/Book';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import MoneyIcon from '@mui/icons-material/Money';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonIcon from '@mui/icons-material/Person';
import ExploreIcon from '@mui/icons-material/Explore';

export const DRAWER_LIST = [
  {
    route: ROUTES.main,
    literal: 'Dashboard',
    Icon: DashboardIcon,
  },
  
];

export const settings = [
  {
    route: ROUTES.profile,
    literal: 'My Profile',
    Icon: PersonIcon,
  },

  {
    route: ROUTES.setting,
    literal: 'Settings',
    Icon: SettingsApplicationsIcon,
  },
  {
    route: ROUTES.darkTheme,
    literal: 'Theme',
    Icon: DarkModeIcon,
  },
  {
    route: ROUTES.logout,
    literal: 'Logout',
    Icon: LogoutIcon,
  },
];
export const apps = [
  {
    route: ROUTES.calendar,
    literal: 'Calendar',
    Icon: CalendarMonthIcon,
  },
  {
    route: ROUTES.chat,
    literal: 'Chat',
    Icon: ChatIcon,
  },
  {
    route: ROUTES.jira,
    literal: 'Jira Like',
    Icon: CenterFocusWeakIcon,
  },
];
export const reports = [
  {
    route: ROUTES.bookings,
    literal: 'Bookings',
    Icon: BookIcon,
  },
  {
    route: ROUTES.users,
    literal: 'Users',
    Icon: PeopleIcon,
  },
  {
  route: ROUTES.clients,
  literal: 'Clients',
  Icon: PeopleIcon,
},
  {
    route: ROUTES.tours,
    literal: 'Tour Management',
    Icon: ExploreIcon,
  },

  {
    route: ROUTES.reports,
    literal: 'Reports',
    Icon: AssessmentIcon,
  },
];

// export const essentials = [
  
//   {
//     route: ROUTES.logout,
//     literal: 'Caledar',
//     Icon: CalendarMonthIcon,
//   },
//   {
//     route: ROUTES.logout,
//     literal: 'Chat',
//     Icon: ChatIcon,
//   },
//   {
//     route: ROUTES.logout,
//     literal: 'Jira Like',
//     Icon: CenterFocusWeakIcon,
//   },
// ];
export const accounts = [
  {
    route: ROUTES.expenses,
    literal: 'Expenses',
    Icon: MoneyIcon,
  },
  {
    route: ROUTES.payments,
    literal: 'Payments',
    Icon: AttachMoneyIcon,
  },
];
