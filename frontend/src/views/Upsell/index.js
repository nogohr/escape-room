import React, { Component } from "react";

// Components
import PageLayout from "components/PageLayout";
import Upsell from "components/Upsell";
import Footer from "components/Footer";

export default function UpsellView() {
  return (
    <PageLayout>
      <h1>Eten en drinken</h1>
      <Upsell />
      <Footer link="/reserveren/overzicht" />
    </PageLayout>
  );
}
