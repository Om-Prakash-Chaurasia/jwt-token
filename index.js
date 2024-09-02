const express = require("express");
const jwt = require("jsonwebtoken");

const PORT = 3000;

const app = express();
const JWT_TOKEN = "secretKey";

app.post("/login", async (req, res) => {
  const user = {
    id: 1,
    username: "abcd",
    email: "abc@gmail.com",
  };

  jwt.sign({ user }, JWT_TOKEN, { expiresIn: "300s" }, (err, token) => {
    res.json({ token });
  });
});

app.post("/profile", verifyToken, (req, res) => {
  jwt.verify(req.token, JWT_TOKEN, (err, authData) => {
    if (err) {
      res.send({ result: "invalid token" });
    } else {
      res.json({
        message: "profile accessed",
        authData,
      });
    }
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({
      result: "Token is not valid",
    });
  }
}

// app.get("/", (req, res) => {
//   res.json({
//     message: "A simple api",
//   });
// });

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
