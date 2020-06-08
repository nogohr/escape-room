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
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    FetchRoomOptions()
      .then((data) => {
        console.log('Rooms Upsell', data);
        setRoomOptions(data);
        return data;
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, [location]);

  useEffect(() => {
    console.log('Selected Option', selectedOption);
  }, [selectedOption]);

  const selectOption = (item) => {
    setSelectedOption(item);
    console.log('SelectedOption', item);
  };
  //const { fromNotifications } = this.props.location.state
  console.log('Upsell Props', location.state.items);
  const items = location.state.items;
  return (
    <PageLayout>
      <h1>Eten en drinken</h1>
      <Upsell selectedOption={selectOption} options={options} />
      <Footer items={{ selectedOption, items }} link='/reserveren/overzicht' />
    </PageLayout>
  );
};
export default UpsellView;
