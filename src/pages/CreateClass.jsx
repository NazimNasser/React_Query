import React from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { createBook } from '../api'
import Form from '../component/Form'

export default function CreateClass() {
  const navigation = useNavigate()
  const { mutateAsync, isLoading } = useMutation(createBook)

  const onFormSubmit = async(e)=> {
    e.preventDefault();
    let createbook = document.getElementById("create");
    let data = {
      name: createbook.value,
    };
  await mutateAsync(data)
  navigation("/")
  }

  return (
    <>
      <h1 className="p-8 text-[60px] font-[1000] text-[#ED5553]">
        CreateBook <span className="text-[#11445B]">Book</span>
      </h1>
      <Form onFormSubmit={onFormSubmit} isLoadind={isLoading} id="create"/>
    </>
  )
}
