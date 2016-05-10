var smokeMaker;

$(function(){
  //makeSmoke();
  addShapeHover();
  addShapeClickEvent();

});


function addShapeHover(){
  $('#shape').hover(
       function(){ $('#forestImage').addClass('forestZoom') },
       function(){ $('#forestImage').removeClass('forestZoom') }
  )
}

function addShapeClickEvent(){
  $('#shape').click(function(){

    stopSmoke();

    var forestImage = $('#forestImage');

    //Gets the scale for the transform
    var element = document.querySelector('#forestImage');
    var scaleX = element.getBoundingClientRect().width / element.offsetWidth;

    forestImage.css({
      '-webkit-transform' : 'scale(' + scaleX + ')',
      '-moz-transform'    : 'scale(' + scaleX + ')',
      '-ms-transform'     : 'scale(' + scaleX + ')',
      '-o-transform'      : 'scale(' + scaleX + ')',
      'transform'         : 'scale(' + scaleX + ')'
    });

    //fade the forest
    forestImage.addClass('forestFade');

    $('#eyeGif').addClass('static-gif-clicked');

    $('#viewport').removeClass('show-smoke');

  })
}
