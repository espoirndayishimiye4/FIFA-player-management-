const Player = require('../models/players')

const getAllPlayer = async (req, res, next) =>{
    try {
        const player = await Player.find()
        res.status(200).json({
            success:true,
            data:player
        })
    } catch (error) {
        next(error)
    }
    
}
const createPlayer = async (req, res, next) =>{
    try {
        const player = new Player(req.body)
        const newplayer = await player.save()
        res.status(200).json({
        success:true,
        data:newplayer
    })
    } catch (error) {
       next(error) 
    }
    
}

const getOnePlayer = async (req, res, next) =>{
    try {
        const isplayerExist = await Player.findById(req.params._id)
        if(!isplayerExist) res.status(400).json({"message":"player not found"})
        else{
        const player = await Player.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:player
        })}
    } catch (error) {
        next(error)
    }
}
const deleteOnePlayer = async (req, res, next) =>{
    try {
        const isplayerExist = await Player.findById(req.params._id)
        if(!isplayerExist) res.status(400).json({"message":"player not found"})
        else{
        const player = await Player.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true
        })}
    } catch (error) {
        next(error)
    }
}
const updatePlayer = async (req, res, next) =>{
    try {
        const isplayerExist = await Player.findById(req.params._id)
        if(!isplayerExist) res.status(400).json({"message":"player not found"})
        const player = await Player.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:player
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllPlayer, createPlayer, getOnePlayer, deleteOnePlayer, updatePlayer}