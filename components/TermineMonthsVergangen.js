import React from "react";

const TermineMonthsVergangen = ({ sorted, month, monthNmbr }) => {
  const current = sorted.filter(
    (date) => date.month == monthNmbr && date.timestamp < Date.now()
  );

  return (
    <>
      {current.length !== 0 ? (
        <>
          <div className="termineRow">
            <h1 className="termineDate">{month}</h1>
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
                  <a
                    href={row.href}
                    {...(row.extern
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {row.titel}
                  </a>
                  {row.workshop ? (
                    <span className="termineWorkshop">
                      <br />
                      Workshop{row.zielgruppe ? ` · ${row.zielgruppe}` : ""}
                    </span>
                  ) : (
                    ""
                  )}
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

export default TermineMonthsVergangen;
