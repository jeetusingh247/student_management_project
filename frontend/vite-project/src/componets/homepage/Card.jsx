import React from 'react';

// Card Component with Hover Effect
function Card({ title, subtitle, content, bgColor, textColor }) {
  return (
    <div 
      className={`${bgColor} p-6 rounded-lg shadow-md border border-gray-300 
                  transition-transform duration-300 ease-in-out 
                  transform hover:scale-105 hover:-translate-y-2`}
    >
      <h3 className={`text-xl font-semibold text-center ${textColor} mb-4`}>{title}</h3>
      <p className="text-gray-700 font-semibold text-center">{subtitle}</p>
      <p className="text-gray-700 text-center">{content}</p>
    </div>
  );
}

// CardContainer Component with ID for linking
function CardContainer() {
  return (
    <div id="offering-section" className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">What does our website offer?</h2>
      
      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card 
          title="Unit-Wise Video Lectures"
          subtitle="Structured Learning at Your Pace:"
          content="Dive into unit-wise video lectures crafted for clarity and depth across various subjects. These videos break down complex topics, making it easy to build a strong understanding, one unit at a time."
          bgColor="bg-blue-100"
          textColor="text-blue-700"
        />
        <Card 
          title="PDF Scans of Topper Notes"
          subtitle="Access to High-Quality Notes:"
          content="Study from the best! Our PDF scans bring you top-notch notes from top-performing students, packed with insights and exam-ready explanations to streamline your preparation."
          bgColor="bg-green-100"
          textColor="text-green-700"
        />
        <Card 
          title="Past Year Question Papers"
          subtitle="Practice with Real Exam Questions:"
          content="Prepare confidently with a wide collection of previous year question papers (PYQs) for both sessional and university exams. These papers help you get familiar with exam patterns and question styles."
          bgColor="bg-blue-100"
          textColor="text-blue-700"
        />
        <Card 
          title="Extra Docs & Assessments"
          subtitle="Boost Your Knowledge with Extras:"
          content="Go beyond the basics with additional documentation and assessments tailored to enhance your understanding. These resources provide deeper insights and a way to test your knowledge effectively."
          bgColor="bg-green-100"
          textColor="text-green-700"
        />
      </div>
    </div>
  );
}

export default CardContainer;
