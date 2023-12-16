let body = JSON.parse($response.body)
body.data.user.billing = {
        "expiryDate": 4092657620,
        "subscriptionRegion": "",
        "state": "active",
        "rank": 2,
        "trialAvailable": true,
        "comboAvailable": false
      }
$done({body: JSON.stringify(body)})
