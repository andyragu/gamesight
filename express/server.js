const express = require("express")
const app = express();

app.get('/',(req,res) => {
    res.send("jake and andy are cool");
});

app.listen(8000, () =>{
    console.log("Server stared on port 8000")
});

export default app