$(document).ready(function(){
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true,   // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		activate: function(event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#tabInfo');
			var $name = $('span', $info);

			$name.text($tab.text());

			$info.show();
		}
	});
	$(".accordian-heading").click(function(){
		$(this).toggleClass("move-arrow");
		$(this).parent().find(".accordian-content").slideToggle("slow");
	});
});