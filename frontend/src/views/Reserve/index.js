import React, { useEffect, useState } from "react";

// Components
import PageLayout from "components/PageLayout";
import DatePicker from "components/DatePicker";
import Room from "components/Room";
import TimeSelect from "components/TimeSelect";
import Footer from "components/Footer";

// helpers
import { FetchRooms } from "helpers/fetch";

const Reserve = () => {
  const [rooms, setRooms] = useState();
  const [room, setRoom] = useState(0);

  useEffect(() => {
    FetchRooms()
      .then((data) => {
        setRooms(data);
        return data;
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [room]);

  return (
    <PageLayout>
      <h1>Selecteer een datum, tijd & kamer</h1>
      <DatePicker />
      <Room rooms={rooms} />
      <TimeSelect />
      <Footer link="/reserveren/contact" />
    </PageLayout>
  );
};

export default Reserve;
