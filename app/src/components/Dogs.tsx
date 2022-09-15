import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  CardMedia,
  CardActions,
  Button,
  Box,
  Grid,
  useMediaQuery,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Dog } from "@prisma/client";

import d1 from "../../../public/1.jpeg";
import d2 from "../../../public/2.jpeg";
import d3 from "../../../public/3.jpeg";
import d4 from "../../../public/4.jpeg";

function Dogs({ home_dogs }: any) {
  const dogs = home_dogs.dogs;
  const matchesLit = useMediaQuery("(max-width : 599px)");
  return (
    <>
      <Container>
        <Typography variant="h3" gutterBottom align="center">
          Our Friends
        </Typography>
        <Box sx={{ flexGrow: 1, marginBottom: "3em" }}>
          <Grid container spacing={2} justifyContent="center">
            {dogs.map((dog: Dog) => (
              <Grid item key={dog.id} sm={6} md={3}>
                <Card sx={{ maxWidth: matchesLit ? 340 : 300 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "primary.light" }}>
                        {dog.name.slice(0, 1)}
                      </Avatar>
                    }
                    title={dog.name}
                    subheader={`${dog.age} years old of age`}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={d1}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
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
          <Grid textAlign="center">
            <Link href="/dogs">
              <Button
                sx={{
                  bgcolor: "primary",
                  color: "white",
                  textTransform: "none",
                  mt: "2em",
                  height: "3rem",
                  borderRadius: "50px",
                }}
                variant="contained"
              >
                View More Friends
              </Button>
            </Link>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Dogs;
