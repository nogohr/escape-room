import React from 'react';
import { useLocation } from 'react-router-dom';
// Components
import PageLayout from 'components/PageLayout';
import OverviewContainer from 'components/OverviewContainer';
import Footer from 'components/Footer';

const Overview = () => {
  let location = useLocation();
  console.log('Overview Location State', location.state.items);
  return (
    <PageLayout>
      <h1>Overzicht</h1>
      <OverviewContainer items={location.state.items} />
      <Footer items={location.state.items} link='/reserveren/contact' />
    </PageLayout>
  );
};

export default Overview;
