import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

type AccessoryArray = { id: number; name: string; slug: string }[];

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);

  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setCupcakes(data as CupcakeArray);
        console.info("Cupcakes:", data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data as AccessoryArray);
        console.info("Accessories:", data);
      });
  }, []);

  const filteredCupcakes = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === selectedAccessory)
    : cupcakes;

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
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id.toString()}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
