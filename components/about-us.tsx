import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help you curate your ideas to reality.</strong> Our
          team of expert engineers has created some of the bleeding edge
          products worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-32 mb-16">
        <h2 className="font-bold mb-14">Our Team</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-20">
          <Member id="1" name="Prabin Kumar Das" designation="Thor" />
          <Member id="1" name="Bishwajyoti Roy" designation="Iron Man" />
          <Member
            id="1"
            name="Anirvan Kumar Roy"
            designation="Captain America"
          />
          <Member
            id="1"
            name="Meenakshi Jaiswal"
            designation="Captain Marvel"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
