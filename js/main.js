$(document).ready(function(){
    $(".unshow").click(function(){
      $("img").hide();
    });

    $(".show").click(function(){
      $("img").show();
    });

    $(".preme").dblclick(function(){
      $(".preme h1").toggleClass("new-text");
    });

    $(".add-item").click(function(){
      $("ul").append("<li>Item 3</li>");
    });

    $(".thing").hover(function(){
      $(".thing").animate({
        height: "150px",
        width: "150px"
      });
    });

    $("h2").hover(function(){
      $("h2").slideUp();
    });

    $(".ting").hover(function(){
      $(".ting").fadeOut();
    });
    $(".comeback").click(function(){
      $(".ting").fadeIn();
    });

    $(".preme h1").hover(function(){
      $(".preme h1").animate({
        letterSpacing: "+=20px"
      });
    });
});
