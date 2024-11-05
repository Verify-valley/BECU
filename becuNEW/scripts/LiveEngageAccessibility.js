
//LP event binding -- call these on LP success or after Live Person Tag
function bindAccessibilityHandler() {
    lpTag.events.bind({
        eventName: "state",
        appName: "lpUnifiedWindow",
        func: accessibilityAddOn,
        async: true,
        triggerOnce: false
    });

    lpTag.events.bind({
        eventName: "state",
        appName: "lpUnifiedWindow",
        func: accessibilityButtonMod,
        async: true,
        triggerOnce: false
    });

    lpTag.events.bind({
        eventName: "state",
        appName: "lpUnifiedWindow",
        func: hideWebMessengerDivOnPrint,
        async: true,
        triggerOnce: false
    });
}

function bindAccessibilityFocusTrapHandler() {
    lpTag.events.bind({
        eventName: "state",
        appName: "lpUnifiedWindow",
        func: focusTrap,
        async: true,
        triggerOnce: false
    });
}

function hideWebMessengerDivOnPrint() {
    lp_web_messenger_window = document.getElementsByClassName("lp_maximized lpmx lpc_window lpc_window_maximized lpc_desktop lp_maximized_large")[0];
    lp_overly_container = document.getElementsByClassName("LPMcontainer LPMoverlay")[0];

    if (lp_web_messenger_window && !lp_web_messenger_window.classList.contains('hidden-print')) {
        lp_web_messenger_window.className += " hidden-print";
    }
    if (lp_overly_container && !lp_overly_container.classList.contains('hidden-print')) {
        lp_overly_container.className += " hidden-print";
    }
}

//Main accessibility functions
function accessibilityButtonMod() {
    var lp_actions_button = document.getElementsByClassName("lp_actions_button lpc_composer__menu-button lpc_desktop")[0];

    lp_actions_button.addEventListener('click', updatePrintTransaction, false);
    lp_actions_button.addEventListener('click', muteButtonTransactionOnPlusClick, false);
    lp_actions_button.addEventListener('click', function () {
        setTimeout(function () {
            mute_icon = document.querySelectorAll('[id^="LP_MuteSoundAction"]');

            Array.from(mute_icon).map(function (mute, i) {
                mute.onclick = updateMuteButtonOnClick;
            });

        }, 1000);
    }, false);

    lp_close_button = document.getElementsByClassName("lp_close lpc_maximized-header__close-button lpc_desktop")[0];

    lp_close_button.addEventListener('click', function () {
        setTimeout(function () {
            lp_no_button = document.getElementsByClassName("lp_cancel_button lpc_confirmation-dialog__cancel-button lpc_desktop")[0];
            lp_yes_button = document.getElementsByClassName("lp_confirm_button lpc_confirmation-dialog__confirm-button lpc_desktop")[0];

            if (lp_no_button && lp_yes_button) {
                lp_yes_button.setAttribute("aria-label", "Yes, end the conversation");
                lp_no_button.setAttribute("aria-label", "No, I don't want to end the conversation");
            }

        }, 1000);

        setTimeout(function () {
            hideWebMessengerDivOnPrint();
        }, 2000);

    }, false);
}

function updatePrintTransaction() {
    lp_accessibility_print_icon = document.querySelectorAll('[id^="LP_PrintTranscriptAction"]');

    Array.from(lp_accessibility_print_icon).map(function (print, i) {

        print.setAttribute("aria-label", "Print transcript: click or tap to open a new print window. Close window by using alt+F4");

    });
}


function muteButtonTransactionOnPlusClick() {
    mute_icon = document.querySelectorAll('[id^="LP_MuteSoundAction"]');

    Array.from(mute_icon).map(function (mute, i) {

        if (mute.getAttribute("aria-label") === "Mute") {
            mute.setAttribute("aria-label", "Mute Conversation");
        }
        else if (mute.getAttribute("aria-label") === "Unmute") {
            mute.setAttribute("aria-label", "Un Mute Conversation");
        }
    });
}

function updateMuteButtonOnClick() {

    mute_icon = document.querySelectorAll('[id^="LP_MuteSoundAction"]');

    Array.from(mute_icon).map(function (mute, i) {

        if (mute.getAttribute("aria-label") === "Mute" || mute.getAttribute("aria-label") === "Mute Conversation") {
            mute.setAttribute("aria-label", "Mute Conversation");
        }
        else if (mute.getAttribute("aria-label") === "Unmute" || mute.getAttribute("aria-label") === "Un Mute Conversation") {
            mute.setAttribute("aria-label", "Un Mute Conversation");
        }
    });
}

function accessibilityAddOn() {
    var lp_accessibility_title_element = document.getElementsByClassName("lp_top-text lpc_maximized-header__text")[0];
    var lp_accessibility_element_text_area = document.getElementsByClassName("lpview_form_textarea lpc_composer__text-area lpc_desktop lp_expandable_textarea lp_ltr")[0];
    var lp_location_center_window = document.getElementsByClassName("lp_location_center")[0];

    lp_location_center_window.setAttribute("tabindex", "0");
    lp_accessibility_title_element.setAttribute("aria-level", "1");
    lp_accessibility_element_text_area.setAttribute("title", "Enter text here");
    lp_accessibility_element_text_area.setAttribute("aria-label", "Enter text here");
}


function focusTrap() {
    var firstAnchor = document.getElementsByClassName("lp_minimize lpc_maximized-header__minimize-button")[0];
    var secondToLastAnchor = document.getElementsByClassName("lpview_form_textarea")[0];
    var lastAnchor = document.getElementsByClassName("lp_send_button lpc_composer__send-button lpc_desktop")[0];

    function keyDownAction(e) {
        evt = e || window.event;
        keyCode = evt.which || evt.keyCode;
        if (keyCode === 9) {
            if (evt.shiftKey) {
                //do nothing
            } else {
                if (evt.preventDefault) {
                    evt.preventDefault();
                }
                else {
                    evt.returnValue = false;
                }
                firstAnchor.focus();
            }
        }

        if (keyCode === 13) {
            secondToLastAnchor.focus();
        }
    }

    function keyDownShiftTabAction(e) {
        evt = e || window.event;
        keyCode = evt.which || evt.keyCode;
        if (keyCode === 9) {
            if (evt.shiftKey) {
                if (evt.preventDefault) {
                    evt.preventDefault();
                }
                else {
                    evt.returnValue = false;
                }
                if (secondToLastAnchor.value === "") {
                    secondToLastAnchor.focus();
                } else {
                    lastAnchor.focus();
                }

            } else {
                //do nothing
            }
        }
    }


    function keyDownActionSecondAnchor() {
        if (secondToLastAnchor.value === "") {
            keyDownAction();
        }
    }

    if (lastAnchor.addEventListener) {
        lastAnchor.addEventListener('keydown', keyDownAction, false);
    } else if (lastAnchor.attachEvent) {
        lastAnchor.attachEvent('onkeydown', keydownHandler);
    }

    if (secondToLastAnchor.addEventListener) {
        secondToLastAnchor.addEventListener('keydown', keyDownActionSecondAnchor, false);
    } else if (secondToLastAnchor.attachEvent) {
        secondToLastAnchor.attachEvent('onkeydown', keyDownActionSecondAnchor);
    }

    if (firstAnchor.addEventListener) {
        firstAnchor.addEventListener('keydown', keyDownShiftTabAction, false);
    } else if (firstAnchor.attachEvent) {
        firstAnchor.attachEvent('onkeydown', keyDownShiftTabAction);
    }
}