//GTM Web messenger
function bindConvIdGtm() {
    lpTag.events.bind({
        eventName: "conversationInfo",
        appName: "lpUnifiedWindow",
        func: ConvIdGtm,
        async: true,
        triggerOnce: false
    });
};

function bindWebMessengerGTM() {
    lpTag.events.bind({
        eventName: "state",
        appName: "lpUnifiedWindow",
        func: WebMessengerGTM,
        async: true,
        triggerOnce: true
    });
}

var conversationId = "";

function ConvIdGtm(data) {
    if (data && data.hasOwnProperty("conversationId") && data.conversationId && conversationId !== data.conversationId) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            "event": "messenger_newConversation",
            "conversationId": data.conversationId
        });
        conversationId = data.conversationId;
    }
};

function WebMessengerGTM() {
    var lp_element = document.getElementsByClassName("lp_send_button lpc_composer__send-button");
    var lp_element_access = lp_element[0];

    var lp_element_text_area = document.getElementsByClassName("lpview_form_textarea");
    var lp_element_text_area_access = lp_element_text_area[0];

    lp_element_access.addEventListener("click", function () {
        CreateGTMDataLayer();
    });

    lp_element_text_area_access.addEventListener("keydown", function (event) {
        if (event.keyCode === 13 && lp_element_text_area_access.value !== "") {
            CreateGTMDataLayer();
        }
    });
}

function CreateGTMDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'messenger_engage'
    });
}

