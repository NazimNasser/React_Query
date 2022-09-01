import React from "react";
import { useQuery } from "react-query";
import { getAllClassroom } from "../api";
import { MutatingDots } from "react-loader-spinner";
import BookCard from "../component/BookCard";

export default function Classlist() {
  const { data, error, isError, isLoading, isFetching } = useQuery(
    "api/classroom",
    getAllClassroom,
  );
  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center mt-[200px]">
          <MutatingDots
            height="100"
            width="100"
            color="grey"
            ariaLabel="loading"
          />
        </div>
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {isFetching && <div>Updating...</div>}
      <h1 className="p-8 text-[60px] font-[1000] text-[#ED5553]">
        React <span className="text-[#11445B]">Query</span>
      </h1>
      {data.map(({ id, name }) => {
        return <BookCard id={id} name={name} key={id} />;
      })}
    </>
  );
}
