import {
  Grid,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import d7 from "../../../public/7.png";
import theme from "../theme";

function AboutUs() {
  const matchesLit = useMediaQuery("(max-width : 599px)");

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginBottom: "5em",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ marginBottom: "1em" }}
          gutterBottom
        >
          {" "}
          About Us{" "}
        </Typography>
        <Grid
          container
          textAlign="center"
          direction={matchesLit ? "column" : "row"}
        >
          <Grid item sm={6}>
            <img src={d7} style={{ height: 300 }} alt="dog" />
          </Grid>
          <Grid item sm={6} container direction="column">
            <Grid item>
              <Typography variant="body1">
                We have been a puppy breeder for two decades – providing puppies
                for people to love as a member of their own family. We pride
                ourselves on
                <span style={{ color: "primary" }}>
                  The health and happiness of our puppies and believe that
                  superior parents, high quality nutrition and a clean
                  environment are essential for the very best in health, type
                  and temperament.
                </span>
                {/* Our stock has been carefully chosen to ensure clean genetic lines
              and even temperaments. All of Our breeding stock are{" "}
              <strong>purebreed AKC registered</strong> that are an excellent
              representation of the breed. */}
              </Typography>
            </Grid>
            <Grid item alignSelf={matchesLit ? "center" : "flex-end"}>
              <Link href="/about" sx={{ textDecoration: "none" }}>
                <Button
                  endIcon={
                    <ArrowForwardIcon
                      color="secondary"
                      sx={{ color: "primary.main" }}
                    />
                  }
                  sx={{
                    height: "3em",
                    borderRadius: "50px",
                    marginTop: "2em",
                    borderWidth: "2px",
                    color: "primary.main",
                    textTransform: "none",
                  }}
                  variant="outlined"
                >
                  Read More
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AboutUs;
