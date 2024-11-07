import React from 'react';

// ProfileCard Component with Hover Effect
function ProfileCard({ name, description, bgColor, imageUrl }) {
  return (
    <div 
      className={`${bgColor} p-6 rounded-lg shadow-md border border-gray-300 
                  transition-transform duration-300 ease-in-out 
                  transform hover:scale-105 hover:-translate-y-2`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <img 
          src={imageUrl}
          alt={name}
          className="w-[150px] h-[150px] rounded-full mb-4 object-cover" 
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
