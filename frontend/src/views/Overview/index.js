import { useEffect, useState } from 'react';

import React from 'react';
import { useLocation } from 'react-router-dom';
// Components
import PageLayout from 'components/PageLayout';
import OverviewContainer from 'components/OverviewContainer';
import Footer from 'components/Footer';

// helpers
import { FetchRooms, FetchRoomOptions } from 'helpers/fetch';

const Overview = () => {
  let location = useLocation();

  const [rooms, setRooms] = useState();
  const [room] = useState(0);
  const [options, setRoomOptions] = useState();

  useEffect(() => {
    FetchRooms()
      .then((data) => {
        setRooms(data);
        return data;
      })
      .catch((error) => {
        console.log('Error', error);
      });

      FetchRoomOptions()
      .then((data) => {
        setRoomOptions(data);
        return data;
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, [room]);

  const escapeRoomId = location.state.items.items.selectedItem;
  const orderOptionId = location.state.items.selectedOption;
  
  const getById = (id, data) => {
    if (data && data.length) {
      data = data.filter(item => {
        
        if (item.id == id) {
          return true;
        }
      });
    
      return data && data.length > 0 ? data[0] : null;
    }
  }

  const roomsData = rooms && rooms.data ? rooms.data : [];
  const optionsData = options && options.data ? options.data : [];

  const selectedRoom = getById(escapeRoomId, roomsData);
  const selectedOption = getById(orderOptionId, optionsData);

  return (
    <PageLayout>
      <h1>Overzicht</h1>
      <OverviewContainer items={location.state.items} selectedRoom={selectedRoom} selectedOption={selectedOption} />
      <Footer items={location.state.items} link='/reserveren/contact' />
    </PageLayout>
  );
};

export default Overview;
