// index.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./app/routes/userRoutes');
const authRoutes = require('./app/routes/authRoutes');
const productRoutes = require('./app/routes/productRoutes');
const creditCardRoutes = require('./app/routes/creditCardRoutes');
const shoppingCartRoutes = require('./app/routes/shoppimgCartRoutes');
const shoppRoutes = require('./app/routes/shoppRoutes');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();



app.use(cors({
  origin: process.env.CORS, 
}));
app.use(morgan('combined'));
//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(userRoutes);
app.use('/auth', authRoutes);
app.use(productRoutes);
app.use(shoppingCartRoutes);
app.use(creditCardRoutes);
app.use(shoppRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!');
  
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT || 3000}`);
});