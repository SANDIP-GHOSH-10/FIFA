import Team from "../model/teams-model.js";

export const teamsSchema = {
  name: {
    exists: {
      errorMessage: "Name is required",
    },

    notEmpty: {
      errorMessage: "Name cannot be empty",
    },

    trim: true,

    escape: true,

    isLength: {
      options: { min: 2 },
      errorMessage: "Name must be at least 2 characters long",
    },

    custom: {
      options: async (value) => {
        const team = await Team.findOne({
          name: value.trim(),
        });

        if (team) {
          throw new Error("Team name already exists");
        }

        return true;
      },
    },
  },
};