import { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function MatchForm({ addMatch }) {
  const [teamNames, setTeamNames] = useState([]);

  const [formData, setFormData] = useState({
    teamAId: "",
    teamBId: "",
  });

  useEffect(() => {
    axios
      .get("https://fifa-qa7i.onrender.com/api/teams")
      .then((res) => setTeamNames(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "teamAId") {
      setFormData({
        teamAId: value,
        teamBId: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.teamAId || !formData.teamBId) {
      alert("Please select both teams.");
      return;
    }

    addMatch(formData);

    setFormData({
      teamAId: "",
      teamBId: "",
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Select two different football teams to create a match.
      </Typography>

      <Stack spacing={3}>
        {/* Team A */}
        <FormControl fullWidth>
          <InputLabel>Team A</InputLabel>

          <Select
            name="teamAId"
            value={formData.teamAId}
            label="Team A"
            onChange={handleChange}
          >
            {teamNames.map((team) => (
              <MenuItem key={team._id} value={team._id}>
                <SportsSoccerIcon
                  sx={{ mr: 1, fontSize: 18 }}
                />
                {team.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Team B */}
        <FormControl fullWidth disabled={!formData.teamAId}>
          <InputLabel>Team B</InputLabel>

          <Select
            name="teamBId"
            value={formData.teamBId}
            label="Team B"
            onChange={handleChange}
          >
            {teamNames
              .filter((team) => team._id !== formData.teamAId)
              .map((team) => (
                <MenuItem key={team._id} value={team._id}>
                  <SportsSoccerIcon
                    sx={{ mr: 1, fontSize: 18 }}
                  />
                  {team.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="success"
          size="large"
          fullWidth
          startIcon={<EmojiEventsIcon />}
          sx={{
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Create Match
        </Button>
      </Stack>
    </Box>
  );
}













// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function MatchForm({ addMatch }) {
//   const [teamNames, setTeamNames] = useState([]);

//   const [formData, setFormData] = useState({
//     teamAId: "",
//     teamBId: "",
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:3030/api/teams")
//       .then((res) => setTeamNames(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "teamAId") {
//       // Reset Team B whenever Team A changes
//       setFormData({
//         teamAId: value,
//         teamBId: "",
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.teamAId || !formData.teamBId) {
//       alert("Please select both teams.");
//       return;
//     }

//     addMatch(formData);

//     setFormData({
//       teamAId: "",
//       teamBId: "",
//     });
//   };

//   return (
//     <>
//     <h2>Create Match Form</h2>
//     <form onSubmit={handleSubmit}>
       
//       <select
//         name="teamAId"
//         value={formData.teamAId}
//         onChange={handleChange}
//       >
//         <option value="">Select Team A</option>

//         {teamNames.map((team) => (
//           <option key={team._id} value={team._id}>
//             {team.name}
//           </option>
//         ))}
//       </select>

       
//       <select
//         name="teamBId"
//         value={formData.teamBId}
//         onChange={handleChange}
//         disabled={!formData.teamAId}
//       >
//         <option value="">
//           {formData.teamAId ? "Select Team B" : "Select Team A First"}
//         </option>

//         {teamNames
//           .filter((team) => team._id !== formData.teamAId)
//           .map((team) => (
//             <option key={team._id} value={team._id}>
//               {team.name}
//             </option>
//           ))}
//       </select>

//       <button type="submit">Create Match</button>
//     </form>
//     </>
    
//   );
// }