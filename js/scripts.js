$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $("button#darkBackground").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-mode");
    });


  $("button#lightBackground").click(function(){
    $("body").removeClass();
    $("body").addClass("light-mode");
  });
});