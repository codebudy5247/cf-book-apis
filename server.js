const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db")

//BodyParser
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
//CORS
app.use(cors())

//.env
dotenv.config();
//Connect to DB.
connectDB()

app.get("/", (req, res) => {
  res.send("APIs Up && running");
});

//Routes
app.use('/api/subscription',require('./subscribedUser.route'))

//PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running at port:${port}`);
});
