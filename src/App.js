import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Goal from "./components/unused/Goal";
import DailyReport from "./components/unused/DailyReport";
import Observations from "./components/unused/Observations";
import Chat from "./components/Chat";
import Home from "./components/Home";
import ReportView from "./components/ReportView";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/chat" element={<Chat />} />
          <Route path="/report" element={<ReportView />} />
 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
