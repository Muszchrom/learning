'use strict';
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

// Create Express app.
const app = express();

// Enable ALL CORS Requests
app.use(cors());

// Setup request body JSON parsing
app.use(express.json());

// Setup morgan which gives HTTP request logging.
app.use(morgan('dev'));

// Setup a friendly greeting for the root route.
app.get('/', (req, res) => {
  res.json({message: "Welcome to my website!"})
});

// Add routes (because its something like separated server)
app.use('/api', routes);

// Send 404 if no other route matched.
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// Setup a global error handler.
app.use((err, req, res, next) => {
  console.error(`Global error handler: ${JSON.stringify(err.stack)}`);

  res.status(500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

// Set our port.
app.set('port', process.env.PORT || 5000);

// Start listening on our port.
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
