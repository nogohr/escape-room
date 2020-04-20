import React, { Component } from "react";

// Components
import PageLayout from "components/PageLayout";
import ContactContainer from "components/ContactContainer";
import Footer from "components/Footer";

export default function Contact() {
  return (
    <PageLayout>
      <h1>Contact</h1>
      <ContactContainer />
      <Footer link="/reserveren/food" />
    </PageLayout>
  );
}
