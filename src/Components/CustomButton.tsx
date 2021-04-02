import React, { useState } from "react";

export function CustomButton(props: { toggled: boolean; toggledColor: string; hoverColor: string; baseColor: string; fontColor: string; toggleCallback: (arg0: any) => void; id: any; text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  const [toggleState, setToggleState] = useState(props.toggled);
  const [hoverState, setHoverState] = useState(false);

  function getButtonBg() {
    //Toggle State BG
    if (toggleState) {
      return props.toggledColor;
    }
    if (hoverState) {
      return props.hoverColor;
    } else return props.baseColor;
  }

  function getBorderColor() {
    //Hover State Border
    if (hoverState) {
      return props.fontColor;
    } else return props.fontColor;
  }

  const buttonContainer = {
    display: "flexbox",
    backgroundColor: getButtonBg(),
    width: 120,
    height: 24,
    padding: 8,
    borderRadius: 5,
    color: props.fontColor,
    textAlign: "center" as "center",
    flexDirection: "column" as "column",
    justifyContent: "center" as "center",
    alignContent: "center" as "center",
    border: "1px solid " + getBorderColor(),
    cursor: "pointer"
  };

  return (
    <div
      style={{
        ...buttonContainer
      }}
      onClick={() => {
        setToggleState(!toggleState);
        props.toggleCallback(props.id);
      }}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      {props.text}
    </div>
  );
}

CustomButton.defaultProps = {
  text: "Button Text",
  id: "id",
  toggled: false,
  baseColor: "lightgrey",
  toggledColor: "yellow",
  hoverColor: "lightyellow",
  fontColor: "black"
};
