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
          description="I am a web developer skilled in React, Redux Toolkit,
Node.js, Express, and MongoDB, focused on building
dynamic and responsive websites tailored to meet
specific requirements. With a strong passion for web
development, I am a creative and quick learner, always
striving to craft innovative solutions that enhance user
experiences."
          bgColor="bg-green-100"
        />
        <ProfileCard
          name="Shiv Sablok"
          description="I am passionate about research and its transformative
potential, driven by a curiosity to solve complex problems
with structured solutions. As I am on to my web
development journey, I aim to combine my researchoriented
mindset with creative design and problem-solving
skills. With expertise in data collection and management, I
strive to build impactful and efficient solutions"
          bgColor="bg-blue-100"
        />
        <ProfileCard
          name="Jeetu Singh"
          description="I am a fervent full-stack software developer with a
deep passion for SEO and troubleshooting. I specialize
in building user-friendly, responsive websites that not
only offer seamless user experiences but also address
real-time challenges. I am committed to creating
impactful solutions that bridge the gap between
technology & user needs"
          bgColor="bg-blue-100"
        />
        <ProfileCard
          name="Prince Kumar Singh"
          description="I am a full-stack developer skilled in React, Node.js, and
database management, dedicated to building efficient and
scalable web applications that enhance user experience.
Known for my consistency, discipline, and commitment, I
strive to deliver high-quality solutions while continuously
improving my craft"
          bgColor="bg-green-100"
        />
      </div>
    </div>
  );
}

export default ProfileCardContainer;
