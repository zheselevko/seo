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
})

$('.arr-right').click(function(){
  $('.reviews-slide').slick('slickNext');
})
$('.clients-slide').slick({
	 infinite: true,
  slidesToShow: 5,
  loop: true,
  slidesToScroll: 1,
  arrows: false
});
	$('.arr-left-client').click(function(){
  $('.clients-slide').slick('slickPrev');
})

$('.arr-right-client').click(function(){
  $('.clients-slide').slick('slickNext');
})
});