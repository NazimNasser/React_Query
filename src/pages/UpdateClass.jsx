import React from "react";
import { MutatingDots } from "react-loader-spinner";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getClass, updateClass } from "../api";
import Form from "../component/Form";

export default function UpdateClass() {
  const queryclient = useQueryClient();

  const navigation = useNavigate()
  const id = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["api/classroom", { id }],
    getClass
  );

  const { mutateAsync, isLoading: isMutating } = useMutation(updateClass, getClass)

  const clearCash = async () => {
    await mutateAsync({id});
    queryclient.invalidateQueries("api/classroom");
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    let updatebook = document.getElementById("update");
    let data = {
      name: updatebook.value,
    };
    try {
      await mutateAsync({...data, id})
      console.log(data);
      navigation("/")
    } catch (e) { console.log('Error');}
  }

  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center">
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
      <h1 className="p-8 text-[60px] font-[1000] text-[#ED5553]">
        Update <span className="text-[#11445B]">Book</span>
      </h1>
      <Form defaultValues={data.data.name} onFormSubmit={onFormSubmit} click={clearCash} isLoading={isMutating} id="update"  />
    </>
  );
}
