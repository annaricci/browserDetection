(function browserDetection () {
    var userAgent = navigator.userAgent.toString().toLowerCase();
    if (userAgent.indexOf('windows') !== -1) //windows OS
        $('body').addClass('windows');
    if (userAgent.indexOf('linux') !== -1) //linux OS
        $('body').addClass('linux');
    if (userAgent.indexOf('macintosh') !== -1) //mac OS
        $('body').addClass('mac');   
    if ((userAgent.indexOf('ipad') !== -1) || (userAgent.indexOf('mobile') !== -1) || (userAgent.toLowerCase().indexOf('android') !== -1) || (userAgent.toLowerCase().indexOf('blackberry') !== -1)) //mobile device 
        $('body').addClass('mobile');
    if (userAgent.indexOf('ipad') !== -1)
        $('body').addClass('ipad');
    if (userAgent.indexOf('blackberry') !== -1)
        $('body').addClass('blackberry');
    if (userAgent.indexOf('android') !== -1)
        $('body').addClass('android');
    if (userAgent.indexOf('msie') !== -1) { //IE expect IE11
        $('body').addClass('ie');
        if (userAgent.indexOf('msie 8') !== -1) //IE8
            $('body').addClass('ie8');
    } 
    else if (!(window.ActiveXObject) && "ActiveXObject" in window) //IE11
        $('body').addClass('ie11');
    else if (userAgent.indexOf('firefox') !== -1) //Firefox
        $('body').addClass('firefox');
    else if (userAgent.indexOf('opera') !== -1) //Opera
        $('body').addClass('opera');
    else if ((userAgent.indexOf('safari') != -1) && !(userAgent.indexOf('chrome') != -1)) //Safari
        $('body').addClass('safari');
    else if (userAgent.indexOf('chromium') != -1) //Chromium
        $('body').addClass('chromium');
    else if ((userAgent.indexOf('safari') != -1) && (userAgent.indexOf('chrome') != -1)) //chrome
        $('body').addClass('chrome');
})();
