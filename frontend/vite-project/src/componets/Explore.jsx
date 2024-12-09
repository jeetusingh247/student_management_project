import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./homepage/Footer";
import Navbar2 from "./Navbar2";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

function ExplorePage() {
  const navigate = useNavigate();

  const semesters = [
    { id: 1, name: "Semester 1", contentAvailable: false },
    { id: 2, name: "Semester 2", contentAvailable: false },
    { id: 3, name: "Semester 3", contentAvailable: false },
    { id: 4, name: "Semester 4", contentAvailable: true },
    { id: 5, name: "Semester 5", contentAvailable: false },
    { id: 6, name: "Semester 6", contentAvailable: false },
    { id: 7, name: "Semester 7", contentAvailable: false },
    { id: 8, name: "Semester 8", contentAvailable: false },
  ];

  const handleCardClick = (semester) => {
    if (semester.contentAvailable) {
      navigate(`/explore/semester${semester.id}`);
    } else {
      toast.error("Content will be available soon!", {
        duration: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <Toaster /> {/* Add Toaster component to display toast notifications */}
      <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-6">
        <img
          src="/Assets/logo.png"
          alt="Website Logo"
          className="logo mb-4 md:mb-0 md:mr-40 ml-5 w-35 h-50 md:w-64 md:h-50"
        />
        <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left">
          Select the semester for which you need to access the curated & structured study material.
        </h4>
      </div>
      <h2 className="text-center text-3xl font-bold my-4">Your Semester</h2>
      <div className="semester-cards grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 mx-6">
        {semesters.map((semester) => (
          <div
            key={semester.id}
            className="semester-card bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-4"
            onClick={() => handleCardClick(semester)}
          >
            <h3 className="text-2xl font-semibold mb-2">{semester.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
      <style jsx>{`
        .logo-header {
          padding: 20px;
          text-align: center;
        }
        .semester-cards {
          margin-left: auto;
          margin-right: auto;
          max-width: 1200px;
        }
        .semester-card {
          padding: 36px;
          border-radius: 16px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          background-color: #68d391;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          height: auto;
        }
        .semester-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          background-color: #38b2ac;
        }
        @media (max-width: 768px) {
          .semester-card {
            flex: 1 1 calc(50% - 64px);
          }
        }
        @media (max-width: 480px) {
          .semester-card {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default ExplorePage;
