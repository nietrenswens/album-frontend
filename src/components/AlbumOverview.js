import React from "react";
import AlbumCard from "./AlbumCard";
import Grid from "@material-ui/core/Grid";
import useAlbums from "../hooks/useAlbums";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardContent } from "@material-ui/core";

function AlbumOverview() {
    const albums = useAlbums();
  return (
    <div>
      <h1>Album Overview</h1>
      <p>Here you can see all the albums</p>
      <Link to="/new">
        <Card>
          <CardActionArea>
            <CardContent>
              <h2>Create new album</h2>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <br />
      <Grid container spacing={3}>
        {albums && albums.length > 0 ? albums.map((album) => (
          <Grid item xs={2} key={album.id}>
            <AlbumCard
              key={album.id}
              id={album.id}
              name={album.name}
              artist={album.artist}
              imageUrl={album.imageUrl}
            />
          </Grid>
        )) : <p>Loading...</p>}
      </Grid>
    </div>
  );
}

export default AlbumOverview;
