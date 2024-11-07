import React from 'react';
import ProfileCardContainer from './ProfileCardContainer';
import CardContainer from './Card';

function HeroSection() {
  return (
    <div id="hero-section" className="container mx-auto px-4 py-4 max-h-screen">
      {/* Main flex container for left and right sections */}
      <div className="flex flex-col md:flex-row items-stretch min-h-screen">
        
        {/* Left Section: Logo and Paragraph */}
        <div className="w-full  md:w-3/5 p-8 flex flex-col justify-center items-center">
          {/* Logo Image */}
          <div className="mb-4 flex justify-center">
            <img
              src="/Assets/logo.png"  // Path to the logo image in the public folder
              alt="STRUCT STUDIES Logo"  // Descriptive alt text
              className="w-[500px] h-auto"  // Logo size, adjust width as needed
            />
          </div>
          {/* Lorem Paragraph */}
          <p className="text-lg text-gray-700 text-center md:text-left">
            Welcome to <span className="font-bold text-black">STRUCT {`{STUDIES}`}</span>, where
            structured support meets academic ambition. What began as a senior-led initiative to
            help juniors has evolved into a dedicated platform tailored to make university
            exam prep seamless and focused.
          </p>
        </div>

        {/* Right Section: Single Image */}
        <div className="w-full md:w-3/5 p-8 flex justify-center">
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
      <CardContainer />

      {/* Profile Card Section (added below CardContainer) */}
      <ProfileCardContainer  />
    </div>
  );
}

export default HeroSection;
