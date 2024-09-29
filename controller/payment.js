const payment = (req, res) => {
    const { paymentMethod } = req.body;
  
    if (paymentMethod === 'blockchain') {
      res.send('Blockchain payment processing');
    } else if (paymentMethod === 'bank') {
      res.send('Bank transfer payment processing');
    } else {
      res.status(400).send('Invalid payment method');
    }
};

module.exports = payment;  