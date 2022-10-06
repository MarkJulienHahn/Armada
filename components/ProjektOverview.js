import { useEffect } from "react";
import Link from "next/link";

import ProjektPreview from "./ProjektPreview";

const ProjektOverview = ({ projekte, setRunningTitle }) => {
  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }

  function compare(a, b) {
    if (
      formatPrimitive(a.erstauffuehrung) > formatPrimitive(b.erstauffuehrung)
    ) {
      return -1;
    }
    if (
      formatPrimitive(a.erstauffuehrung) < formatPrimitive(b.erstauffuehrung)
    ) {
      return 1;
    }
    return 0;
  }

  const projekteSortiert = projekte.sort(compare);

  useEffect(() => {
    setRunningTitle("Projekte");
  }, []);
  return (
    <div className="projWrapper">
      {projekteSortiert.map((project, i) =>
        project.slug.current ? (
          <Link key={i} href={`/projekte/${project.slug.current}`}>
            <div className="projLink">
              <ProjektPreview
                titel={project.titel}
                kurzbeschreibung={project.kurzbeschreibung}
                bild={project.vorschaubild}
              />
            </div>
          </Link>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default ProjektOverview;
