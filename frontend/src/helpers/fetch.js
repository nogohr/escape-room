export const FetchRooms = async () => {
  //const [rooms, setRooms] = useState();
  const rooms = await fetch(`${process.env.REACT_APP_API_URL}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Error fetching Rooms", error);
      return false;
    });

  return rooms;
};
