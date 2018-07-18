// Валидация
$(function(){
	$(".mask_phone").inputmask("+7 (999) 999-99-99");
	$(".extend").inputmask({ "mask": "a", "repeat": 40, "greedy": false });
});

// Маска не слетает с ajax
$(function(){
	$('.mask-phone').mask('+7 (999) 999-99-99');
	BX.addCustomEvent('onAjaxSuccess', function() {
		$('.mask-phone').mask('+7 (999) 999-99-99');
	});
});

//Маска на добавление в поле только букв
$(function(){
	$('.input-name').on('keypress', function () {
		var that = this;
		setTimeout(function () {
			var res = /[^а-яА-ЯёЁa-zA-Z ]/g.exec(that.value);
			that.value = that.value.replace(res, '');
		}, 0);
	});
});