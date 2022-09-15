import * as React from "react";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";
import Copyright from "./Copyright";
import Navigation from "../src/components/Appbar";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navigation />
        {children}
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
