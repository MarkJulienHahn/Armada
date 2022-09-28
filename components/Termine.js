import React, { useState } from "react";

import { fetcher } from "../lib/api";
import TermineYears from "./TermineYears";
import TermineYearsVergangen from "./TermineYearsVergangen";

const Termine = ({ projekte }) => {
  const [active, setActive] = useState(true);

  function formatMyDate(value, locale = "gb-GB") {
    return new Date(value).toLocaleDateString(locale);
  }
  function formatMyTime(value, locale = "gb-GB") {
    return new Date(value).toLocaleTimeString([locale], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }
  const outputDay = (value) => {
    return new Date(value).getDay();
  };
  const outputDate = (value) => {
    return new Date(value).getDate();
  };
  const outputMonth = (value) => {
    return new Date(value).getMonth();
  };
  const outputYear = (value) => {
    return new Date(value).getFullYear();
  };

  console.log(projekte);

  var weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  const dates = projekte.map((projekt) =>
    projekt.attributes.Termine.map((date) => ({
      titel: projekt.attributes.Titel,
      slug: projekt.attributes.slug,
      timestamp: formatPrimitive(date.Datum),
      fullDate: formatMyDate(date.Datum),
      time: formatMyTime(date.Datum),
      day: outputDay(date.Datum),
      dayWord: weekdays[outputDay(date.Datum)],
      date: outputDate(date.Datum),
      month: outputMonth(date.Datum),
      year: outputYear(date.Datum),
      location: date.Spielort,
      spielortlink: date.Spielortlink,
      premiere: date.Premiere,
      Schulvorfuehrung: date.Schulvorfuehrung,
    }))
  );

  // FUNKTION UM DAS DIE TERMINE ZU SORTIEREN

  function compare(a, b) {
    if (a.timestamp < b.timestamp) {
      return -1;
    }
    if (a.timestamp > b.timestamp) {
      return 1;
    }
    return 0;
  }

  const merged = [].concat(...dates);
  const sorted = merged.sort(compare);

  const currentYear = new Date().getFullYear();

  return (
    <div className="termineWrapper">
      <div className="termineSwitch">
        <p onClick={() => setActive(!active)}>
          {active ? "Vergangene Vorführungen" : "Aktuelle Verführungen"}
        </p>
      </div>

      {active ? (
        <>
          <TermineYears year={currentYear} sorted={sorted} />
          <TermineYears year={currentYear + 1} sorted={sorted} />
          <TermineYears year={currentYear + 2} sorted={sorted} />{" "}
        </>
      ) : (
        <>
          <TermineYearsVergangen year={currentYear} sorted={sorted} />
          <TermineYearsVergangen year={currentYear - 1} sorted={sorted} />
          <TermineYearsVergangen year={currentYear - 2} sorted={sorted} />
        </>
      )}
    </div>
  );
};

export default Termine;

export async function getStaticProps() {
  const projekteResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projekte?populate=*`
  );
  return {
    props: {
      projekte: projekteResponse.data,
    },
  };
}