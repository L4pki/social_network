import React from "react";
import AuthPage from "./pages/AuthorizationPage/AuthPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
