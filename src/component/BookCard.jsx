import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { removeClass } from "../api";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function BookCard({ id, name }) {
  const queryclient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeClass);
  const remove = async () => {
    await mutateAsync(id);
    queryclient.invalidateQueries("api/classroom");
  };

  return (
    <>
      <div
        className="flex justify-between items-center w-[60%] my-2 py-2 px-6 rounded-md mx-auto bg-[#d6d6d6]"
        key={id}
      >
        <div>
          <Link
            className="font-bold text-blue-500 hover:text-white"
            to={`/update/${id}`}
          >
            Edit - BookName
          </Link>
        </div>
        <div>{name}</div>
        <div>
          <button
            className="px-4 py-1 text-white bg-blue-500 rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500 hover:border-2"
            onClick={remove}
          >
            {isLoading ? (
              <ThreeDots height="20" width="60" color="white" />
            ) : (
              "Remove"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
