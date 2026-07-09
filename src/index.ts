import app from "./app";

import dotenv from "dotenv";
import dns from "node:dns";
import connectToDB from "./config/db";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config({
    path: "./.env",
    quiet: true,
});
const port = Number(process.env.PORT) || 4001;

connectToDB()
.then(() => {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  server.on("error", (error) => {
    console.log("Server Error: ", error);
    throw error;
  });
}).catch((error) => {
   console.log(`MongoDB connection failed`, error);
});