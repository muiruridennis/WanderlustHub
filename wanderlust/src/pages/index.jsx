import Overview from "./Overview";
import ClientsPage from "./clients/clients";
// import CustomersPage from "./clients/customer";
import ClientsInfo from "./clients/clientsDetails";
import GeneralInfo from "./clients/generalInfo";
import  ClientsBookings from "./clients/bookings";
import  ClientsActivities from "./clients/activities";

import InventoryPage from "./Inventory";
import AuthPage from "./Auth/auth";
import RecoverPassword from "./Auth/RecoverPassword";
import ResetPassword from "./Auth/ResetPassword";
import ConfirmEmail from "./Auth/EmailConfirmation";
import BookingPage from "./Bookings/Bookings";
import CalendarApp from "./Calendar";
import UsersPage from "./Users/Users";
import UserDetails from "./Users/UserDetails";
import GeneralAccount from "./account/general";
import Billings from "./account/billings";
import MainAccount from "./account/index";
import Security from "./account/security";
import Notifications from "./account/notifications";
import Settings from "./settings";
import Personal from "./MiniPages/Personal";
import Transactions from "./MiniPages/Transactions/Transactions";
import Referrals from "./MiniPages/Referrals";
import Activities from "./MiniPages/Activities";
import Mpesa from "./mpesa/mpesa"
import Tours from "./Tours/tours";
import Index from "./LandingPage/index";
import ToursDetails from "./Tours/toursDetails";
import Chekout from "./Tours/Chekout";
import PaymentConfirmation from "./Tours/PaymentConfirmation";
import Kanban from "./Kanban/Kanban";
import TaskComments from "./Kanban/popUp/taskComment";
import TaskChecklists from "./Kanban/popUp/taskChecklist";
import TaskOverview from "./Kanban/popUp/SingleTask";
import MonetaryAnalysis from "./Finances/monetaryAnalysis";
import Finances from "./Finances/finances";
import Expenses from "./Finances/expenses/expenses.jsx";
import Income from "./Finances/income/income.jsx";
import NetProfit from "./Finances/netProfit/netProfit.jsx";
import Vendor from "./Finances/vendor/vendor.jsx";
import VendorDetails from "./Finances/vendor/vendor'sDetails.jsx";
import VendorGeneralInfo from "./Finances/vendor/generalInfo.jsx";
import VendorPaymentHistory from "./Finances/vendor/vendorPaymentHistory.jsx";
import VendorInvoices from "./Finances/vendor/vendorInvoices.jsx";
import TourPackageDetails from "./LandingPage/packageDetails/tourPackageDetails.jsx"

export {
    Overview, ClientsPage, Personal, Transactions, Referrals, Activities, InventoryPage, AuthPage, ToursDetails, Chekout, GeneralAccount, Settings, Billings, Security, Notifications,
    BookingPage, ConfirmEmail, RecoverPassword, ResetPassword, UsersPage, CalendarApp, UserDetails, Mpesa, Tours, Index, PaymentConfirmation, MainAccount, Kanban,
     TaskComments, TaskChecklists, TaskOverview,  ClientsInfo, GeneralInfo,  ClientsBookings,TourPackageDetails,
     ClientsActivities, MonetaryAnalysis, Finances, Expenses, Income, NetProfit, Vendor, VendorDetails,VendorGeneralInfo,VendorPaymentHistory, VendorInvoices
};