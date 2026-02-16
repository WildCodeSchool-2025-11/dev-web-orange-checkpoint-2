import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

type AccessoryArray = { id: number; name: string; slug: string }[];

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  const [selectedAccessoryId, setSelectedAccessoryId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [cupRes, accRes] = await Promise.all([
          fetch("http://localhost:3310/api/cupcakes"),
          fetch("http://localhost:3310/api/accessories"),
        ]);

        const cupData = (await cupRes.json()) as CupcakeArray;
        const accData = (await accRes.json()) as AccessoryArray;

        setCupcakes(cupData);
        setAccessories(accData);

        console.info("Cupcakes:", cupData);
        console.info("Accessories:", accData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredCupcakes = useMemo(() => {
    if (!selectedAccessoryId) return cupcakes;
    return cupcakes.filter((c) => c.accessory_id === selectedAccessoryId);
  }, [cupcakes, selectedAccessoryId]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>My cupcakes</h1>

      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessoryId}
            onChange={(e) => setSelectedAccessoryId(e.target.value)}
          >
            <option value="">---</option>

            {accessories.map((a) => (
              <option key={a.id} value={String(a.id)}>
                {a.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Link
              to={`/cupcakes/${cupcake.id}`}
              style={{ textDecoration: "none" }}
            >
              <Cupcake data={cupcake} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
