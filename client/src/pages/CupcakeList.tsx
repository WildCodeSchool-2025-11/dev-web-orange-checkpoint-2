import Cupcake from "../components/Cupcake";
import { useEffect, useState } from 'react';

/* ************************************************************************* */
const sampleCupcakes: CupcakeArray = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  interface CupcakeData {
    id: number;
    accessory_id: number;
    accessory: string;
    color1: string;
    color2: string;
    color3: string;
    name: string;
  }
  const [cupcakes, setCupcakes] = useState<CupcakeData[]>([]);
  useEffect(() => {
    const fetchCupcakes = async () => {
      try {
        const response = await fetch('http://localhost:3310/api/cupcakes');

        if (!response.ok) {
          throw new Error(`Erreur réseau : ${response.status}`);
        }

        const data: CupcakeData[] = await response.json();

        setCupcakes(data);

        console.info('Cupcakes récupérés :', data);
      } catch (error) {
        console.error('Impossible de charger les cupcakes :', error);
      }
    };

    fetchCupcakes();
  }, []);


  // Step 3: get all accessories
  type AccessoryArray = { id: number; name: string; slug: string }[];
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch(
          "http://localhost:3310/api/accessories"
        );
        if (!response.ok) {
          throw new Error(`Erreur réseau : ${response.status}`);
        }
        const data: AccessoryArray = await response.json();
        setAccessories(data);
        console.info("Accessoires récupérés :", data);
      } catch (error) {
        console.error("Impossible de charger les accessoires :", error);
      }
    };
    fetchAccessories();
  }, []);
  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {accessories.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            {/* Le composant Cupcake attend une prop `data` contenant tout l’objet */}
            <Cupcake data={cupcake} />
          </li>
        ))}

        {/*
  <li className="cupcake-item">
    <Cupcake data={sampleCupcakes[0]} />
  </li>
  */}
      </ul>
    </>
  );
}

export default CupcakeList;
