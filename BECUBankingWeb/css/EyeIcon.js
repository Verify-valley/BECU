//function attachClickToEyeIcon() {
    
//    var myArray = arguments[0];

//    for (var key in myArray) {
//        alert("key " + key + " has value " + myArray[key]);
//        var x = document.getElementById(key);

//        console.log(x);

//        $(x).on('click keypress', function (event) {
//            if (keyCheck(event) === true) {
//                changeEye(key, myArray[key]);
//            }
//        });

//    }

//}

function changeEye(eyeId, boxId) {
    //console.log(eyeId + " " + boxId);

    var att = document.createAttribute("aria-pressed");       
    att.value = "false";                           
    

    event.preventDefault();
    var eyeImg = document.getElementById(eyeId);
    var box = document.getElementById(boxId);

    if (eyeImg.getAttribute('src') === "https://onlinebanking.becu.org/BECUBankingWeb/Images/ico-eye.png") {
        eyeImg.src = "https://onlinebanking.becu.org/BECUBankingWeb/Images/ico-closed-eye-new.png";
        box.type = "password";

        att.value = "false";  
        eyeImg.setAttributeNode(att);
    } else {
        eyeImg.src = "https://onlinebanking.becu.org/BECUBankingWeb/Images/ico-eye.png";
        box.type = "text";

        att.value = "true";
        eyeImg.setAttributeNode(att);
    }
}

function changeEyeNew(eyeId, boxId) {
    //console.log(eyeId + " " + boxId);

    var att = document.createAttribute("aria-pressed");       
    att.value = "false";                           
    

    event.preventDefault();
    var eyeImg = document.getElementById(eyeId);
    var box = document.getElementById(boxId);

    if (eyeImg.getAttribute('src') === "/BECUBankingWeb/Images/ico-eye-new.png") {
        eyeImg.src = "/BECUBankingWeb/Images/ico-closed-eye-new.png";
        box.type = "password";

        att.value = "false";  
        eyeImg.setAttributeNode(att);
    } else {
        eyeImg.src = "/BECUBankingWeb/Images/ico-eye-new.png";
        box.type = "text";

        att.value = "true";
        eyeImg.setAttributeNode(att);
    }
}

function keyCheck(event) {
    if (event.type === 'click') {
        return true;
    }
    else if (event.type === 'keypress') {
        var code = event.charCode || event.keyCode;
        if ((code === 32) || (code === 13)) {
            return true;
        }
    }
    else {
        return false;
    }
}