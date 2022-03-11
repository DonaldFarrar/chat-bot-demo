import React, { useState, useEffect } from "react";

import { getAtmData } from "../atmData";

function Location() {
  const [atmInfo, setAtmInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocations = async () => {
      const atmInfo = await getAtmData();
      setAtmInfo(atmInfo);
      setLoading(false);
    };
    getLocations();
  }, []);

  return (
    <>
      <div className="atmInfo">
        <div className="column" loading={loading.toString()}>
          <p>Address: {atmInfo.address}</p>
          <p>Zipcode: {atmInfo.zipCode}</p>
          <p>State Name:{atmInfo.stateName}</p>
          <p>City Name:{atmInfo.cityName}</p>
        </div>
      </div>
    </>
  );
}

export default Location;
