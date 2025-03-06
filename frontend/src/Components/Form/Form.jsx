import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css';

const BusinessForm = () => {
  const [businessType, setBusinessType] = useState("");
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const startupFields = [
    { name: "num__industry_risk_score", label: "Industry Risk Score" },
    { name: "num__annual_revenue", label: "Annual Revenue" },
    { name: "num__total_assets", label: "Total Assets" },
    { name: "num__initial_investment", label: "Initial Investment" },
    { name: "num__amount_owed", label: "Amount Owed" },
  ];

  const establishedFields = [
    { name: "num__business_age", label: "Business Age" },
    { name: "num__loan_repayment_rate", label: "Loan Repayment Rate" },
    { name: "num__annual_revenue", label: "Annual Revenue" },
    { name: "num__length_of_credit_history", label: "Length of Credit History" },
    { name: "num__industry_risk_score", label: "Industry Risk Score" },
  ];

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setBusinessType(selectedType);
    setFormFields(
      selectedType === "Startup"
        ? startupFields
        : selectedType === "Established"
        ? establishedFields
        : []
    );
    setFormData({ ...formData, businessType: selectedType });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/risk-analysis", { state: formData });
  };

  return (
    <form onSubmit={handleSubmit} className="business-form">
      <label>
        Business ID:
        <input type="text" name="business_id" required onChange={handleChange} />
      </label>
      <label>
        Company Name:
        <input type="text" name="company_name" required onChange={handleChange} />
      </label>
      <label>
        Business Type:
        <select value={businessType} onChange={handleTypeChange} required>
          <option value="">Select</option>
          <option value="Startup">Startup</option>
          <option value="Established">Established Business</option>
        </select>
      </label>

      {formFields.map((field) => (
        <label key={field.name}>
          {field.label}:
          <input type="number" name={field.name} required onChange={handleChange} />
        </label>
      ))}

      <button type="submit">Generate Risk Analysis</button>
    </form>
  );
};

export default BusinessForm;
