var fs = require('fs');
   
// json file with the data
var data = fs.readFileSync('counties.json');
   
var counties = JSON.parse(data);
const express = require("express");
const app = express();
   
// To solve the cors issue
const cors=require('cors');
    
app.listen(process.env.PORT, 
    () => console.log("Server Start at the Port"));
    
app.use(express.static('public'));
app.use(cors());
  
// when get request is made, alldata() is called
app.get('/counties', alldata);
   
function alldata(request, response) {
       
    // Returns all information about the County
    response.send(counties);
}
  
app.get('/counties/:county/', searchcounties);
  
function searchcounties(request, response) {
    var word = request.params.county;
    word = word.charAt(0).toUpperCase()
        + word.slice(1).toLowerCase();
       
    if(counties[word]) {
        var reply = counties[word];         
    }
    else {
        var reply = {
            status:"Not Found"
        }
    }
       
    response.send(reply);
}