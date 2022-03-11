import React, { useState } from "react";
import ContactEntry from "./ContactEntry";

function Contact(props) {
  let [info, setInfo] = useState([
    { id: 1, name: "Khal Drogo", title: "CEO", phone: "(111) 111 - 1111" },
    { id: 2, name: "Arya Stark", title: "Manager", phone: "(222) 222 - 2222" },
    { id: 3, name: "Jon Snow", title: "Boss", phone: "(333) 333 - 3333" },
    {
      id: 4,
      name: "Tyrion Lanister",
      title: "Kingshand",
      phone: "(444) 444 - 4444",
    },
  ]);

  // <ContactEntry name={i.name} title={i.title} phone={i.phone} />;
  return (
    <>
      <div className="info-list-container">
        <ul>
          {info.map((i) => {
            return (
              <li key={i.id}>
                <ContactEntry name={i.name} title={i.title} phone={i.phone} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Contact;
