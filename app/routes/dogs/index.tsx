import * as React from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Breed, Dog } from "@prisma/client";
import { db } from "~/utils/db.server";
import type { LoaderFunction } from "@remix-run/node";
import InputLabel from "@mui/material/InputLabel/index.js";
import MenuItem from "@mui/material/MenuItem/index.js";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl/index.js";
import Select, { SelectChangeEvent } from "@mui/material/Select/index.js";

import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  CardMedia,
  CardActions,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart.js";
import InfoIcon from "@mui/icons-material/InfoOutlined.js";
import Container from "@mui/material/Container/index.js";
import Typography from "@mui/material/Typography/index.js";
import Link from "@mui/material/Link";
import Layout from "~/src/Layout";

import d1 from "../../../public/1.jpeg";
import d2 from "../../../public/2.jpeg";
import d3 from "../../../public/3.jpeg";
import d4 from "../../../public/4.jpeg";

type LoaderData = { breeds: Array<Breed> };
type DLoaderData = { dogs: Array<Dog> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    breeds: await db.breed.findMany(),
  };
  const dog_data: DLoaderData = {
    dogs: await db.dog.findMany(),
  };

  return { breeds: data.breeds, dogs: dog_data.dogs };
};

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus at dignissimos consectetur quo ad facilis optio quae est iure eveniet ipsam veritatis omnis illo, amet et dolor ipsum velit quasi, asperiores quod iusto? Veniam sequi quia perferendis beatae quis vel! Similique expedita magnam quae quaerat perspiciatis veniam impedit eius.";

function DogsList() {
  const matchesLit = useMediaQuery("(max-width : 599px)");
  const [selectedBreed, setSelectedBreed] = React.useState("All");
  const breeds_data = useLoaderData<LoaderData>();
  const dogs_data = useLoaderData<DLoaderData>();
  const handleFilter = (event: SelectChangeEvent) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <>
      <Layout>
        <Container sx={{ mt: "3em" }}>
          <Typography variant="h3" gutterBottom align="center">
            Puppies Available
          </Typography>
          <FormControl sx={{ mb: 3, minWidth: 280 }}>
            <InputLabel id="search"> Breed</InputLabel>
            <Select
              labelId="puppy"
              id="puppy"
              label="Breed"
              value={selectedBreed}
              autoWidth
              onChange={handleFilter}
            >
              <MenuItem value="All">All</MenuItem>
              {breeds_data.breeds.map((breed) => (
                <MenuItem key={breed.id} value={breed.title}>
                  {breed.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid sx={{ marginBottom: "3em" }} container spacing={2}>
            {dogs_data.dogs.map((dog) => (
              <Grid key={dog.id} item sm={6} md={3}>
                <Card sx={{ maxWidth: matchesLit ? 340 : 300 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "primary.light" }}>
                        {dog.name.slice(0, 1)}
                      </Avatar>
                    }
                    title={dog.name}
                    subheader={`${dog.age} Years Old`}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={d1}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {lorem.slice(0, 100)}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mb: "1em" }}>
                    <Button
                      startIcon={<AddShoppingCartIcon />}
                      sx={{
                        bgcolor: "primary.light",
                        color: "white",
                        textTransform: "none",
                      }}
                      variant="contained"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      startIcon={<InfoIcon />}
                      sx={{
                        color: "primary.light",
                        textTransform: "none",
                      }}
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default DogsList;
