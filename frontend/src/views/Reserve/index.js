import React, { useEffect, useState } from 'react';

// Components
import PageLayout from 'components/PageLayout';
import DatePicker from 'components/DatePicker';
import Room from 'components/Room';
import TimeSelect from 'components/TimeSelect';
import Footer from 'components/Footer';

// helpers
import { FetchRooms, FetchRoomAvailablity } from 'helpers/fetch';

const Reserve = () => {
  const [rooms, setRooms] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [availableTimes, setAvailableTimes] = useState();
  const [room, setRoom] = useState(0);

  useEffect(() => {
    FetchRooms()
      .then((data) => {
        console.log('Rooms', data);
        setRooms(data);
        return data;
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, [room]);

  const selectItem = (item) => {
    setSelectedItem(item);
    FetchRoomAvailablity(item).then((data) => setAvailableTimes(data.data));
  };

  const selectTime = (item) => {
    setSelectedTime(item);
    console.log('SelectedTime', item);
  };

  const selectDate = (date) => {
    setSelectedDate(date);
    console.log('SelectedDate', date);
  };

  return (
    <PageLayout>
      <h1>Selecteer een datum, tijd & kamer</h1>
      <DatePicker selectDate={selectDate} />
      <Room rooms={rooms} selectItem={selectItem} />
      {availableTimes && (
        <TimeSelect availableTimes={availableTimes} selectTime={selectTime} />
      )}
      <Footer
        props={(selectedItem, selectedTime, selectedDate)}
        link='/reserveren/food'
      />
    </PageLayout>
  );
};

export default Reserve;
