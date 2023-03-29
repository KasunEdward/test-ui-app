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

function App() {
  const { token, setToken, clearToken } = useToken();

  return (
    <BrowserRouter>
      {token && <NavBar clearToken={clearToken} />}
      <Routes>
        <Route
          path="/login"
          element={
            token ? <Navigate to="/" /> : <LoginPage setToken={setToken} />
          }
        />
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/order"
          element={token ? <OrderMain /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
