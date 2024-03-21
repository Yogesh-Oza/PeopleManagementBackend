const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { connectDb } = require("./config/db");
const {
  createUser,
  updateUser,
  deleteUser,
  findUserById,
  findAllUsers,
} = require("./controller/personController");

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await connectDb();
  console.log("Server listening on port:", port);
});

app.post("/person", createUser);

app.put("/person/:id", updateUser);

app.delete("/person/:id", deleteUser);

app.get("/person/:id", findUserById);

app.get("/person", findAllUsers);
