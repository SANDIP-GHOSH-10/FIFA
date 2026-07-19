import { Schema, model } from "mongoose";

const matchSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    teamAId: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },

    teamAName: {
      type: String,
      required: true,
    },

    teamAScore: {
      type: Number,
      default: 0,
    },

    teamBId: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },

    teamBName: {
      type: String,
      required: true,
    },

    teamBScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Match = model("Match", matchSchema);

export default Match;