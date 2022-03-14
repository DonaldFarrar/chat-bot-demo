import React, { useState, useEffect } from "react";

import getLocation from '../atmData';


function Location() {
  const [atmInfo, setAtmInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocations = async () => {
      const atmInfo = await getLocation();
      console.log("atminfo: ", atmInfo);
      setAtmInfo(atmInfo);
      setLoading(false);
    };
    getLocations();
  }, []);

  const listAtms = atmInfo.map((info) => {
    return (
      <div className="atmInfo">
        <div className="column" loading={loading.toString()}>
          <ul>
            <h2>CacheMoney ATMs</h2>
            <li>Address: {info.address}</li>
            <li>Zipcode: {info.zipCode}</li>
            <li>State Name:{info.stateName}</li>
            <li>City Name:{info.cityName}</li>
          </ul>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="atm_list">{listAtms}</div>
    </>
  );
}

export default Location;
