import React, { useState } from "react";

import ArmadaPerson from "../components/ArmadaPerson";

const Armada = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const people = [
    {
      name: "Clara Gohmert",
      text: "Clara Gohmert ist ein Theaterperformance Kollektiv aus NRW, das von Clara Gohmert und Michael Zier, beides AbsolventInnen des Studiengangs Physical Theatre an der Folkwang U.d.K. gegründet wurde. Die Gruppe arbeitet mit filmischen Elementen, sowie Mitteln des Physischen, Figuren- & Objekttheaters und experimentellen musikalischen Setzungen und hat ihren thematischen Schwerpunkt in ökologischen Themen gefunden. In der Arbeit sind alle Beteiligten gleichberechtigte Impulsgeber:innen. Ihr Kinderstück „Der Kleine Schwarze Fisch“ wurde zu Spielarten NRW und zum Westwind Theatertreffen 2019 am Theater Oberhausen eingeladen, wo es den Preis der Kinderjury gewann. Ihr Stück „ONE WORLD IS NOT ENOUGH“, eine Live-Katastrophenfilm-Performance zum Thema Klimawandel, wurde zu Westwind Festival 2020 eingeladen. »DWDW-Die Sache mit dem Wasser« ist dieses Jahr on Tour.",
      contact: "clara.gohmert@armada-theater.com",
    },
    {
      name: "Michael Zier",
      text: "Clara Gohmert ist ein Theaterperformance Kollektiv aus NRW, das von Clara Gohmert und Michael Zier, beides AbsolventInnen des Studiengangs Physical Theatre an der Folkwang U.d.K. gegründet wurde. Die Gruppe arbeitet mit filmischen Elementen, sowie Mitteln des Physischen, Figuren- & Objekttheaters und experimentellen musikalischen Setzungen und hat ihren thematischen Schwerpunkt in ökologischen Themen gefunden. In der Arbeit sind alle Beteiligten gleichberechtigte Impulsgeber:innen. Ihr Kinderstück „Der Kleine Schwarze Fisch“ wurde zu Spielarten NRW und zum Westwind Theatertreffen 2019 am Theater Oberhausen eingeladen, wo es den Preis der Kinderjury gewann. Ihr Stück „ONE WORLD IS NOT ENOUGH“, eine Live-Katastrophenfilm-Performance zum Thema Klimawandel, wurde zu Westwind Festival 2020 eingeladen. »DWDW-Die Sache mit dem Wasser« ist dieses Jahr on Tour.",
      contact: "clara.gohmert@armada-theater.com",
    },
    {
      name: "Kanye West",
      text: "Clara Gohmert ist ein Theaterperformance Kollektiv aus NRW, das von Clara Gohmert und Michael Zier, beides AbsolventInnen des Studiengangs Physical Theatre an der Folkwang U.d.K. gegründet wurde. Die Gruppe arbeitet mit filmischen Elementen, sowie Mitteln des Physischen, Figuren- & Objekttheaters und experimentellen musikalischen Setzungen und hat ihren thematischen Schwerpunkt in ökologischen Themen gefunden. In der Arbeit sind alle Beteiligten gleichberechtigte Impulsgeber:innen. Ihr Kinderstück „Der Kleine Schwarze Fisch“ wurde zu Spielarten NRW und zum Westwind Theatertreffen 2019 am Theater Oberhausen eingeladen, wo es den Preis der Kinderjury gewann. Ihr Stück „ONE WORLD IS NOT ENOUGH“, eine Live-Katastrophenfilm-Performance zum Thema Klimawandel, wurde zu Westwind Festival 2020 eingeladen. »DWDW-Die Sache mit dem Wasser« ist dieses Jahr on Tour.",
      contact: "clara.gohmert@armada-theater.com",
    },
    {
      name: "Kim Kardashian",
      text: "Clara Gohmert ist ein Theaterperformance Kollektiv aus NRW, das von Clara Gohmert und Michael Zier, beides AbsolventInnen des Studiengangs Physical Theatre an der Folkwang U.d.K. gegründet wurde. Die Gruppe arbeitet mit filmischen Elementen, sowie Mitteln des Physischen, Figuren- & Objekttheaters und experimentellen musikalischen Setzungen und hat ihren thematischen Schwerpunkt in ökologischen Themen gefunden. In der Arbeit sind alle Beteiligten gleichberechtigte Impulsgeber:innen. Ihr Kinderstück „Der Kleine Schwarze Fisch“ wurde zu Spielarten NRW und zum Westwind Theatertreffen 2019 am Theater Oberhausen eingeladen, wo es den Preis der Kinderjury gewann. Ihr Stück „ONE WORLD IS NOT ENOUGH“, eine Live-Katastrophenfilm-Performance zum Thema Klimawandel, wurde zu Westwind Festival 2020 eingeladen. »DWDW-Die Sache mit dem Wasser« ist dieses Jahr on Tour.",
      contact: "clara.gohmert@armada-theater.com",
    },
  ];
  return (
    <div>
      <div className="armdWrapper">
        <div className="armdIntro">
          <h2>Armada Theater</h2>
          <p>
            ist ein Theaterperformance Kollektiv aus NRW, das von Clara Gohmert
            und Michael Zier, beides AbsolventInnen des Studiengangs Physical
            Theatre an der Folkwang U.d.K. gegründet wurde. Die Gruppe arbeitet
            mit filmischen Elementen, sowie Mitteln des Physischen, Figuren- &
            Objekttheaters und experimentellen musikalischen Setzungen und hat
            ihren thematischen Schwerpunkt in ökologischen Themen gefunden. In
            der Arbeit sind alle Beteiligten gleichberechtigte
            Impulsgeber:innen. Ihr Kinderstück „Der Kleine Schwarze Fisch“ wurde
            zu Spielarten NRW und zum Westwind Theatertreffen 2019 am Theater
            Oberhausen eingeladen, wo es den Preis der Kinderjury gewann. Ihr
            Stück „ONE WORLD IS NOT ENOUGH“, eine
            Live-Katastrophenfilm-Performance zum Thema Klimawandel, wurde zu
            Westwind Festival 2020 eingeladen. “DWDW-Die Sache mit dem Wasser”
            ist dieses Jahr on Tour.
          </p>
        </div>
        <div className="armdListe">
          {people.map((person, i) => (
            <ArmadaPerson
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              index={i}
              name={person.name}
              text={person.text}
              contact={person.contact}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Armada;
