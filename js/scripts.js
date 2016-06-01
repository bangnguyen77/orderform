$(document).ready(function(){
  $("form#orderform").submit(function(event){
    var nameInput = $(".name").val();
    var addressInput = $("#address").val();
    $("#receipt").show();
    $(".name").text(nameInput);
    $(".address").text(addressInput);

    event.preventDefault();
  })
})
