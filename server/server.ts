import express from "express";
import { createServer } from "http";
import socketIO from "socket.io";

const app = express();
const server = createServer(app);
const io = new socketIO.Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user baru terkoneksi");
  socket.on("roomsatu", (data) => {
    io.emit("message", data.post);
  });
});

server.listen(8000);
