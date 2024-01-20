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
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

 const DRAWER_LIST = [
  {
    route: ROUTES.main,
    literal: 'Overview',
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.bookings,
    literal: 'Bookings',
    Icon: ShoppingCartIcon,
  },
  
  {
    route: ROUTES.finances,
    literal: 'Finances',
    Icon: MoneyIcon,
  },

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
    route: ROUTES.Kanban,
    literal: 'Kanban',
    Icon: ViewKanbanIcon,
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
    route: ROUTES.reports,
    literal: 'Reports',
    Icon: AssessmentIcon,
  },
  {
    route: ROUTES.account,
    literal: 'Account',
    Icon: PersonIcon,
  },
  {
    route: ROUTES.settings,
    literal: 'Settings',
    Icon: SettingsApplicationsIcon,
  },
];
export default DRAWER_LIST