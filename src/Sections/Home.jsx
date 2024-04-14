import React from "react";
import Layout from "../Layout/Layout";
import Hero from "./Hero";
import Demo from "./Beliefs";
import Benifits from "./Benifits";

export default function Home() {
  return (
    <div className="pt-32 pb-32">
      <Hero />
      <Demo></Demo>
      <Benifits></Benifits>
    </div>
  );
}