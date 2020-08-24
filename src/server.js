const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist/portfolio'));

//PathLocationStrategy
app.get('/*',function(req, res){
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'))
})

app.listen(process.env.PORT || 8080);
console.log("server started");
