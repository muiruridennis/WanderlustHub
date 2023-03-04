import {
  DashboardPage,
  ClientsPage,
  InventoryPage,
  BookingPage,
  UsersPage,
  CalendarApp,
  UserDetails,
  Personal,
  Transactions,
  Referrals,
  Activities,
  Mpesa
} from "../pages";

export const mainRoutes = [
  { path: 'dashboard', index:"index", name: 'Dashboard', element: DashboardPage },
  { path: 'clients', name: 'Clients', element: ClientsPage },
  { path: 'inventory', name: 'Inventory', element: InventoryPage },
  { path: 'bookings', name: 'Bookings', element: BookingPage },
  { path: 'users', name: 'Users', element: UsersPage },
  { path: 'mpesaTransaction', name: 'Mpesa', element: Mpesa },
  { path: 'calendar', name: 'Calendar', element: CalendarApp },
  { path: 'users/:clientId/*', name: 'Users', element: UserDetails },
]

export const minorRoutes = [
  { path: 'personal', name: 'Personal', element: Personal },
  { path: 'transactions', name: 'Transactions', element: Transactions },
  { path: 'referrals', name: 'Referrals', element: Referrals },
  { path: 'activities', name: 'Activities', element: Activities },
]