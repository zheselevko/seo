$(document).ready(function() {

	$('.reviews-slide').slick(
	{
		arrows: false,
		    dots:true,
		    vertical: true,
    appendDots:$(".dots"),
	}
		);
	$('.arr-left').click(function(){
  $('.reviews-slide').slick('slickPrev');
});

$('.arr-right').click(function(){
  $('.reviews-slide').slick('slickNext');
});
$('.clients-slide').slick({
	 infinite: true,
  slidesToShow: 5,
  loop: true,
  slidesToScroll: 1,
  arrows: false
});
	$('.arr-left-client').click(function(){
  $('.clients-slide').slick('slickPrev');
});
$('.arr-right-client').click(function(){
  $('.clients-slide').slick('slickNext');
});
$(".spincrement").spincrement({
    from: 0,                // Стартовое число
    to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
    decimalPlaces: 0,       // Сколько знаков оставлять после запятой
    decimalPoint: ".",      // Разделитель десятичной части числа
    thousandSeparator: ",", // Разделитель тыcячных
    duration: 10000          // Продолжительность анимации в миллисекундах
});
});