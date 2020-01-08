$(function(){

  $('[data-toggle="popover"]').popover();

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var cat = this.hash;

      $("html, body").animate({
        scrollTop: $(cat).offset().top
      }, 600, function(){
        window.location.hash = cat;
      });
    }
  });

});
