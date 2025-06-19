import React, { use } from "react";



const DebateCard = ({ image, title, description, buttonText, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full text-center m-6 p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-xl"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <button
          className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
          onClick={onClick}
          

          
          
        >
          {buttonText}
        
        </button>
       
      </div>
    </div>
  );
};

export default DebateCard;
