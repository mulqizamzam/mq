var rPop = ['http://128.199.104.206','http://157.230.192.141','http://128.199.126.110','http://157.230.195.49','http://188.166.198.255','http://167.99.31.97','http://139.59.227.24','http://139.59.235.104','http://104.248.96.141','http://188.166.223.23','http://144.126.242.153','http://128.199.79.152','https://xapi.juicyads.com/service_advanced.php?juicy_code=3454u2y2p214u4q2u284x2c454&u=http%3A%2F%2Fwww.juicyads.rocks'];
function cakcakanArr(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }   
}
cakcakanArr(rPop);
var rPopurls=rPop;
(function() {
var options = {
'height' : 720,
'width' : 1280
};
var system = {
'clicked' : 0,
'options' : 'toolbar=yes,directories=yes,scrollbars=yes,location=yes,statusbar=yes,menubar=yes,resizable=1,width=' + options.width + ',height=' + options.height + ',left=' + ((window.screen.width-options.width)/2) + ',top=' + ((window.screen.height-options.height)/2),
'urls' : this.rPopurls,
'window' : false
};
var max = 1;
var pWait = 15  * 1;
var pCap = 99;
var todayPops = 0;
var cookie = ("_.jwplayer9x33x");

var _parent = self;
try {
_parent = (top!=self && typeof(top.document.location.toString())==='string') ? top : self;
} catch (e) {};

var xbrowser = function(){
var n = navigator.userAgent.toLowerCase(),
b = {
webkit: /webkit/.test(n),
mozilla: (/mozilla/.test(n)) && (!/(compatible|webkit)/.test(n)),
chrome: /chrome/.test(n),
msie: (/msie/.test(n)) && (!/opera/.test(n)),
firefox: /firefox/.test(n),
safari: (/safari/.test(n) && !(/chrome/.test(n))),
opera: /opera/.test(n)
};
b.version = (b.safari) ? (n.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (n.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1];
return b;
}();

function isCapped() {
    try {
        todayPops = Math["floor"](document["cookie"]["split"](cookie + "Cap=")[1]["split"](";")[0])
    } catch (err) {};
    return (pCap <= todayPops || document["cookie"]["indexOf"](cookie + "=") !== -1)
};

function popundrInit() {
    if (isCapped()) {
        return
    } else {
        var now = new Date();
                document["cookie"] = cookie + "=1;expires=" + new Date(now["setTime"](now["getTime"]() + pWait))["toGMTString"]() + ";path=/";
        now = new Date();
        document["cookie"] = cookie + "Cap=" + (todayPops + 1) + ";expires=" + new Date(now["setTime"](now["getTime"]() + (84600 * 1000)))["toGMTString"]() + ";path=/";
if (system.clicked<max) {
if (xbrowser.chrome) {
var ghost = document.createElement('a');
ghost.href = system.urls[system.clicked];
ghost.target = '_blank';
document.getElementsByTagName('body')[0].appendChild(ghost);
ghost.parentNode.removeChild(ghost);
var clk = document.createEvent('MouseEvents');
clk.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
ghost.dispatchEvent(clk);
system.clicked++;
return true;
} else {
if (!xbrowser.msie) window.open('javascript:window.focus();', '_self', '');
system.window = _parent.window.open(system.urls[system.clicked], 'window_' + system.clicked + '_' + Math.ceil(Math.random()*100000), system.options);
if (system.window) popundrBlur();
system.clicked++;
system.window = false;
};
};
};
};

function popundrBlur() {
try {
system.window.blur();
system.window.opener.window.focus();
if (!xbrowser.msie) window.self.window.blur();
window.focus();
if (xbrowser.safari) setTimeout('window.focus();', 500);
if (xbrowser.firefox) popundrOpenCloseWindow();
} catch (e) {};
};

function popundrOpenCloseWindow() {
var ghost = window.open('about:blank');
ghost.focus();
ghost.close();
};

if (document.addEventListener) {
document.addEventListener((xbrowser.chrome ? 'mousedown' : 'click'), function(e) { if (e.target.className.indexOf('dtnoppu')==-1) popundrInit();}, true)
document.addEventListener('unload', function(e) { if (e.target.className.indexOf('dtnoppu')==-1) popundrInit();}, true)
} else if (document.attachEvent) {
document.attachEvent('onclick', function(e) { if (e.target&&e.target.className&&e.target.className.indexOf('dtnoppu')==-1) popundrInit();});
document.attachEvent('onunload', function(e) { if (e.target&&e.target.className&&e.target.className.indexOf('dtnoppu')==-1) popundrInit();});
} else {
var bodyReady = setInterval( function() {
if (typeof(document.body)!='undefined'&&document.body) {
document.body.onclick = function(e) { if (e.target.className.indexOf('dtnoppu')==-1) popundrInit();};
document.body.unload = function(e) { if (e.target.className.indexOf('dtnoppu')==-1) popundrInit();};
clearInterval(bodyReady);
}
}, 10);
};
})();
