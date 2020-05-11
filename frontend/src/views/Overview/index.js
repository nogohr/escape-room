import React, { Component } from "react";

// Components
import PageLayout from "components/PageLayout";
import OverviewContainer from "components/OverviewContainer";
import Footer from "components/Footer";

const Overview = () => {
  return (
    <PageLayout>
      <h1>Overzicht</h1>
      <OverviewContainer />
      <Footer link="/reserveren/contact" />
    </PageLayout>
  );
};

export default Overview;
