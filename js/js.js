/***************************************** Side Navigation ********************************************/
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

function openSec() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
window.FontAwesomeConfig = {
    searchPseudoelements: true
}

/***************************************************************************************************/
/******************************************** jQuery ***********************************************/
/***************************************************************************************************/



/***************************************** Glass Effect ********************************************/
$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').eq(0).addClass('glass_transform');
        $('nav').eq(0).removeClass('topnavbar');
        $('ul').eq(0).children().removeClass('stlist');
        $('ul').eq(0).children().addClass('ndlist');
    }
    else {
        $('nav').eq(0).removeClass('glass_transform');
        $('span').eq(1).addClass('reset');
        $('nav').eq(0).addClass('topnavbar');
        $('ul').eq(0).children().addClass('stlist');
        $('ul').eq(0).children().removeClass('ndlist');
    }
})

/***************************************** Skills ********************************************/
var skshd = 'skillset_hd';
var sksaf = 'skillset_af';
var ultwo = 'ultw';
var hid = 'hide';
$(document).ready(function(){
    $('.skilljq1').mouseenter(function(){
        $('h4').eq(0).removeClass(skshd);
        $('h4').eq(0).addClass(sksaf);
        $('ul').eq(1).addClass(ultwo);
        $('ul').eq(1).removeClass(hid);
    })
    $('.skilljq1').mouseleave(function(){
        $('h4').eq(0).addClass(skshd);
        $('h4').eq(0).removeClass(sksaf);
        $('ul').eq(1).addClass(hid);
        $('ul').eq(1).removeClass(ultwo);
    })
})
$(document).ready(function(){
    $('.skilljq2').mouseenter(function(){
        $('h4').eq(1).removeClass(skshd);
        $('h4').eq(1).addClass(sksaf);
        $('ul').eq(2).addClass(ultwo);
        $('ul').eq(2).removeClass(hid);
    })
    $('.skilljq2').mouseleave(function(){
        $('h4').eq(1).addClass(skshd);
        $('h4').eq(1).removeClass(sksaf);
        $('ul').eq(2).addClass(hid);
        $('ul').eq(2).removeClass(ultwo);
    })
})
$(document).ready(function(){
    $('.skilljq3').mouseenter(function(){
        $('h4').eq(2).removeClass(skshd);
        $('h4').eq(2).addClass(sksaf);
        $('ul').eq(3).addClass(ultwo);
        $('ul').eq(3).removeClass(hid);
    })
    $('.skilljq3').mouseleave(function(){
        $('h4').eq(2).addClass(skshd);
        $('h4').eq(2).removeClass(sksaf);
        $('ul').eq(3).addClass(hid);
        $('ul').eq(3).removeClass(ultwo);
    })
})
$(document).ready(function(){
    $('.skilljq4').mouseenter(function(){
        $('h4').eq(3).removeClass(skshd);
        $('h4').eq(3).addClass(sksaf);
        $('ul').eq(4).addClass(ultwo);
        $('ul').eq(4).removeClass(hid);
    })
    $('.skilljq4').mouseleave(function(){
        $('h4').eq(3).addClass(skshd);
        $('h4').eq(3).removeClass(sksaf);
        $('ul').eq(4).addClass(hid);
        $('ul').eq(4).removeClass(ultwo);
    })
})
$(document).ready(function(){
    $('.skilljq5').mouseenter(function(){
        $('h4').eq(4).removeClass(skshd);
        $('h4').eq(4).addClass(sksaf);
        $('ul').eq(5).addClass(ultwo);
        $('ul').eq(5).removeClass(hid);
    })
    $('.skilljq5').mouseleave(function(){
        $('h4').eq(4).addClass(skshd);
        $('h4').eq(4).removeClass(sksaf);
        $('ul').eq(5).addClass(hid);
        $('ul').eq(5).removeClass(ultwo);
    })
})


/***************************************** Typed Anime ********************************************/
document.addEventListener('DOMContentLoaded', function() {
var typed = new Typed('#typed', {
    strings: ['Get Your Software developed by Proffessionals', 'Thats Us...', 'The Best You will Ever Find!'],
    typeSpeed: 30,
    backSpeed: 45,
    startDelay: 1000,
    fadeOut: false,
    loop: false,
    showCursor: false,
    onReset: function(self) { prettyLog('onReset ' + self) }
  });
});