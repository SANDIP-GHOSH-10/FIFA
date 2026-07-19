import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import fifaDB from "./config/db.js";
import teamsController from "./controller/teams-controller.js";
import { teamsSchema } from "./validations/team-validation-schema.js";
import { checkSchema } from "express-validator";

import matchController from "./controller/match-controller.js";

const app = express();
const PORT = process.env.PORT || 3030;


app.use(cors());
app.use(express.json());
fifaDB();

//team related api

app.post('/api/teams', checkSchema(teamsSchema), teamsController.createTeam);
app.get('/api/teams', teamsController.getTeam);

//match related api

app.post('/api/matches', matchController.createMatch);
app.get('/api/matches', matchController.getMatch);
app.get('/api/matches/:id', matchController.getMatchById);
app.put('/api/matches/:id', matchController.updateMatchScores);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})