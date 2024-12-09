import React from 'react';
import ProfileCardContainer from './ProfileCardContainer';
import CardContainer from './Card';
import ExploreButton from './ExploreButton';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function HeroSection() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore"); // Navigate to the Explore page
  };

  return (
    <div id="hero-section" className="container mx-auto px-4 py-4 max-h-screen">
      {/* Main flex container for left and right sections */}
      <div className="flex flex-col md:flex-row items-stretch min-h-screen border-b border-gray-300 p-4 shadow-sm">

        {/* Left Section: Logo and Paragraph */}
        <div className="w-full md:w-3/5 flex-col justify-center items-center mb-2 md:mb-0 md:mr-2">
        
          {/* Logo Image */}
          <div className="mb-2 flex justify-center">
            <img
              src="/Assets/logo.png"  // Path to the logo image in the public folder
              alt="STRUCT STUDIES Logo"  // Descriptive alt text
              className="w-[320px] h-auto "  // Adjusted logo size
            />
          </div>
          {/* Lorem Paragraph */}
          <p className="text-lg text-gray-700 text-center mt-10 md:text-center">
            Welcome to <span className="font-bold text-black">STRUCT {`{STUDIES}`}; !!</span>, <br />"where
            structured support meets academic ambition"
          </p>
          <br/>
            <p className='text-justify'> What began as a senior-led initiative to
            help juniors has evolved into a dedicated platform tailored to make university
            exam prep seamless and focused.<br/><br />
            This project represents a commitment to quality education, prioritizing ease of learning, accessibility, and continuous improvement, making it an invaluable tool for students striving to excel academically.
          </p>
        </div>

        {/* Right Section: Single Image */}
        <div className="w-full md:w-3/5 p-4 flex justify-center">
          <div className="w-full h-full">
            <img
              src="/Assets/section_One_Side_Image.png"  // Image URL
              alt="Hero Background Image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Card Container Section */}
      <div className="border-b border-gray-300 mt-4 p-4">
        <CardContainer />
      </div>

      {/* Profile Card Section (added below CardContainer) */}
      <div className="border-b border-gray-300 mt-4 p-4">
        <ProfileCardContainer />
      </div>

      {/* Explore Button */}
      <div className="flex justify-center mt-4 p-4">
        <ExploreButton onClick={handleExploreClick} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HeroSection;
