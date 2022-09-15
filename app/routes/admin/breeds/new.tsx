import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import type { ActionFunction } from "remix";
import { redirect } from "remix";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const userId = "3d48ffdd-3e88-480b-8716-cd177a6f0f5e";

  if (typeof title !== "string" || typeof description !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { title, description, userId };

  await db.breed.create({ data: fields });
  return redirect("/admin/breeds/new");
};

export default function NewBreed() {
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
          New Breed
        </Typography>
        <Box component="form" method="post" noValidate sx={{ mt: 3, mb: 20 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Breed Title"
            name="title"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="Breed Description"
            type="description"
            id="description"
          />
          <Button
            type="reset"
            variant="text"
            sx={{ mt: 3, mb: 2, color: "primary.light" }}
          >
            cancel
          </Button>
          <Button
            startIcon={<AddCircleOutlineIcon />}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add New Breed
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
