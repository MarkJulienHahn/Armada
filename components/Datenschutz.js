import { useEffect } from "react";

import { PortableText } from "@portabletext/react";

const Datenschutz = ({ setRunningTitle, datenschutz }) => {
  useEffect(() => {
    setRunningTitle("Datenschutz");
  }, []);

  return (
    <div className="datenschutzWrapper">
      <PortableText value={datenschutz.text} />
    </div>
  );
};

export default Datenschutz;
