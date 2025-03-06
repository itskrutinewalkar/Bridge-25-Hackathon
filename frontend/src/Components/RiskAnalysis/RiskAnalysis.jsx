import { useLocation } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "./RiskAnalysis.css";

const RiskAnalysis = () => {
  const location = useLocation();
  const formData = location.state || {}; 

  const data = Object.entries(formData)
    .filter(([key]) => key.startsWith("num__"))
    .map(([key, value]) => ({
      name: key.replace("num__", "").replace(/_/g, " "), 
      value: parseFloat(value),
    }));

  return (
    <div className="risk-analysis-container">
      <h2 className="risk-analysis-title">Risk Analysis Graph</h2>
      <div className="graph-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RiskAnalysis;
