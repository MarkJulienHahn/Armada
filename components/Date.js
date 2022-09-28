import React from "react";

const Date = ({ timestamp }) => {
    let [y,m,d] = timestamp.split(/\D/);

  return <p>{d}/{m}/{y}</p>;
};

export default Date;
