/*!
  * Yaman Ural v4.0.0
 */
 $( "#nav-about" ).click(function() {
 	$(".op-100" ).fadeOut( 500, function() {
 	$(".op-100" ).removeClass("op-100")
 	$("#about" ).fadeIn( 500);
 	$("#about" ).addClass("op-100");
  $(".nav-active" ).removeClass("nav-active");
  $("#nav-about" ).addClass( "nav-active" );

  });
});

$( "#nav-works" ).click(function() {
 	$(".op-100" ).fadeOut( 500, function() {
 	$(".op-100" ).removeClass("op-100")
 	$("#works" ).fadeIn( 500);
 	$("#startups" ).fadeIn(100);
 	$("#works" ).addClass("op-100");
  $(".nav-active" ).removeClass("nav-active");
  $("#nav-works" ).addClass( "nav-active" );
  });
});

$( "#nav-skills" ).click(function() {
 	$(".op-100" ).fadeOut( 500, function() {
 	$(".op-100" ).removeClass("op-100")
 	$("#skills" ).fadeIn( 500);
 	$("#skills" ).addClass("op-100");
  $(".nav-active" ).removeClass("nav-active");
  $("#nav-skills" ).addClass( "nav-active" );
  });
});

$( "#nav-experience" ).click(function() {
 	$(".op-100" ).fadeOut( 500, function() {
 	$(".op-100" ).removeClass("op-100")
 	$("#experience" ).fadeIn( 500);
 	$("#experience" ).addClass( "op-100" );
  $(".nav-active" ).removeClass("nav-active");
  $("#nav-experience" ).addClass( "nav-active" );
  });
});

$( "#nav-startups" ).click(function() {
	$(".active" ).removeClass("active")
 	$("#nav-startups" ).addClass( "active" );
 	$("#commercial" ).fadeOut(300);
 	$("#advertising" ).fadeOut(300);
 	$("#startups" ).fadeIn(300);
  });

$( "#nav-commercial" ).click(function() {
	$(".active" ).removeClass("active")
 	$("#nav-commercial" ).addClass( "active" );
 	$("#startups" ).fadeOut(300);
 	$("#advertising" ).fadeOut(300);
 	$("#commercial" ).fadeIn(300);
  });

$( "#nav-advertising" ).click(function() {
	$(".active" ).removeClass("active")
 	$("#nav-advertising" ).addClass( "active" );
 	$("#commercial" ).fadeOut(300);
 	$("#startups" ).fadeOut(300);
 	$("#advertising" ).fadeIn(300);
  });





