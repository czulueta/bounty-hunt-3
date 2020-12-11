const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const bounties = [
    { firstName: "Luke", lastName:"Skywalker", alive:true, bounty:500000, type:"jedi", _id: uuidv4() },
    { firstName: "Han", lastName:"Solo", alive:true, bounty:10000, type:"jedi", _id: uuidv4() },
    { firstName: "Minch", lastName:"Yoda", alive:true, bounty:1000000, type:"jedi", _id: uuidv4() },
    { firstName: "Anakin", lastName:"Skywalker", alive:true, bounty:900000, type:"sith", _id: uuidv4() },
    { firstName: "Chew", lastName:"Bacca", alive:true, bounty:400000, type:"jedi", _id: uuidv4() }
]

bountyRouter.route("/")
    .get((req,res) => {
        res.send(bounties)
})
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
})
bountyRouter.get("/search/type", (req, res) => {
    const type = req.query.type 
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBounties)
})
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId 
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty) 
})
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty = bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully found another Bounty!!!")
})
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId 
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId) 
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})
module.exports = bountyRouter