const express = require("express")
const bountyRouter = exress.Router()
const { v4: uuidv4 } = require("uuid")

const bounties = [
    { firstName: "Luke", lastName:"Skywalker", alive:true, bounty:20000, type:"jedi", _id: uuidv4() }
]