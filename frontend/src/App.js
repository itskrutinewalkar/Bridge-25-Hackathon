import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import RiskAnalysis from "./Components/RiskAnalysis/RiskAnalysis";

import Home from "./Components/Home/Home";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/calculation" element={<Form />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/risk-analysis" element={<RiskAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;
