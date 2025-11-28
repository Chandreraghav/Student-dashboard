// import React, { useMemo } from "react";
// import { Card, CardHeader, CardContent, Grid, TextField, LinearProgress, Typography } from "@mui/material";

// export default function MarksCard({ marks, setMarks }) {
//   const total = useMemo(() => marks.reduce((s, m) => s + Number(m || 0), 0), [marks]);
//   const maxTotal = marks.length * 100;
//   const percent = maxTotal === 0 ? 0 : (total / maxTotal) * 100;

//   function update(idx, value) {
//     const v = Math.max(0, Math.min(100, Number(value || 0)));
//     const copy = [...marks];
//     copy[idx] = v;
//     setMarks(copy);
//   }

//   return (
//     <Card>
//       <CardHeader title="Marks" subheader="Auto-calculates total and percentage" />
//       <CardContent>
//         <Grid container spacing={2}>
//           {marks.map((m, i) => (
//             <Grid item xs={12} md={6} key={i}>
//               <TextField
//                 label={`Subject ${i + 1} (out of 100)`}
//                 fullWidth
//                 type="number"
//                 inputProps={{ min: 0, max: 100 }}
//                 value={m}
//                 onChange={(e) => update(i, e.target.value)}
//               />
//             </Grid>
//           ))}

//           <Grid item xs={12} sx={{ mt: 1 }}>
//             <Typography variant="subtitle2">Total: {total} / {maxTotal}</Typography>
//             <Typography variant="subtitle2">Percentage: {percent.toFixed(2)}%</Typography>
//             <LinearProgress variant="determinate" value={Math.min(100, percent)} sx={{ height: 10, borderRadius: 2, mt: 1 }} />
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

import React, { useMemo } from "react";
import { Card, CardHeader, CardContent, Grid, TextField, LinearProgress, Typography } from "@mui/material";

export default function MarksCard({ marks, setMarks }) {

  // Add 5 Subject Names Here
  const subjectNames = ["Hindi", "English", "Math", "Science", "Computer"];

  const total = useMemo(() => marks.reduce((s, m) => s + Number(m || 0), 0), [marks]);
  const maxTotal = marks.length * 100;
  const percent = maxTotal === 0 ? 0 : (total / maxTotal) * 100;

  function update(idx, value) {
    const v = Math.max(0, Math.min(100, Number(value || 0)));
    const copy = [...marks];
    copy[idx] = v;
    setMarks(copy);
  }

  return (
    <Card>
      <CardHeader title="Marks" subheader="Auto-calculates total and percentage" />
      <CardContent>
        <Grid container spacing={2}>
          {marks.map((m, i) => (
            <Grid item xs={12} md={6} key={i}>
              <TextField
                label={`${subjectNames[i]} (out of 100)`}
                fullWidth
                type="number"
                inputProps={{ min: 0, max: 100 }}
                value={m}
                onChange={(e) => update(i, e.target.value)}
              />
            </Grid>
          ))}

          <Grid item xs={12} sx={{ mt: 1 }}>
            <Typography variant="subtitle2">Total: {total} / {maxTotal}</Typography>
            <Typography variant="subtitle2">Percentage: {percent.toFixed(2)}%</Typography>
            <LinearProgress
              variant="determinate"
              value={Math.min(100, percent)}
              sx={{ height: 10, borderRadius: 2, mt: 1 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
