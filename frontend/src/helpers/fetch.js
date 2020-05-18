export const FetchRooms = async () => {
  //const [rooms, setRooms] = useState();
  const rooms = await fetch(`${process.env.REACT_APP_API_URL}/escape-rooms`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('Error fetching Rooms', error);
      return false;
    });

  return rooms;
};

export const FetchRoomOptions = async () => {
  //const [rooms, setRooms] = useState();
  const rooms = await fetch(
    `${process.env.REACT_APP_API_URL}/escape-room-options`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('Error fetching Room Options', error);
      return false;
    });

  return rooms;
};
