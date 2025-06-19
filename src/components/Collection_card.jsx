import React from "react";

const Collection_card = ({ title, links, moreLink }) => {
  return (
    <div className="border-2 border-sky-500 w-80 bg-white shadow-md">
      <div className="bg-sky-700 text-white text-center py-2 font-bold text-lg">
        {title}
      </div>
      <ul className="list-disc pl-5 p-4 space-y-2 text-blue-700 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      {moreLink && (
        <div className="text-right px-4 pb-4">
          <a
            href={moreLink.href}
            className="text-blue-900 font-bold hover:underline text-sm"
          >
            {moreLink.text}
          </a>
        </div>
      )}
    </div>
  );
};

export default Collection_card;
