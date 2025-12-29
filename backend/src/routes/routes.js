const express = require('express');
const router = express.Router();
const { fetchIMEIInfo } = require('../controller/controller')

router.post('/verify-imei', async (req, res) => {
  const { imei } = req.body;

  if (!imei) {
    return res.status(400).json({ error: "IMEI is required" });
  }

  const data = await fetchIMEIInfo(imei);

  if (data.error) {
    return res.status(400).json(data);
  }

  res.json(data);
});

module.exports = router;
