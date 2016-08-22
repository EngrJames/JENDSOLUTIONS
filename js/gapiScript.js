serializedData = {};
var clientId;
var apiKey;

var scopes;
// Our first function is used to set the api key and
// is run once the google api is loaded in the page header. 
function handleClientLoad(apikey) {
    gapi.client.setApiKey(apiKey);
}
 
//Gets the result after the authorization and if successful,
//it makes the api call to get the  //user's information.
function handleAuthResult(authResult) {
                
    if (authResult && !authResult.error) {
        localStorage.setItem('GStatus', 'connected');
        makeApiCall();
    } 
}
  
//Make api call on button click to authorize client
function handleAuthClick(event) { gapi.auth.authorize({ client_id: clientId, 
            scope: scopes, immediate: false }, handleAuthResult);
            $("#second").slideUp(0, function () {
                $("#first").slideUp(0);
               // $("#revolver200").show();
            });
    return false;
}

 
// Load the API and make an API call.  Display the results on the screen.
function makeApiCall() {
    if(document.getElementById('revolver200'))
		    $("#revolver200").show();

		gapi.client.load('oauth2', 'v2', function () {
		    gapi.client.oauth2.userinfo.get().execute(function (resp) {
		        // Shows user email
		        // console.log(resp.email+resp.id+resp.access_token+resp.name); 
		        var accessToken = localStorage.getItem('accessToken');
		        if (!accessToken) {
		            send3rdPartyData(resp.name, resp.email, resp.id, 'google');
		            //  setTimeout(function () { pullAccessToken(resp.id); }, 1000);
		            var timer = setInterval(function () {
		                if (localStorage.getItem('accessToken')
                 && localStorage.getItem('profileImgURL')) {
		                    if (document.getElementById('revolver200'))
		                        $('revolver200').slideUp();
		                    clearInterval(timer);
		                    $("#revolver200").hide();
		                    location.replace("/home");
		                }
		            }, 200);
		        }
		    })
		});

    gapi.client.load('plus', 'v1', function () {
        var request = gapi.client.plus.people.get({
            'userId': 'me'
        });


        request.execute(function (resp) {
           var profileImgURL=resp.image.url;
      localStorage.setItem('profileImgURL', profileImgURL);
            //Do Stuff
            //You have access to user id, name, display name, gender, emails, etc.
         //   myToken = gapi.auth.getToken(); console.log(myToken);
            // console.log('name:' + resp.displayName+' token:'+accessToken.access_token+' email:'+accessToken.email+' gender:'+accessToken.gender+' lastname:'+accessToken.lastname);

        });
    });
}

var revokeAllScopes = function() {
  auth2.disconnect();
}

//use this commented code for new logout
/*
var img = new Image();
img.src = 'https://accounts.google.com/Logout'; you can equally use anchors like 'a' tag
*/
googleSignOut = function () {
    localStorage.removeItem('GStatus');
    var img = new Image();
img.src = 'https://accounts.google.com/Logout';
setTimeout(function(){
document.location.reload();},1000);
}