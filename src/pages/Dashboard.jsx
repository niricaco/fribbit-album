import React, { useEffect, useState } from "react";
import { useDetails } from "../providers/details";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data, getData, setSelectedImage } = useDetails();
  const [search, setSearch] = useState("");

  const nav = (path) => {
    navigate(path);
  };

  // filter data based on search
  const filteredData = data.filter((pic) =>
    pic.title.toLowerCase().includes(search.toLowerCase())
  );

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
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
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
