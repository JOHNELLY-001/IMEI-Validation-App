const express = require('express');
const cors = require('cors');
const imeiRoute = require('../src/routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to IMEI VALIDATION APP.");
});

app.use('/api', imeiRoute);

app.listen(PORT, () => {
  console.log(`IMEI VERIFICATION API running on http://localhost:${PORT}`);
});
