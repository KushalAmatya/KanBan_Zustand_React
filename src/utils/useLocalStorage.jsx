import { useState } from "react";

const useLocalStorage = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("trelloData")) || []
  );

  const addItem = (toAdd) => {
    let newData;

    newData = [...data, toAdd];

    localStorage.setItem("trelloData", JSON.stringify(newData));
    console.log(newData);
    setData(newData);
  };

  const remove = (index) => {
    const newData = data.filter((_, i) => i !== index);
    localStorage.setItem("trelloData", JSON.stringify(newData));
    setData(newData);
  };

  // const update = (toUpdate, index) => {
  //   const newData = data.map((item, i) => (i === index ? toUpdate : item));
  //   localStorage.setItem("formData", JSON.stringify(newData));
  //   setData(newData);
  // };

  return { data, addItem, remove };
};

export default useLocalStorage;
