(function($) {
    var _remove = $.fn.remove;
 
    // Custom UI object setup
    $.ui = {
        version: "1.7.2",
        plugin: {
            add: function(module, option, set) {
                var proto = $.ui[module].prototype;
                for (var i in set) {
                    proto.plugins[i] = proto.plugins[i] || [];
                    proto.plugins[i].push([option, set[i]]);
                }
            },
            call: function(instance, name, args) {
                var set = instance.plugins[name];
                if (!set || !instance.element[0].parentNode) return;
                for (var i = 0; i < set.length; i++) {
                    instance.options[set[i][0]] && set[i][1].apply(instance.element, args);
                }
            }
        },
        keyCode: {
            BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, CONTROL: 17, DELETE: 46,
            DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45,
            LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16,
            SPACE: 32, TAB: 9, UP: 38
        }
    };
 
    // Simplified feature check for old Firefox (pre-version 3)
    var isOldFirefox = navigator.userAgent.toLowerCase().includes("firefox") &&
                       parseFloat(navigator.userAgent.match(/firefox\/([0-9.]+)/i)[1]) < 3.0;
 
    // Handling ARIA attributes specifically for old Firefox versions
    if (isOldFirefox) {
        var ariaNS = "http://www.w3.org/2005/07/aaa",
            ariaState = /^aria-/,
            ariaRole = /^wairole:/;
 
        $.attr = function(elem, name, value) {
            var set = value !== undefined;
            return name == "role" ?
                set ? $.attr(elem, name, "wairole:" + value) : ($.attr(elem, name) || "").replace(ariaRole, "") :
                ariaState.test(name) ?
                set ? elem.setAttributeNS(ariaNS, name.replace(ariaState, "aaa:"), value) : $.attr(elem, name.replace(ariaState, "aaa:")) :
                $.attr(elem, name);
        };
 
        $.fn.removeAttr = function(name) {
            return ariaState.test(name) ?
                this.each(function() { this.removeAttributeNS(ariaNS, name.replace(ariaState, "")); }) :
                $.fn.removeAttr.call(this, name);
        };
    }
 
    // Extended functions for jQuery UI
    $.fn.extend({
        remove: function() {
            $("*", this).add(this).each(function() {
                $(this).triggerHandler("remove");
            });
            return _remove.apply(this, arguments);
        },
        enableSelection: function() {
            return this.attr("unselectable", "off").css("MozUserSelect", "").unbind("selectstart.ui");
        },
        disableSelection: function() {
            return this.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() { return false; });
        }
    });
})(jQuery);