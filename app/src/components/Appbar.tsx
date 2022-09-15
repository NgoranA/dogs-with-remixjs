import React from "react";

import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Link from "@mui/material/Link";
import {
  styled,
  alpha,
  createTheme,
  useTheme,
  ThemeProvider,
} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputBase from "@mui/material/InputBase";

import PestControlIcon from "@mui/icons-material/PestControl";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PetsIcon from "@mui/icons-material/Pets";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import logo from "../../../public/logo.svg";
import { Box, Menu, MenuItem } from "@mui/material";

function Navigation() {
  const theme = useTheme();
  // const matches = useMediaQuery("(min-width : 500px)");
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesDown = useMediaQuery(theme.breakpoints.up("md"));
  // const matchesDown = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const matchXs = useMediaQuery("(max-width: 281px)");
  const matchesLit = useMediaQuery("(max-width : 599px)");

  const pages = [
    {
      label: "Pet Insurance",
      link: "/",
      icon: (
        <GppGoodOutlinedIcon
          fontSize="small"
          color="primary"
          sx={{ marginRight: "5px" }}
        />
      ),
    },
    {
      label: "Flea Subscription",
      link: "/",
      icon: (
        <PestControlIcon
          fontSize="small"
          color="primary"
          sx={{ marginRight: "5px" }}
        />
      ),
    },
    {
      label: "Groom Room",
      link: "/",
      icon: (
        <EmojiNatureIcon
          fontSize="small"
          color="primary"
          sx={{ marginRight: "5px" }}
        />
      ),
    },
    {
      label: "About Us",
      link: "/about",
      icon: (
        <InfoIcon
          fontSize="small"
          color="primary"
          sx={{ marginRight: "5px" }}
        />
      ),
    },
    {
      label: "Puppies Available",
      link: "/dogs",
      icon: (
        <PetsIcon
          fontSize="small"
          color="primary"
          sx={{ marginRight: "5px" }}
        />
      ),
    },
  ];

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    height: matchXs ? "35px" : "45px",
    color: "primary",
    borderRadius: "50px",
    backgroundColor: alpha(theme.palette.common.white, 1),
    width: matchXs ? "110px" : matchesLit ? "180px" : "auto",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(23),
      width: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(15),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      // width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" color="secondary">
        <Container maxWidth="xl">
          {!matchesLit && (
            <Link href="/">
              <img
                src={logo}
                alt="logo"
                style={{
                  height: "125px",
                  width: "100px",
                  position: "absolute",
                  zIndex: 1302,
                  margin: "1px 5px 0 0px",
                }}
              />
            </Link>
          )}

          <Toolbar
            variant="dense"
            sx={{
              "& .MuiToolbar-dense": {
                minHeight: "50px",
              },
            }}
          >
            <Container maxWidth={matchesLit ? false : "xl"}>
              <Grid
                container
                spacing={matches ? 0 : 3}
                sx={{ justifyContent: "center" }}
              >
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page.label}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.label}
                    </Button>
                  ))}
                </Box>
              </Grid>
            </Container>
          </Toolbar>
        </Container>
        <Toolbar
          sx={{ height: "6em", padding: "0", backgroundColor: "primary.main" }}
        >
          {/* <Container maxWidth={false}> */}
          <Grid
            container
            sx={{
              justifyContent: matchesLit ? "space-between" : "end",
            }}
          >
            {matchesLit && (
              <Grid item sm={2}>
                <Link href="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      height: matchXs ? "45px" : "80px",
                      width: matchXs ? "35px" : "65px",
                      position: "relative",
                      zIndex: 1302,
                      margin: "1px 5px 0 10px",
                    }}
                  />
                </Link>
              </Grid>
            )}

            <Grid item alignSelf="center" sm={7} md={8}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
            <Grid item alignSelf="center" sm={5} md={4}>
              <Grid
                container
                justifyContent={matchesDown ? "space-around" : "flex-end"}
              >
                <Grid item>
                  {matchesLit ? (
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                    >
                      <ShoppingBasketIcon
                        fontSize={matchesLit ? "small" : "medium"}
                        color="secondary"
                      />
                    </IconButton>
                  ) : (
                    <Button
                      startIcon={
                        <Badge
                          sx={{ marginRight: "3px" }}
                          badgeContent={4}
                          color="secondary"
                        >
                          <ShoppingBasketIcon color="secondary" />
                        </Badge>
                      }
                      sx={{
                        height: matchesDown ? "3.5em" : matches ? "3em" : "",
                        borderRadius: "50px",
                        borderWidth: "2px",
                        width: matchesDown ? "10em" : matches ? "7.1em" : "7em",
                        mr: matchesDown ? "2px" : "5px",
                        color: "white",
                        textTransform: "none",
                        border: "secondary",
                      }}
                      color="secondary"
                      variant="outlined"
                    >
                      {matchesDown ? "My Cart" : "Cart"}
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  <Link href="/contact" sx={{ textDecoration: "none" }}>
                    {matchesLit ? (
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <ConnectWithoutContactIcon color="secondary" />
                      </IconButton>
                    ) : (
                      <Button
                        startIcon={
                          <ConnectWithoutContactIcon sx={{ color: "white" }} />
                        }
                        sx={{
                          height: matchesDown ? "3.5em" : matches ? "3em" : "",
                          borderRadius: "50px",
                          borderWidth: "2px",
                          width: matchesDown
                            ? "10em"
                            : matches
                            ? "7.1em"
                            : "7em",
                          color: "white",
                          textTransform: "none",
                          backgroundColor: "primary.light",
                        }}
                        variant="contained"
                      >
                        {matchesDown ? "Contact Us" : "Contact"}
                      </Button>
                    )}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Container> */}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
