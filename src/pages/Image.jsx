import React from "react";
import { useDetails } from "../providers/details";
import { useNavigate } from "react-router-dom";

const Image = () => {
  const navigate = useNavigate();
  const nav = (path) => {
    navigate(path);
  };
  const { selectedImage, data, setSelectedImage } = useDetails();

  const selected = data.find((pic) => pic.id === selectedImage);

  // filter selected image from album
  const album = data.filter((pic) => pic.albumId === selected.albumId);

  const clickedImage = (id) => {
    setSelectedImage(id);
    nav("/image");
  };

  return (
    <>
      <div>Image</div>
      <div>{selected.title}</div>
      <img src={selected.url} alt={selected.title} />
      <section>
        <div>Album ID: {selected.albumId}</div>
        {album.map((pic) => (
          <div key={pic.id} onClick={() => clickedImage(pic.id)}>
            <img src={pic.thumbnailUrl} alt={pic.title} />
          </div>
        ))}
      </section>
    </>
  );
};

export default Image;
