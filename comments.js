// Create web server
const express = require('express');
const app = express();

// Create a router
const commentsRouter = express.Router();

// Define a route
commentsRouter.get('/', (req, res) => {
  res.send('Comments page');
});

// Mount the router
app.use('/comments', commentsRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server started');
});