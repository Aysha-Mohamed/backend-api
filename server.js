const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3010;

app.use(cors());

const apiKeyHeader = "Authorization: api-key 14:2023-08-08:anna.vanduijvenbode@tretton37.com e45a016060a6a978619e585f261cc4f5692b2b8f96fad8ba45d2ae0435fc9cdd";

app.get('/api/employees', async (req, res) => {
    console.log('Received API request');
  
    try {
      const url = 'https://api.1337co.de/v3/employees';
      const headers = {
        Authorization: 'api-key 14:2023-08-08:anna.vanduijvenbode@tretton37.com e45a016060a6a978619e585f261cc4f5692b2b8f96fad8ba45d2ae0435fc9cdd',
      };
  
      const response = await fetch(url, { headers });
      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        console.log('Error fetching data from external API:', response.statusText);
        res.status(500).json({ error: 'An error occurred while fetching data' });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  });
  
app.listen(PORT, () => {
  console.log(`Backend API listening on port ${PORT}`);
});
