const express= require("express");
const app = express();
const port = 9900;

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

app.get("/getRestaurants",(req, res) =>{
    let restaurantDeails ;
    for (let a of restaurantsData.restaurants) {
        if (a.name === req.query.restaurants) {
            restaurantDeails=a;
        }
    }
    res.send(restaurantDeails);
});

app.listen(port,() => {
    console.log('App is listening on port ',port);
}
);



