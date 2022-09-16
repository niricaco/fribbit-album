import React, { useEffect } from "react";
import { useDetails } from "../providers/details";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data, getData, setSelectedImage } = useDetails();

  const nav = (path) => {
    navigate(path);
  };

  const clickedImage = (id) => {
    setSelectedImage(id);
    nav("/image");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>Dashboard</div>
      {data.length > 0 &&
        data.map((pic) => (
          <div key={pic.id} onClick={() => clickedImage(pic.id)}>
            <img src={pic.thumbnailUrl} alt={pic.title} />
          </div>
        ))}
    </>
  );
};

export default Dashboard;
