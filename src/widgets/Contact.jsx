import React, { useState } from "react";

function Contact(props) {
  let [info, setInfo] = useState([
    { name: "Khal Drogo", title: "CEO", phone: 111 - 111 - 1111 },
    { name: "Arya Stark", title: "Manager", phone: 222 - 222 - 2222 },
    { name: "Jon Snow", title: "Boss", phone: 333 - 333 - 3333 },
    {
      name: "Tyrion Lanister",
      title: "Kingshand",
      phone: 444 - 444 - 4444,
    },
  ]);

  const listContactInfo = info.map((i) => {
    return i;
  });

  return (
    <>
      <div className="list-info-container">{listContactInfo}</div>
    </>
  );
}

export default Contact;
