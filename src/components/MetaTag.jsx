import React, { useState } from "react";
import { Helmet } from "react-helmet";

export default function MetaTag() {
  const MetaTag = ({
    title,
    description,
    keywords,
    url,
    image,
    type = "website",
  }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content={type} />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={image} />
        </Helmet>

        {/* Tooltip in the footer */}
        <div className="tooltip-container inline-block relative">
          <span
            className="tooltip-trigger cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            Hover for Description
          </span>
          {showTooltip && (
            <div className="tooltip bg-gray-800 text-white text-center py-2 px-4 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 z-10">
              <p>{description}</p>
            </div>
          )}
        </div>
      </>
    );
  };
}
