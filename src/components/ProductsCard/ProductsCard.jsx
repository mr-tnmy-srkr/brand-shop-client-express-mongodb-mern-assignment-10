import StarRatings from "react-star-ratings";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductsCard = ({ product }) => {
  const { _id, brand, image, name, type, price, rating, description } =
    product || {};
  // console.log(description.length);
  return (
    <div>
      {
        <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800 dark:text-gray-100 pt-8 pb-4">
          <figure>
            <img className="h-72" src={image} alt={`${name}`} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{name}</h2>
            <p className="text-lg">Type : {type}</p>
            <p className="text-xl">Price : Rs.{price}.00</p>
            <div>
              <StarRatings
                rating={parseFloat(rating)}
                starRatedColor="blue"
                numberOfStars={6}
                name="rating"
                starDimension="20px"
                starSpacing="5px"
              />{" "}
              <span className="btn btn-sm bg-green-500 text-white border-0">
                {rating}
                <span className="text-white">
                  <AiFillStar></AiFillStar>
                </span>
              </span>
            </div>
            <p className="text-lg">
              {`${
                description.length > 120
                  ? description.slice(0, 120)
                  : description
              }`}{" "}
              <Link
                to={`/product/${brand}/${_id}`}
                className={`font-bold cursor-pointer ${
                  description.length < 120 && "hidden"
                }`}
              >
                ...Read more
              </Link>
            </p>
            <div className="card-actions justify-end">
              <Link to={`/product/${brand}/${_id}`}>
                <button className="btn btn-primary capitalize text-white  bg-[#95BF46] border-none rounded-md hover:bg-[#b5d578] focus:outline-none focus:bg-green-600">
                  View Details
                </button>
              </Link>
              <Link to={`/product/updateProduct/${brand}/${_id}`}>
                <button className="btn btn-primary capitalize text-white  bg-[#95BF46] border-none rounded-md hover:bg-[#b5d578] focus:outline-none focus:bg-green-600">
                  Update Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

ProductsCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductsCard;
