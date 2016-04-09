/**/
/* on load event */
/**/
$(function()
{
	$('body').append('<style>');
	
	$('#tuner-switcher').on('click', function()
	{
		$('#tuner').toggleClass('tuner-visible');
	});
	
	$('#tuner').on('click', '.colors li', function()
	{
		$('#color-picker div').removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		$('#tuner-style span').text($(this).data('hex'));
		$('style').text($('#tuner-style').text());
	});
	
	$('#color-picker').ColorPicker(
	{
		color: '#006171',
		onShow: function(colpkr)
		{
			$(colpkr).fadeIn(300);
			$('#color-picker div').addClass('active');
			$('#tuner .colors li').removeClass('active');
			$('#tuner-style span').text('006171');
			$('style').text($('#tuner-style').text());
			return false;
		},
		onHide: function(colpkr)
		{
			$(colpkr).fadeOut(300);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#color-picker div').css('backgroundColor', '#' + hex);
			$('#tuner-style span').text(hex);
			$('style').text($('#tuner-style').text());
		}
	});
	
	$('#tuner').on('click', '.layouts li', function()
	{
		$(this).addClass('active').siblings().removeClass('active');
		if( $(this).data('layout') == 'boxed' )
			$('.page').addClass('page-boxed');
		else
			$('.page').removeClass('page-boxed');
	});
	
	$('#tuner').on('click', '.patterns li', function()
	{
		$(this).addClass('active').siblings().removeClass('active');
		$('body').css('background-image', $(this).data('url'));
	});
});