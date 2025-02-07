import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../data/logement.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./logement.scss";
import { Collapse } from "../../components/collapse/Collapse";
import { CardData } from "../../components/galleryCard/GalleryCard";

const Logement: React.FC = () => {
  // Récupération de l'ID depuis l'URL
  const { id } = useParams<{ id: string }>();

  // Recherche du logement correspondant dans les données
  const logement = (logements as CardData[]).find(
    (logement) => logement.id === id
  );

  // Si aucun logement n'est trouvé
  if (!logement) {
    return <h2>Logement non trouvé.</h2>;
  }

  return (
    <div className="logement">
      {/* Carrousel */}
      <Slideshow pictures={logement.pictures} />
      {/* Informations générales */}
      <div className="logement__info">
        {/* Détails à gauche */}
        <div className="logement__details">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="logement__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hôte à droite */}
        <div className="logement__host">
          <img
            className="logement__host-picture"
            src={logement.host.picture}
            alt={logement.host.name}
          />
          <p className="logement__host-name">{logement.host.name}</p>
          <div className="logement__host-rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`star ${
                  i < Number(logement.rating) ? "" : "star--empty"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Boutons Description et Équipements */}
      <div className="logement__buttons">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Equipement"
          content={
            <div className="equipements">
              {logement.equipments.map((equipment) => (
                <div style={{ textDecoration: "none" }} key={equipment}>
                  {equipment}
                </div>
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Logement;
