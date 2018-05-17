$(document).foundation()
$('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
e.preventDefault();
$(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
});
// CARD

$(function(){
  $(".RECURSOS").on("click", function(){
    $(".card1").toggle(1000, "linear");
    $(".card2").hide(1000, "linear");
    $(".card3").hide(1000, "linear");
    $(".card4").hide(1000, "linear");

  });

  $(".TICS").on("click", function(){
    $(".card2").toggle(1000, "linear");
    $(".card1").hide(1000, "linear");
    $(".card3").hide(1000, "linear");
    $(".card4").hide(1000, "linear");

  });

  $(".CLINICO").on("click", function(){
    $(".card3").toggle(1000, "linear");
    $(".card1").hide(1000, "linear");
    $(".card2").hide(1000, "linear");
    $(".card4").hide(1000, "linear");

  });

  $(".ABP").on("click", function(){
    $(".card4").toggle(1000, "linear");
    $(".card1").hide(1000, "linear");
    $(".card2").hide(1000, "linear");
    $(".card3").hide(1000, "linear");

  });

  //IMAGENES
  $(".imgBox").draggable();
  $(".favoritos").droppable({
    accept: ".imgBox",
    drop: function(event, ui){
      $(ui.draggable)
        .css({
          width: "50%",
          padding: "auto",
          position: "relative",
          display: "inline-block",
          left: "auto",
          top: "auto",
          filter: "opacity(50%)",
        })
        .draggable("destroy")
        //.addClass("imgBoxFav")
        .removeClass("imgBox")
        .appendTo($(this))
    }
  })
  //IMAGENES
  //FORO
  $(".ejemplo").click(function(){
    if($("#nombre").val()=="" || $("#email").val()=="" || $("#comentario").val()==""){
      alert("datos incompletos")
    }else{
      var titulo="<div class='comment-section-author'><img src='https://placehold.it/50x50' alt=''><div class='comment-section-name'><h5><a href=''>"+
      $("#nombre").val()+"</a></h5><p>"+$("#email").val()+"</p></img></div>"
      var comentario="<div class='comment-section-text'><p>"+$("#comentario").val();+"</p></div>"
      $("#FORO").after(
        titulo,comentario
      )
      $("#nombre").val("");
      $("#email").val("");
      $("#comentario").val("");
    }
  })
  //FORO
});
// CARD

//PRUEBAIMAGENES

//PRUEBA SLIDE IMÁGENES
$('.sim-thumb').on('click', function() {
  $('#main-product-image').attr('src', $(this).data('image'));
})
//PRUEBA SLIDE IMÁGENES

//Definición de la interacción droppable sobre el contenedor de favoritos
