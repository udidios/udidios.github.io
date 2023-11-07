let body = JSON.parse($response.body)
body.result.plus = {
      "hasPlus": true,
      "isTutorialCompleted": false
    }
body.result.permissions.until = "2099-12-01T19:15:32+00:00"
body.result.permissions.values = [
        "landing-play",
        "feed-play",
        "radio-play",
        "mix-play",
        "radio-skips",
        "library-cache",
        "library-play",
        "high-quality",
        "ads-skips",
        "non-shuffled-play",
        "background-play",
        "play-premium-tracks",
        "auto-flow",
        "play-full-tracks",
        "play-radio-full-tracks"
      ]
$done({body: JSON.stringify(body)})