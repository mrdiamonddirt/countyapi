var fs=require('fs');
var data=fs.readFileSync('counties.json');
var counties=JSON.parse(data);
const express = require("express");
const app = express();
const cors=require('cors');

app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

app.use(express.static('public'));
app.use(cors());
app.get('/counties',alldata);
function alldata(request,response)
{
    response.send(counties);
}
app.get('/counties/:county/',searchElement);
function searchElement(request,response)
{
	var word=request.params.county;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(elements[word]);
	if(counties[word])
	{
		var reply=counties[word];
		
	}
	else
	{
		var reply={
			status:"Not Found"
		}
	}
    console.log(reply.boil);
	response.send(reply);

}