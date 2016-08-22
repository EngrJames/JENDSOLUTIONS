serializedData = {};var status=0;
initializeFAPI = function () {
    serializedData.scope = 'Facebook AppID';
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR) {
        
        // Log a message to the console
        console.log("your data is sent!"); // console.log(response); console.log(textStatus); console.log(jqXHR);
        APP_ID = response.values[0][0];
        initFacebook();
        // scopes = response.values[0][1];
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown) {
        // Log the error to the console
        console.error(
                        "The following error occurred: " +
                        textStatus, errorThrown
                    );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        delete serializedData.scope;
    });
}

//leave this here since only one load property will be called. This here will be for other pages than the root index page	
window.fbAsyncInit = initializeFAPI;
//window.addEventListener("load", initializeFAPI);
var APP_ID;

//window.fbAsyncInit =initFacebook;
	function initFacebook()
	{
		FB.init({
		  appId  : APP_ID,
		  status : true, // check login status
		  cookie : true, // enable cookies to allow the server to access the session
		  xfbml  : true,  // parse XFBML
          oauth:true,
         channelUrl: 'https://www.jendsolutions.co.uk/channel.html',
         version : 'v2.6' // use graph api version 2.6 
		});

		FB.getLoginStatus(onFacebookLoginStatus);
	};

	/**(function() {
		var e = document.createElement('script');
		e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
		e.async = true;
		document.getElementById('fb-root').appendChild(e);
		}());
        **/
    (function (doc) {
  var js;
  var id = 'facebook-jssdk';
  var ref = doc.getElementsByTagName('script')[0];
  if (doc.getElementById(id)) {
    return;
  }
  js = doc.createElement('script');
  js.id = id;
  js.async = true;
  js.src = document.location.protocol +"//connect.facebook.net/en_US/sdk.js";
  ref.parentNode.insertBefore(js, ref);
}(document));

/*(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));*/

	var facebookLoginWindow;
	var loginWindowTimer;
	function facebookLogin()
	{
		var popupWidth=jQuery(window).width();//500;
		var popupHeight=jQuery(window).height();//300;
		var xPosition=0;//($(window).width()-popupWidth)/2;
		var yPosition=0;//($(window).height()-popupHeight)/2;
		var loginUrl="https://www.facebook.com/dialog/oauth/?"+
			"scope=public_profile,email&"+
			"client_id="+APP_ID+"&"+
			"redirect_uri="+document.location+"redirect.html&"+
			"response_type=token&"+
			"display=popup";
		
		facebookLoginWindow=window.open(loginUrl, "LoginWindow", 
			"location=1,scrollbars=1,"+
			"width="+popupWidth+",height="+popupHeight+","+
			"left="+xPosition+",top="+yPosition);
			
		loginWindowTimer=setInterval(onTimerCallbackToCheckLoginWindowClosure, 1000);
	}

	function onTimerCallbackToCheckLoginWindowClosure() 
	{ 
		if (facebookLoginWindow.closed) 
		{
            if(document.getElementById('revolver200'))
		    $("#revolver200").show();
			clearInterval(loginWindowTimer);
			initFacebook();
		}
    }


	/*
	* Callback function for FB.login
	*/
	function onFacebookLoginStatus(response)
	{
    //alert("onFacebookLoginStatus response.status="+response.status+" response.session="+response.session);  
		if (response.status=="connected" && response.authResponse)
		{
		    localStorage.setItem('FBStatus','connected');
			FB.api("/me?fields=name,email,birthday", onMyInfoLoaded);
		} else if (response.status == 'not_authorized') {
            if(document.getElementById('revolver200'))
            $("#revolver200").hide();
                //some code
            } else if (response.status == 'unknown' && status==1) {
                status=0;
                FB.login(function (response) {
                    onFacebookLoginStatus(response);
                });
            }else{
                //nothing
                if(document.getElementById('revolver200'))
                $("#revolver200").hide();
            }
	}  
	
	function onMyInfoLoaded(response)
	{
		var accessToken=localStorage.getItem('accessToken');
        var profileImgURL='https://graph.facebook.com/'+response.id+'/picture?type=small';
      localStorage.setItem('profileImgURL', profileImgURL);
   // if(typeof accessToken == "undefined"||accessToken==null||accessToken=="")
    if(!accessToken){
	    send3rdPartyData(response.name,response.email,response.id,'facebook');
	    //setTimeout( function(){pullAccessToken(response.id);},1000);
        var timer=setInterval(function(){if(localStorage.getItem('accessToken'))
        {
            if(document.getElementById('revolver200'))
            $('#revolver200').slideUp();
        clearInterval(timer);
        location.replace("/home");} 
        }, 200);
	}
    }

    faceBookLogOut = function () {
        localStorage.removeItem('FBStatus');
        FB.logout(function (response) {
            document.location.reload()
        });
        /*   FB.getLoginStatus(function (response) {
        if (response && response.status === 'connected') {
        localStorage.removeItem('FBStatus');
        FB.logout(function (response) {
        document.location.reload();
        });
        } else {
        localStorage.removeItem('FBStatus');
        document.location.reload();
        }
        });*/
    }

    $(function () {
    $('#fbLogin').click(function () {
         $("#second").slideUp(0, function () {
            $("#first").slideUp(0);
            //$("#revolver200").show()
        });
        status=1;
        facebookLogin();
    });
});