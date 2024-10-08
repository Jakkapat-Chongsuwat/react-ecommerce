import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div
      className="min-h-[550px] flex justify-center items-center
    py-12 sm:py-0"
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 
        items-center"
        >
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px]
            h-[350px] object-cover w-full mx-auto 
            drop-shadow-[-10px_10px_12px_#000000]"
            />
          </div>
          {/* Text detail Section */}
          <div
            className="flex flex-col justify-center gap-6
          sm:pt-0"
          >
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter Sales upto 50% off
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quisquam?
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <GrSecure
                  data-aos="fade-up"
                  className="text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                />
                <p>Quality Products</p>
              </div>
              <div className="flex items-center gap-4">
                <IoFastFood
                  data-aos="fade-up"
                  className="text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-orange-100 dark:bg-orange-400"
                />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck
                  data-aos="fade-up"
                  className="text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-green-100 dark:bg-green-400"
                />
                <p>Easy Payment Method</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck
                  data-aos="fade-up"
                  className="text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-yellow-100 dark:bg-yellow-400"
                />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
