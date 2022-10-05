import React from "react";

const Datum = ({ timestamp, premiere }) => {
    let [y,m,d] = timestamp.split(/\D/);

  return <p>{d}/{m}/{y} {premiere ? <span style={{color: "red"}}>&nbsp;***Premiere***</span> : ""}</p>;
};

export default Datum;
