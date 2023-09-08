const express = require("express")
const app = express();

app.get('/',(req,res) => {
    res.send("jake and andy are cool");
});

app.listen(4000, () =>{
    console.log("listening to port 4000")
});

export default app