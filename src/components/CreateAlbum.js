import React from "react";
import AlbumForm from "./AlbumForm";
import useAlbums from "../hooks/useAlbums";
import { useNavigate } from "react-router-dom";

function CreateAlbum() {
  const albums = useAlbums();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    // get latest album id
    const id = albums[albums.length - 1].id + 1;
    data.id = id;
    console.log(data);
    const request = fetch(`${process.env.REACT_APP_API_URL}/album`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    request.then((response) => {
      if (!response.ok) {
        console.error(response.statusText);
        return;
      } else {
        navigate("/");
      }
    });
  };
  return (
    <div>
      <h1>Create Album</h1>
      <AlbumForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateAlbum;
