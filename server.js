const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const links = require("./routes/api/links");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended:true
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect( db,{ useNewUrlParser: true,useUnifiedTopology: true ,useFindAndModify: false  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const db2="mongodb+srv://krish:krishna2018@freecluster0-dej6g.mongodb.net/EmployeeDB?retryWrites=true&w=majority"

  mongoose.connect( db2,{ useNewUrlParser: true,useUnifiedTopology: true ,useFindAndModify: false  })
  .then(() => console.log("MongoDB  links database successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/links",links);

if (process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(_dirname,'client','build','index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

