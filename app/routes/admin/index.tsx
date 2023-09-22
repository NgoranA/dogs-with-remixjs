import Avatar from "@mui/material/Avatar/index.js";
import Button from "@mui/material/Button/index.js";
import TextField from "@mui/material/TextField/index.js";
import FormControlLabel from "@mui/material/FormControlLabel/index.js";
import Checkbox from "@mui/material/Checkbox/index.js";
import Box from "@mui/material/Box/index.js";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined.js";
import Typography from "@mui/material/Typography/index.js";
import Container from "@mui/material/Container/index.js";

export default function Login() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
  };

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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 3, mb: 20 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="usernale"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
