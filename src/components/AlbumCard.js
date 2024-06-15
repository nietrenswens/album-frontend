import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";
import React from "react";

function AlbumCard({ id, name, artist, imageUrl }) {
  return (
    <Card>
      <CardHeader title={name} />
      <CardMedia component="img" image={imageUrl} />
      <CardContent>
        <p>Title: {name}</p>
        <p>Artist: {artist}</p>
      </CardContent>
    </Card>
  );
}

export default AlbumCard;
