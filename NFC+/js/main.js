 $(function() {
     $(window).scroll(function(){
      if ($(window).scrollTop()>385){
        $("#fix-box").addClass('active');
      }
      else
      {
       $("#fix-box").removeClass('active');
      }
      });

});

