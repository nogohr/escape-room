import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import PageLayout from 'components/PageLayout';

import Footer from 'components/Footer';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Pay = () => {
  const [bank, setBank] = React.useState('');
  const handleChange = (event) => {
    setBank(event.target.value);
  };

  let location = useLocation();
  console.log('Pay', location.state);

  const { selectedOption } = location.state.items[0];
  const {
    selectedDate,
    selectedItem,
    selectedPlayerCount,
    selectedTime,
  } = location.state.items[0].items;
  const { email, name, phone, remarks } = location.state.items[1];

  const sendOrder = () => {
    fetch(`${process.env.REACT_APP_API_URL}/escape-room-order`, {
      method: 'POST',
      body: {
        EscapeRoomId: selectedItem,
        OrderOptionId: selectedOption,
        ReservationDate: selectedTime,
        PlayerCount: selectedPlayerCount,
        BookerName: name,
        BookerEmail: email,
        BookerPhoneNumber: phone,
        Remark: remarks,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <PageLayout>
      <h1>Betalen</h1>
      <InputLabel id='bank-select'>Selecteerd uw bank</InputLabel>
      <Select
        labelId='bank-select'
        id='bank-select'
        placeholder='Selecteer bank'
        value={bank}
        onChange={handleChange}
      >
        <MenuItem value='1'>ABN-AMBRO</MenuItem>
        <MenuItem value='2'>ASN Bank</MenuItem>
        <MenuItem value='3'>Bunq</MenuItem>
        <MenuItem value='4'>ING</MenuItem>
        <MenuItem value='5'>Knab</MenuItem>
        <MenuItem value='6'>Rabobank</MenuItem>
        <MenuItem value='7'>SNS Bank</MenuItem>
      </Select>
      <Footer
        onClick={sendOrder}
        items={location.state.items[0].items}
        link='/reserveren/success'
      />
    </PageLayout>
  );
};

export default Pay;
