import React, { useState } from "react";
import ContactEntry from "./ContactEntry";

function Contact(props) {
  let [info, setInfo] = useState([
    { name: "Khal Drogo", title: "CEO", phone: "111 - 111 - 1111" },
    { name: "Arya Stark", title: "Manager", phone: "222 - 222 - 2222" },
    { name: "Jon Snow", title: "Boss", phone: "333 - 333 - 3333" },
    {
      name: "Tyrion Lanister",
      title: "Kingshand",
      phone: "444 - 444 - 4444",
    },
  ]);

  // <ContactEntry name={i.name} title={i.title} phone={i.phone} />;
  return (
    <>
      {info.map((i) => {
        console.log("testArr:", i.name);
        return <ContactEntry name={i.name} title={i.title} phone={i.phone} />;
      })}
    </>
  );
}

export default Contact;
