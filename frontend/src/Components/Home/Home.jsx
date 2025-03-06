import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to CitiBridge</h1>
        <p>AI-Powered Credit Score Prediction for MSMEs</p>
      </header>

      <section className="about">
        <h2>About CitiBridge</h2>
        <p>
          CitiBridge is an advanced AI-driven platform designed to help financial institutions assess the creditworthiness of Micro, Small, and Medium Enterprises (MSMEs). 
          By leveraging data-driven insights, our system provides accurate credit scores and risk analysis, ensuring businesses get the financial support they need.
        </p>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>AI-Powered Credit Assessment</h3>
            <p>Accurately predicts credit scores based on financial data.</p>
          </div>
          <div className="feature">
            <h3>Risk Analysis Dashboard</h3>
            <p>Visual insights and data-driven reports for better decision-making.</p>
          </div>
          <div className="feature">
            <h3>Seamless Data Input</h3>
            <p>User-friendly forms for easy financial data submission.</p>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose CitiBridge?</h2>
        <p>
          Our platform revolutionizes the way MSMEs gain financial credibility, making loan approvals faster and more transparent for both businesses and lenders.
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 CitiBridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
