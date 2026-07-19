import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const TeamForm = ({ addTeam }) => {
  const [teamName, setTeamName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!teamName.trim()) return;

    addTeam(teamName);
    setTeamName("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Enter the name of a football team to add it to the tournament.
      </Typography>

      <Stack spacing={3}>
        <TextField
          fullWidth
          label="Team Name"
          placeholder="e.g. Real Madrid"
          variant="outlined"
          value={teamName}
          required
          onChange={(e) => setTeamName(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="success"
          size="large"
          startIcon={<AddCircleIcon />}
          sx={{
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Add Team
        </Button>
      </Stack>
    </Box>
  );
};

export default TeamForm;














// import { useState } from "react";

// const TeamForm = ({ addTeam }) => {
//   const [teamName, setTeamName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!teamName.trim()) return;
//     addTeam(teamName);
//     setTeamName("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter Team Name"
//         value={teamName}
//         onChange={(e) => setTeamName(e.target.value)}
//       />

//       <button type="submit">Add Team</button>
//     </form>
//   );
// };

// export default TeamForm;