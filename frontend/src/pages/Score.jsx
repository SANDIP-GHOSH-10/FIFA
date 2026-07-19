import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function Score() {
  const { id } = useParams();

  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fifa-qa7i.onrender.com/api/matches/${id}`)
      .then((res) => {
        setMatchData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Team A Goal
  const handleClickTeamA = () => {
    if (!matchData) return;

    const updated = {
      ...matchData,
      teamAScore: matchData.teamAScore + 1,
    };

    setMatchData(updated);

    axios
      .put(`http://localhost:3030/api/matches/${id}`, updated)
      .catch((err) => console.log(err));
  };

  // Team B Goal
  const handleClickTeamB = () => {
    if (!matchData) return;

    const updated = {
      ...matchData,
      teamBScore: matchData.teamBScore + 1,
    };

    setMatchData(updated);

    axios
      .put(`http://localhost:3030/api/matches/${id}`, updated)
      .catch((err) => console.log(err));
  };

  // Reset Score
  const handleResetScore = () => {
    if (!matchData) return;

    const updated = {
      ...matchData,
      teamAScore: 0,
      teamBScore: 0,
    };

    setMatchData(updated);

    axios
      .put(`http://localhost:3030/api/matches/${id}`, updated)
      .catch((err) => console.log(err));
  };

  if (!matchData) return null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
        py: 5,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          color="white"
          fontWeight="bold"
          gutterBottom
        >
          <EmojiEventsIcon sx={{ fontSize: 40, mr: 1 }} />
          Live Score Board
        </Typography>

        <Typography
          align="center"
          color="grey.300"
          sx={{ mb: 5 }}
        >
          {matchData.title}
        </Typography>

        <Card
          elevation={10}
          sx={{
            borderRadius: 4,
          }}
        >
          <CardContent>
            <Grid container spacing={4} alignItems="center">
              {/* Team A */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={2} alignItems="center">
                  <SportsSoccerIcon
                    color="primary"
                    sx={{ fontSize: 60 }}
                  />

                  <Typography variant="h4" fontWeight="bold">
                    {matchData.teamAName}
                  </Typography>

                  <Typography
                    variant="h1"
                    color="primary"
                    fontWeight="bold"
                  >
                    {matchData.teamAScore}
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleClickTeamA}
                  >
                    ⚽ Goal
                  </Button>
                </Stack>
              </Grid>

              {/* Center */}
              <Grid size={{ xs: 12, md: 2 }}>
                <Stack alignItems="center">
                  <Typography
                    variant="h2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    VS
                  </Typography>

                  <Divider sx={{ width: "100%", my: 2 }} />
                </Stack>
              </Grid>

              {/* Team B */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={2} alignItems="center">
                  <SportsSoccerIcon
                    color="success"
                    sx={{ fontSize: 60 }}
                  />

                  <Typography variant="h4" fontWeight="bold">
                    {matchData.teamBName}
                  </Typography>

                  <Typography
                    variant="h1"
                    color="success.main"
                    fontWeight="bold"
                  >
                    {matchData.teamBScore}
                  </Typography>

                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    onClick={handleClickTeamB}
                  >
                    ⚽ Goal
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            {/* Action Buttons */}
            <Box
              sx={{
                mt: 5,
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              

              <Button
                variant="outlined"
                color="error"
                onClick={handleResetScore}
                startIcon={<RestartAltIcon />}
              >
                Reset Score
              </Button>

             
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}














// import axios from 'axios';
// import { useEffect , useState} from 'react';
// import { useParams } from 'react-router-dom';
// export default function Score() {
//     const { id } = useParams();
//     const [matchData, setMatchData] = useState(null);    
//     useEffect(()=>{
//         axios.get(`http://localhost:3030/api/matches/${id}`)
//         .then((res)=>{ 
//             console.log("match data", res.data);
//             setMatchData(res.data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }, [id])
    
//     const handleClickTeamA = () => {
//         if (matchData) {
//             const updatedMatchData = {
//                 ...matchData,
//                 teamAScore: matchData.teamAScore + 1,
//             };
//             setMatchData(updatedMatchData);
//             axios.put(`http://localhost:3030/api/matches/${id}`, updatedMatchData)
//                 .then((res) => {
//                     console.log("Updated match data:", res.data);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     }

//     const handleClickTeamB = () => {
//         if (matchData) {
//             const updatedMatchData = {
//                 ...matchData,
//                 teamBScore: matchData.teamBScore + 1,
//             };
//             setMatchData(updatedMatchData);
//             axios.put(`http://localhost:3030/api/matches/${id}`, updatedMatchData)
//                 .then((res) => {
//                     console.log("Updated match data:", res.data);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     }


//     return(
//         <div>
//             <h1>Score Page</h1>
//             <p>Match ID: {id}</p>
//             {matchData && (
//                 <div>
//                     <h2>{matchData.title}</h2>
//                     <h1>{matchData.teamAName} {matchData.teamAScore} -  {matchData.teamBScore}  {matchData.teamBName}</h1>
//                     <button onClick={handleClickTeamA}>Goal</button> <button onClick={handleClickTeamB}>Goal</button>
//                 </div>
//             )}
//         </div>
//     )
// }