import React from "react";

// Components
import PageLayout from "components/PageLayout";
import {useLocation} from "react-router-dom";

const Success = () => {
  let location = useLocation();
  const date = new Date(location.state.items.selectedTime);
  return (
    <PageLayout>
      <div className="content" style={{marginTop: "40%", textAlign: "center"}}>
        <img src="/checkmark.svg" alt="Success" style={{width: "20%", maxWidth: "150px"}}/>

        <h3>Bedankt voor uw bestelling</h3>
        <h3>We ontvangen uw gezelschap graag op<br/>{date.toDateString()} om {date.toLocaleTimeString()}</h3>
      </div>
    </PageLayout>
  );
};

export default Success;
