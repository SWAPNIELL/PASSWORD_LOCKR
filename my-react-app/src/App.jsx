import React from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
   
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    
  );
}

export default App;
