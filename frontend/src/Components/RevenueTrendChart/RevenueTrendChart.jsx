import React, { useState } from "react";
import "./RevenueTrendChart.css";

const CreditScoreForm = () => {
  const [formData, setFormData] = useState({
    length_of_credit_history: "",
    credit_mix: "",
    payment_history: "",
    total_liabilities: "",
    annual_revenue: "",
    debt_to_equity_ratio: "",
    amount_owed: "",
    new_credit: "",
    initial_investment: "",
    invoice_payment_behavior: "",
    loan_repayment_rate: "",
    industry_risk_score: "",
    profit_margin: "",
    total_assets: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container">
      <h1>Credit Score Predictor</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <label key={key}>
            {key.replace(/_/g, " ").toUpperCase()}:
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </label>
        ))}
        <button type="submit">Predict</button>
      </form>
    </div>
  );
};

export default CreditScoreForm;
