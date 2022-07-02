import React, { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000", { transports: ["websocket"] });

const Index = () => {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const handlePost = (e: any) => {
    socket.emit("roomsatu", { post: name });
  };
  socket.on("message", (data: any) => {
    setList([...list, data]);
  });
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handlePost}>Send</button>

      {list.map((message, index) => {
        return (
          <div key={index}>
            <li>{message}</li>
          </div>
        );
      })}
    </>
  );
};

export default Index;
