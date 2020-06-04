jQuery(document).ready(function ($) {
   $("body").css("display", "none");

    $("body").fadeIn(1000);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
   
   // $(".scrollpanel").scrollpanel();

   // $(".scrollpanel").scrollpanel({
   //    prefix: 'sp-'
   // });

   // $(function () {
   //    $("#my-accordion").accordion();
   // });
});