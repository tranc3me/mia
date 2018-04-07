

$(document).ready(function(){
    var hiddenElem = $('.neprikazuj')
   hiddenElem.slideUp(1);
    var allElem = $('.row')
    let slidedown= true;
    $('.show_hide').click(function(e){

        hiddenElem.slideToggle();
        if(slidedown){
            slidedown=false;
        addtext()
    }else{
        $('.show_hide:first').html(`<span>Show More</span><i class="fa fa-caret-down"></i>`)
        slidedown=true;
    }

    });

    function addtext(){

        $('.show_hide:first').html(`<span>Show Less</span><i class="fa fa-caret-up"></i>`)

    }

/**MODAL BOX **/
const modal=$('.modal')

$('.close').click(function(){
    $('.modal').css({display:"none"})

})

$(window).click(function(e){

    
    if(e.target.classList.contains("modal")){
        $('.modal').css({display:"none"})
    }
})

/***open modalbox **/

$('.fa-calendar').click(function(){
    $('.modal').css({display:"block"})
});


});
