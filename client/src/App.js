import React, {useState, useEffect} from "react"
import axios from "axios"

function App() {
    const[bounties, setBountes] = useState([])

    function getBounties() {
        axios.get("/bounties")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return(
        <div>Bounty 3</div>
    )
}
export default App