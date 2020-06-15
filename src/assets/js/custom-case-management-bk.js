/****=======================Start: Table Column Sticky Case Table ===================****/


 $(window).on('load', function() {
 	scrolltodiv();
});
$(window).resize(function () {
	scrolltodiv();
});
function scrolltodiv(){
	var window_width = $(window).width();
    if(window_width > 768){
    	$(".case-table").clone(true).appendTo('#table-scroll').addClass('table-responsive clone');
    }else{
    	$('.clone .fixed-side').css('visibility','hidden');
    }
 }
​

/****=======================End: Table Column Sticky Case Table ===================****/