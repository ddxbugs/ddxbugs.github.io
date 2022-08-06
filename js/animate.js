window.onload = function() {
    animate();
  }
  
  function animate(){
  
    $('#midground').css({backgroundPosition: '0px 0px'});
    $('#foreground').css({backgroundPosition: '0px 0px'});
    $('#background').css({backgroundPosition: '0px 0px'});
  
    $('#midground').animate({
      backgroundPosition:"(-10000px -2000px)"
    }, 240000, 'linear');
    
    $('#foreground').animate({
      backgroundPosition:"(-10000px -2000px)"
    }, 120000, 'linear');
    
    $('#background').animate({
      backgroundPosition:"(-10000px -2000px)"
    }, 480000, 'linear');
    
  }