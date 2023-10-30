import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";
import { Helmet } from "react-helmet-async";

const AddProducts = () => {
  const handleSaveToDb = async (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const image = form.image.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    // console.log(brand, image, name, type, price, rating, description);
    const newProduct = { brand, image, name, type, price, rating, description };

    try {
      const response = await axios.post(
        "https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/products",
        newProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data.insertedId);
      if (response.data.insertedId) {
        Swal.fire({
          title: "Success!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          text: "Product added successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div data-aos="zoom-in" className="pb-8 dark:bg-gray-600 dark:text-gray-100">
      <Helmet>
        <title>Add products</title>
      </Helmet>
      <h1 className="py-8 text-center text-3xl font-semibold">
        Add Your Available Brands
      </h1>
      <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-gray-300">
        <form onSubmit={handleSaveToDb}>
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
                className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                autoComplete="on"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Price</span>
              </label>
              <input
                name="price"
                type="number"
                min="0"
                className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                autoComplete="on"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Rating</span>
              </label>
              <input
                name="rating"
                type="number"
                min="0"
                max="6"
                step="0.1"
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
                autoComplete="on"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#95BF46]  rounded-md hover:bg-[#b5d578] focus:outline-none focus:bg-green-600">
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProducts;
