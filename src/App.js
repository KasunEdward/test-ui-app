import logo from "./logo.svg";
import "./App.css";
import NavBar from "./layout/NavBar/NavBar";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import OrderMain from "./pages/order/OrderMain";
import Home from "./pages/home/HomePage";
import LoginPage from "./pages/auth/Login";
import useToken from "./hooks/useToken";
import { AuthContext, AuthProvider } from "./context/AuthProvider";
import { useContext } from "react";
import Auth from "./pages/auth/Auth";
import { ROLE_FOOD_SEEKER } from "./constants/Role";
import Unauthorized from "./pages/common/Unauthorized";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    
    <BrowserRouter>
      {auth?.role && <NavBar/>}
      {/* <AuthProvider> */}
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/"
          element={<Home />}
        />
        <Route element={<Auth allowedRoles={[ROLE_FOOD_SEEKER]} />}>
          <Route path="/order" element={<OrderMain />} />
        </Route>
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
