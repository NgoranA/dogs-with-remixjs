import React from "react";
import Paper from "@mui/material/Paper/index.js";
import Button from "@mui/material/Button/index.js";
import Typography from "@mui/material/Typography/index.js";
import Grid from "@mui/material/Grid/index.js";
import Container from "@mui/material/Container/index.js";

import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact.js";

import dog from "../../../public/dog.jpg";
import useMediaQuery from "@mui/material/useMediaQuery/index.js";
import Link from "@mui/material/Link/index.js";
function Welcome() {
  const matchesLit = useMediaQuery("(max-width : 500px)");
  return (
    <>
      <Paper
        sx={{
          height: "450px",
          backgroundImage: `url(${dog})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          mb: "3em",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            textAlign={matchesLit ? "center" : undefined}
            container
            direction="column"
            sx={{ paddingTop: "2em" }}
          >
            <Grid item sm={5}>
              <Typography variant="h4">Your Most Adorable </Typography>
            </Grid>
            <Grid item sm={5}>
              <Typography variant="h3">Friend </Typography>
            </Grid>
            <Grid item sm={5}>
              <Typography variant="body1">
                Bringing to your Doorstep a friend you can love dearly and not
                be lonely.
              </Typography>
            </Grid>
            <Grid item sm={5}>
              <Link href="/contact" sx={{ textDecoration: "none" }}>
                <Button
                  startIcon={<ConnectWithoutContactIcon color="secondary" />}
                  sx={{
                    height: "3.5em",
                    borderRadius: "50px",
                    borderWidth: "2px",
                    width: "12em",
                    color: "white",
                    textTransform: "none",
                    backgroundColor: "primary",
                    marginTop: "3em",
                  }}
                  variant="contained"
                >
                  Connect with us
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default Welcome;
