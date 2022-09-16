import http from "axios";
import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const DetailsContext = createContext();

const DetailsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  const getData = async () => {
    try {
      const response = await http.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = {
    data,
    getData,
    selectedImage,
    setSelectedImage,
  };

  return (
    <>
      <DetailsContext.Provider value={contextValue}>
        {children}
      </DetailsContext.Provider>
    </>
  );
};

const useDetails = () => {
  const context = useContext(DetailsContext);
  if (!context) throw new Error("Add detailsProvider to root.");
  return context;
};

export { DetailsProvider, useDetails };
