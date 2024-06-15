import { Button, Card, CardContent, TextField } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function AlbumForm({ onRemove, onSubmit, album }) {
  const { handleSubmit, control } = useForm({
    defaultValues: album
      ? album
      : {
          name: "",
          artist: "",
          imageUrl: "",
        },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Name"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
            margin="normal"
          />
          <Controller
            name="artist"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Artist"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
            margin="normal"
          />
          <Controller
            name="imageUrl"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Image URL"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
            margin="normal"
          />
          <Button variant="contained" type="submit">Submit</Button>
          {onRemove && (
            <Button variant="contained" onClick={onRemove}>
              Remove
            </Button>
          )}
        </CardContent>
      </Card>
    </form>
  );
}

export default AlbumForm;
