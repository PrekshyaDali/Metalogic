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
\
      </>
    );
  };
}
