
import { Card, CardContent, CardHeader, TextField, Button, Avatar, Grid } from "@mui/material";

export default function ProfileCard({ profile, setProfile }) {
  function handleFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setProfile(prev => ({ ...prev, photo: r.result }));
    r.readAsDataURL(f);
  }

  return (
    <Card>
      <CardHeader title="Profile" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
            <Avatar src={profile.photo || ""} sx={{ width: 100, height: 100 }} />
            <Button variant="contained" component="label" size="small">
              Upload Photo
              <input hidden accept="image/*" type="file" onChange={handleFile} />
            </Button>
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField fullWidth label="Name" margin="dense" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
            <TextField fullWidth label="Roll Number" margin="dense" value={profile.roll} onChange={e => setProfile({ ...profile, roll: e.target.value })} />
            <TextField fullWidth label="Course" margin="dense" value={profile.course} onChange={e => setProfile({ ...profile, course: e.target.value })} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
