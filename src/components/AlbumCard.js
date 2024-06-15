import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function AlbumCard({ id, name, artist, imageUrl }) {
  return (
    <Card>
      <CardHeader title={name} />
      <Link to={`/album/${id}`}>
        <CardMedia component="img" image={imageUrl} />
      </Link>
      <CardContent>
        <p>Title: {name}</p>
        <p>Artist: {artist}</p>
      </CardContent>
    </Card>
  );
}

export default AlbumCard;
