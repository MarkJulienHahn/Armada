import Image from "next/image";

const Lightbox = ({ image, setImage }) => {
  console.log(image);

  return (
    <div className="lightboxWrapper">
      {image ? (
        <div
          className="lightboxInner"
          onClick={() => setImage(null)}
          style={{ height: "100%", position: "relative" }}
        >
          <Image
            src={image.foto.url}
            width={image.foto.metadata?.width}
            height={image.foto.metadata?.height}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Lightbox;
