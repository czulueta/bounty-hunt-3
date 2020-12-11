const express = require("express")
const app = express()
const morgan = require("morgan")
const { v4: uuidv4 } = require("uuid")

app.use(express.json())
app.use(morgan("dev"))

app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(9000, () => {
    console.log("Server is running on port 9000")
})