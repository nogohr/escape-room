import React, { Component } from "react";

// Components
import PageLayout from "components/PageLayout";
import OverviewContainer from "components/OverviewContainer";

export default function Oveview() {
  return (
    <PageLayout>
      <h1>Overzicht</h1>
      <OverviewContainer />
    </PageLayout>
  );
}
