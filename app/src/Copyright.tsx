import * as React from "react";
import Typography from "@mui/material/Typography/index.js";
import Container from "@mui/material/Container/index.js";
import Paper from "@mui/material/Paper/index.js";
import Grid from "@mui/material/Grid/index.js";
import Button from "@mui/material/Button/index.js";
import Link from "@mui/material/Link/index.js";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";

import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact.js";

import logo from "../../public/logo.svg";
import useMediaQuery from "@mui/material/useMediaQuery/index.js";

export default function Copyright() {
  const matchesLit = useMediaQuery("(max-width : 599px)");
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#28561D",
            boxShadow: "none",
            borderRadius: "0",
            // height: "15em",
          },
        },
      },
    },
    palette: {
      secondary: {
        main: "#D7D8DA",
      },
      primary: {
        main: "#28561D",
        light: "#56A840",
      },
    },
    typography: {
      h4: {
        fontFamily: "Roboto",
        fontWeight: 700,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <Container maxWidth="lg">
            <Grid container direction="column">
              <Grid
                item
                container
                alignItems="center"
                direction={matchesLit ? "column" : "row"}
              >
                <Grid item sm={4}>
                  <Link href="/">
                    <img
                      src={logo}
                      alt="logo"
                      style={{
                        height: matchesLit ? "75px" : "125px",
                        width: matchesLit ? "55px" : "100px",
                        // position: "absolute",
                        // zIndex: 1302,
                        // margin: "1px 5px 0 100px",
                      }}
                    />
                  </Link>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  item
                  sm={4}
                  textAlign="center"
                >
                  <Grid item>
                    <Typography color="secondary" variant="h4">
                      Why Choose Us
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="secondary" variant="body2">
                      Healthy Puppies
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="secondary" variant="body2">
                      Friendly, Curious, Spunky
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="secondary" variant="body2">
                      Family Dog
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="column"
                  alignItems={matchesLit ? "center" : "flex-end"}
                  item
                  sm={4}
                >
                  <Grid item sx={{ marginTop: matchesLit ? "2em" : undefined }}>
                    <Typography variant="body2" color="secondary" gutterBottom>
                      Reach Out to Us.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link href="/contact" sx={{ textDecoration: "none" }}>
                      <Button
                        startIcon={
                          <ConnectWithoutContactIcon color="secondary" />
                        }
                        sx={{
                          height: "3em",
                          borderRadius: "50px",
                          color: "white",
                          textTransform: "none",
                          backgroundColor: "primary.light",
                        }}
                        variant="contained"
                      >
                        Connect with us
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mt: matchesLit ? "2em" : undefined }}>
                <Typography
                  variant="body1"
                  sx={{ mt: "2em" }}
                  color="secondary"
                  align="center"
                >
                  {"Copyright © "}
                  <Link
                    color="secondary"
                    href="#"
                    sx={{ textDecoration: "none" }}
                  >
                    Our pets
                  </Link>{" "}
                  {new Date().getFullYear()}.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  );
}
