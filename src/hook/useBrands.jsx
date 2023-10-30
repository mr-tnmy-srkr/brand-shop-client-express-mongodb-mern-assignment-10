import { useEffect } from "react";
import { useState } from "react";

const useBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch(
      "https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/brands/"
    )
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error(error));
  }, []);

  return brands;
};

export default useBrands;
