import express from "express";

const app = express();

// app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "Hello World from server whith script start" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  try {
    console.log(
      `Server is running on port ${port} in url http://localhost:${port}`
    );
  } catch (error) {
    console.log(error);
  }
});
