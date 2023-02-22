function viewTabsOn(){
    let v = document.getElementById("mytabs");

    if(v.style.display == 'none'){
        v.style.display = 'block';
    }else{
        v.style.display = 'none';
    }
}

function viewTabsOn2(){
    let v = document.getElementById("mytabs2");

    if(v.style.display == 'none'){
        v.style.display = 'block';
    }else{
        v.style.display = 'none';
    }
}

$(function(){
    setInterval(mySlide, 3000);
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