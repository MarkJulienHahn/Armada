import React from "react";

const TermineMonths = ({ sorted, month, monthNmbr }) => {
  const current = sorted.filter(
    (date) => date.month == monthNmbr && date.timestamp > Date.now()
  );

  return (
    <>
      {current.length !== 0 ? (
        <>
          <div className="termineRow">
            <h2 className="termineDate">{month}</h2>
          </div>
          {current.map((row) => (
            <>
              <div className="termineRow2">
                <h1 className="termineDay">
                  {row.dayWord} <br />
                  {row.date}
                </h1>
                <p className="termineLocation">{row.time} Uhr</p>
                <h2 className="termineTitle">
                  <a href={`/projekte/${row.slug.current}`}>{row.titel}</a>
                  {row.Schulvorfuehrung ? (
                    <span style={{ color: "green" }}>
                      <br />
                      Schulvorführung
                    </span>
                  ) : (
                    ""
                  )}
                  {row.premiere ? (
                    <span style={{ color: "red" }}>
                      <br />
                      Premiere!
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
                <p className="termineLocation">
                  {row.spielortlink ? (
                    <a href={row.spielortlink} target="_blank" rel="noreferrer">{row.location}</a>
                  ) : (
                    row.location
                  )}
                </p>
              </div>
            </>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TermineMonths;
