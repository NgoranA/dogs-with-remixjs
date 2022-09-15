import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { json, useLoaderData } from "remix";
import type { Breed } from "@prisma/client";
import type { LoaderFunction } from "remix";

import type { ActionFunction } from "remix";
import { redirect } from "remix";
import { db } from "~/utils/db.server";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const story = form.get("story");
  const age = Number(form.get("age"));
  const breedId = form.get("breedId");
  console.log(typeof story);

  if (typeof name !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { name, story, age, breedId };

  await db.dog.create({ data: fields });
  return redirect("/admin/dogs/new");
};

type LoaderData = { breeds: Array<Breed> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    breeds: await db.breed.findMany(),
  };
  return json(data);
};

export default function NewDog() {
  const [selectedBreed, setSelectedBreed] = React.useState("All");
  const data = useLoaderData<LoaderData>();
  const handleFilter = (event: SelectChangeEvent) => {
    setSelectedBreed(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <PetsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Puppy
        </Typography>
        <Box
          component="form"
          method="post"
          //   onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 3, mb: 20 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Puppy Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="age"
            type="number"
            label="Puppy Age"
            name="age"
            autoComplete="age"
          />
          <TextField
            margin="normal"
            fullWidth
            multiline
            minRows={5}
            name="story"
            label="Puppy Story"
            type="text"
            id="story"
          />
          <FormControl fullWidth sx={{ mb: 3, mt: 3 }}>
            <InputLabel id="search"> Breed</InputLabel>
            <Select
              labelId="breedId"
              id="breedId"
              label="Breed"
              value={selectedBreed}
              fullWidth
              name="breedId"
              onChange={handleFilter}
            >
              <MenuItem value="All">All</MenuItem>
              {data.breeds.map((breed) => (
                <MenuItem key={breed.id} value={breed.id}>
                  {breed.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid container direction="column">
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" type="file" />
              <Button
                startIcon={<PetsIcon />}
                variant="outlined"
                component="span"
                sx={{ textTransform: "none" }}
              >
                Puppy Image
              </Button>
            </label>

            <Button
              startIcon={<AddCircleOutlineIcon />}
              type="submit"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Add Puppy
            </Button>
            <Button
              type="reset"
              variant="text"
              sx={{ textTransform: "none", mb: 2, color: "primary.light" }}
            >
              cancel
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
