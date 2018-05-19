# DevConnector

Social media profile for developer

MERN Stack Front To Back Full Stack React, Redux & Node.js

-create mongodb at mlab.com
add new db
add new user to db
-npm init
npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator
npm i -D nodemon | -D --save-dev watch our dev dependencies update
server.js add script start - node server.js, server - nodemon server.js to automatic update
-npm run server at bash
-create folder config + file keys.js

-//db config
const db = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose
.connect(db)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
