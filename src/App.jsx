import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ClientSide from "./ClientSide.jsx";
import MobileContact from "./User-Pages/MobileContact.jsx";
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ClientSide />} />
          <Route path="/talkme" element={<MobileContact />} />
        </Routes>
      </Router>
    </div>
  );
}
