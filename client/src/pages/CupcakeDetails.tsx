import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CupcakeDetails() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState<Cupcake | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.info("Détails du cupcake:", data);
        setCupcake(data);
      });
  }, [id]);
  if (!cupcake) {
    return <div className="details-container">Chargement...</div>;
  }
  return (
    <div className="detail-container">
      <h1>{cupcake.name}</h1>
      <div className="detail-cupcake">🧁</div>
      <p>
        <strong>Accessoire: </strong> {cupcake.accessory}
      </p>
      <p>
        <strong>Couleur 1: </strong> {cupcake.color1}
      </p>
      <p>
        <strong>Couleur 2: </strong> {cupcake.color2}
      </p>
      <p>
        <strong>Couleur 3: </strong> {cupcake.color3}
      </p>
      <Link to="/cupcakes" className="back-link">
        ← Retour à la liste
      </Link>
    </div>
  );
}
export default CupcakeDetails;
