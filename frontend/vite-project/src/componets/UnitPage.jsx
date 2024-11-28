import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar2 from "./Navbar2";
import Footer from "./homepage/Footer";

function UnitsPage() {
  const navigate = useNavigate();

  const units = [
    { id: 1, name: "Unit 1" },
    { id: 2, name: "Unit 2" },
    { id: 3, name: "Unit 3" },
    { id: 4, name: "Unit 4" },
    { id: 5, name: "Unit 5" },
    { id: 6, name: "PYQs" },
  ];

  const handleUnitClick = (unit) => {
    if (unit.name === "PYQs") {
      navigate(`/explore/semester4/subject1/pyqs`);
    } else {
      navigate(`/explore/semester4/subject1/unit/${unit.id}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-6">
        <img
          src="/Assets/logo.png"
          alt="Website Logo"
          className="logo mb-4 md:mb-0 md:mr-20 w-50 h-55 md:w-64 md:h-50"
        />
        <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left">
          Select the unit for which you need to access the curated & structured
          study material.
        </h4>
      </div>
      <h2 className="text-center text-3xl font-bold my-4">
        Subject 1 - Units
      </h2>
      <div className="unit-cards grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 mx-6">
        {units.map((unit) => (
          <div
            key={unit.id}
            className="unit-card bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-6"
            onClick={() => handleUnitClick(unit)}
          >
            <h3 className="text-xl font-semibold mb-2">{unit.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
      <style jsx>{`
        .logo-header {
          padding: 20px;
          text-align: center;
        }
        .unit-cards {
          margin-left: auto;
          margin-right: auto;
          max-width: 1200px;
        }
        .unit-card {
          padding: 44px;
          border-radius: 16px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          background-color: #68d391; /* Default green color */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .unit-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          background-color: #38b2ac; /* Darker green on hover */
        }
        @media (max-width: 768px) {
          .unit-card {
            flex: 1 1 calc(50% - 32px); /* Adjusted width for medium screens */
          }
        }
        @media (max-width: 480px) {
          .unit-card {
            flex: 1 1 100%; /* Full width for small screens */
          }
        }
      `}</style>
    </div>
  );
}

export default UnitsPage;
