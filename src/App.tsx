import React from "react";
import AuthPage from "./pages/AuthorizationPage/AuthPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App-container">
        <Header />
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
