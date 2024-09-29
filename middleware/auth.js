const jwt = require('jsonwebtoken');
require('dotenv').config();

// Generate Token
const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Verify Token Middleware
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

// Secure Route Example
app.get('/secure-route', verifyToken, (req, res) => {
  res.send('Access granted to secure route');
});

module.exports = generateToken;