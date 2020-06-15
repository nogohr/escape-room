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
  return (
    <PageLayout>
      <h1>Betalen</h1>
      <InputLabel id="bank-select">Selecteerd uw bank</InputLabel>
      <Select
          labelId="bank-select"
          id="bank-select"
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
      <Footer items={location.state.items[0].items} link='/reserveren/success' />
    </PageLayout>
  );
};

export default Pay;