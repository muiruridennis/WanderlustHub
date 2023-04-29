import { Routes, Route } from "react-router-dom";
import Overview from './Layouts/dashboard/Layout';
import AuthLayout from './Layouts/Auth/layout';
import Account from './Layouts/account/layout';
import MiniLayout from './pages/Users/UserDetails';

import {
  Tours, Index, ToursDetails, Chekout, PaymentConfirmation
} from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Index />} />
        <Route path="auth/*" name='Auth' element={<AuthLayout />} />
        <Route path="tours/" element={<Tours />} />
        <Route path="tours/:tourId" element={<ToursDetails />} />

        <Route path="tours/checkout/:tourId" element={<Chekout />} />
        <Route path="tours/paymentConfirmation" element={<PaymentConfirmation />} />
        <Route path="overview/*" name="Overview" element={<Overview />} >
          <Route path="overview/account/*" name="Account" element={< Account />} />
          <Route path="overview/users/:clientId/*" name="Minipages" element={< MiniLayout />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;