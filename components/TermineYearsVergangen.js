import React from "react";

import TermineMonthsVergangen from "./TermineMonthsVergangen";

const TermineYearsVergangen = ({ sorted, year }) => {
  const sortedByYear = sorted.filter((date) => date.year == year);

  const months = [
    ["Januar", 0],
    ["Februar", 1],
    ["März", 2],
    ["April", 3],
    ["Mai", 4],
    ["Juni", 5],
    ["Juli", 6],
    ["August", 7],
    ["September", 8],
    ["Oktober", 9],
    ["November", 10],
    ["Dezember", 11],
  ];

  return (
    <>
      {sortedByYear.length ? (
        <>
          <div className="termineRow">
            <h1>{year}</h1>
          </div>
          {months.map((val, i) => (
            <TermineMonthsVergangen
              key={i}
              sorted={sortedByYear}
              month={val[0]}
              monthNmbr={val[1]}
            />
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TermineYearsVergangen;
