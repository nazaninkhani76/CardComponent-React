import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardButtons from "./CardButtons";

function Card(props) {
  return (
    <div>
      <CardImage carimage={props.carimage} />
      <CardTitle title={props.title} />
      <CardDescription description={props.description} />
      <CardButtons buttons={props.buttons} />
    </div>
  );
}

export default Card;
