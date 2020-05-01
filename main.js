// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
	$('#episode-one-link').click(function(){
		$('.movies').hide();
		$('#episode-one').css('background','black')
		$('#episode-one').find('h1').css('color', 'yellow')
		$('#episode-one').find('p').css('color', 'yellow')
		$('#episode-one').fadeIn()
	})
	$('#episode-two-link').click(function(){
		$('.movies').hide();
		$('#episode-two').css('background','black')
		$('#episode-two').find('h1').css('color', 'yellow')
		$('#episode-two').find('p').css('color', 'yellow')
		$('#episode-two').fadeIn()
	})
	$('#episode-three-link').click(function(){
		$('.movies').hide();
		$('#episode-three').css('background','black')
		$('#episode-three').find('h1').css('color', 'yellow')
		$('#episode-three').find('p').css('color', 'yellow')
		$('#episode-three').fadeIn()
	})
	$('#episode-four-link').click(function(){
		$('.movies').hide();
		$('#episode-four').css('background','black')
		$('#episode-four').find('h1').css('color', 'yellow')
		$('#episode-four').find('p').css('color', 'yellow')
		$('#episode-four').fadeIn()
	})
	$('#episode-five-link').click(function(){
		$('.movies').hide();
		$('#episode-five').css('background','black')
		$('#episode-five').find('h1').css('color', 'yellow')
		$('#episode-five').find('p').css('color', 'yellow')
		$('#episode-five').fadeIn()
	})
	$('#episode-six-link').click(function(){
		$('.movies').hide();
		$('#episode-six').css('background','black')
		$('#episode-six').find('h1').css('color', 'yellow')
		$('#episode-six').find('p').css('color', 'yellow')
		$('#episode-six').fadeIn()
	})
});