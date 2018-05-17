var resultado=0;
var muneca=['pmunecaesca','pmunecalat','pmunecaobli','pmunecapa'];
var cadera=['ancascadera','apcadera','axiolateralcadera','oblicuacadera'];
var hombro=['aphombro','axilarhombro','transaxilarhombro','yhombro'];
var rodilla=['aprodilla','lateralrodilla','oblicuarodilla','parotula'];
var codo=['apcodo','lateralcodo','oblicuacodo','pacodo'];
var tobillo=['aptobillo','calcaneo','lattobillo','mortajatobillo'];
$(function(){
  //FORMULARIO MUNECA
  $("#enviar2").click(function(e){
    funcionradiobutton();
    // FORMULARIO IMAGENES
    if($(".pmunecaobli div").attr("id")==muneca[2]){
      resultado+=1;
    }
    if($(".pmunecalat div").attr("id")==muneca[1]){
      resultado+=1;
    }
    if($(".pmunecaesca div").attr("id")==muneca[0]){
      resultado+=1;
    }
    if($(".pmunecapa div").attr("id")==muneca[3]){
      resultado+=1;
    }
    // FORMULARIO IMAGENES
    funcionResultado();
    //prueba mostrar fractura

    //prueba mostrar fractura
  })
  //FORMULARIO MUNECA
  //FORMULARIO CADERA
  $("#enviar3").click(function(e){
    funcionradiobutton();
    // FORMULARIO IMAGENES
    if($(".axiolateralcadera div").attr("id")==cadera[2]){
      resultado+=1;
    }
    if($(".ancascadera div").attr("id")==cadera[0]){
      resultado+=1;
    }
    if($(".oblicuacadera div").attr("id")==cadera[3]){
      resultado+=1;
    }
    if($(".apcadera div").attr("id")==cadera[1]){
      resultado+=1;
    }
    // FORMULARIO IMAGENES
    funcionResultado();
  })
  //FORMULARIO CADERA
  //FORMULARIO HOMBRO
  $("#enviar4").click(function(e){
    funcionradiobutton();
    // FORMULARIO IMAGENES
    if($(".yhombro div").attr("id")==hombro[3]){
      resultado+=1;
    }
    if($(".transaxilarhombro div").attr("id")==hombro[2]){
      resultado+=1;
    }
    if($(".axilarhombro div").attr("id")==hombro[1]){
      resultado+=1;
    }
    if($(".aphombro div").attr("id")==hombro[0]){
      resultado+=1;
    }
    // FORMULARIO IMAGENES
    funcionResultado();
  })
  //FORMULARIO HOMBRO
  //FORMULARIO RODILLA
  $("#enviar5").click(function(e){
    funcionradiobutton();
    // FORMULARIO IMAGENES
    if($(".aprodilla div").attr("id")==rodilla[0]){
      resultado+=1;
    }
    if($(".lateralrodilla div").attr("id")==rodilla[1]){
      resultado+=1;
    }
    if($(".oblicuarodilla div").attr("id")==rodilla[2]){
      resultado+=1;
    }
    if($(".parotula div").attr("id")==rodilla[3]){
      resultado+=1;
    }
    // FORMULARIO IMAGENES
    funcionResultado();
  })
  //FORMULARIO RODILLA
  //FORMULARIO CODO
  $("#enviar1").click(function(e){
    funcionradiobutton();
    // FORMULARIO IMAGENES
    if($(".apcodo div").attr("id")==codo[0]){
      resultado+=1;
    }
    if($(".lateralcodo div").attr("id")==codo[1]){
      resultado+=1;
    }
    if($(".oblicuacodo div").attr("id")==codo[2]){
      resultado+=1;
    }
    if($(".pacodo div").attr("id")==codo[3]){
      resultado+=1;
    }
    // FORMULARIO IMAGENES
    funcionResultado();
  })
  //FORMULARIO CODO
  //FORMULARIO TOBILLO
  $("#enviar6").click(function(e){
    funcionradiobutton();
    // FORMULARIO IMAGENES
    if($(".aptobillo div").attr("id")==tobillo[0]){
      resultado+=1;
    }
    if($(".calcaneo div").attr("id")==tobillo[1]){
      resultado+=1;
    }
    if($(".lattobillo div").attr("id")==tobillo[2]){
      resultado+=1;
    }
    if($(".mortajatobillo div").attr("id")==tobillo[3]){
      resultado+=1;
    }
    // FORMULARIO IMAGENES
    funcionResultado();
  })
  //FORMULARIO TOBILLO
});
//FUNCIÓN RESULTADO
var funcionResultado=function(){
  // RESULTADO
  $(".circle-graph").attr("data-percent",(resultado*100)/10);
  $('[data-mobile-app-toggle] .button').click(function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });

  $("[data-circle-graph]").each(function() {
    var $graph = $(this),
        percent = parseInt($graph.data('percent'), 10),
        deg = 360*percent/100;
    if(percent > 50) {
      $graph.addClass('gt-50');
      $(".product-image-gallery").show(3000,"linear");
    }
    $graph.find('.circle-graph-progress-fill').css('transform','rotate('+ deg +'deg)');
    $graph.find('.circle-graph-percents-number').html(percent+'%');
  });
  $(".pregunta input[type=radio]").attr('disabled', true);
  // RESULTADO
}
//FUNCIÓN RESULTADO
//FUNCION VALIDACION RADIOBUTTONS
var funcionradiobutton=function(){
  var seleccion=$(":checked")
  for(var i=0;i<6;i++){
    //alert($(seleccion[i]).attr("class"));
    if($(seleccion[i]).attr("class")=="correcto"){
      resultado+=1;
    }
  }
}
//FUNCION VALIDACION RADIOBUTTONS
