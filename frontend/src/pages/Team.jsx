import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeamList from "../components/TeamList";
import TeamForm from "../components/TeamForm";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Team() {
  const [teams, setTeams] = useState([]);

  const getTeams = () => {
    axios
      .get("http://localhost:3030/api/teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTeams();
  }, []);

  const addTeam = (teamName) => {
    axios
      .post("http://localhost:3030/api/teams", { name: teamName })
      .then(() => getTeams())
      .catch((err) => console.log(err));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h3"
          align="center"
          color="white"
          fontWeight="bold"
          gutterBottom
        >
          <GroupsIcon sx={{ fontSize: 40, mr: 1, mb: "-6px" }} />
          Team Management
        </Typography>

        <Typography
          align="center"
          color="grey.300"
          sx={{ mb: 4 }}
        >
          Create football teams and prepare your FIFA tournament.
        </Typography>

        {/* Top Action Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: 3,
          }}
        >
          <Button
            component={Link}
            to="/match"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<EmojiEventsIcon />}
            disabled={teams.length < 2}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Create Matches
          </Button>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Left Side */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card
              elevation={10}
              sx={{
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  Registered Teams ({teams.length})
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <TeamList teams={teams} />
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              elevation={10}
              sx={{
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="success.main"
                  gutterBottom
                >
                  Add New Team
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <TeamForm addTeam={addTeam} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}




// import axios from 'axios'
// import { useState , useEffect} from "react";
// import TeamList from "../components/TeamList";
// import TeamForm from "../components/TeamForm";
// import { Link } from 'react-router-dom';

// export default function Team() {
//     const [teams, setTeams] = useState([]);

//     const getTeams = () => {
//     axios
//       .get("http://localhost:3030/api/teams")
//       .then((res) => {
//         setTeams(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getTeams();
//   }, []);

//   const addTeam = (teamName) => {
//     const newTeam = {
//       name: teamName,
//     };

//     axios
//       .post("http://localhost:3030/api/teams", newTeam)
//       .then((res) => {
//         console.log(res.data);

//         // Fetch updated data from database
//         getTeams();
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div>
//       <h1>Team Page</h1>
//       <Link to="/match">
//         <button>Create Match</button>
//       </Link>
//       <TeamList teams={teams}/>
//       <TeamForm addTeam={addTeam}/>
//     </div>
//   )
// }

