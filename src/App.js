import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/ReferralPage"; // your referral dashboard
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
