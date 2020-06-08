import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import PageLayout from 'components/PageLayout';
import ContactContainer from 'components/ContactContainer';
import Footer from 'components/Footer';

const Contact = () => {
  let location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [remarks, setRemarks] = useState('');
  const [contact, setContact] = useState({
    name: name,
    phone: phone,
    email: email,
    remarks: remarks,
  });

  console.log('Contact Location State', location.state.items);

  useEffect(() => {
    setContact({ name: name, phone: phone, email: email, remarks: remarks });
  }, [name, phone, email, remarks]);

  return (
    <PageLayout>
      <h1>Contact</h1>
      <ContactContainer
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setRemarks={setRemarks}
      />
      <Footer
        items={[location.state.items, contact]}
        link='/reserveren/betalen'
      />
    </PageLayout>
  );
};

export default Contact;
