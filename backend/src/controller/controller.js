const axios = require('axios');
require('dotenv').config();

// Your IMEIDB API key
const API_TOKEN = process.env.IMEI_KEY;

/**
 * Fetch all available IMEI data from IMEIDB.xyz
 */
async function fetchIMEIInfo(imei) {
  try {
    const url = `https://imeidb.xyz/api/imei/${imei}?format=json`;

    const response = await axios.get(url, {
      headers: { "X-Api-Key": API_TOKEN }
    });

    const result = response.data;

    if (!result.success) {
      return { error: result.message, code: result.code };
    }

    const d = result.data;

    // Return all available fields in structured format
    return {
      imei: result.query,
      valid: d.valid,
      tac: d.tac,
      serial: d.serial,
      controlNumber: d.controlNumber,
      brand: d.brand,
      model: d.model,
      manufacturer: d.manufacturer,
      name: d.name,
      type: d.type,
      blacklist: d.blacklist || null,
      device_id: d.device_id,
      device_image: d.device_image || null,
      device_spec: d.device_spec || null,
      frequency: d.frequency || null
    };

  } catch (err) {
    return { error: err.response?.data?.message || err.message };
  }
}

module.exports = { fetchIMEIInfo };
