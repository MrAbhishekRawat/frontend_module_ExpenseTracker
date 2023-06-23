import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "./store/AuthContext";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import Profile from "./components/ProfilePage";
import Verification from "./components/Verification";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const isProfileCompleted = authCtx.isProfileCompleted;

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [authCtx.isLoggedIn, navigate]);

  return (
   
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home isProfileCompleted={isProfileCompleted} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/expenseTracker" element={<ExpenseTracker />} />
        <Route path="*" element={authCtx.isLoggedIn ? null : <Navigate to="/" replace />} />
      </Routes>
  );
}

export default App;