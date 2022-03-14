import React, { useState, useEffect } from "react";

import getLocation from "../atmData";

function Location() {
  const [atmInfo, setAtmInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocations = async () => {
      const atmInfo = await getLocation;
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
            <li>Zipcode: {info.ZipCode}</li>
            {/* <li>Address: {info.address}</li> */}
            <li>City Name:{info.City}</li>
            <li>State Name:{info.State}</li>
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
