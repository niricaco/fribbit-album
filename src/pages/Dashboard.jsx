import React, { useEffect, useState } from "react";
import { useDetails } from "../providers/details";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data, getData, setSelectedImage } = useDetails();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

  // filter data based on search
  useEffect(() => {
    const filtered = data.filter((pic) =>
      pic.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

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
