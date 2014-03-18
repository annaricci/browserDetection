function browserDetection () {
    var userAgent = navigator.userAgent.toString().toLowerCase();
    if (userAgent.toLowerCase().indexOf('windows') !== -1) //windows OS
        $('body').addClass('windows');
    if (userAgent.toLowerCase().indexOf('linux') !== -1) //linux OS
        $('body').addClass('linux');
    if (userAgent.toLowerCase().indexOf('macintosh') !== -1) //mac OS
        $('body').addClass('mac');   
    if ((userAgent.toLowerCase().indexOf('ipad') !== -1) || (userAgent.toLowerCase().indexOf('mobile') !== -1) || (userAgent.toLowerCase().indexOf('android') !== -1) || (userAgent.toLowerCase().indexOf('blackberry') !== -1)) //mobile device 
        $('body').addClass('mobile');
    if (userAgent.toLowerCase().indexOf('ipad') !== -1)
        $('body').addClass('ipad');
    if (userAgent.toLowerCase().indexOf('blackberry') !== -1)
        $('body').addClass('blackberry');
    if (userAgent.toLowerCase().indexOf('android') !== -1)
        $('body').addClass('android');
    if (userAgent.toLowerCase().indexOf('msie') !== -1) { //IE expect IE11
        $('body').addClass('ie');
        if (userAgent.toLowerCase().indexOf('msie 8') !== -1) //IE8
            $('body').addClass('ie8');
    }
    else if (userAgent.toLowerCase().indexOf('firefox') !== -1) //Firefox
        $('body').addClass('firefox');
    else if (userAgent.toLowerCase().indexOf('opera') !== -1) //Opera
        $('body').addClass('opera');
    else if ((userAgent.indexOf('safari') != -1) && !(userAgent.indexOf('chrome') != -1)) //Safari
        $('body').addClass('safari');
    else if (userAgent.indexOf('chromium') != -1) //Chromium
        $('body').addClass('chromium');
    else if ((userAgent.indexOf('safari') != -1) && (userAgent.indexOf('chrome') != -1)) //chrome
        $('body').addClass('chrome');
    else //ie11
        $('body').addClass('ie11');
}
