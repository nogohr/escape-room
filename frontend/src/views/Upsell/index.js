import React from "react";
import { useLocation } from "react-router-dom";
// Components
import PageLayout from "components/PageLayout";
import Upsell from "components/Upsell";
import Footer from "components/Footer";

const UpsellView = (props) => {
  let location = useLocation();
  //const { fromNotifications } = this.props.location.state
  console.log("Upsell Props", location.state);
  return (
    <PageLayout>
      <h1>Eten en drinken</h1>
      <Upsell />
      <Footer link="/reserveren/overzicht" />
    </PageLayout>
  );
};
export default UpsellView;
