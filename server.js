require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

const app = express();
const port = process.env.PORT || 5000;
let uri = process.env.ATLAS_URI

// register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes require
const Products = require('./routes/Products');
const Contacts = require('./routes/Contacts');
const Users = require('./routes/usersRouter');

app.use("/api/products", Products);
app.use("/contacts", Contacts);
app.use("/users", Users);

// app.use('/api', ApiRouter);

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI;  // connection string for Atlas here  
} else {
  // uri = "mongodb://localhost/userdb"
  uri = process.env.ATLAS_URI;  // connection string for localhost mongo here  
}

// connection to database
mongoose.connect(uri, { useNewUrlParser: true, 
                        useCreateIndex: true, 
                        useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection is live");
}).once('error', (err) => {
  console.log('i had an error trying to connect to the db', err);
})

// Creating live connection to reactjs app
// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.get("*", function(req, res) {
    res.send('currently serving fallback url, please check your path');
  });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
