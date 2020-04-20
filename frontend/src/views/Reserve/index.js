import React, { Component } from "react";

// Components
import PageLayout from "components/PageLayout";
import DatePicker from "components/DatePicker";
import Room from "components/Room";
import TimeSelect from "components/TimeSelect";
import Footer from "components/Footer";

export default function Reserve() {
  return (
    <PageLayout>
      <h1>Selecteer een datum, tijd & kamer</h1>
      <DatePicker />
      <Room />
      <TimeSelect />
      <Footer link="/reserveren/contact" />
    </PageLayout>
  );
}
