var name=".switcher",menuYloc=null;$(document).ready(function(){menuYloc=parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px"))),$(window).scroll(function(){var n=menuYloc+$(document).scrollTop()+"px";$(name).animate({top:n},{duration:0,queue:!1})})});