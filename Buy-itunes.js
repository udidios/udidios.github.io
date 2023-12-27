let body = JSON.parse($response.body);
body = JSON.parse(JSON.stringify(body).replace(/\"expires_date_pst\":\".+?\"/g, "\"expires_date_pst\":\"2099-12-31 16:59:59 America\/Los_Angeles\""));
body = JSON.parse(JSON.stringify(body).replace(/\"expires_date_ms\":\".+?\"/g, "\"expires_date_ms\":\"4102444799000\""));
body = JSON.parse(JSON.stringify(body).replace(/\"expires_date\":\".+?\"/g, "\"expires_date\":\"2099-12-31T23:59:59 Etc\/GMT\""));
$done({body: JSON.stringify(body)});
