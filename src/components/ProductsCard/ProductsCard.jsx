import StarRatings from "react-star-ratings";

const ProductsCard = ({ product }) => {
  const { _id, brand, image, name, type, price, rating, description } = product || {};
  console.log(product._id);
  return (
    <div>
    {   <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={`${name}-image`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{type}</p>
          <p>{price}</p>
          <div>
          <StarRatings
          rating={3.5}
          starRatedColor="blue"
          numberOfStars={6}
          name='rating'
          starDimension="20px"
        starSpacing="5px"
        />
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary capitalize text-white">View Details</button>
            <button className="btn btn-primary capitalize text-white">Update Details</button>
          </div>
        </div>
      </div> }
      {/* {
        (product?._id)? "hello" :" kichu nai"
      } */}
    </div>
  );
};

export default ProductsCard;
