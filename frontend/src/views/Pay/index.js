import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import PageLayout from 'components/PageLayout';

import Footer from 'components/Footer';

const Pay = () => {
  let location = useLocation();
  console.log('Pay', location.state);
  return (
    <PageLayout>
      <h1>Betalen</h1>
      <Footer items={location.state.items[0].items} link='/reserveren/success' />
    </PageLayout>
  );
};

export default Pay;
