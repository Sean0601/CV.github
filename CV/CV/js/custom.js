$(document).ready(function(){

	// header change color
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})

	// wow
	if (screen.width > 768) {
		new WOW().init();
	}
	

	// fancybox
	$('[data-fancybox="images"]').fancybox({
		loop : true
	});

	// stellar
	if(screen.width > 768){
		$(window).stellar();
	}
	

})