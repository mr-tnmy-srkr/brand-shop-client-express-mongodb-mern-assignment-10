import StarRatings from "react-star-ratings";
import { AiFillStar } from "react-icons/ai";


const ProductsCard = ( {product} ) => {
  const { _id, brand, image, name, type, price, rating, description } =
    product || {};
console.log(description.length);
  return (
    <div>
      {
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="h-96" src={image} alt={`${name}-image`} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{type}</p>
            <p>{price}</p>
            <div>
              <StarRatings
                rating={parseFloat(rating)}
                starRatedColor="blue"
                numberOfStars={6}
                name="rating"
                starDimension="20px"
                starSpacing="5px"
              /> <span className="btn btn-sm bg-green-500 text-white">{rating} <span className="text-white"><AiFillStar></AiFillStar></span></span>
            </div>
            <p>{`${description.length>150 ? description.slice(0,150) : description}`} <span className={`font-bold cursor-pointer ${description.length<150 && "hidden"}`}>...Read more</span></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary capitalize text-white">
                View Details
              </button>
              <button className="btn btn-primary capitalize text-white">
                Update Details
              </button>
            </div>
          </div>
        </div>
      }
     
    </div>
  );
};

export default ProductsCard;
