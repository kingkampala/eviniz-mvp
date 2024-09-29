//Enable SSL for encrypted connections
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

// SSL certificate and key for HTTPS
const options = {
  key: fs.readFileSync('path/to/your-key.pem'),
  cert: fs.readFileSync('path/to/your-cert.pem')
};

https.createServer(options, app).listen(3000, () => {
  console.log('Server running with SSL on port 3000');
});