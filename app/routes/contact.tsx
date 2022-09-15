import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import world from "../../public/world.svg";
import Layout from "~/src/Layout";
import useMediaQuery from "@mui/material/useMediaQuery";

function ContactUs() {
  const matchesLit = useMediaQuery("(max-width : 599px)");
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#D7D8DA",
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
      h2: {
        fontFamily: "Noto-Serif-Display",
        fontWeight: 900,
      },
    },
  });

  return (
    <>
      <Layout>
        <ThemeProvider theme={theme}>
          <Paper square>
            <Container maxWidth="md">
              <Grid container direction="column" spacing={3}>
                <Grid item container alignContent="center" direction="column">
                  <Grid item>
                    <Grid item>
                      <Typography variant="h2" color="primary" gutterBottom>
                        Reach Out
                      </Typography>
                    </Grid>
                    <Grid container item>
                      <Grid item>
                        <PhoneInTalkIcon sx={{ mr: "1em" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" gutterBottom>
                          Phone: +8768767367672
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item>
                      <Grid item>
                        <MailIcon sx={{ mr: "1em" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" gutterBottom>
                          Email:{" "}
                          <span style={{ color: "#28561D" }}>
                            info@info.com
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item>
                      <Grid item>
                        <MyLocationIcon sx={{ mr: "1em" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" gutterBottom>
                          Adress: +8768767367672
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction={matchesLit ? "column" : "row"}
                  item
                  spacing={2}
                >
                  <Grid container direction="column" spacing={2} item sm={6}>
                    <Grid item>
                      <TextField
                        id="Name"
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="email"
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="city"
                        label="Your City"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="petname"
                        label="Pet Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      id="description"
                      label="Description"
                      variant="outlined"
                      fullWidth
                      multiline
                      minRows={10}
                    />
                  </Grid>
                </Grid>
                <Grid item container alignItems="flex-end" sx={{ mb: "4em" }}>
                  <Button
                    endIcon={<ArrowUpwardIcon />}
                    sx={{ textTransform: "none", ml: "auto", height: "40px" }}
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default ContactUs;
