import {
  Avatar,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export default function TeamList({ teams }) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid #e0e0e0",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Team
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Team ID
            </TableCell>

            <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {teams.length > 0 ? (
            teams.map((team) => (
              <TableRow
                key={team._id}
                hover
                sx={{
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "success.main" }}>
                      <SportsSoccerIcon />
                    </Avatar>

                    <Typography fontWeight="600">
                      {team.name}
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {team._id}
                  </Typography>
                </TableCell>

                <TableCell align="center">
                  <Chip
                    label="Active"
                    color="success"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                <Typography
                  sx={{
                    py: 4,
                    color: "text.secondary",
                  }}
                >
                  ⚽ No teams available. Add your first team.
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}














// export default function TeamList({ teams }) {
//   return (
//     <div>
//       <h2>Team List</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Team ID</th>
//             <th>Team Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teams?.map((ele) => (
//             <tr key={ele._id}>
//               <td>{ele._id}</td>
//               <td>{ele.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
