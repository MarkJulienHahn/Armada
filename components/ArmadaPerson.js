import React, { useState } from "react";

const ArmadaPerson = (props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <h1 onClick={() => setActive(!active)}>{props.name}</h1>

      {active ? (
        <div onClick={() => setActive(!active)}>
          <p>{props.text}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ArmadaPerson;
