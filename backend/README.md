# IMEI Full Info API

An **Express.js API** for validating IMEIs and fetching full device information using [IMEIDB.xyz](https://imeidb.xyz).
The API returns structured JSON including TAC, serial, brand, model, type, blacklist status, device specs, and image.

## Features

* Validate IMEIs using IMEIDB.xyz data
* Fetch device information: brand, model, manufacturer, type
* Return TAC, serial number, control number
* Include device specifications: OS, network, SIM slots, etc.
* Blacklist status if available
* Device image URLs
* Clean and maintainable Express.js structure

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/imei-full-info-api.git
cd imei-full-info-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set your IMEIDB API token

Create a `.env` file in the project root:

```env
IMEI_KEY=YOUR_IMEIDB_SECRET_TOKEN
```

### 4. Run the server

```bash
node server.js
```

The API will run on `http://localhost:3000`.

---

## API Endpoints

### POST `/api/verify-imei`

Fetch full IMEI information.

#### Request

```json
POST http://localhost:3000/api/verify-imei
Content-Type: application/json

{
  "imei": "353915101234567"
}
```

#### Response

```json
{
  "imei": "353915101234567",
  "valid": true,
  "tac": "35391510",
  "serial": "123456",
  "controlNumber": 7,
  "brand": "Apple",
  "model": "iPhone 11 Pro Max",
  "manufacturer": "Apple Inc",
  "name": "Apple iPhone 11 Pro Max",
  "type": "Smartphone",
  "blacklist": { "status": false },
  "device_id": 9846,
  "device_image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg",
  "device_spec": {
    "sim_slots": 1,
    "os": "iOS 13",
    "os_family": "iOS",
    "aliases": ["A2218", "A2161", "A2220"],
    "bluetooth": ["5.0", "A2DP", "LE"],
    "usb": ["2.0", "proprietary reversible connector"],
    "wlan": ["Wi-Fi 802.11 a/b/g/n/ac/ax", "dual-band", "hotspot"],
    "nfc": true,
    "speed": ["HSPA 42.2/5.76 Mbps", "LTE-A 1.6 Gbps DL", "EV-DO Rev.A 3.1 Mbps"],
    "nettech": ["GSM","CDMA","HSPA","EVDO","LTE"]
  },
  "frequency": ["CDMA2000","LTE FDD BAND 1","LTE FDD BAND 2","LTE FDD BAND 25","LTE FDD BAND ..."]
}
```

---

## Error Responses

* Invalid API token:

```json
{ "error": "Your request was made with invalid credentials." }
```

* Invalid IMEI:

```json
{ "error": "IMEI must pass the Luhn algorithm check.", "code": 460 }
```

* Other errors (rate limit, balance issues) include `error` and `code` fields.


## Environment Variables

| Variable   | Description                    |
| ---------- | ------------------------------ |
| `IMEI_KEY` | Your IMEIDB.xyz secret API key |


## License

MIT License © iamjohnelly
