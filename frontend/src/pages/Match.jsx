import MatchForm from "../components/MatchForm";
import MatchList from "../components/MatchList";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export default function Match() {
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    axios
      .get("https://fifa-qa7i.onrender.com/api/matches")
      .then((res) => setMatches(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMatches();
  }, []);

  const addMatch = (matchData) => {
    axios
      .post("https://fifa-qa7i.onrender.com/api/matches", matchData)
      .then(() => {
        getMatches();
      })
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
          <SportsSoccerIcon sx={{ fontSize: 40, mr: 1, mb: "-6px" }} />
          Match Management
        </Typography>

        <Typography
          align="center"
          color="grey.300"
          sx={{ mb: 5 }}
        >
          Create matches between teams and manage your football tournament.
        </Typography>

        <Grid container spacing={4}>
          {/* Match List */}
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
                  Match List ({matches.length})
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <MatchList matches={matches} />
              </CardContent>
            </Card>
          </Grid>

          {/* Match Form */}
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
                  Create Match
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <MatchForm addMatch={addMatch} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


















// import MatchForm from "../components/MatchForm";
// import MatchList from "../components/MatchList";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Match() {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3030/api/matches")
//       .then((res) => setMatches(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const addMatch = (matchData) => {
//     axios
//       .post("http://localhost:3030/api/matches", matchData)
//       .then((res) => {
//         setMatches([...matches, res.data]);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       <h1>Match Page</h1>

//       <MatchForm addMatch={addMatch} />

//       <MatchList matches={matches} />
//     </>
//   );
// }