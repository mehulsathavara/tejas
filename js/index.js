(function($){
  
  $(".menu-icon").on("click", function(){
    	$(this).toggleClass("open");
    	$(".container,.menu,.x,.y,div.content").toggleClass("nav-open");
    	$("nav ul li").toggleClass("animate");
  });
  
})(jQuery);