import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { _id, brand_name, brand_image } = brand || {};

  return (
    <div>
    <Link to={`./${brand_name}`}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-48"
            src={brand_image}
            alt="Brands"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl uppercase"><span className="capitalize">Brand</span> : {brand_name}</h2>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BrandsCard;
