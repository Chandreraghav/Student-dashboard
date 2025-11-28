import { Box, Container, Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";
import MarksCard from "./components/MarksCard";
import AttendanceCard from "./components/AttendanceCard";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [profile, setProfile] = useLocalStorage("sd_profile", { name: "", roll: "", course: "", photo: "" });
  const [marks, setMarks] = useLocalStorage("sd_marks", [0, 0, 0, 0, 0]);
  const [attendance, setAttendance] = useLocalStorage("sd_attendance", { total: 0, attended: 0 });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar profile={profile} />

      <Container maxWidth="lg" sx={{ py: 3, flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProfileCard profile={profile} setProfile={setProfile} />
          </Grid>

          <Grid item xs={12} md={6}>
            <MarksCard marks={marks} setMarks={setMarks} />
          </Grid>

          <Grid item xs={12}>
            <AttendanceCard attendance={attendance} setAttendance={setAttendance} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
