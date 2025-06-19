import React from "react";

const Page_title = ({ title, subtitle, bgColor = "bg-gradient-to-r from-blue-500 to-indigo-600", textColor = "text-white" }) => {
  return (
    <div className={`rounded-xl p-6 shadow-lg ${bgColor}`}>
      <h1 className={`text-2xl md:text-3xl font-bold ${textColor}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`mt-2 text-sm md:text-base font-light ${textColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Page_title;
