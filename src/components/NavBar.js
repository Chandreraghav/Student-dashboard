import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";

export default function NavBar({ profile }) {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#6A5ACD" }} elevation={2}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student Dashboard
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body2" sx={{ display: { xs: "none", sm: "block" } }}>
            {profile?.name || "Guest"}
          </Typography>
          <Avatar src={profile?.photo || ""} alt={profile?.name || "S"} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
