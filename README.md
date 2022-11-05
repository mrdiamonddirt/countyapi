# UkCountiesDataAPI

This is a public JSON based API,which gives information about Uk Counties.Ideal to use in any of your Uk County Based related projects,feel free to make some amazing code project.

Base URL:
```
https://county-api.herokuapp.com/
```

## Endpoints
This Endpoint returns all the counties data at one time
```
https://county-api.herokuapp.com/counties
```

This End point returns JSON information about a specific county just search the county you want to return.
```
https://county-api.herokuapp.com/counties/:county
```

### Example URL:
```
https://county-api.herokuapp.com/counties/aberdeenshire
```
## Example Response
```
{"id":1,"country":"Scotland","Latitude":57.16666700034292,"Longitude":-2.6666669999999995,"othernames":["Aberdeenshire"]}
```