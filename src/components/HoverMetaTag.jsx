import React, { useState } from "react";

const HoverMetaTag = ({ title, description, keywords, url, image }) => {
  const [showMetaTag, setShowMetaTag] = useState(false);

  const handleMouseEnter = () => {
    setShowMetaTag(true);
  };

  const handleMouseLeave = () => {
    setShowMetaTag(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {/* Your original content */}
      <div>{/* ... */}</div>

      {showMetaTag && (
        <div className="absolute bottom-0 left-0 bg-white shadow-lg p-4 z-10 w-full">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-600">Keywords: {keywords}</p>
          <p className="text-gray-600">URL: {url}</p>
          <img src={image} alt={title} className="mt-2 max-w-full" />
        </div>
      )}
    </div>
  );
};

export default HoverMetaTag;
