let fNameInput = $('#fNameInput');
let sNameInput = $('#sNameInput');
let emailInput = $('#emailInput');
let textMessageInput = $('#textMessageInput');
let sendBtn = $('#sendBtn');
let messagesBox =[];

let aScroll = $('#about').offset().top;
let hScroll = $('#home').offset().top;


$(window).scroll(function (){
    let mainNav = $('#mainNav');
    let Wscroll = $(window).scrollTop();
    if (Wscroll > aScroll  -50) {

        mainNav.css('backgroundColor','rgba(0,0,0,0.8)');
        mainNav.css('padding','20px');
        $('#btnUp').fadeIn(500)
    }
    else {
        mainNav.css('backgroundColor','transparent');
        mainNav.css('padding','10px 5px');
        $('#btnUp').fadeOut(500);
    }
})

$('#btnUp').click(function () {
    $('html,body').animate({scrollTop:hScroll},1000)
})

$("a[href^='#']").click(function (e) {
    $(e.target).css('border-bottom','solid #fff 3px');
    $(e.target).parent().siblings().children().css('border-bottom','none');
    let linkHref = $(e.target).attr('href');
    let section = $(linkHref).offset().top;
    $('html,body').animate({scrollTop:section},1000)
})


function messageObject() {
    
    var message = {
        fName : fNameInput.val(),
        sName : sNameInput.val(),
        email : emailInput.val(),
        message : textMessageInput.val(),
    }
    messagesBox.push(message);
    localStorage.setItem('message',JSON.stringify(messagesBox))
    clearForm()
}

if(localStorage.getItem('message') !=null)
{
   messagesBox = JSON.parse(localStorage.getItem('message'));    
}

function clearForm() {
     fNameInput.val("") ;
     sNameInput.val("") ;
     emailInput.val("") ;
     textMessageInput.val("") ;
}

sendBtn.click(() => {
    messageObject()
})

$(document).ready(function () {
    $('#loading .sk-chase').fadeOut(750,function () {
        $('html,body').animate({scrollTop:hScroll},0)
        $('#loading').fadeOut(1000,function () {
            $('body').css('overflow-y','auto');
            $('#loading').remove();
            
        })
    })
})


new WOW().init();
let pc = 'Junior Frontend';
const typed = new Typed('#element', {
  strings: [`${pc} Web Dev.`],
  typeSpeed: 50,
  backSpeed:25,
  loop:true,
  showCursor:false,
})