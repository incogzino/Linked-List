const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;

// Cross-Origin Resource Sharing (CORS)
app.use(cors());

// API endpoint to fetch player data
app.get('/api/players', (req, res) => {
  const searchQuery = req.query.searchQuery || '';

  axios
    .get(`https://www.balldontlie.io/api/v1/players?search=${searchQuery}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error fetching player data.');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});