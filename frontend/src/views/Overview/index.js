import React, { Component } from "react";

// Components
import PageLayout from "components/PageLayout";
import OverviewContainer from "components/OverviewContainer";
import Footer from "components/Footer";

export default function Oveview() {
  return (
    <PageLayout>
      <h1>Overzicht</h1>
      <OverviewContainer />
      <Footer link="/reserveren/contact" />
    </PageLayout>
  );
}
