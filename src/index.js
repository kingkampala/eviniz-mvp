require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const paymentRoute = require('../route/payment');
const propertyRoute = require('../route/property');
const blockchainRoute = require('../route/blockchain');

app.use(`/payment`, paymentRoute);
app.use(`/property`, propertyRoute);
app.use(`/property`, blockchainRoute);

app.get('/', (req, res) => {
  res.send('Real Estate MVP');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});