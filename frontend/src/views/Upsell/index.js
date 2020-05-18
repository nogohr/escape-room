import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import PageLayout from 'components/PageLayout';
import Upsell from 'components/Upsell';
import Footer from 'components/Footer';

//Helpers
import { FetchRoomOptions } from 'helpers/fetch';

const UpsellView = (props) => {
  let location = useLocation();
  const [options, setRoomOptions] = useState();

  useEffect(() => {
    // FetchRoomOptions()
    //   .then((data) => {
    //     console.log('Rooms', data);
    //     setRoomOptions(data);
    //     return data;
    //   })
    //   .catch((error) => {
    //     console.log('Error', error);
    //   });
  });

  //const { fromNotifications } = this.props.location.state
  console.log('Upsell Props', location.state.items);

  return (
    <PageLayout>
      <h1>Eten en drinken</h1>
      <Upsell options={options} />
      <Footer items={location.state.items} link='/reserveren/overzicht' />
    </PageLayout>
  );
};
export default UpsellView;
