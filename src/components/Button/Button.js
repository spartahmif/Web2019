import React from "react";

export const Button = props => {
  return (
    <div
      className={"ui right floated button " + props.className}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
