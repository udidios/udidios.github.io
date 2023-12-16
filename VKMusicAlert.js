let body = JSON.parse($response.body)
body.data.user.billing = {
        "expiryDate": 4092657620,
        "subscriptionRegion": "",
        "state": "active",
        "rank": 2,
        "trialAvailable": true,
        "comboAvailable": false
      }
    var names = "ВК Музыка";
    var alert = "Premium активирован";
    $notification.post(names, alert, JSON.stringify(body.data.user.billing));
$done({body: JSON.stringify(body)})
