import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="bg-[#11445B] p-2 text-white font-bold">
        <div className="w-[80%] mx-auto flex justify-between">
          <div className=" hover:text-[#ED5553]">
            <Link to={"/"}>Home</Link>
          </div>
          <div className=" hover:text-[#ED5553]">
            <Link to={"/create"}>+ Add New Book</Link>
          </div>
        </div>
      </div>
    </>
  );
}
