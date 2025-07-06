import React from "react";
import "./custom-button.less";

function CustomButton({ title, value, handler, currentTitle, name }) {
  return (
    <button
      className={
        value !== currentTitle
          ? "custom-button"
          : name === "second"
          ? "custom-button active-second"
          : "custom-button active-first"
      }
      onClick={() => handler(currentTitle)}
      style={{
        backgroundImage:
          value === currentTitle
            ? `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/images/addProperty/icon-background${
                name === "second" ? 1 : 3
              }.jpg)`
            : `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/images/addProperty/icon-background${4}.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {title}
    </button>
  );
}

export default CustomButton;
