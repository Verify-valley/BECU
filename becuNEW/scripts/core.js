//define('eaf.util', ['js!JS.Class!order'], function () {

    /*
    Thanks, Mark a ziesemer
    http://blogger.ziesemer.com/2008/05/javascript-namespace-function.html
    */

    (function() {    
        eaf = (typeof this.global === 'object') ? this.global : this; //var eaf = {};
        eaf.util = {};
    
        eaf.util.namespace = function (name, separator, container) {
            var ns = name.split(separator || '.'),        
        o,
        i,
        len;
            if (ns.length == 0) return;
            o = container || eaf
    
            for (i = 0, len = ns.length; i < len; i++) {
                o = o[ns[i]] = o[ns[i]] || {};
            }
            return o;
        };
        
    
        eaf.util.isDefined = function (obj, prop) {
            if ('undefined' != typeof obj[prop]) return true;
    
            for (f in obj)
                if (f == prop)
                    return true;
    
            return false;
        };
    
        eaf.util.isDefinedAndAssigned = function (obj, prop) {
            if ('undefined' != typeof obj[prop]) return true;
    
            return false;
        };
    
        eaf.util.isAssigned = function (obj, prop) {
            if ('undefined' != typeof obj[prop]) return true;
    
            return false;
        };
    
    
        //return eaf.util;
    //});
    
    //define('eaf.core', ['eaf.util'], function () {
        eaf.util.namespace('eaf.core');
    
        eaf.core.createDelegate = function (obj, method) {
            return function () {
                method.apply(obj, arguments);
            }
        };
    
    
        eaf.util.indexOf = function (list, item) {
            if (list.indexOf) return list.indexOf(item);
            var i = list.length;
            while (i--) {
                if (list[i] === item) return i;
            }
            return -1;
        };
    
    
        eaf.util.asyncEach = function (arr, iterator, finished) {
            var list = arr,
          n = list.length,
          i = -1,
          calls = 0,
          looping = false;
    
            var iterate = function () {
                calls -= 1;
                i += 1;
                if (i === n)
                    return finished.apply(list);
                iterator(list[i], resume);
            };
    
            var loop = function () {
                if (looping) return;
                looping = true;
                while (calls > 0) iterate();
                looping = false;
            };
    
            var resume = function () {
                calls += 1;
                if (typeof setTimeout === 'undefined') loop();
                else setTimeout(iterate, 0);
            };
            resume();
        };
    })();
    
    
    
    //    return eaf.core;
    //}); 