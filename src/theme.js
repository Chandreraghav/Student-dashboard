import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" },
  },
  components: {
    MuiAppBar: { defaultProps: { elevation: 2 } }
  }
});

export default theme;
