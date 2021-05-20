const login_url = "http://127.0.0.1:5000/user/";
function sendRequest(vals) {
        const req  = new XMLHttpRequest();
        req.open('POST', login_url);
        req.responseType = "json";
        req.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        const msgjson = JSON.stringify(vals);

        req.send(msgjson);
}