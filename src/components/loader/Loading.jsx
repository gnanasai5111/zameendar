import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = ({ parentHeight = 71, isSmall }) => {
  if (isSmall) {
    return (
      <div
        style={{
          // height: `calc(100vh - ${parentHeight}px)`,
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Oval
          height={50}
          width={50}
          color="#ffb300"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#ffb300"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
  return (
    <div
      style={{
        height: `calc(100vh - ${parentHeight}px)`,
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Oval
        height={50}
        width={50}
        color="#ffb300"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ffb300"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loading;
