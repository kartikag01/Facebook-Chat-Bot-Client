let express = require('express');
let path    = require('path');
let app     = express();
//static file
app.use('/', express.static(path.join(__dirname, '../build')));

app.listen(8789, function () {
    console.log('Workex app listening on port 8789!');
});


