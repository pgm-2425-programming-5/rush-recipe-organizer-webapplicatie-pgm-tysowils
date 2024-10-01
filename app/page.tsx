import React from "react";
import Hero from "./components/Hero";
import LinkButton from "./components/LinkButton";

export default function Home() {
  return (
    <>
      <Hero title="Welcome to Recipe Organizer" />
      <h2 className="text-center p-5">Organiseer je favoriete recepten!</h2>
      <LinkButton destination="/recipes">Bekijk recepten</LinkButton>
    </>
  );
}
