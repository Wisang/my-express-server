const express = require("express");

const app = express();

app.get("/", function(request, response) {
  // console.log(request);
  response.send("Hello");
});

app.get("/about", function(req, res) {
  // console.log(request);
  res.send("<h1>Author: Wisang Eom<br>Job: Web Developer</h1>");
});

app.listen(3000, function() {
  console.log("server started at port 3000");
});
