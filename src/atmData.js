export const getAtmData = async () => {
  let data = await fetch(`https://kfc-locations.p.rapidapi.com/kfc/location/`);
  data = await data.json();
  return data.data;
};
