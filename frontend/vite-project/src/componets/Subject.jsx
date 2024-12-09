import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2"; // Import Navbar2
import Footer from "./homepage/Footer"; // Import Footer
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

function SubjectPage() {
  const navigate = useNavigate();

  const subjects = [
    { id: 1, name: "Theory of Computation", contentAvailable: true },
    { id: 2, name: "OOPS with Java", contentAvailable: false },
    { id: 3, name: "Operating System", contentAvailable: false },
    { id: 4, name: "Universal Human Values", contentAvailable: false },
    { id: 5, name: "Digital Electronics", contentAvailable: false },
    { id: 6, name: "Python Programming", contentAvailable: false },
  ];

  const handleCardClick = (subject) => {
    if (subject.contentAvailable) {
      navigate(`/explore/semester4/subject${subject.id}`);
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
      <Toaster /> {/* Add Toaster for toast notifications */}
      <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-6">
        <img
          src="/Assets/logo.png"
          alt="Website Logo"
          className="logo mb-4 md:mb-0 md:mr-40 ml-5 w-35 h-50 md:w-64 md:h-50"
        />
        <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left">
          Select the subject for which you need to access the curated & structured study material.
        </h4>
      </div>
      <h2 className="text-center text-3xl font-bold my-4">Semester 4 - Subjects</h2>
      <div className="subject-cards grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 mx-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="subject-card bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-8"
            onClick={() => handleCardClick(subject)}
          >
            <h3 className="text-2xl font-semibold mb-2">{subject.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
      <style jsx>{`
        .logo-header {
          padding: 20px;
          text-align: center;
        }
        .subject-cards {
          margin-left: auto;
          margin-right: auto;
          max-width: 1200px;
        }
        .subject-card {
          padding: 38px; /* Increased padding */
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          background-color: #68d391; /* Default green color */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: calc(100% - 16px); /* Adjusted width */
          height: auto; /* Adjusted height */
        }
        .subject-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          background-color: #38b2ac; /* Darker green on hover */
        }
        @media (max-width: 768px) {
          .subject-card {
            flex: 1 1 calc(50% - 16px); /* Adjusted width for medium screens */
          }
        }
        @media (max-width: 480px) {
          .subject-card {
            flex: 1 1 100%; /* Full width for small screens */
          }
        }
      `}</style>
    </div>
  );
}

export default SubjectPage;
