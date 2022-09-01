import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Form({ defaultValues, onFormSubmit, isLoading, id, click }) {
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="w-[60%] mx-auto">
          <div className="flex flex-col w-full my-3">
            <lable htmlFor={id} className="font-bold text-lg my-1"> BookName</lable>
            <input defaultValue={defaultValues} className="border-2 border-black rounded-sm text-[18px] p-1" id={id} name={id} type="text" />
          </div>
          <div className="flex justify-end">
            <button onClick={click} className="px-4 py-1 text-white bg-blue-500 rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500 hover:border-2">
              {isLoading ? (
                <ThreeDots height="20" width="60" color="white" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
