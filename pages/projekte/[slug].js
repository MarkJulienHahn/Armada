import { useRouter } from "next/router";

import RunningTitleDouble from "../../components/RunningTitleDouble";
import Projekt from "../../components/Projekt";

import client from "../../client";

import Footer from "../../components/Footer";

export async function getStaticPaths() {
  const res = await client.fetch(`*[_type == "projekte"]`);
  const data = await res;

  const paths = data.map((projekt) => {
    return { params: { slug: projekt.slug.current.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const projekte = await client.fetch(`

  *[slug.current == "dwdw-die-sache-mit-dem-wasser"]
    {..., 
    "beteiligte": beteiligte[]{"position": position, "member": member->{name}, "externe": externe}, 
    "downloads": downloads[]{"filename": filename, "file": file.asset->{url}},
    "fotos": fotos[]{"foto": asset->{url, metadata}},
    "logos": logos[]{"data": asset->{url, metadata}}
  }
  `);
  return {
    props: {
      projekte,
    },
  };
}

const projekt = ({ projekte }) => {
  const router = useRouter();

  return (
    <>
      <div className="mainWrapper">
        <RunningTitleDouble current={projekte[0].titel} />

        <Projekt projekt={projekte[0]} />
        <Footer />
      </div>
    </>
  );
};

export default projekt;
