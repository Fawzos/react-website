import React from "react";
import { Container } from "@mui/material";
import sectionConfig from "../Section/SectionConfig";
import Section from "../Section/Section";
import CommunitySection from "../Community/Community";

const Landing = () => {
  return (
    <Container maxWidth={false} disableGutters>
      {sectionConfig.map((section, index) => (
        <Section
          key={index}
          img={section.img}
          order={section.imgOrder}
          title={section.title}
          subTitle={section.subTitle}
          backgroundColor={section.backgroundColor}
          btn={section.btn}
          darkBtn={section.darkBtn}
          discription={section.discription}
        />
      ))}
      <CommunitySection />
    </Container>
  );
};
export default Landing;
