import React from "react";
import RingLoader from "react-spinners/RingLoader";

export const SpinnerComponent = () => (
  <div className="sweet-loading">
    <RingLoader
      className="clip-loader"
      sizeUnit={"px"}
      size={60}
      color={"#2196f3"}
      loading={true}
    />
  </div>
);

export const SpinnerComponentHome = () => (
  <div className="sweet-loading-home">
    <RingLoader
      className="clip-loader"
      sizeUnit={"px"}
      size={60}
      color={"#fff"}
      loading={true}
    />
  </div>
);
