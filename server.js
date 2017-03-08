var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 2003;
var publicPath = path.resolve(__dirname, 'app');

app.use(express.static(publicPath));

// Always serve index.html, let React handle routes
app.use(function (req, res) {
  res.sendFile(publicPath + '/index.html');
})

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
