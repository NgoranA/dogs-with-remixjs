import * as React from "react";
import { Link } from "remix";
import type { MetaFunction } from "remix";
import {
  Grid,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import d8 from "../../public/vv.jpg";
import Layout from "~/src/Layout";

export const meta: MetaFunction = () => {
  return {
    title: "About Dogs At Home",
    // description: 'Welcome to remix!',
  };
};

export default function About() {
  const matchesLit = useMediaQuery("(max-width : 599px)");
  return (
    <React.Fragment>
      <Layout>
        <Container
          maxWidth="lg"
          sx={{
            marginTop: "3em",
          }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            About Us
          </Typography>
          <Grid container>
            <Grid item md={6}>
              <img
                src={d8}
                style={{ height: matchesLit ? 310 : 500, marginBottom: "3em" }}
                alt="dog"
              />
            </Grid>
            <Grid item md={6} container sx={{ mb: "3em" }} direction="column">
              <Grid item>
                <Typography textAlign="center" gutterBottom variant="h5">
                  We have been a puppy breeder for two decades – providing
                  puppies for people to love as a member of their own family. We
                  pride ourselves on
                  <span>
                    the health and happiness of our puppies and believe that
                    superior parents, high quality nutrition and a clean
                    environment are essential for the very best in health, type
                    and temperament.
                  </span>
                </Typography>
                <Grid item>
                  <Typography textAlign="center" variant="h5">
                    Our stock has been carefully chosen to ensure clean genetic
                    lines and even temperaments. All of Our breeding stock are{" "}
                    <em>purebreed AKC registered</em> that are an excellent
                    representation of the breed.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
