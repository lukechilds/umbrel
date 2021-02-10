var baseRoute = bitcoinNetwork == "testnet" ? "test/v2" : "v2";

fetch(`http://${window.location.host}/${baseRoute}/auth/login`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: `apikey=${apiKey}`
 })
 .then(response => response.json())
 .then(data => {
    fetch(`http://${window.location.host}/${baseRoute}/${supportPrefix}/pairing`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + data.authorizations.access_token,
            'Content-Type': 'application/json'
        })
    })
    .then(response => response.json())
    .then(data => {
        var pairingInfo = data;
        pairingInfo.pairing.url = `http://${dojoHiddenService}/${baseRoute}`;

        new AwesomeQR.AwesomeQR({
            text: JSON.stringify(pairingInfo),
            size: 300,
            margin: 10,
            dotScale: 0.7,
            backgroundImage: "data:image/jpeg;base64,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"
        }).draw().then(function (dataURL) {
            document.getElementById('dojo-qrcode').src = dataURL;
        });

        document.getElementById('whirpool-hidden-service').innerText = `${whirlpoolHiddenService}`;
    });
 });
