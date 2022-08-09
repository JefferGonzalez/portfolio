import React from "react";

export default function Spinner({
  width = '6rem' , height = '6rem'
}) {
  return (
    <div
      className="spinner-grow text-success"
      style={{ width: width, height: height }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
