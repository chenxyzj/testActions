const express = require("express");
const APPID = 80;  //process.env.APPID;
const app = express();

app.get("/",(req,res) => 
 res.send(`APPID: ${APPID} 主页!`));

app.get("/app1",(req,res) => 
 res.send(`APPID: ${APPID} app1's page.`));

app.get("/app2",(req,res) => 
 res.send(`APPID: ${APPID} app2's page.`));

 app.get("/app3",(req,res) => 
 res.send(`APPID: ${APPID} app3's page.`));

app.listen(APPID,() => console.log(`${APPID} is listening on port ${APPID}...`));
