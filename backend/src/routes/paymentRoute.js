const express = require("express");
const router = express.Router();

const { getToken, previewPayment, initiatePayment, getPaymentStatus } = require("../controller/paymentController");

// Generate / Refresh Token
router.get("/token", getToken);

// Preview (validate) payment
router.post("/preview", previewPayment);

// Initiate USSD Push payment
router.post("/initiate", initiatePayment);

// Check payment status by orderReference
router.get("/status/:orderReference", getPaymentStatus);

module.exports = router;
