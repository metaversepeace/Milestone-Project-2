const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express ();

app.use(cors());

//Have Node serve the files for our built React app
app.use(express.static(path.resolve(_dirname, '../client')));

//Handle GET requests to /api route
app.get('/api', (req, res) => {
  res.join({message: 'Hello from server!'});
});

//All other get requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, '../client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});