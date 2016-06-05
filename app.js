var smokeMaker;

$(function(){
  //makeSmoke();
  addShapeHover();
  addClickEvents();
  //createMovingStars();

});

function addClickEvents(){
  addShapeClickEvent()
  menuClick();
}


function addShapeHover(){
  $('#shape').hover(
       function(){
         $('#forestImage').addClass('forestZoom');
         $('#shape').removeClass('shape-pulsate');
       },
       function(){
         $('#forestImage').removeClass('forestZoom');
         $('#shape').addClass('shape-pulsate');
       }
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

    //fade eye and fade in new title
    setTimeout(function(){
      $('#viewport').fadeOut();
      $('#alternateDimension').fadeIn();
    }, 4500);

  })
}

function menuClick(){
  $('.menu-button').click(function(){

    var menu = $('.menu');
    var menuButton = $('.menu-button');

    if(menuButton.hasClass('menu-button-open')){
      menuButton.removeClass('menu-button-open');
      menu.fadeOut();
    }
    else{
      menuButton.addClass('menu-button-open');
      menu.fadeIn();
    }

  });
}
