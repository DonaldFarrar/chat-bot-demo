import React from "react";
import Options from "./Options";

const GeneralOptions = (props) => {
//   console.log("props", props);
 console.log("props.actionProvier", props.actionProvier);
//   console.log(
//     "props.actionProvier.handleContactInfo",
//     props.actionProvier.handleContactInfo
//   );
  const options = [
    {
      text: "Contact",
      //handler: props.actionProvier.handleContactInfo,
      id: 1,
    },
    {
      text: "Main Menu",
      //handler: props.actionProvier.handleContactInfo,
      id: 2,
    },
    {
      text: "Registration/SignIn",
      //handler: props.actionProvier.handleContactInfo,
      id: 3,
    },
    {
      text: "Accounts Page",
      //handler: props.actionProvier.handleContactInfo,
      id: 4,
    },
    {
      text: "Atm locations",
      //handler: props.actionProvier.handleContactInfo,
      id: 5,
    },
    {
      text: "Recent Transactions",
      //handler: props.actionProvier.handleContactInfo,
      id: 6,
    },
    {
      text: "Information",
      //handler: props.actionProvier.handleContactInfo,
      id: 7,
    },
  ];

  //   const buttonsMarkup = options.map((option) => (
  //     <button key={option.id} onClick={option.handler} className="option-button">
  //       {option.text}
  //     </button>
  //   ));

  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
