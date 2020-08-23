const express = require('express');
var favicon = require('serve-favicon')
const app = express();
app.use(express.static(__dirname + '/dist/portfolio'));
app.use(favicon(__dirname + '/dist/portfolio/favicon.ico'));

//PathLocationStrategy
app.get('/*',function(req, res){
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'))
})

app.listen(process.env.PORT || 8080);
