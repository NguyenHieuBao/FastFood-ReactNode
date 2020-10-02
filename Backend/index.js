const express = require('express');
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Morii:avatarag0p@cluster0.ficic.mongodb.net/FastFoodNodeReact?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
//mongodb://localhost:27017/FastfoodNodeReact
const port = 3400;

const productsRoute = require('./routes/products');
const categoriesRoute = require('./routes/categories');
const postsRoute = require('./routes/posts');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', productsRoute);
app.use('/categories', categoriesRoute);
app.use('/new-posts', postsRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})