var express = require('express');
var app = express();

// 다른 파일에 있는 설정을 여기서 함 
//var router = require('./router/main')(app);

//app.set("views", __dirname + "/views");
//app.set("view engine", "ejs");
//app.engine("html", require("ejs").renderFile);

// express서버에서 리액트 앱을 볼수있게 설정 
const path = require("path"); 
const port = process.env.PORT || 5000; 
app.use(express.static(path.join(__dirname + "/client/build")));

app.use("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/client/build", "index.html"));
});

app.listen(port, function() {
  console.log("server has started on port:" + port);
});




//var server = app.listen(3000, function(){^^i
//    console.log("Express server has started on port 3000")
//})
