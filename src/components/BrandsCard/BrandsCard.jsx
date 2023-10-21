import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { brand_name, brand_image } = brand || {};

  return (
    <div>
    <Link to={`/product/${brand_name}`}>
      <div className="card card-compact shadow-xl dark:bg-gray-500 dark:text-white">
        <figure className="pt-8">
          <img
          className="h-48"
            src={brand_image}
            alt="Brands"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl uppercase"><span className="capitalize">Brand</span> : {brand_name}</h2>
       
        </div>
      </div>
      </Link>
    </div>
  );
};
BrandsCard.propTypes = {
  brand: PropTypes.object
};
export default BrandsCard;
