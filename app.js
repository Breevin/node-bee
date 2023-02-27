const express= require("express");
const app = express();
const port = 8900;

const restaurantsData= require('./Json/restaurant.json');
const locationsData= require('./Json/location.json');
const mealtype= require('./Json/mealtype.json');
let cors = require("cors");

console.log(restaurantsData.restaurants[0].name)

app.use(cors());

app.get("/restaurants",(req, res) =>{
    res.send(restaurantsData);
});
app.get("/locations",(req, res) =>{
    res.send(locationsData);
});
app.get("/mealtype",(req, res) =>{
    res.send(mealtype);
});

app.listen(port,() => {
    console.log('App is listening on port ',port);
}
);

