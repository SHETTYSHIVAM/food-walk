import React from "react";
import Header from "./components/Header";
import SidebarMenu from "./components/SideBar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import FeedbackForm from "./components/Feedback";

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SidebarMenu />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
