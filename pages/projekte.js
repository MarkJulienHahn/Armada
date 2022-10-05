import React, {useEffect} from "react";

import Link from "next/link";
import client from "../client";

import Footer from "../components/Footer";
import ProjektPreview from "../components/ProjektPreview";

const projekte = ({ projekte, setRunningTitle}) => {

  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }

  function compare(a, b) {
    if (
      formatPrimitive(a.erstauffuehrung) >
      formatPrimitive(b.erstauffuehrung)
    ) {
      return -1;
    }
    if (
      formatPrimitive(a.erstauffuehrung) <
      formatPrimitive(b.erstauffuehrung)
    ) {
      return 1;
    }
    return 0;
  }

  const projekteSortiert = projekte.sort(compare);

  useEffect(() => {
    setRunningTitle("Projekte")
  },[])


  return (
    <div className="mainWrapper">

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
      <Footer />
    </div>
  );
};

export default projekte;

export async function getStaticProps(context) {
  const projekte = await client.fetch(`

  *   [_type == "projekte"] | order(!erstauffuehrung) 
  {  "titel": titel,
     "erstauffuehrung": erstauffuehrung,
     "kurzbeschreibung": kurzbeschreibung,
     "slug": slug,
     "vorschaubild": vorschaubild.asset->{url,metadata},
     "fotos": fotos[].asset->,
  }
  `);



  return {
    props: {
      projekte
    },
  };
}
