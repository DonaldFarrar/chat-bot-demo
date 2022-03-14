import React from "react";
import Options from "./Options";

const GeneralOptions = (props) => {
  // console.log("props", props);
  // console.log("props.actionProvider", props.actionProvider);
  // console.log("props.actionProvider", props.actionProvider.handleAtmFinder);

  const options = [
    {
      text: "Contact",
      handler: props.actionProvider.handleContactInfo,
      id: 1,
    },
    {
      text: "Atm locations",
      handler: props.actionProvider.handleAtmFinder,
      id: 2,
    },
    {
      text: "Recently asked questions",
      handler: props.actionProvider.handleQuestions,
      id: 3,
    },

    {
      text: "Information",
      //handler: props.actionProvider.handleContactInfo,
      id: 4,
    },
    {
      name: "Show global statistics",
      handler: props.actionProvider.handleGlobalStats,
      id: 5,
    },
  ];

  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
