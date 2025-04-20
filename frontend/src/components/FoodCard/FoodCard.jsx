import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="mb-5 w-full sm:w-[90%] md:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mx-auto flex flex-col justify-between">
      <div>
        <div className="relative">
          <img src={image} alt={name} className="w-full h-56 object-cover" />
          <p className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 text-sm font-semibold rounded">
            ${price}
          </p>
        </div>
        <div className="p-4 text-center">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">{recipe}</p>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={handleAddToCart}
          className="w-full min-h-[48px] flex items-center justify-center bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
