// import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyProduct = () => {
  const product = useLoaderData();
  console.log(product);
  const { _id, brand, image, name, type, price, rating, description } =
    product || {};

  const navigate = useNavigate();

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const image = form.image.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updatedProduct = {
      brand,
      image,
      name,
      type,
      price,
      rating,
      description,
    };
    console.log(updatedProduct);

    /*  fetch(`http://localhost:5000/product/updateProduct/${brand}/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error)); */

    try {
      const response = await fetch(
        `http://localhost:5000/product/updateProduct/${brand}/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );
      const result = await response.json();
      console.log(result);

      if (result.acknowledged) {
        Swal.fire({
          title: "Success!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          text: "Product updated successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dark:bg-gray-600 dark:text-gray-100">
      <Helmet>
        <title>Update product</title>
      </Helmet>
      <div className="pb-8">
        <h1 className="py-8 text-center text-3xl font-semibold">
          Update Your Available Brands
        </h1>
        <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-gray-300">
          <form onSubmit={handleUpdateProduct}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
              <div>
                <label className="label ">
                  <span className="label-text text-xl font-semibold">
                    Brand Name
                  </span>
                </label>
                {/*  <input
               name="brand"
                type="text"
                className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                autoComplete="on"
              /> */}

                <select
                  name="brand"
                  defaultValue={brand}
                  className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="xiaomi">Xiaomi</option>
                  <option value="hp">Hp</option>
                  <option value="dell">Dell</option>
                  <option value="google">Google</option>
                  <option value="apple">Apple</option>
                  <option value="intel">Intel</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Image url
                  </span>
                </label>
                <input
                  name="image"
                  type="text"
                  defaultValue={image}
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  autoComplete="on"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={name}
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  autoComplete="on"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">Type</span>
                </label>
                <input
                  name="type"
                  type="text"
                  defaultValue={type}
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  autoComplete="on"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Price
                  </span>
                </label>
                <input
                  name="price"
                  type="number"
                  min="0"
                  defaultValue={price}
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  autoComplete="on"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Rating
                  </span>
                </label>
                <input
                  name="rating"
                  type="number"
                  min="0"
                  max="6"
                  step="0.1"
                  defaultValue={rating}
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  autoComplete="on"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Description
                  </span>
                </label>
                <textarea
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  name="description"
                  defaultValue={description}
                  autoComplete="on"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Update Product
              </button>
            </div>
          </form>
          <h2 className="text-xl inline font-semibold  dark:text-black">
            Go back to previous page
          </h2>
          <span onClick={() => navigate(-1)}>
            {" "}
            <button className="btn btn-info text-white capitalize btn-sm">
              Click Here
            </button>
          </span>
        </section>
      </div>
    </div>
  );
};

export default UpdateMyProduct;
