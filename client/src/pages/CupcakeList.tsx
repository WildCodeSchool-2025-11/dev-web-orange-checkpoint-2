import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

type CupcakeArray = Array<{
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}>;

type Accessory = {
  id: number;
  name: string;
};

type AccessoryArray = Accessory[];

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setCupcakes(data);
        console.info(data);
      });
  }, []);

  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data);
        console.info(data);
      });
  }, []);

  console.log(accessories.length);

  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes
          .filter((cupcake) => {
            if (selectedAccessory === "") {
              return true;
            }
            return cupcake.accessory_id === selectedAccessory;
          })
          .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default CupcakeList;
