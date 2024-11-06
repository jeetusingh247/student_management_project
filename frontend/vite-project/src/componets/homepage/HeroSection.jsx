import React from 'react';

function HeroSection() {
  return (
    <div id="hero-section" className="container mx-auto px-4 py-10 min-h-screen">
      {/* Main flex container for left and right sections */}
      <div className="flex flex-col md:flex-row items-stretch min-h-screen">
        
        {/* Left Section: Logo and Paragraph */}
        <div className="w-full md:w-3/5 p-8 flex flex-col justify-center items-center">
          {/* Logo Image */}
          <div className="mb-4 flex justify-center">
            <img
              src="/logo.jpg"  // Path to the logo image in the public folder
              alt="Logo"
              className="w-64 h-auto"  // Logo size, adjust width as needed
            />
          </div>
          {/* Lorem Paragraph */}
          <p className="text-lg text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia quam sit amet tortor pretium, non aliquet libero
            consequat. Curabitur sed justo vitae risus tincidunt tempor.
          </p>
        </div>

        {/* Right Section: Single Image */}
        <div className="w-full md:w-3/5 p-8 flex justify-center">
          <div className="w-full h-full">
            <img
              src="https://pwskills.com/images/homePage/heroBgImage.webp"  // Image URL
              alt="Hero Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
