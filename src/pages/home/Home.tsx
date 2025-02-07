import React from "react";
import "./Home.scss";
import { CardData } from "../../components/galleryCard/GalleryCard";
import { GalleryCard } from "../../components/galleryCard/GalleryCard";
import logements from "../../data/logement.json";
export const Home: React.FC = () => {
  return (
    <>
      <section className="tagline">
        <p>Chez vous, partout et ailleurs</p>
      </section>
      <section className="gallery">
        {/* Here we use the map method to browse the database from the logements import that is used in the CardData interface */}
        {logements.map((cardData: CardData) => (
          // We use the gotten id as a key value to add it to the path of the gallery cards
          <GalleryCard key={cardData.id} cardData={cardData} />
        ))}
      </section>
    </>
  );
};
