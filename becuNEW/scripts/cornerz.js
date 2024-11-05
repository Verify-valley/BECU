(function($) {
    // Detect if the browser is Internet Explorer
    var isIE = !!window.document.documentMode;
 
    $.fn.cornerz = function(options) {
        function canvasCorner(t, l, r, bw, bc, bg, pos) {
            var sa, ea, cw, sx, sy, x, y, p = 1.57, css = "position:absolute;";
            if (t) {
                sa = -p;
                sy = r;
                y = 0;
                css += "top:-" + pos + "px;";
            } else {
                sa = p;
                sy = 0;
                y = r;
                css += "bottom:-" + pos + "px;";
            }
            if (l) {
                ea = p * 2;
                sx = r;
                x = 0;
                css += "left:-" + pos + "px;";
            } else {
                ea = 0;
                sx = 0;
                x = r;
                css += "right:-" + pos + "px;";
            }
            var canvas = $("<canvas width=" + r + "px height=" + r + "px style='" + css + "' ></canvas>"),
                ctx = canvas[0].getContext("2d");
            ctx.beginPath();
            ctx.lineWidth = bw * 2;
            ctx.arc(sx, sy, r, sa, ea, !(t ^ l));
            ctx.strokeStyle = bc;
            ctx.stroke();
            ctx.lineWidth = 0;
            ctx.lineTo(x, y);
            ctx.fillStyle = bg;
            ctx.fill();
            return canvas;
        }
 
        function canvasCorners(corners, r, bw, bc, bg, pos) {
            var hh = $("<div style='display: inherit' />");
            $.each(corners.split(" "), function() {
                hh.append(canvasCorner(this[0] === "t", this[1] === "l", r, bw, bc, bg, pos));
            });
            return hh;
        }
 
        function vmlCurve(r, b, c, m, ml, mt, right_fix) {
            var l = m - ml - right_fix, t = m - mt;
            return "<v:arc filled='False' strokeweight='" + b + "px' strokecolor='" + c + "' startangle='0' endangle='361' style=' top:" + t + "px;left: " + l + "px;width:" + r + "px; height:" + r + "px' />";
        }
 
        function vmlCorners(corners, r, bw, bc, bg, w) {
            var h = "<div style='text-align:left; '>";
            $.each($.trim(corners).split(" "), function() {
                var css, ml = 1, mt = 1, right_fix = 0;
                if (this.charAt(0) === "t") css = "top:-" + bw + "px;";
                else {
                    css = "bottom:-" + bw + "px;";
                    mt = r + 1;
                }
                if (this.charAt(1) === "l") css += "left:-" + bw + "px;";
                else {
                    css += "right:-" + bw + "px; ";
                    ml = r;
                    right_fix = 1;
                }
                h += "<div style='" + css + "; position: absolute; overflow:hidden; width:" + r + "px; height: " + r + "px;'>";
                h += "<v:group  style='width:1000px;height:1000px;position:absolute;' coordsize='1000,1000' >";
                h += vmlCurve(r * 3, r + bw, bg, -r / 2, ml, mt, right_fix);
                if (bw > 0) h += vmlCurve(r * 2 - bw, bw, bc, Math.floor(bw / 2 + .5), ml, mt, right_fix);
                h += "</v:group>";
                h += "</div>";
            });
            h += "</div>";
            return h;
        }
 
        var settings = { corners: "tl tr bl br", radius: 10, background: "white", borderWidth: 0, fixIE: false, isFloating: false };
        $.extend(settings, options || {});
        var incrementProperty = function(elem, prop, x) {
            var y = parseInt(elem.css(prop), 10) || 0;
            elem.css(prop, x + y);
        };
 
        return this.each(function() {
            // Skip processing for IE versions >= 8
            if (document.documentMode && document.documentMode >= 8) return;
 
            var $$ = $(this), r = settings.radius * 1,
                bw = (settings.borderWidth || parseInt($$.css("borderTopWidth"), 10) || 0) * 1,
                bg = settings.background,
                bc = settings.borderColor;
            bc = bc || (bw > 0 ? $$.css("borderTopColor") : bg);
            var cs = settings.corners, pos = bw, element = $$[0],
                isTableElements = ["td", "th", "table"].includes(element.tagName.toLowerCase());
 
            if (!isIE) {
                if (isTableElements) {
                    pos = bw - 1;
                    $$.wrapAll('<div class="cornerDiv" style="position:relative;width:100%;"></div>').parent().append(canvasCorners(cs, r, bw, bc, bg, pos));
                    return;
                }
                $$.append(canvasCorners(cs, r, bw, bc, bg, pos));
            } else {
                var h = vmlCorners(cs, r, bw, bc, bg, $(this).width());
                this.insertAdjacentHTML("beforeEnd", h);
            }
 
            if (this.style.position !== "absolute" && this.style.position !== "fixed") this.style.position = "relative";
            if (!settings.isFloating) this.style.zoom = 1;
 
            if (isIE && settings.fixIE) {
                var ow = $$.outerWidth(), oh = $$.outerHeight();
                if (ow % 2 === 1) {
                    incrementProperty($$, "padding-right", 1);
                    incrementProperty($$, "margin-right", 1);
                }
                if (oh % 2 === 1) {
                    incrementProperty($$, "padding-bottom", 1);
                    incrementProperty($$, "margin-bottom", 1);
                }
            }
        });
    };
})(jQuery);