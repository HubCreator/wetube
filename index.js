//const express = require('express')  // require은 node module을 어디로부터 가져오는 것
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express()

const PORT = 5000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");  // arrow function

const betweenHome = (req, res, next) => {
    console.log("I'm between");
    next();
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", betweenHome, handleHome);
app.get("/profile", handleProfile);

app.listen(5000, handleListening);