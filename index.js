
const express = require("express");
const bodyParser = require("body-parser");
let users = require("./state").users;
let products = require("./state").products;

const app = express();
app.use(bodyParser.json());

app.get("/users", (request, response)=>{
    response.send(users)
});

app.post("/users", (request, response, next)=>{
    let newUser = request.body
    users.push(newUser);
    response.json(newUser);
});

app.get("/users/:userId",function (request,response,next){
    response.json(users[request.params.userId]);
});
 
// *** Products from state.js ***

app.get("/products", (request, response, next)=>{
    response.send(products)
});

app.post("/products", (request, response, next)=>{
    let newProduct = request.body
    products.push(newProduct);
    response.json(newProduct);
});

app.get("/products/:productId", (request,response,next) => {
    response.json(products[request.params.productId])
});

app.listen(3008, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});

