import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./homepage/Footer";

function ContentPage() {
  const { unitId } = useParams();
  const navigate = useNavigate();

  const contentOptions = [
    { id: 1, name: "PYQ" },
    { id: 2, name: "Video" },
    { id: 3, name: "Syllabus" },
    { id: 4, name: "Assessment" },
  ];

  const handleContentClick = (content) => {
    if (content.name === "Video") {
      navigate(`/explore/semester4/subject1/unit/${unitId}/video`);
    }
    // Add more routing for other content types like PYQ, Syllabus, etc.
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-6">
        <img
          src="/Assets/logo.png"
          alt="Website Logo"
          className="logo mb-4 md:mb-0 md:mr-20 w-64 h-64 md:w-64 md:h-64"
        />
        <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left">
          Select the content type you want to explore for Unit {unitId}…
        </h4>
      </div>
      <h2 className="text-center text-3xl font-bold my-4">Unit {unitId} - Content</h2>
      <div className="content-cards grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 mx-6">
        {contentOptions.map((content) => (
          <div
            key={content.id}
            className="content-card bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-8"
            onClick={() => handleContentClick(content)}
          >
            <h3 className="text-xl font-semibold mb-2">{content.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
      <style jsx>{`
        .logo-header {
          padding: 20px;
          text-align: center;
        }
        .content-cards {
          margin-left: auto;
          margin-right: auto;
          max-width: 1200px;
        }
        .content-card {
          padding: 36px; /* Increased padding */
          border-radius: 16px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          background-color: #68d391; /* Default green color */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: calc(100%); /* Adjusted width */
          height: auto; /* Adjusted height */
        }
        .content-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          background-color: #38b2ac; /* Darker green on hover */
        }
        @media (max-width: 768px) {
          .content-card {
            flex: 1 1 calc(50% - 16px); /* Adjusted width for medium screens */
          }
        }
        @media (max-width: 480px) {
          .content-card {
            flex: 1 1 100%; /* Full width for small screens */
          }
        }
      `}</style>
    </div>
  );
}

export default ContentPage;
