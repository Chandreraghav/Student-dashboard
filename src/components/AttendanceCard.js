import React, { useMemo } from "react";
import { Card, CardHeader, CardContent, Grid, TextField, Typography, Chip } from "@mui/material";

export default function AttendanceCard({ attendance, setAttendance }) {
  const percent = useMemo(() => {
    if (!attendance.total) return 0;
    return (attendance.attended / attendance.total) * 100;
  }, [attendance]);

  function update(field, value) {
    const v = Number(value || 0);
    setAttendance(prev => ({ ...prev, [field]: v }));
  }

  const status = percent >= 75 && attendance.total > 0 ? { label: "OK", color: "success" } : { label: "Low Attendance", color: "error" };

  return (
    <Card>
      <CardHeader title="Attendance" subheader="Enter total & attended classes" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Total Classes" type="number" value={attendance.total} onChange={(e) => update("total", e.target.value)} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Attended" type="number" value={attendance.attended} onChange={(e) => update("attended", e.target.value)} />
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <div>
              <Typography variant="subtitle1">{percent.toFixed(2)}%</Typography>
              <Chip label={status.label} color={status.color} />
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
