import React, { useState, useEffect } from "react";

const Plane = (props) => {
  const [showPlane, setShowPlane] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlane(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute top-full left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-full animate-fly ${props.className}`}
    >
      {showPlane && (
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M480 416L32 256L480 96V224L160 256L480 416Z"
            fill="#1A3C5F"
            className="animate-disappear"
          />
          <path
            d="M480 416L160 256L480 224V416Z"
            fill="#FFFFFF"
            className="animate-disappear"
          />
          <path
            d="M480 96L32 256L480 416V288L160 256L480 96Z"
            fill="#0C2642"
            className="animate-disappear"
          />
        </svg>
      )}
    </div>
  );
};

export default Plane;
