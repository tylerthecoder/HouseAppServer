const express = require('express');
const cors = require('cors');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const chores = require('./src/chore.js');
const { GetFriends, CheckPass } = require('./src/friends.js');

const app = express();
const publicDir = path.join(__dirname,'public');
const port = process.env.PORT || 1337;
app.use(express.static(publicDir))
app.use('/graphql', cors(), graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port);
module.exports = app;

//const bcrypt = require('bcrypt');

// app.get('/hash', (req,res) => {
//     bcrypt.hash(req.query.phrase,10)
//     .then(hash => res.end(hash))
// })

app.get("/login", (req,res) => {
    CheckPass(req,res)
})
