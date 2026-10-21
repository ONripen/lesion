
const express = require("express");
const multer = require("multer");

//file upload
const uploads_folder = "./uploads";

//prepar the final multer upload object
var upload = multer({dest:uploads_folder});
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
    });  
    
    app.post("/", upload.array("value",4), (req, res)=>{
    res.send('I am successfully uploaded');
});

//application route

app.post("/", upload.array("value",4), (req, res)=>{
    res.send('Successfully');
});

app.listen(3000,() =>{
console.log("server is running at http://localhost:3000");
});


