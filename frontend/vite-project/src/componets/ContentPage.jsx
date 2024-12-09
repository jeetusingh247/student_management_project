import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./homepage/Footer";
import toast, { Toaster } from "react-hot-toast";

const ContentPage = () => {
  const navigate = useNavigate();
  const { unitId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [contentOptions, setContentOptions] = useState([]);

  useEffect(() => {
    // Simulate API fetch for content options
    setContentOptions([
      { id: 1, name: "Notes", image: "/Assets/notes.png" },
      { id: 2, name: "Video", image: "/Assets/youtube.png" },
      { id: 3, name: "Assignment", image: "/Assets/assesment.png" },
    ]);
  }, []);

  const handleContentClick = (content) => {
    if (content.name === "Assignment") {
      setIsModalOpen(true); // Open modal on "Assignment" click
    } else if (content.name === "Video") {
      if (unitId === "1") {
        navigate(`/explore/semester4/subject1/unit/1/video`);
      } else if (["2", "3", "4", "5"].includes(unitId)) {
        toast.error("Content will be available soon!", {
          duration: 3000,
          position: "top-center",
        });
      }
    } else if (content.name === "Notes") {
      navigate(`/explore/semester4/subject1/unit/${unitId}/pdf`);
    }
  };

  const startQuiz = () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty!", { duration: 3000, position: "top-center" });
      return;
    }
    setIsModalOpen(false); // Close the modal
    navigate(`/explore/semester4/subject1/unit/${unitId}/assignment`, { state: { name } });
  };

  // Validation for invalid unitId
  if (!unitId || isNaN(unitId)) {
    toast.error("Invalid Unit ID", {
      duration: 3000,
      position: "top-center",
    });
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <Toaster />
      <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-8">
        <img
          src="/Assets/logo.png"
          alt="Website Logo"
          className="logo mb-4 md:mb-0 md:mr-20 w-50 h-55 md:w-64 md:h-50"
        />
        <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left md:ml-8">
          Select the content type you want to explore for Unit {unitId}.
        </h4>
      </div>
      <h2 className="text-center text-3xl font-bold my-4">Unit {unitId} - Content</h2>
      <div className="content-cards flex gap-6 p-6 overflow-x-auto pb-[210px]">
        {contentOptions.map((content) => (
          <img
            key={content.id}
            src={content.image}
            alt={`${content.name} icon`}
            className="h-[246px] w-[246px] rounded-lg shadow-[0 1px 8px 0 rgba(0,0,0,.08)] border-2 object-cover transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
            onClick={() => handleContentClick(content)}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Name</h2>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)} // Close the modal
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={startQuiz} // Navigate to quiz page
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={!name.trim()} // Disable button if name is empty
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      )}

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
          padding: 32px; /* Increased padding */
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          background-color: #68d391; /* Default green color */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: calc(100% - 16px); /* Adjusted width */
          height: auto; /* Adjusted height */
        }
        .content-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          background-color: #38b2ac; /* Darker green on hover */
        }
        @media (max-width: 768px) {
          .content-card {
            flex: 1 1 calc(50% - 20px);
          }
        }
        @media (max-width: 480px) {
          .content-card {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ContentPage;
