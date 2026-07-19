import Team from "../model/teams-model.js";
import { validationResult } from "express-validator";
const teamController = {}

//create team
teamController.createTeam =(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {name} = req.body;
    const team = new Team ({
        name : name
    })
    team
        .save()
        .then(()=>{
            res.status(201).json(team)
        })
        .catch((err)=>{
            res.status(500).json({message: "Error creating team", error: err})
        })
}

//read team
teamController.getTeam =(req,res)=>{
    Team.find()
        .then((teams)=>{
            res.status(200).json(teams)
        })
        .catch((err)=>{
            res.status(400).json({message: "Error creating team", error: err})
        })
}


export default teamController;