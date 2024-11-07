import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileCardContainer() {
  return (
    <div className="container mx-auto px-4 py-10" id="profile-section">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Meet Our Team</h2>
      
      {/* Responsive Grid for Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <ProfileCard
          name="Saumya Sharma"
          description="I am a web developer skilled in React, Redux Toolkit, Node.js, Express, and MongoDB, focused on building dynamic and responsive websites tailored to meet specific requirements."
          bgColor="bg-green-100"
        />
        <ProfileCard
          name="Shiv Sablok"
          description="I am passionate about research and its transformative potential, driven by a curiosity to solve complex problems with structured solutions."
          bgColor="bg-blue-100"
        />
        <ProfileCard
          name="Jeetu Singh"
          description="I am a fervent full-stack developer with a deep passion for SEO and troubleshooting. I specialize in building user-friendly, responsive websites."
          bgColor="bg-blue-100"
        />
        <ProfileCard
          name="Prince Kumar Singh"
          description="I am a full-stack developer skilled in React, Node.js, and database management, dedicated to building efficient and scalable web applications."
          bgColor="bg-green-100"
        />
      </div>
    </div>
  );
}

export default ProfileCardContainer;
