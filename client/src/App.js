import { Routes, Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import MiniLayout from './pages/Users/UserDetails'
import { AuthPage, 
  RecoverPassword, ResetPassword
 } from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<AuthPage />} />
        <Route path="auth/recoverPassword" element={<RecoverPassword />} />
        <Route path="auth/resetPassword/:resetLink" element={<ResetPassword  />} />
        <Route path="admin/*" name="Dashboard" element={<MainLayout />} >
          <Route path="admin/users/:clientId/*" name="Minipages" element={< MiniLayout />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;