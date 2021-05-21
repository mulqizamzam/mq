var rBannerxyz = ['897934','902108','902517','902518'];
function cakcakanArr(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
cakcakanArr(rBannerxyz);
var rBannerxyzcode=rBannerxyz[0];
//<![CDATA[
var lazyjus = false;
window.addEventListener("scroll", function(){
if ((document.documentElement.scrollTop != 0 && lazyjus === false) || (document.body.scrollTop != 0 && lazyjus === false)) {
(function() { var ad = document.createElement("script"); ad.type = "text/javascript"; ad.async = true; ad.src = "https://poweredby.jads.co/js/jfc.js"; var ja = document.createElement("script"); ad.type = "text/javascript"; ad.async = true; ja.innerHTML = "juicy_adzone = " + rBannerxyzcode; var sc = document.getElementsByTagName("script")[0]; sc.parentNode.insertBefore(ad, sc); sc.parentNode.insertBefore(ja, sc); })();
    lazyjus = true;
  }
}, true)
//]]>
