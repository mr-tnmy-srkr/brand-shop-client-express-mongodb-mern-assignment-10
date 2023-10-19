import { useState } from "react";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ViewDetails = () => {
  const [filteredItem, setFilteredItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const products = useLoaderData();
  const { id } = useParams();
  console.log(products,id);

  useEffect(() => {
    const filteredProduct = products.find((product) => product._id === id);
    // console.log(filteredProduct);
    setFilteredItem(filteredProduct);
    setLoading(false);
  }, [id, products]);

  console.log(filteredItem);

  const { _id, brand, image, name, type, price, rating, description } =
    filteredItem || {};
  console.log(parseFloat(rating));
  return (
    <div className="my-8">
      {loading ? (
        ""
      ) : (
        <>
        <h1 className=" bg-green-500 max-w-max px-2 rounded-xl text-xl font-bold text-white py-1 mb-8">Brand : {brand}</h1>
        <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row items-center justify-center">
          <figure className="w-1/2 mx-auto md:w-full">
            <img src={image} alt={`${name}`} />
          </figure>
          <div className="card-body">
            <div>
              <h2 className="card-title">{name}</h2>
              <p>Type : {type}</p>
              <p>Price : {price}</p>

              <div>
                <StarRatings
                  rating={parseFloat(rating)}
                  starRatedColor="blue"
                  numberOfStars={6}
                  name="rating"
                  starDimension="20px"
                  starSpacing="5px"
                />
                <span className="btn btn-sm bg-green-500 text-white">
                  {rating}
                  <span className="text-white">
                    <AiFillStar></AiFillStar>
                  </span>
                </span>
              </div>
              <p>{description}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary capitalize text-white">Add to cart</button>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default ViewDetails;
