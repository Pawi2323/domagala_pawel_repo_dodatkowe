$(document).ready(function(){
    $("#2"). attr("disabled", true);
    $('#1').change(function(){
        if(this.checked){
            $("#2"). attr("disabled", false);
        }else{
            $("#2"). attr("disabled", true);
        }
    });
});
function funkcja(){
    $("#2").on("click",function(){      
        $("#3").remove();
    });
}