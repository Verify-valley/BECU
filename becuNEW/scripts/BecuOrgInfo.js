function becuGetOrgInfo() {
    $.ajax({
        type: "GET",
        url: "scripts/GetBECUOrgInfo",
        dataType: 'script'
    });
}

function becuGetBrowserToken() {
    $.ajax({
        type: "GET",
        url: "scripts/GetBECUBrowserToken",
        async:false
    });
}

function becuCheckWebMessengerWindow() {
    $.ajax({
        type: "GET",
        url: "scripts/CheckWebMessengerWindow",
        async: true,
        success: function (data) {
            if (data === true) {
                setTimeout(function () { hideWebMessengerDivOnError(); }, 3000);
            }
        }
    });
}

function becuCheckWebMessengerSession() {
    webMessagingUrls = ["login.aspx", "sessiontimeout.aspx"];

    webMessagingUrls.map(function (url){
        if (getUrlEndPath().toLowerCase() === url) {
            setTimeout(function () { hideWebMessengerDivOnError(); }, 3500);
        }
    });

}

function hideMessengerIconForPrint() {
    setTimeout(function () { addClassToMessengerIcon(); }, 4200);
}

function becuUpdateUrlLink(oldUrl) {
    var url = new URL(oldUrl);
    url.hostname = BecuSiteObject.orgContentLink;
    return url.href;
}

function getUrlEndPath() {
    var url = window.location.pathname;
    return  url.substring(url.lastIndexOf('/') + 1);  
}

function addClassToMessengerIcon() {
    lp_overly_container = document.getElementsByClassName("LPMcontainer LPMoverlay")[0];

    if (lp_overly_container && !lp_overly_container.classList.contains('hidden-print')) {
        lp_overly_container.className += " hidden-print";
    }
}

function hideWebMessengerDivOnError() {
    lp_web_messenger_window = document.getElementsByClassName("lp_maximized lpmx lpc_window lpc_window_maximized lpc_desktop lp_maximized_large")[0];
    lp_overly_container = document.getElementsByClassName("LPMcontainer LPMoverlay")[0];

    if (lp_web_messenger_window) {
        lp_web_messenger_window.style.display = 'none';
    }
    if (lp_overly_container) {
        lp_overly_container.style.display = 'none';
    }
}

becuGetOrgInfo();
becuCheckWebMessengerWindow();
becuCheckWebMessengerSession();
hideMessengerIconForPrint();