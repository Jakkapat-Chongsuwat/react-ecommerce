import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const TopProducts = ({ setOrderPopup }) => {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div data-aos="fade-up" className="text-left mb-24">
          <p className="text-sm text-primary">Top rated Products for you</p>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            ipsam, sequi eos in eligendi, temporibus repellendus culpa
            dignissimos labore, eius numquam ratione qui? Quia sapiente earum
            aut culpa totam dolore!
          </p>
        </div>
        {/* Body Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-20 md:gap-5 place-items-center"
        >
          {ProductsData.map((product) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white
            dark:bg-gray-800 hover:bg-black/80
            dark:hover:bg-primary hover:text-white
            relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Image section */}
              <div className="h-[100px]">
                <img
                  src={product.img}
                  alt=""
                  className="max-w-[140px] block
                mx-auto transform -translate-y-20 group-hover:scale-105
                duration-300 drop-shadow-md"
                />
              </div>
              {/* Details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div
                  className="w-full flex items-center
                justify-center gap-1"
                >
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{product.title}</h1>
                <p
                  className="text-gray-500 group-hover:text-white
                duration-300 text-sm line-clamp-2"
                >
                  {product.description}
                </p>
                <button
                  className="bg-primary hover:scale-105
                duration-300 text-white py-1 px-4 rounded-full mt-4
                group-hover:bg-white group-hover:text-primary"
                  onClick={() => setOrderPopup(true)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
