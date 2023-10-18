import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import BrandsCard from "../../components/BrandsCard/BrandsCard";
import Accordions from "../../components/Accordions/Accordions";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <h1 className="text-5xl font-bold text-center mb-10 mt-12">
        Available brands
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 w-[98%] mx-auto hover:cursor-pointer">
        {brands?.map((brand) => (
          <BrandsCard key={brand._id} brand={brand}></BrandsCard>
        ))}
      </div>
      <div className="mb-8">
        <Accordions></Accordions>
      </div>
      <div className="my-8">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
