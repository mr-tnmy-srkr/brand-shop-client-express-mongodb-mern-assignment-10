import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const cartItems = useLoaderData();
  const [updatedCart, SetUpdatedCart] = useState(cartItems);
  // console.log(updatedCart);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure to delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/myCart/${id}`
          )
          .then((response) => {
            // console.log("Delete request successful:", response.data);

            if (response.data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
                text: "Product deleted successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });

              const filteredCart = updatedCart.filter(
                (item) => item._id !== id
              );
              // console.log(filteredCart);
              SetUpdatedCart(filteredCart);
            }
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
          });
      }
    });
  };

  return (
    <div className={`${updatedCart.length && "min-h-[70vh]"} py-8 dark:bg-gray-700 dark:text-gray-100`}>
      <Helmet>
        <title>Shopify | Cart</title>
      </Helmet>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Price ($)
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {updatedCart?.map((item, idx) => ( */}
            {
              updatedCart &&
              updatedCart?.map((item, idx) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {`${idx + 1}. ${item.findProduct.name}`}
                </th>
                <td className="px-6 py-4">{item.findProduct.brand}</td>
                <td className="px-6 py-4">{item.findProduct.type}</td>
                <td className="px-6 py-4">{item.findProduct.price}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(item._id)}
                    type="submit"
                    className="dark:bg-white bg-red-500 p-2 rounded-lg font-medium text-white dark:text-red-500 hover:underline"
                  >
                    <AiFillDelete></AiFillDelete>
                  </button>
                </td>
              </tr>
            ))
            }
          </tbody>
          
        </table>
      </div>
     { !updatedCart.length ? <div className="min-h-[60vh] flex justify-center items-center">
      <p className="text-2xl font-bold">Sorry your cart is empty</p>
     </div> : ""}
    </div>
  );
};

export default MyCart;
