$(function(){
    setInterval(mySlide, 2000);
    function mySlide(){
        $('.slidein').animate({
            'left':'-1200px'
        },500, function(){
            $('.slidein img:first-child').clone().appendTo('.slidein');
            $('.slidein img:first-child').remove();
            $('.slidein').css('left',0);
        });
    }
}); //jquery