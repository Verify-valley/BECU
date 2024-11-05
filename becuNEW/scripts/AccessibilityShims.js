//This code normalizes certain aspects of pages' HTML to meet WCAG A/AA-level accessibility requirements.
//Include this file below the footer of any webpage to normalize its HTML with the following methods.

//Call normalization methods
// ***Temporarility commenting out call to standardizeHeaderHierarchy to see if it resolves our sev1 bugs
//standardizeHeaderHierarchy();
addLabelsToBasicDatePicker();
addTabOrderToErrors();

//Maintains computed styles while setting page header hierarchy to conformant H1-H4
//Converts H5 and H6 to divs, as H5 and H6 elements were actually used for styling.

function standardizeHeaderHierarchy() {
    var headers = $('h1, h2, h3, h4, h5, h6');
    var prevHeader = undefined;
    var currentHeader = undefined;
    var pHNodevalue = 0;
    var cHNodeValue = 0;

    for (var i = 0; i < headers.length; i++) {
        currentHeader = headers[i];
        cHNodeValue = parseInt(currentHeader.nodeName.replace('H', ''));

        // This is for tablet/mobile menu
        if ($(currentHeader).hasClass('noclick')) {
            pHNodevalue = 0;
        }

        // This is when we find a current header lower than the previous one.
        if (cHNodeValue === 3 && pHNodevalue === 4) {
            pHNodevalue = 3;
            cHNodeValue = 4;
        }

        if (pHNodevalue < cHNodeValue) {
            // H5's and H6's and any difference of more than 2 are replaced to DIV's 
            var newNode = document.createElement(((cHNodeValue - pHNodevalue) <= 2) && cHNodeValue !== 5 && cHNodeValue !== 6 ? 'H' + (pHNodevalue + 1) : 'DIV');

            newNode.className = currentHeader.className;
            newNode.id = currentHeader.id;
            newNode.style.lineHeight = window.getComputedStyle(currentHeader, null).getPropertyValue('line-height');
            newNode.style.fontSize = window.getComputedStyle(currentHeader, null).getPropertyValue('font-size');
            newNode.style.color = window.getComputedStyle(currentHeader, null).getPropertyValue('color');
            newNode.style.fontWeight = window.getComputedStyle(currentHeader, null).getPropertyValue('font-weight');
            //newNode.style.fontFamily = window.getComputedStyle(currentHeader, null).getPropertyValue('font-family');
            newNode.style.margin = window.getComputedStyle(currentHeader, null).getPropertyValue('margin');
            newNode.style.padding = window.getComputedStyle(currentHeader, null).getPropertyValue('padding');

            var nodesToMove = [];
            for (var j = 0; j < currentHeader.childNodes.length; j++) {
                nodesToMove.push(currentHeader.childNodes[j]);
            }
            for (var j = 0; j < nodesToMove.length; j++) {
                newNode.appendChild(nodesToMove[j]);
            }

            if (!currentHeader.replaceWith) {
                currentHeader.replaceWith = ReplaceWithPolyfill;
            }
            currentHeader.replaceWith(newNode);
            
            if (newNode.nodeName !== 'DIV') {
                prevHeader = newNode;
            }
        }
        else if (cHNodeValue <= 4) {
            prevHeader = currentHeader;
        }

        if (!!prevHeader) {
            pHNodevalue = parseInt(prevHeader.nodeName.replace('H', ''));
        }
    }
}


function addLabelsToBasicDatePicker() {
    var items = document.getElementsByClassName("basicdatepicker");
    for (var i = 0; i < items.length; i++) {
        var datepicker = items[i];
        var input = datepicker.getElementsByTagName("input")[0];
        input.setAttribute("aria-label", "Enter a date");
    }
}

//Taken from Mozilla Developer Network's documentation for ReplaceWith.
function ReplaceWithPolyfill() {
    'use-strict'; // For safari, and IE > 10
    var parent = this.parentNode, i = arguments.length, currentNode;
    if (!parent) return;
    if (!i) // if there are no arguments
        parent.removeChild(this);
    while (i--) { // i-- decrements i and returns the value of i before the decrement
        currentNode = arguments[i];
        if (typeof currentNode !== 'object') {
            currentNode = this.ownerDocument.createTextNode(currentNode);
        } else if (currentNode.parentNode) {
            currentNode.parentNode.removeChild(currentNode);
        }
        // the value of "i" below is after the decrement
        if (!i) // if currentNode is the first argument (currentNode === arguments[0])
            parent.replaceChild(currentNode, this);
        else // if currentNode isn't the first
            parent.insertBefore(this.previousSibling, currentNode);
    }
}
if (!Element.prototype.replaceWith)
    Element.prototype.replaceWith = ReplaceWithPolyfill;
if (!CharacterData.prototype.replaceWith)
    CharacterData.prototype.replaceWith = ReplaceWithPolyfill;
if (!DocumentType.prototype.replaceWith)
    DocumentType.prototype.replaceWith = ReplaceWithPolyfill;

function addTabOrderToErrors() {
    var elements = document.getElementsByClassName("VAMErrorText");

    var i;
    for (i = 0; i < elements.length; i++) {
        var tabIndex = document.createAttribute("tabindex");
        tabIndex.value = "0";
        elements[i].setAttributeNode(tabIndex);

        var role = document.createAttribute("role");
        role.value = "alertdialog";
        elements[i].setAttributeNode(role);

        var ariaLive = document.createAttribute("aria-live");
        ariaLive.value = "assertive";
        elements[i].setAttributeNode(ariaLive);

        var ariaLabel = document.createAttribute("aria-label");
        ariaLabel.value = "something went wrong";
        elements[i].setAttributeNode(ariaLabel);

    }
}

$(document).ready(function () {

    // Keyboard accessibility on spacebar keypress for anchor elements
    $('a').keypress(function (event) {
        // Keycode and charcode are deprecated and not all browsers support
        if (event.key === ' ') {
            event.preventDefault();

            if (this.hasAttribute('onclick') || $(this).hasClass('toggle')) {
                $(this).click();
            }
            else {
                window.location.href = this.href;
            }
        }
    });
})