$(function (){
    var nrobrazu =0;
    $(".imgduze").hide();
    $("#nast").hide();
    $("#poprz").hide();
    $("#zdj1").dblclick(function(){
         $("#img1").show('slow');
        $("#img2").hide('slow');
        $("#img3").hide('slow');
        $("#img4").hide('slow');
        $("#img5").hide('slow');
        $("#img6").hide('slow');
        $("#nast").show();
        $("#poprz").show();
        nrobrazu = 1;
    });
    $("#zdj2").dblclick(function(){
        $("#img1").hide('slow');
        $("#img2").show('slow');
        $("#img3").hide('slow');
        $("#img4").hide('slow');
        $("#img5").hide('slow');
        $("#img6").hide('slow');
        $("#nast").show();
        $("#poprz").show();
        nrobrazu = 2;
    });
    $("#zdj3").dblclick(function(){
        $("#img1").hide('slow');
        $("#img2").hide('slow');
        $("#img3").show('slow');
        $("#img4").hide('slow');
        $("#img5").hide('slow');
        $("#img6").hide('slow');
        $("#nast").show();
        $("#poprz").show();
        nrobrazu = 3;
    });
    $("#zdj4").dblclick(function(){
        $("#img1").hide('slow');
        $("#img2").hide('slow');
        $("#img3").hide('slow');
        $("#img4").show('slow');
        $("#img5").hide('slow');
        $("#img6").hide('slow');
        $("#nast").show();
        $("#poprz").show();
        nrobrazu = 4;
    });
    $("#zdj5").dblclick(function(){
        $("#img1").hide('slow');
        $("#img2").hide('slow');
        $("#img3").hide('slow');
        $("#img4").hide('slow');
        $("#img5").show('slow');
        $("#img6").hide('slow');
        $("#nast").show();
        $("#poprz").show();
        nrobrazu = 5;
    });
    $("#zdj6").dblclick(function(){
        $("#img1").hide('slow');
        $("#img2").hide('slow');
        $("#img3").hide('slow');
        $("#img4").hide('slow');
        $("#img5").hide('slow');
        $("#img6").show('poprz');
        $("#nast").show();
        $("#poprz").show();
        nrobrazu = 6;
    });
    $('#zdj1').click(function(){
        $("#zdj1").animate({"left": "20px"},40);
        $("#zdj1").animate({"left": "-20px"},40);
        $("#zdj1").animate({"left": "0px"},40);
    });
    $('#zdj2').click(function(){
        $("#zdj2").animate({"left": "20px"},40);
        $("#zdj2").animate({"left": "-20px"},40);
        $("#zdj2").animate({"left": "0px"},40);
    });
    $('#zdj3').click(function(){
        $("#zdj3").animate({"left": "20px"},40);
        $("#zdj3").animate({"left": "-20px"},40);
        $("#zdj3").animate({"left": "0px"},40);
    });
    $('#zdj4').click(function(){
        $("#zdj4").animate({"left": "20px"},40);
        $("#zdj4").animate({"left": "-20px"},40);
        $("#zdj4").animate({"left": "0px"},40);
    });
    $('#zdj5').click(function(){
        $("#zdj5").animate({"left": "20px"},40);
        $("#zdj5").animate({"left": "-20px"},40);
        $("#zdj5").animate({"left": "0px"},40);
    });
    $('#zdj6').click(function(){
        $("#zdj6").animate({"left": "20px"},40);
        $("#zdj6").animate({"left": "-20px"},40);
        $("#zdj6").animate({"left": "0px"},40);
    });
    $("#nast").click(function(){
        if(nrobrazu==1){
            $("#img1").hide('slow');
            $("#img2").show('slow');
            $("#img3").hide('slow');
            $("#img4").hide('slow');
            $("#img5").hide('slow');
            $("#img6").hide('slow');
            nrobrazu=2;
        }else if(nrobrazu == 2){
            $("#img1").hide('slow');
            $("#img2").hide('slow');
            $("#img3").show('slow');
            $("#img4").hide('slow');
            $("#img5").hide('slow');
            $("#img6").hide('slow');
            nrobrazu=3;
        }else if(nrobrazu == 3){
            $("#img1").hide('slow');
            $("#img2").hide('slow');
            $("#img3").hide('slow');
            $("#img4").show('slow');
            $("#img5").hide('slow');
            $("#img6").hide('slow');
            nrobrazu=4;
        }else if(nrobrazu == 4){
            $("#img1").hide('slow');
            $("#img2").hide('slow');
            $("#img3").hide('slow');
            $("#img4").hide('slow');
            $("#img5").show('slow');
            $("#img6").hide('slow');
            nrobrazu=5;
        }else if(nrobrazu == 5){
            $("#img1").hide('slow');
            $("#img2").hide('slow');
            $("#img3").hide('slow');
            $("#img4").hide('slow');
            $("#img5").hide('slow');
            $("#img6").show('slow');
            nrobrazu=6;
        }else if(nrobrazu == 6){
            $("#img1").show('slow');
            $("#img2").hide('slow');
            $("#img3").hide('slow');
            $("#img4").hide('slow');
            $("#img5").hide('slow');
            $("#img6").hide('slow');
            nrobrazu=1;
        }
    });
    $("#poprz").click(function(){
        if(nrobrazu==1){
            $("#img1").hide('slow');
            $("#img2").hide('slow');
            $("#img3").hide('slow');
            $("#img4").hide('slow');
            $("#img5").hide('slow');
            $("#img6").show('slow');
            nrobrazu=6;
        }else if(nrobrazu == 2){
            $("#img1").show('slow');
            $("#img2").hide('slow');
            $("#img3").hide('slow');
            $("#img4").hide('slow');
            $("#img5").hide('slow');
            $("#img6").hide('slow');
            nrobrazu=1;
        }else if(nrobrazu == 3){
            $("#img1").hide('slow');
            $("#img2").show('slow');
            $("#img3").hide('slow');
            $("#img4").hide('slow');
            $("#img5").hide('slow');
            $("#img6").hide('slow');
            nrobrazu=2;
        }else if(nrobrazu == 4){
            $("#img1").hide('slow');
            $("#img2").hide('slow');
            $("#img3").show('slow');
            $("#img4").hide('slow');
            $("#img5").hide('slow');
            $("#img6").hide('slow');
            nrobrazu=3;
        }else if(nrobrazu == 5){
            $("#img1").hide('slow');
            $("#img2").hide('slow');
            $("#img3").hide('slow');
            $("#img4").show('slow');
            $("#img5").hide('slow');
            $("#img6").hide('slow');
            nrobrazu=4;
        }else if(nrobrazu == 6){
            $("#img1").hide('slow');
            $("#img2").hide('slow');
            $("#img3").hide('slow');
            $("#img4").hide('slow');
            $("#img5").show('slow');
            $("#img6").hide('slow');
            nrobrazu=5;
        }
    });
});