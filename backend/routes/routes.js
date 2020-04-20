const express = require("express");

const router = express.Router();
const models = require("../models");
const EscapeRoom = models.EscapeRoom;

router.get("/", (req, res, next) => {
  const result = {
    data: "The server is running",
    statusCode: 200,
  };

  res.status(200).json(result);
});

router.get("/escape-rooms", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  let result = {};
  await EscapeRoom.findAll()
    .then((response) => {
      result = {
        data: response,
        statusCode: 200,
      };
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log("Error fetching Rooms", err);
      res.status(500).json(result);
    });
});

exports.routeHandler = router;
