import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        display: "flex",
        alignItems: "center",
        py: 5,
      }}
    >
      <Container maxWidth="md">
        <Card
          elevation={10}
          sx={{
            borderRadius: 4,
            p: 4,
            textAlign: "center",
          }}
        >
          <CardContent>
            <SportsSoccerIcon
              sx={{
                fontSize: 80,
                color: "success.main",
                mb: 2,
              }}
            />

            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              FIFA Scoreboard App
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Manage football teams, create exciting matches, and keep track of
              live scores in one place.
            </Typography>

            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                p: 3,
                borderRadius: 3,
                mb: 4,
              }}
            >
              <Typography variant="body1" sx={{ mb: 2 }}>
                ⚽ Add your favorite football teams.
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                🏆 Schedule matches between teams.
              </Typography>

              <Typography variant="body1">
                📊 Update and monitor scores in real time.
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
            >
              <Button
                component={Link}
                to="/team"
                variant="contained"
                color="success"
                size="large"
                startIcon={<GroupsIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                }}
              >
                Create Teams
              </Button>

              <Button
                component={Link}
                to="/match"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<EmojiEventsIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                }}
              >
                Create Matches
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}













// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div>
//       <h1>FIFA APP</h1>
//       <p>Welcome to the FIFA App! This application allows you to manage teams, matches, and scores for your favorite football teams. You can add new teams, create matches between teams, and record scores for each match.</p>
//       <p>To get started, navigate to the Team page to add teams, then go to the Match page to create matches between those teams. Finally, you can view and update scores for each match on the Score page.</p>
//       <Link to="/team"><button>Create Teams</button></Link>
//       <Link to="/match"><button>Create Matches</button></Link>
//     </div>
//   );
// }
   