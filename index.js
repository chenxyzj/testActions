const express = require("express");
const APPID = 80;  //process.env.APPID;
const app = express();

app.get("/",(req,res) => 
 res.send(`APPID: ${APPID} 主页!`));

app.get("/app1",(req,res) => 
 res.send(`APPID: ${APPID} app1's page.`));

app.listen(APPID,() => console.log(`${APPID} is listening on port ${APPID}...`));
