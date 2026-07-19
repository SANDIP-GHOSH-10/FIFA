import Match from "../model/match-model.js";
import Team from "../model/teams-model.js";

const matchController = {};

// Create Match
matchController.createMatch = async (req, res) => {
  try {
    const { teamAId, teamBId } = req.body;

    if (!teamAId || !teamBId) {
      return res.status(400).json({
        message: "Both Team A and Team B are required",
      });
    }

    if (teamAId === teamBId) {
      return res.status(400).json({
        message: "Please select two different teams",
      });
    }

    const teamA = await Team.findById(teamAId);
    const teamB = await Team.findById(teamBId);

    if (!teamA || !teamB) {
      return res.status(404).json({
        message: "Team not found",
      });
    }

    const title = `${teamA.name} vs ${teamB.name}`;

    const match = await Match.create({
      title,
      teamAId: teamA._id,
      teamAName: teamA.name,
      teamAScore: 0,

      teamBId: teamB._id,
      teamBName: teamB.name,
      teamBScore: 0,
    });

    res.status(201).json(match);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

// Get all matches
matchController.getMatch = async (req, res) => {
  try {
    const matches = await Match.find();
    res.status(200).json(matches);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching matches",
      error: err.message,
    });
  }
};

// Get match by ID
matchController.getMatchById = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);

    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }

    res.status(200).json(match);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching match",
      error: err.message,
    });
  }
};

// Update match scores
matchController.updateMatchScores = async (req, res) => {
  try {
    const { teamAScore, teamBScore } = req.body;

    const match = await Match.findById(req.params.id);

    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }

    match.teamAScore = teamAScore;
    match.teamBScore = teamBScore;

    await match.save();

    res.status(200).json(match);
  } catch (err) {
    res.status(500).json({
      message: "Error updating match scores",
      error: err.message,
    });
  }
};

export default matchController;