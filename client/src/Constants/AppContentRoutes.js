import {
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
  Mpesa,
  AuthPage,
  RecoverPassword,
  ResetPassword,
  ConfirmEmail,
  Overview,
  GeneralAccount,
  Settings,
  Billings,
  Notifications,
  Security, 
  MainAccount,
  Kanban
} from "../pages";

export const mainRoutes = [
  { path: '/', index: "index", name: 'Overview', element: Overview },
  { path: 'clients', name: 'Clients', element: ClientsPage },
  { path: 'inventory', name: 'Inventory', element: InventoryPage },
  { path: 'bookings', name: 'Bookings', element: BookingPage },
  { path: 'account/*', name: 'Accounts', element: MainAccount },
  { path: 'settings', name: 'Settings', element: Settings },
  { path: 'users', name: 'Users', element: UsersPage },
  { path: 'mpesaTransaction', name: 'Mpesa', element: Mpesa },
  { path: 'calendar', name: 'Calendar', element: CalendarApp },
  { path: 'users/:clientId/*', name: 'Users', element: UserDetails },
  { path: 'kanban', name: 'Kanban', element: Kanban },
]

export const minorRoutes = [
  { path: 'personal', name: 'Personal', element: Personal },
  { path: 'transactions', name: 'Transactions', element: Transactions },
  { path: 'activities', name: 'Activities', element: Activities },
  { path: 'referrals', name: 'Referrals', element: Referrals },

]
export const authRoutes = [
  { path: '/', index: "index", name: 'Auth', element: AuthPage },
  { path: 'recoverPassword', name: 'RecoverPassword', element: RecoverPassword },
  { path: 'resetPassword/:resetLink', name: 'ResetPassword', element: ResetPassword },
  { path: 'confirmEmail/:confirmationToken', name: 'ConfirmEmail', element: ConfirmEmail },
]
export const accountRoutes = [
  { path: 'general',index: "index", name: 'General', element: GeneralAccount },
  { path: 'billings', name: 'Billings', element: Billings },
  { path: 'notifications', name: 'Notifications', element: Notifications },
  { path: 'security', name: 'Security', element: Security },
]