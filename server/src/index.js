const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const middlewares = require("./middlewares");
const { Server } = require("socket.io");

require("dotenv").config();

//Sets up the database client to mongodb atlas instance in env file
const client = new MongoClient(process.env["ATLAS_URI"]);

//Sets up the server port from the env file
const SERVER_PORT = process.env["SERVER_PORT"];

//establish app as instance of express
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

//Variables
var collection;

//create server listening at port established in env file at SERVER_PORT
//connect to the DB messages document and grab the main-room collection on server start
const server = app.listen(SERVER_PORT, async () => {
  try {
    await client.connect();
    collection = client.db("messages").collection("main-room");
    console.log("Listening on port :%s...", SERVER_PORT);
  } catch (e) {
    console.error(e);
  }
});

//express (app) routes
app.get("/getAllMessages", async (request, response) => {
  try {
    let result = await collection.find({}).toArray();
    response.send(result);
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

//start up socket.io with the app instance
const io = require("socket.io")(server);

//socket io on connection functions
io.on("connect", (socket) => {
  socket.on("join", async (user) => {
    console.log("User joined");
    io.emit(user, " has joined the chat");
  });
  socket.on("message", async (message, user) => {
    socket.broadcast.emit(message);
    try {
      let result = await collection.insertOne({
        from: user,
        text: message,
        created_on: Date.now(),
      });
    } catch (e) {
      console.log(e.message);
    }
  });

  //routes for error handling and 404 not found
  app.use(middlewares.notFound);
  app.use(middlewares.errorHandler);
});
