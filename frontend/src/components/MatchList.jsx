import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MatchList({ matches }) {
  return (
    <Box>
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <Card
            key={match._id}
            elevation={3}
            sx={{
              mb: 2,
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: 8,
              },
            }}
          >
            <CardActionArea
              component={Link}
              to={`/score/${match._id}`}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <SportsSoccerIcon />
                    </Avatar>

                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                      >
                        {match.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Match #{index + 1}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Chip
                      label="Ready"
                      color="success"
                      size="small"
                    />

                    <ArrowForwardIcon color="primary" />
                  </Stack>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <Typography
          align="center"
          color="text.secondary"
          sx={{ py: 5 }}
        >
          ⚽ No matches created yet.
        </Typography>
      )}
    </Box>
  );
}














// import { Link } from "react-router-dom";
// export default function MatchList({ matches }) {
//     console.log("matches", matches);
    
//     return(
//         <div>
//             <h2>Match List</h2>
//             {matches.map((match) => (
//                 <div key={match._id}>
//                     <Link to={`/score/${match._id}`}><p>{match.title}</p></Link>
//                 </div>
//             ))}
//         </div>
//     )
// }