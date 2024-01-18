
	
$(".thumb").click(function(){

let url = $(this).attr("src")

$(".large").children().attr("src",url)

$(this).addClass("show-time fade-in").siblings().removeClass("show-time fade-in")

});

