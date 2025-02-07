import React, { useState } from "react";
import "./Slideshow.scss";

interface SlideshowProps {
  pictures: string[]; // Liste des URL des images
}

const Slideshow: React.FC<SlideshowProps> = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Indice de l'image courante

  const handleNext = () => {
    // Passe à l'image suivante (boucle en revenant à la première image)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePrev = () => {
    // Passe à l'image précédente (boucle en allant à la dernière image)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      {/* Image affichée */}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {/* Flèches de navigation */}
      {pictures.length > 1 && ( // Les flèches n'apparaissent que si plusieurs images
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={handlePrev}
          >
            &#10094; {/* Caractère flèche gauche */}
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={handleNext}
          >
            &#10095; {/* Caractère flèche droite */}
          </button>
        </>
      )}

      {/* Pagination */}
      <div className="slideshow__pagination">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
};

export default Slideshow;
