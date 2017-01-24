const express = require('express');
var app = express();
const multer = require('multer');
var upload = multer();

app.use(function(req, res, next) {
   console.log(`Incoming Request.Method: ${req.method}`); 
   console.log(`Incoming Request.URL: ${req.url}`);
   next();
});

app.use(express.static("public_html"));

app.post("/file-upload", upload.single('file'), function(req, res, err) {
   console.log(`Incoming Request.method: ${req.method}`);
   
   res.json({
       "file-size": req.file.size
       }
    );
});

app.use(function(err, req, res, next) {
   console.log(err.stack);
   res.status(500).send("<h2>Something went wrong!</h2>");
});

app.listen(process.env.PORT || 8080);
console.log("Server is running");
