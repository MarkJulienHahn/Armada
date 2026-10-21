import NextImage from "next/image";

// Bilder nicht ueber den Vercel-Bildoptimierer schicken (kostet Cache-Reads pro Bild):
// Sanity-Bilder skaliert das Sanity-CDN selbst, lokale Dateien (meist animierte GIFs)
// werden unveraendert als statische Dateien ausgeliefert.
const sanityLoader = ({ src, width, quality }) => {
  const url = new URL(src);
  url.searchParams.set("w", width);
  url.searchParams.set("q", quality || 75);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  return url.href;
};

const isSanity = (src) =>
  typeof src === "string" && src.startsWith("https://cdn.sanity.io/");

const Image = (props) =>
  isSanity(props.src) ? (
    <NextImage loader={sanityLoader} {...props} />
  ) : (
    <NextImage unoptimized {...props} />
  );

export default Image;
