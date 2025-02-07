import React from "react";
import { NavLink } from "react-router-dom";
import "./GalleryCard.scss";
// We use an interface to easily use data from the database when needed
export interface CardData {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}
interface GalleryCardProps {
  cardData: CardData;
}
export const GalleryCard: React.FC<GalleryCardProps> = ({ cardData }) => {
  return (
    // We use the gotten id to fill the path of the cards according to the database
    <NavLink to={`/logement/${cardData.id}`}>
      <div className="card">
        {/* Utilisation de l'image de couverture et du titre pour construire la galerie */}
        <img src={cardData.cover} alt="Picture cover" />
        <h2>{cardData.title}</h2>
      </div>
    </NavLink>
  );
};
