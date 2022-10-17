$(document).ready(function(){

    $('#list').append("<li class='witcher'>Nieznane</li>");
    $('#glowa').css("background-color","#00FF00");
    $('#stopa').css("background-color","#0000FF");
    $('.witcher').even().css("font-weight","bold");
    $('.witcher:gt(2)').css("background-color","red");
    $('.witcher').css("letter-spacing","2px");
    
});