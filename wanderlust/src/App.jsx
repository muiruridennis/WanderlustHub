import React from 'react';
import { Routes, Route } from "react-router-dom";
import Overview from './Layouts/dashboard/Layout';
import AuthLayout from './Layouts/Auth/layout';
import Account from './Layouts/account/layout';
import Kanban from './Layouts/kanban/layout';
import Client from './Layouts/client/layout';
import MiniLayout from './pages/Users/UserDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Tours, Index, ToursDetails, Chekout, PaymentConfirmation, TourPackageDetails
} from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Index />} />
        <Route path="auth/*" name='Auth' element={<AuthLayout />} />
        <Route path="tours/" element={<Tours />} />
        <Route path="tours/:tourId" element={<ToursDetails />} />
        <Route path="tour-details/:packageId" element={<TourPackageDetails />} />

        <Route path="tours/checkout/:tourId" element={<Chekout />} />
        <Route path="tours/paymentConfirmation" element={<PaymentConfirmation />} />
        <Route path="overview/*" name="Overview" element={<Overview />} >
          <Route path="overview/account/*" name="Account" element={< Account />} />
          <Route path="overview/kanban/*" name="Kanban" element={< Kanban />} />
          <Route path="overview/clientsDetails/:id/*" name="Clients" element={< Client />} />
          <Route path="overview/users/:clientId/*" name="Minipages" element={< MiniLayout />} />
        </Route>
      </Routes>
      <ToastContainer
        autoClose={5000}
        theme="colored"
      />
    </div>
  )
}

export default App;