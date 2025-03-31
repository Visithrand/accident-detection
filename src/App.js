import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import OverviewPage from './Components/Overview/OverviewPage';


function App() {
  return (
    <OverviewPage/>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
