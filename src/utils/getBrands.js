const getBrands = () => {
  const allBrands = () => {
    fetch("https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/brands/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return allBrands();
};

export default getBrands;
