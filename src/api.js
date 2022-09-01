import axios from "axios";

const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms));
// getAll
export const getAllClassroom = async () => {
  await delay();
  const res = await fetch("http://127.0.0.1:8000/api/classroom");
  const data = await res.json();
  if (data) {
    return data.data;
  } else {
    return console.log("error");
  }
};

// get the data to update them
export const getClass = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const res = await fetch(`http://127.0.0.1:8000/api/classroom/${id.id}`)
  const data = await res.json();
  if (data) {
    return data;
  } else {
    return console.log("error");
  }
};

// delete
export const removeClass = async (id) => {
  const res = await fetch(`http://127.0.0.1:8000/api/classroom/${id}`, {
    method: "DELETE",
  });
  if (res) {
    return true;
  } else {
    return console.log("error");
  }
};

//  create a newbook
export const createBook = async (data) => {
  const createBook = await axios.post(
    "http://127.0.0.1:8000/api/classroom",
    data
  );
  try {
    if (createBook.status === 201) {
      console.log("The Book Created");
    }
  } catch (err) {
    console.log(err);
  }
};

// update
export const updateClass = async ( {id, ...data} ) => {
  const editData = await axios.post(
    `http://localhost:8000/api/classroom/${id.id}`,
    data
  );
  try {
    if (editData.data.status === 201) {
      console.log("update");
    }
  } catch (err) {
    console.log("err");
  }

  // const res = await fetch(`http://127.0.0.1:8000/api/classroom/${id}`, {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "x-www-form-urlencoded",
  //   },
  //   body: JSON.stringify(data),
  // });
  // console.log(res.data);
  // if (res) {
  //   return res.data;
  // } else {
  //   return console.log("error");
  // }
};