var rBannerxz = ['https:\/\/poweredby.jads.co\/adshow.php?adzone=902108','https:\/\/poweredby.jads.co\/adshow.php?adzone=897934','https:\/\/poweredby.jads.co\/adshow.php?adzone=902517','https:\/\/poweredby.jads.co\/adshow.php?adzone=902518'];
function cakcakanArr(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
cakcakanArr(rBannerxz);
var rBannerxzurls=rBannerxz[0];
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function inIframe() {
    try {
        return (window.self !== window.top) ? 1 : 0;
    }
    catch (e) {
        return 1;
    }
}

function checkDocumentBody() {
    return (typeof document.body != 'undefined' &&
        ((document.body != null) || (typeof document.getElementsByTagName('body')[0] != 'undefined'))
    );
}

// Appends first element in html to body. Works in asynchronous calls.
function documentAsyncWriteElementFromHtml(html)
{
    if (!checkDocumentBody()) {
        return setTimeout(documentAsyncWriteElementFromHtml, 100, html);
    }
    else {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        var element = tempDiv.firstChild;
        document.body.appendChild(element);
    }
}
function ReopenUrlBuilder(baseUrl) {

    this.baseUrl = baseUrl;

    /**
     * Get value of content attribute of meta tag with name attribute = name
     * Fallback to top if possible
     *
     * @return string
     */
    this._getMetaContent = function (name) {
        try {
            var meta = window.top.document.getElementsByTagName('meta');
            for (var i = 0; i < meta.length; i++) {
                if (meta[i].hasAttribute('name') && meta[i].getAttribute('name').toLowerCase() === name) {
                    var info = meta[i].getAttribute('content');
                    return this._getSafeSizeSubString(info);
                }
            }
        }
        catch (e) {
        }
        return '';
    };

    this._getWidth = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };

    this._getHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };

    this._getSafeSizeSubString = function (str) {
        var indexToCut = Math.max(str.indexOf(' ', 256), str.indexOf(',', 256));
        if (indexToCut > 384 || indexToCut < 20) {
            indexToCut = 256;
        }
        return str.substring(0, indexToCut);
    };

    this._getTitle = function () {
        var title = document.title;
        if (inIframe()) {
            try {
                title = window.top.document.title;
            }
            catch (e) {
                title = '';
            }
        }
        return this._getSafeSizeSubString(title);
    };

    this._getReferrer = function () {
        var referrer = document.referrer;
        return this._getSafeSizeSubString(referrer);
    };

    this.build = function () {
        return this.baseUrl
            + '&cbrandom=' + Math.random()
            + '&cbtitle=' + encodeURIComponent(this._getTitle())
            + '&cbiframe=' + inIframe()
            + '&cbWidth=' + this._getWidth()
            + '&cbHeight=' + this._getHeight()
            + '&cbdescription=' + encodeURIComponent(this._getMetaContent('description'))
            + '&cbkeywords=' + encodeURIComponent(this._getMetaContent('keywords'))
            + '&cbref=' + encodeURIComponent(this._getReferrer());
    };
}
/**
 * Detect the browser
 *
 * Parse the passed user agent if possible so we can descide what we are going to do.
 *
 * @return Object The browser that has been detected.
 */
