import Image from "next/image";
import React from "react";
import { ShoppingCart, CircleUser } from "lucide-react";
import next from "../../public/next.svg";

export default function NavBar() {
  const isLoggedIn = false;
  return (
    <nav className="fixed flex top-0 w-full h-[50px]  mb-5 justify-between items-center pl-14 pr-14">
      <div>
        <Image src={next} alt="Your Logo" width={100} height={100}></Image>
      </div>

      <div className="flex space-x-10 items-center font-sans text-lg">
        <a
          href="#"
          className="hover:text-red-700 transition-all ease-out duration-200 "
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-red-700 transition-all ease-out duration-200 "
        >
          Shop
        </a>
        <a
          href="#"
          className="hover:text-red-700 transition-all ease-out duration-200 "
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-red-700 transition-all ease-out duration-200 "
        >
          Contact Us
        </a>
      </div>

      <div className="flex space-x-5 items-center">
        {isLoggedIn ? (
          <>
            <button className=" py-1 px-2">
              <CircleUser className=" h-8 w-8 " color="red" />
            </button>
            <button className=" py-1 px-2">
              <ShoppingCart className=" h-8 w-8 " color="red" />
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-red-500 text-white font-sans py-1 px-2 rounded  border-transparent
               transition duration-300 ease-in-out hover:bg-transparent hover:text-red-500 hover:border-red-500 border-2"
            >
              Register
            </button>

            <button
              className="border-red-500 px-2 py-1 font-sans text-red-500 rounded hover:bg-red-500 hover:text-white  border-2
               transition duration-300 ease-in-out"
            >
              Login
            </button>

            <button className=" py-1 px-2">
              <ShoppingCart className=" h-8 w-8 " color="red" />
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
