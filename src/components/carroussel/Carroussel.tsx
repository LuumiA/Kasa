import React, { useState } from "react";
import cards_data from "../../data/logement.json";
import { CardData } from "../galleryCard/GalleryCard";
import "./Carroussel.scss";
// With this interface we can define which type of props the component will receive
interface CarrousselProps {
  id?: string; // The component receive an ID as a prop to get the corresponding housing images
}
export const Carroussel: React.FC<CarrousselProps> = ({ id }) => {
  // We try to find the id corresponding images from logements data, if no results we initialize an empty array
  const images =
    (cards_data as CardData[]).find((card) => card.id === id)?.pictures || [];
  // We use useState to handle the current indexed image
  const [currentIndexImage, setCurrentIndexImage] = useState<number>(0);
  const nextImage = () => {
    // We use a modulo to get back to the first image after hitting the carousel's end
    setCurrentIndexImage((currentIndexImage + 1) % images.length);
  };
  // We use a revert modulo to get back to the last image when getting back after the first image
  const prevImage = () => {
    setCurrentIndexImage(
      (currentIndexImage - 1 + images.length) % images.length
    );
  };
  return (
    <div className="caroussel-frame">
      {/* We first check how many image we have to display then we add the className needed to handle the displaying */}
      {images.map((imgUrl, index) => (
        <img
          src={imgUrl}
          alt="Photo descriptive"
          key={index}
          className={index === currentIndexImage ? "active" : "disabled"}
        />
      ))}
      {/* We check if there is more than one image to display before displaying buttons */}
      {images.length > 1 && (
        <>
          <div className="left-right-arrows">
            <span className="left" onClick={prevImage}>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span className="right" onClick={nextImage}>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
          {/* Display the current image number relative to the total number */}
          <p>
            {currentIndexImage + 1}/{images.length}
          </p>
        </>
      )}
    </div>
  );
};
