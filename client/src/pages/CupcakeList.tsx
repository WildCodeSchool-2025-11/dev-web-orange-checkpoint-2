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

interface Cupcake {
  id: number;
  accessory_id: number;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}
const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);

useEffect(() => {
  const fetchCupcakes = async () => {
    try {
      const response = await fetch('http://localhost:3310/api/cupcakes');
      if (!response.ok) {
      throw new Error(`Erreur réseau : ${response.status}`);
    }
          const data: Cupcake[] = await response.json();
                setCupcakes(data);
                console.info('Cupcakes récupérés :', data);
    } catch (error) {
      console.error('Impossible de charger les cupcakes :', error);
    }
  };
  fetchCupcakes();
}, []);
/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes

  // Step 3: get all accessories

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
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
