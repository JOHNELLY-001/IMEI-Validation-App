require("dotenv").config();
const axios = require("axios");

const BASE = process.env.CLICKPESA_BASE_URL;

// Get Authorization Token
exports.getToken = async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.CLICKPESA_BASE_URL}/generate-token`,
      null,   // <-- NO REQUEST BODY
      {
        headers: {
          "client-id": process.env.CLICKPESA_CLIENT_ID,
          "api-key": process.env.CLICKPESA_API_KEY
        }
      }
    );

    console.log("CLICKPESA TOKEN RESPONSE:", response.data);
    return res.json(response.data);

  } catch (err) {
    console.error("TOKEN ERROR:", err.response?.data || err.message);
    return res.status(500).json({ error: "Failed to get token" });
  }
};


// Preview (Validate) Mobile Money Payment
exports.previewPayment = async (req, res) => {
  try {
    const { mobileNumber } = req.body;
    const tokenResponse = await axios.post(
      `${BASE}/generate-token`,
      null,
      {
        headers: {
          "client-id": process.env.CLICKPESA_CLIENT_ID,
          "api-key": process.env.CLICKPESA_API_KEY
        }
      }
    );
    const token = tokenResponse.data.token;

    const { data } = await axios.post(
      `${BASE}/payments/preview-ussd-push-request`,
      {
        phoneNumber: mobileNumber,
        amount: "500",
        currency: "TZS",
        orderReference: `ORDER-${Date.now()}`,
        fetchSenderDetails: false
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    return res.status(500).json({ error: "Failed to preview payment" });
  }
};

// Initiate USSD PUSH Payment
exports.initiatePayment = async (req, res) => {
  try {
    const { mobileNumber } = req.body;

    const tokenResponse = await axios.post(
      `${BASE}/generate-token`,
      null,
      {
        headers: {
          "client-id": process.env.CLICKPESA_CLIENT_ID,
          "api-key": process.env.CLICKPESA_API_KEY
        }
      }
    );

    const token = tokenResponse.data.token;

    const { data } = await axios.post(
      `${BASE}/payments/initiate-ussd-push-request`,
      {
        amount: "500",
        currency: "TZS",            // Required field
        orderReference: `ORDER-${Date.now()}`,
        phoneNumber: mobileNumber,  // Note: ClickPesa uses phoneNumber field
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.json(data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ error: "Failed to initiate payment" });
  }
};

// Check payment status using orderReference
exports.getPaymentStatus = async (req, res) => {
  try {
    const { orderReference } = req.params;

    const tokenResponse = await axios.post(
      `${BASE}/generate-token`,
      null,
      {
        headers: {
          "client-id": process.env.CLICKPESA_CLIENT_ID,
          "api-key": process.env.CLICKPESA_API_KEY
        }
      }
    );

    const token = tokenResponse.data.token;

    const { data } = await axios.get(
      `${BASE}/payments/${orderReference}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // Response should be an array not single object
    const paymentInfo = data;

    if (Array.isArray(paymentInfo) || paymentInfo.length === 0) {
      return res.json({
        message: "No payment information found for the given order reference",
        paymentInfo: []
      })
    }

    return res.json({
      count: paymentInfo.length,
      paymentInfo
    });
    
  } catch (err) {
    console.error(err.response?.data || err.message);
    return res.status(500).json({ error: "Error checking payment status" });
  }
};
