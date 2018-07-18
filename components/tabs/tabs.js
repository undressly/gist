$('.sales__tab').click(function(){
	var dataId = $(this).data("tabid");
	$('.sales__tab').removeClass('_active');
	$(this).addClass('_active');

	$('.sales__wrap').removeClass('_active');
	$('.sales__wrap').each(function(){
		if($(this).data('tabid') == dataId){
			$(this).addClass('_active');
		}
	});
});

$('.sales__tab:first').addClass('_active');
$('.sales__wrap:first').addClass('_active');