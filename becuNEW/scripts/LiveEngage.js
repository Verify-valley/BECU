function lpGetAuthenticationToken (callback) {
    $.ajax({
        type: "GET",
        url: "/BECUBankingWeb/LiveEngage/GetToken",
        async: false,
        data: null,
        success: function (data) {
            //execute call back
            if (data.StatusCode === 200) {
                callback(data.JwtToken);
                bindConvIdGtm();
                bindWebMessengerGTM();
                bindAccessibilityHandler();
                bindAccessibilityFocusTrapHandler();
            }
        },
        error: function () {
            //log error
            callback("", "Get request failed.");
        }
    });
}
