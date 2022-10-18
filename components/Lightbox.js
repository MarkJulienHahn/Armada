import Image from "next/image";

const Lightbox = ({ image, setImage }) => {
  return (
    <div className="lightboxWrapper">
      {image ? (
        <div
          onClick={() => setImage(null)}
          style={{ position: "fixed", top: "0",height: "100vw", position: "relative", minWidth: "50vw" }}
        >
          <Image
            className="lightboxInner"
            src={image.foto.url}
            width={image.foto.metadata?.width}
            height={image.foto.metadata?.height}
            layout="responsive"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Lightbox;
