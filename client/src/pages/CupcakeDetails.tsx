import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

type CupcakeType = CupcakeArray[number];

function CupcakeDetails() {
  const { id } = useParams();

  const [cupcake, setCupcake] = useState<CupcakeType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!id) return;

      try {
        const res = await fetch(`http://localhost:3310/api/cupcakes/${id}`);
        const data = (await res.json()) as CupcakeType;
        setCupcake(data);
      } catch (e) {
        console.error(e);
        setCupcake(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!cupcake) return <p>Not found</p>;

  return (
    <>
      <Link to="/cupcakes">← Back</Link>
      <h1>{cupcake.name}</h1>
      <Cupcake data={cupcake} />
    </>
  );
}

export default CupcakeDetails;
