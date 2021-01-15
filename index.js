//const express = require('express')  // require은 node module을 어디로부터 가져오는 것
import express from "express";
const app = express()

const PORT = 5000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");  // arrow function

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(5000, handleListening);