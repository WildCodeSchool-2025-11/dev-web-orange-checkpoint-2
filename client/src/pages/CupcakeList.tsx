import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  // Step 5: create filter state
  const [selectedAccessory, setSelectedAccessory] = useState("");

  // Fetch cupcakes
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => setCupcakes(data))
      .catch((err) => console.error(err));
  }, []);

  // Fetch accessories
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data))
      .catch((err) => console.error(err));
  }, []);

  // Step 5: filter cupcakes before repeating
  const filteredCupcakes =
    selectedAccessory === ""
      ? cupcakes
      : cupcakes.filter((c) => c.accessory_id === selectedAccessory);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((acc: Accessory) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
