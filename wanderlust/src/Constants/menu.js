import { ROUTES } from './routes';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import PeopleIcon from '@mui/icons-material/People';
import MoneyIcon from '@mui/icons-material/Money';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

const listItems = [
  {
    route: ROUTES.main,
    literal: 'Overview',
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.bookings,
    literal: 'Bookings',
    Icon: EventSeatIcon,
  },
  {
    literal: 'Finances',
    Icon: MoneyIcon,
    subItems: [
      {
        route: ROUTES.finances,
        literal: 'Overview',
      },
      {
        route: `${ROUTES.finances}/income`,
        literal: 'Income',
      },
      {
        route: `${ROUTES.finances}/expenses`,
        literal: 'Expenses',
      },
      {
        route: `${ROUTES.finances}/transactions`,
        literal: 'Transactions',
      },
      {
        route: `${ROUTES.finances}/reports`,
        literal: 'Reports',
      },
      {
        route: `${ROUTES.finances}/budgeting`,
        literal: 'Budgeting',
      },
      {
        route: `${ROUTES.finances}/invoices`,
        literal: 'Invoices',
      },
      {
        route: `${ROUTES.finances}/payments`,
        literal: 'Payments',
      },
      {
        route: `${ROUTES.finances}/tax-information`,
        literal: 'Tax Information',
      },
      {
        route: `${ROUTES.finances}/financial-settings`,
        literal: 'Financial Settings',
      },
    ],
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
    literal: 'Settings',
    Icon: SettingsApplicationsIcon,
    subItems: [
      {
        route: ROUTES.settings,
        literal: 'Settings',
      },
      {
        route: ROUTES.userManagement,
        literal: 'User Management',
      },
    ],
  },
  {
    route: ROUTES.logout,
    literal: 'Logout',
    Icon: ExitToAppIcon,
  },
];

export default listItems;
