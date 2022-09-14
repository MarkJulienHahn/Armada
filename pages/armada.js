import React from "react";

import ArmadaPerson from "../components/ArmadaPerson";
import RunningTitle from "../components/RunningTitle";

const armada = () => {
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Die Armada"} />

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
          <ArmadaPerson
            name={"Michael Zier"}
            text={
              "1991 in Böblingen geboren, ist Theatermacherin und Fuchsliebhaberin. In ihren Arbeiten vereint sie unterschiedliche Formen wie Bewegung, Live-Musik, Text, Stimme, Choreografie und Videokunst. Sie ist Mitbegründerin der Armada, mit deren Arbeiten sie u.a. beim Pohang Bada Festival (Südkorea), im FFT Düsseldorf, im Maschinenhaus Essen und im COMEDIA Theater Köln zu sehen war. Des weiteren wirkt sie in diversen Theaterproduktionen als Performerin, wie z.B. bei Anna Kpoks „RealReality“ im Ringlokschuppen Ruhr und Dortmunder Schauspielhaus oder als Sprecherin u.a. bei der FIDENA-Produktion „Straßengeheimnis“ mit. Neben ihrer Arbeit als Theatermacherin, ist sie für Cheers-For-Fears und das Physical Theatre Netzwerk tätig, gibt Workshops in Schulen und Museen und entwickelt mit Profis sowie Laien eigene Projekte (u.a. im Ringlokschuppen Mülheim a.d.R.). 2017 absolvierte sie erfolgreich ihr Physical Theatre Studium mit ihrer Abschlussarbeit „Realität ist halt auch nur was du denkst das du siehst!“ an der Folkwang Universität der Künste, Essen. Seit 2018 unterrichtet sie dort im Hauptfach Sprechen und untersucht wie Körper Stimme wird."
            }
          />

          <ArmadaPerson
            name={"Clara Gomert"}
            text={
              "1991 in Böblingen geboren, ist Theatermacherin und Fuchsliebhaberin. In ihren Arbeiten vereint sie unterschiedliche Formen wie Bewegung, Live-Musik, Text, Stimme, Choreografie und Videokunst. Sie ist Mitbegründerin der Armada, mit deren Arbeiten sie u.a. beim Pohang Bada Festival (Südkorea), im FFT Düsseldorf, im Maschinenhaus Essen und im COMEDIA Theater Köln zu sehen war. Des weiteren wirkt sie in diversen Theaterproduktionen als Performerin, wie z.B. bei Anna Kpoks „RealReality“ im Ringlokschuppen Ruhr und Dortmunder Schauspielhaus oder als Sprecherin u.a. bei der FIDENA-Produktion „Straßengeheimnis“ mit. Neben ihrer Arbeit als Theatermacherin, ist sie für Cheers-For-Fears und das Physical Theatre Netzwerk tätig, gibt Workshops in Schulen und Museen und entwickelt mit Profis sowie Laien eigene Projekte (u.a. im Ringlokschuppen Mülheim a.d.R.). 2017 absolvierte sie erfolgreich ihr Physical Theatre Studium mit ihrer Abschlussarbeit „Realität ist halt auch nur was du denkst das du siehst!“ an der Folkwang Universität der Künste, Essen. Seit 2018 unterrichtet sie dort im Hauptfach Sprechen und untersucht wie Körper Stimme wird."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default armada;
