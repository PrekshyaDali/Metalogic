import React from "react";
import Layout from "../Layout/Layout";
import Hero from "./Hero";
import Demo from "./Beliefs";
import Benifits from "./Benifits";
import Subscibe from "./Subscibe";
import Environment from "./Environment";
import MetaTag from "../components/MetaTag";
import Opportunities from "./Opportunities";

export default function Home() {
  return (
    <div className="pt-32 pb-32 w-full">
      <MetaTag
        title="MetaLogic Careers Page"
        description="Explore different Career opportunities in MetaLogic Software Pvt. Ltd."
        keywords="web development, responsive design, custom website, web application"
        url="https://metalogic.com.np/careers"
        image="https://metalogic.com.np/meta-image.jpg"
      />
      <Hero />
      <Demo />
      <Benifits />
      <Environment />
      <Opportunities/>
      <Subscibe />
    </div>
  );
}
