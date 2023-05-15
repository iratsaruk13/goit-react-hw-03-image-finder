import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";
import propTypes from "prop-types";

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map((img) => (
        <ImageGalleryItem img={img} key={img.id} />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: propTypes.array,
};
