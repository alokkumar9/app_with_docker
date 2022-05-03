const express = require("express");
const app = express();
const port =process.env.port||3000;
const todos = require("./routes/todos");

app.use('/api/todos',todos);

// app.get('/', (req, res) => {
//   res.send('GET request to the homepage')
// });


app.listen(port,err => {
if(err){
  return console.log("ERROR",err);
}
console.log("Listening on port ${port}");
});