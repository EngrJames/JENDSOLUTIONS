function initFacebook(){FB.init({appId:APP_ID,status:!0,cookie:!0,xfbml:!0,oauth:!0,channelUrl:document.location+"oauth/facebook/oauth-javascript/channel",version:"v2.5"}),FB.getLoginStatus(onFacebookLoginStatus)}function facebookLogin(){var o=jQuery(window).width(),e=jQuery(window).height(),t=0,n=0,a="https://www.facebook.com/dialog/oauth/?scope=public_profile,email&client_id="+APP_ID+"&redirect_uri="+document.location+"home&response_type=token&display=popup";facebookLoginWindow=window.open(a,"LoginWindow","location=1,scrollbars=1,width="+o+",height="+e+",left="+t+",top="+n),loginWindowTimer=setInterval(onTimerCallbackToCheckLoginWindowClosure,1e3)}function onTimerCallbackToCheckLoginWindowClosure(){facebookLoginWindow.closed&&($("#revolver2").hide(),clearInterval(loginWindowTimer),initFacebook())}function onFacebookLoginStatus(o){"connected"==o.status&&o.authResponse&&(localStorage.setItem("FBStatus","connected"),FB.api("/me?fields=name,email,birthday",onMyInfoLoaded))}function onMyInfoLoaded(o){var e=localStorage.getItem("accessToken"),t="https://graph.facebook.com/"+o.id+"/picture?type=small";if(localStorage.setItem("profileImgURL",t),!e){send3rdPartyData(o.name,o.email,o.id,"facebook");var n=setInterval(function(){localStorage.getItem("accessToken")&&(clearInterval(n),location.replace("/home"))},200)}}serializedData={},initializeFAPI=function(){serializedData.scope="Facebook AppID",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(o){console.log("your data is sent!"),APP_ID=o.values[0][0],initFacebook()}),request.fail(function(o,e,t){console.error("The following error occurred: "+e,t)}),request.always(function(){delete serializedData.scope})},window.addEventListener("load",initializeFAPI);var APP_ID;!function(o){var e,t="facebook-jssdk",n=o.getElementsByTagName("script")[0];o.getElementById(t)||(e=o.createElement("script"),e.id=t,e.async=!0,e.src=document.location.protocol+"//connect.facebook.net/en_US/all.js",n.parentNode.insertBefore(e,n))}(document);var facebookLoginWindow,loginWindowTimer;faceBookLogOut=function(){localStorage.removeItem("FBStatus"),FB.logout(function(){document.location.reload()})},$(function(){$("#fbLogin").click(function(){$("#second").slideUp(0,function(){$("#first").slideUp(0),$("#revolver2").show()}),facebookLogin()})});