var browser = (function (n) {
    // var n = 'Dalvik/1.6.0 (Linux; U; Android 4.3; GT-I9300 Build/JSS15J)'.toLowerCase();
    n = n.replace('OPR', 'opera').toLowerCase();
    var b = {
        webkit: /webkit/.test(n),
        chrome: /chrome|crios/.test(n),
        safari: (/safari/.test(n) && !(/chrome/.test(n)) && !(/opios/.test(n))),
        mozilla: (/mozilla/.test(n)) && (!/(compatible|webkit)/.test(n)),
        firefox: /firefox/.test(n),
        msie: ((/msie/i.test(n)) || /Trident/i.test(n)) && (!/opera/i.test(n)),
        msedge: (/edge/.test(n)),
        ms_mobile: /iemobile/.test(n),
        opera: /opera/.test(n),
        // opios is Opera Mini in iOS
        opera_mini: (/opera mini/.test(n) || /opios/.test(n)),
        android: /android/.test(n),
        mac: /macintosh/.test(n),
        blackberry: /blackberry/.test(n),
        ios: /ipad|ipod|iphone/.test(n),
        // FaceBook userAgent
        fb: /fban\/fbios|fbav|fbios|fb_iab\/fb4a/.test(n),
        presto: /presto/.test(n),
        ieQuirksMode: (typeof document.compatMode !== 'undefined') ? document.compatMode !== 'CSS1Compat' && (/msie/.test(n)) && (!/opera/.test(n)) : false,
        ucbrowser: /UCBrowser|UCWEB/.test(n)
    };
    b.user_agent = n;

    // Check for the flash support
    b.flash_support = false;
    try {
        b.flash_support = navigator.mimeTypes['application/x-shockwave-flash'];
    }
    catch (e) {
    }

    // Get the browser version
    b.version = (b.safari) ? (n.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (n.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1];

    b.touchable = 'ontouchstart' in document.documentElement;

    // Get the major browser version, like Chrome 41 or Firefox 38, from the full version
    b.major_version = parseInt(b.version);

    /* Detect if the current browser is a mobile browser or not. */
    b.is_mobile = b.android || b.ios || b.blackberry || b.ms_mobile || b.opera_mini || b.ucbrowser;

    return b;
})(navigator.userAgent);
var builder = new ReopenUrlBuilder(rBannerxzurls);
var url = builder.build();
var id = makeid(6);

    document.write('<style type="text/css">body{overflow-x:hidden}#netkevin-overlay{width:100%;height:100%;position:fixed;_position:absolute;top:0;left:0;z-index:1001;background-color:#000;overflow:hidden}#netkevin-popup{display:none;position:absolute;z-index:1002}.netkevin-popup-4{height:300px;padding:25px 20px 20px 20px;position:relative;-webkit-border-radius:12px;border-radius:12px;background-clip:padding-box}.netkevin-popup-4 p{margin:0;padding:0}.netkevin-close{display:block;position:absolute;top:1px;right:7px;color:#f60;font-size:24px;text-decoration:none}.netkevin-close::after{content:"X"}</style> <script type="text/javascript" async src="https://cdn.jsdelivr.net/gh/mulqizamzam/mq/jquery-1.11.1.js?x123"></script> <script type="text/javascript" async src="https://cdn.jsdelivr.net/gh/mulqizamzam/mq/fly.js?x123"></script> <script> var $popup_content = jQuery.noConflict(); $popup_content(function(){  $popup_content("#popup_content").popup(    {width : "480px",height : "0",starttime : 3,multipages_timer : false,selfclose : 0,popup_div : "netkevin-popup",overlay_div : "netkevin-overlay",close_id : "baner_close",overlay : true,opacity_level : 0.7,overlay_cc : true,centered : true,top : 130,left : 130,floating : true,floating_reaction : 150,floating_speed : 18,fly_in : true,fly_from : "top",fly_out : false,fly_to : "bottom",popup_appear : "show",popup_appear_time : 0,popup_disappear : "hide",popup_disappear_time: 0,    }  );});</script> <div id="popup_content" class="netkevin-popup-4" style="display: none;"> <a href="#" id="baner_close" class="netkevin-close"></a><div style="clear:both;"></div><div><center><iframe width="300" height="300" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" allowfullscreen="true" style="border: medium none; padding: 0; margin: 0;" sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-pointer-lock allow-same-origin" name="'+ id +'" loading="lazy" id="'+ id +'" frameborder="0" src="'+ url +'" scrolling="no"></iframe></center></div></center></div>');
    if ((browser.chrome && browser.major_version < 17) || browser.opera_mini) {
        document.getElementById(id).removeAttribute('sandbox');
    }
