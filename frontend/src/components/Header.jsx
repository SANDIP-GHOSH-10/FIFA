import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; 
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Teams",
      path: "/team",
      icon: <GroupsIcon />,
    },
    {
      name: "Matches",
      path: "/match",
      icon: <EmojiEventsIcon />,
    }
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg,#0f2027,#203a43,#2c5364)",
      }}
      elevation={5}
    >
      <Toolbar>
        {/* Logo */}
        <SportsSoccerIcon
          sx={{
            mr: 1,
            color: "#4caf50",
            fontSize: 35,
          }}
        />

        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          FIFA Scoreboard
        </Typography>

        {/* Navigation */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              to={item.path}
              color="inherit"
              startIcon={item.icon}
              sx={{
                px: 2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor:
                  location.pathname === item.path
                    ? "rgba(255,255,255,0.18)"
                    : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.12)",
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}