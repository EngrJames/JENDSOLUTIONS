var serializedData={},imageBool,contractBool,serviceBool,productTransactBool,serviceTransactBool,contractTransactBool,queryWebProductURLBool,queryPackageProductURLBool,QueryDatabaseProductURLBool,buttonIdBool,request;$.fn.adminAuth=function(){if(captchaLength=grecaptcha.getResponse(myCatcha1).length,!captchaLength)return grecaptcha.reset(myCatcha1),!1;grecaptcha.reset(myCatcha1),$("#html_element1").slideUp(0,function(){$("#revolver").show()}),request&&request.abort();var e=$(this),o=e.find("input, button"),t=$(o[0]).val(),a=$(o[1]).val();serializedData.scope="admin",serializedData.name=t,serializedData.password=a,o.prop("disabled",!0),request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,r){console.log("your data is sent!"),console.log(e),console.log(o),console.log(r),adminToken=e.values,0==adminToken.length?($("#section").html("<b style='color:#fff'>Wrong login credentials!!!!!!</b>"),$("#revolver").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#admin").clearForm()):adminToken[0][1]==t&&adminToken[0][0]==a&&(adminToken=[adminToken[0][0],adminToken[0][1]],localStorage.setItem("adminToken",JSON.stringify(adminToken)),$("#admin").clearForm(),$("#revolver").slideUp(200),location.replace("index.html"))}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>System error!. Pls check your consol</b>"),$("#revolver").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#admin").clearForm()}),request.always(function(){delete serializedData.scope,delete serializedData.name,delete serializedData.password,o.prop("disabled",!1)}),event.preventDefault()},$.fn.queryImage=function(){if(token=localStorage.getItem("accessToken"),token){token=JSON.parse(token);var e=token[1];serializedData.scope="imageURL",serializedData.name=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0==a.length)return void(imageBool=!0);var r=a[0][0];localStorage.setItem("profileImgURL",r),document.getElementById("pic")&&updateProPic(),imageBool=!0}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope,delete serializedData.name})}},$.fn.queryWebProductURL=function(){serializedData.scope="webProductImageURL",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0==a.length)return void(queryWebProductURLBool=!0);var r=[];webProductURL=[];var s=a[0].length,l=a.length;for(i=0;i<s;i++){for(ii=0;ii<l;ii++)webProductURL.push(a[ii][i]);r.push(webProductURL),webProductURL=[]}localStorage.setItem("webProductURL",JSON.stringify(r)),queryWebProductURLBool=!0}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getConfirmedEmails=function(){serializedData.scope="confirmedEmails",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),confirmedEmails=e.values,0!=confirmedEmails.length&&updateConfirmedEmails()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getNewsLetters=function(){serializedData.scope="newsletters",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),newsletters=e.values,0!=newsletters.length&&updateNewsletters()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getSettings=function(){serializedData.scope="allsettings",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),allSettings=e.values,0!=allSettings.length&&updateAllSettings()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getProfiles=function(){serializedData.scope="allprofiles",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),allProfiles=e.values,0!=allProfiles.length&&updateAllProfiles()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getContracts=function(){serializedData.scope="allcontracts",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),allContracts=e.values,0!=allContracts.length&&updateAllContracts()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getSupports=function(){serializedData.scope="allsupports",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),allSupports=e.values,0!=allSupports.length&&updateAllSupports()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getServices=function(){serializedData.scope="allservices",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),allServices=e.values,0!=allServices.length&&updateAllServices()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getProductTransactions=function(){serializedData.scope="allproducttransactions",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),allProductTransactions=e.values,0!=allProductTransactions.length&&updateAllProductTransactions()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getServiceTransactions=function(){serializedData.scope="allservicetransactions",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),allServiceTransactions=e.values,0!=allServiceTransactions.length&&updateAllServiceTransactions()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getContractTransactions=function(){serializedData.scope="allcontracttransactions",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),allContractTransactions=e.values,0!=allContractTransactions.length&&updateAllContractTransactions()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getRegisteredUsers=function(){serializedData.scope="registeredusers",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),registeredUsers=e.values,0!=registeredUsers.length&&updateRegisteredUsers()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.getGuestUsers=function(){serializedData.scope="guestusers",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),guestUsers=e.values,0!=guestUsers.length&&updateGuestUsers()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.queryPackageProductURL=function(){serializedData.scope="packageProductImageURL",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0==a.length)return void(queryPackageProductURLBool=!0);var r=[];packageProductURL=[];var s=a[0].length,l=a.length;for(i=0;i<s;i++){for(ii=0;ii<l;ii++)packageProductURL.push(a[ii][i]);r.push(packageProductURL),packageProductURL=[]}localStorage.setItem("packageProductURL",JSON.stringify(r)),queryPackageProductURLBool=!0}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.queryDatabaseProductURL=function(){serializedData.scope="databaseProductImageURL",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0==a.length)return void(QueryDatabaseProductURLBool=!0);var r=[];databaseProductURL=[];var s=a[0].length,l=packageProductUrl.length;for(i=0;i<s;i++){for(ii=0;ii<l;ii++)databaseProductURL.push(a[ii][i]);r.push(databaseProductURL),databaseProductURL=[]}localStorage.setItem("databaseProductURL",JSON.stringify(r)),QueryDatabaseProductURLBool=!0}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.queryMessage=function(){serializedData.scope="message",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),messages=e.values,0!=messages.length&&updateMessage()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.queryTestimons=function(){serializedData.scope="testimonials",request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0!=a.length){testimonials=[],testimonial=[];var r=a[0].length,s=a.length;for(i=0;i<s;i++){for(ii=0;ii<r;ii++)testimonial.push(a[i][ii]);testimonials.push(testimonial),testimonial=[]}updateTestimonials()}}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.registerQuerySend=function(){if(captchaLength=grecaptcha.getResponse(myCatcha2).length,!captchaLength)return grecaptcha.reset(myCatcha2),!1;grecaptcha.reset(myCatcha2),$("#html_element2").slideUp(0),$("#second").slideUp(0,function(){$("#first").slideUp(0),$("#third").slideUp(0),$("#revolver2").show()});var e=$(this),o=e.find("input, button"),t=$(o[0]).val(),a=$(o[1]).val();serializedData.scope="register",serializedData.name=t,serializedData.email=a,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,t,a){console.log("your data is sent!"),console.log(e),console.log(t),console.log(a);var r=e.values;if(r.length>0)$("#section").html("<b style='color:#fff'>The username or email already exist</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#regist").clearForm();else{request&&request.abort();var s=$(o[2]).val(),l=$(o[4]).val();serializedData.password=s,serializedData.phone=l,o.prop("disabled",!0),request=$.ajax({url:"https://script.google.com/macros/s/AKfycbzQW2BKnuBXkvhpqP8I_UwralrRfmLxXCftpQ6q5uvvYgCP-a0/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),$("#section").html("<b style='color:#fff'>Congrats!. You are now registered. We have sent you a link to verify your email. Thanks!</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#regist").clearForm()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>An error occurred. Check your console</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#regist").clearForm()}),request.always(function(){delete serializedData.scope,delete serializedData.name,delete serializedData.email,delete serializedData.password,delete serializedData.phone,o.prop("disabled",!1)}),event.preventDefault()}}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>System error!. Pls check your consol</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#regist").clearForm()}),request.always(function(){serializedData.scope&&delete serializedData.scope,serializedData.name&&delete serializedData.name,serializedData.email&&delete serializedData.email,serializedData.password&&delete serializedData.password,serializedData.phone&&delete serializedData.phone,o.prop("disabled",!1)}),event.preventDefault()},$.fn.pUpdateQuery=function(){$("#revolver").slideDown(200);var e=$("#v4").val(),o=localStorage.getItem("accessToken");if(o){o=JSON.parse(o);var t=o[1],a=o[2];if(a==e)return void $("#profile1").submit();serializedData.scope="profileUpdate",serializedData.email=e,serializedData.name=t,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;return a.length>0?($("#section").html("<b style='color:#fff'>The email you entered is associated with another account. Please recheck your email</b>"),void $("#revolver").slideUp(200,function(){$("#section").slideDown(function(){$("#section").fadeOut(12e3)})})):void $("#profile1").submit()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),$("#revolver").slideUp(200,function(){$("#section").slideDown(function(){$("#section").fadeOut(12e3)})})}),request.always(function(){delete serializedData.scope,delete serializedData.name,delete serializedData.email})}},$.fn.checkForgotInfo=function(){if(captchaLength=grecaptcha.getResponse(myCatcha5).length,!captchaLength)return grecaptcha.reset(myCatcha5),!1;grecaptcha.reset(myCatcha5),$("#html_element5").slideUp(0),$("#second").slideUp(0,function(){$("#first").slideUp(0),$("#third").slideUp(0),$("#revolver2").show()});var e=$(this).find(":input"),o=$(e[0]).val();serializedData.scope="forgotInfo",serializedData.email=o,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(o,t,a){console.log("your data is sent!"),console.log(o),console.log(t),console.log(a);var r=o.values;if(0==r.length)$("#section").html("<b style='color:#fff'>We could not send you a message because the email you supplied is not valid</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#forgotinfo").clearForm();else{request&&request.abort();var s=r[0][0],l=(r[0][1],r[0][2]);serializedData.name=s,serializedData.password=l,e.prop("disabled",!0),request=$.ajax({url:"https://script.google.com/macros/s/AKfycbznXy_SbLDdwmVjUEgPp2m-MwOtZG-Lmn1qmHbk3_wmck_pPCLJ/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),$("#section").html("<b style='color:#fff'>We have sent your login details to your email. Thanks!</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#forgotinfo").clearForm()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>An error occurred. Check your console</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#forgotinfo").clearForm()}),request.always(function(){delete serializedData.scope,delete serializedData.name,delete serializedData.email,delete serializedData.password,e.prop("disabled",!1)}),event.preventDefault()}}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#forgotinfo").clearForm()}),request.always(function(){serializedData.scope&&delete serializedData.scope,serializedData.name&&delete serializedData.name,serializedData.email&&delete serializedData.email,serializedData.password&&delete serializedData.password}),event.preventDefault()},$.fn.loginQuerySend=function(){if(captchaLength=grecaptcha.getResponse(myCatcha1).length,!captchaLength)return grecaptcha.reset(myCatcha1),!1;grecaptcha.reset(myCatcha1),$("#html_element1").slideUp(0),$("#second").slideUp(0,function(){$("#first").slideUp(0),$("#third").slideUp(0),$("#revolver2").slideDown(0)});var e=$(this).find(":input"),o=$(e[0]).val(),t=$(e[1]).val();rememberMe={username:o,password:t},rememberMe=JSON.stringify(rememberMe),$("#remember").is(":checked")&&localStorage.setItem("rememberMe",rememberMe),$("#remember").is(":unchecked")&&localStorage.removeItem("rememberMe"),serializedData.scope="login",serializedData.name=o,serializedData.password=t,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(o,t,a){console.log("your data is sent!"),console.log(o),console.log(t),console.log(a);var r=o.values;if(0==r.length)$("#section").html("<b style='color:#fff'>Wrong username or password<b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#login").clearForm();else{request&&request.abort();var s=r[0][0],l=r[0][1],i=r[0][3];serializedData.email=l,serializedData.id=i,serializedData.type="local",e.prop("disabled",!0),request=$.ajax({url:"https://script.google.com/macros/s/AKfycbwUPqrDFK4ky1QeK-f44ezKtTx9tbnPOz9TKMngcmeYa57EDXo/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),$().pullAccessToken(i),$().profileQuery(s),$().settingsQuery(s),$().EStatusQuery(s),timeInterval=setInterval(function(){if(localStorage.getItem("accessToken")&&localStorage.getItem("profile")&&localStorage.getItem("settings")&&localStorage.getItem("emailStatus")){clearInterval(timeInterval),imageBool=!1,$().queryImage();var e=setInterval(function(){imageBool&&(clearInterval(e),$("#revolver2").hide(),location.replace("/home"))},200)}},500)}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>An error occurred. Check your console<b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#login").clearForm()}),request.always(function(){delete serializedData.scope,delete serializedData.name,delete serializedData.email,delete serializedData.password,delete serializedData.type,delete serializedData.id,e.prop("disabled",!1)}),event.preventDefault()}}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>An error occurred. Check your console<b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#login").clearForm()}),request.always(function(){serializedData.scope&&delete serializedData.scope,serializedData.name&&delete serializedData.name,serializedData.email&&delete serializedData.email,serializedData.password&&delete serializedData.password,serializedData.id&&delete serializedData.id,serializedData.type&&delete serializedData.type}),event.preventDefault()},$.fn.pullAccessToken=function(e){$().setServiceTransactions(),localStorage.setItem("setVar",1),serializedData.scope="accessToken",serializedData.id=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(o,t,a){console.log("your data is sent!"),console.log(o),console.log(t),console.log(a);var r=o.values;0!=r.length&&(contractBool=!1,serviceBool=!1,productTransactBool=!1,serviceTransactBool=!1,contractTransactBool=!1,queryWebProductURLBool=!1,queryPackageProductURLBool=!1,QueryDatabaseProductURLBool=!1,buttonIdBool=!1,$().contractQuery(e),$().serviceQuery(e),$().productTransactQuery(e),$().serviceTransactQuery(e),$().contractTransactQuery(e),$().queryWebProductURL(),$().queryPackageProductURL(),$().queryDatabaseProductURL(),$().getButtonIds("webButtonIds","web product buttons"),tokenTimeInterval=setInterval(function(){contractBool&&serviceBool&&productTransactBool&&serviceTransactBool&&contractTransactBool&&queryWebProductURLBool&&queryPackageProductURLBool&&QueryDatabaseProductURLBool&&buttonIdBool&&(clearInterval(tokenTimeInterval),buttonIdBool=!1,$().getButtonIds("packageButtonIds","package product buttons"),tokenTimeInterval=setInterval(function(){buttonIdBool&&(clearInterval(tokenTimeInterval),buttonIdBool=!1,$().getButtonIds("dataButtonIds","database product buttons"),tokenTimeInterval=setInterval(function(){buttonIdBool&&(clearInterval(tokenTimeInterval),localStorage.setItem("accessToken",JSON.stringify(r)))},50))},50))},200))}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>System error!. Pls check your console<b>"),$("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)})}),request.always(function(){delete serializedData.scope,delete serializedData.id})},$.fn.newsLetterQuerySend=function(){if(captchaLength=grecaptcha.getResponse(myCatcha4).length,!captchaLength)return grecaptcha.reset(myCatcha4),!1;grecaptcha.reset(myCatcha4),$("#html_element4").slideUp(200,function(){$("#revolver3").slideDown(200)});var e=$(this).find(":input");email=$(e[0]).val(),serializedData.scope="newsletter",serializedData["Newsletter Sub"]=email,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(o,t,a){console.log("your data is sent!"),console.log(o),console.log(t),console.log(a);var r=o.values;r.length>0?($("#section2").html("<b style='color:#fff'>You have already subscribed</b>"),$("#revolver3").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(15e3)})}),$("#form1").clearForm()):(request&&request.abort(),e.prop("disabled",!0),request=$.ajax({url:"https://script.google.com/macros/s/AKfycbzHxW3hRDRIkFNYOXTQez3_ve_GhU4RWqqZ2-Dnh0wBXili0Po/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),$("#section2").html("<b style='color:#fff'>Thanks!. You are now subcribed to our news letter.</b>"),$("#revolver3").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(15e3)})}),$("#form1").clearForm()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section2").html('<b style="color:red; text-align:center">An error has occurred. Check your console for the error code!</b>'),$("#revolver3").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(15e3)})}),$("#form1").clearForm()}),request.always(function(){delete serializedData.scope,delete serializedData["Newsletter Sub"],e.prop("disabled",!1)}),event.preventDefault())}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section2").html("<b style='color:red'>System error!. Pls check your console<b>"),$("#revolver3").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(15e3)})}),$("#form1").clearform()}),request.always(function(){serializedData.scope&&delete serializedData.scope,serializedData["Newsletter Sub"]&&delete serializedData["Newsletter Sub"]}),event.preventDefault()},$.fn.profileQuery=function(e){serializedData.scope="profile",serializedData.name=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0!=a.length){var r=[],s=a[0].length,l=a.length;for(i=0;i<s;i++)r.push(a[l-1][i]);localStorage.setItem("profile",JSON.stringify(r))}}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),$("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)})}),request.always(function(){delete serializedData.scope,delete serializedData.name})},$.fn.contractQuery=function(e){serializedData.scope="contract",serializedData.id=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0==a.length)return void(contractBool=!0);var r=[];contract=[];var s=a[0].length,l=a.length;for(ii=0;ii<l;ii++){for(i=0;i<s;i++)contract.push(a[ii][i]);r.push(contract),contract=[]}localStorage.setItem("contract",JSON.stringify(r)),contractBool=!0}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),$("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)})}),request.always(function(){delete serializedData.scope,delete serializedData.id})},$.fn.contractTransactQuery=function(e){serializedData.scope="contractTransaction",serializedData.id=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0==a.length)return void(contractTransactBool=!0);var r=[],s=[],l=a[0].length,n=a.length;for(ii=0;ii<n;ii++){for(i=0;i<l;i++)s.push(a[ii][i]);r.push(s),s=[]}localStorage.setItem("contractTransacts",JSON.stringify(r)),contractTransactBool=!0}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope,delete serializedData.id})},$.fn.serviceTransactQuery=function(e){serializedData.scope="serviceTransaction",serializedData.id=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0==a.length)return void(serviceTransactBool=!0);var r=[],s=[],l=a[0].length,n=a.length;for(ii=0;ii<n;ii++){for(i=0;i<l;i++)s.push(a[ii][i]);r.push(s),s=[]}localStorage.setItem("serviceTransacts",JSON.stringify(r)),serviceTransactBool=!0}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope,delete serializedData.id})},$.fn.productTransactQuery=function(e){serializedData.scope="productTransaction",serializedData.id=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0==a.length)return void(productTransactBool=!0);var r=[];product=[];var s=a[0].length,l=a.length;for(ii=0;ii<l;ii++){for(i=0;i<s;i++)product.push(a[ii][i]);r.push(product),product=[]}localStorage.setItem("product",JSON.stringify(r)),productTransactBool=!0}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope,delete serializedData.id})},$.fn.serviceQuery=function(e){serializedData.scope="service",serializedData.id=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0==a.length)return void(serviceBool=!0);var r=[],s=[],l=a[0].length,n=a.length;for(ii=0;ii<n;ii++){for(i=0;i<l;i++)s.push(a[ii][i]);r.push(s),s=[]}localStorage.setItem("service",JSON.stringify(r)),serviceBool=!0}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),$("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)})}),request.always(function(){
delete serializedData.scope,delete serializedData.id})},$.fn.settingsQuery=function(e){serializedData.scope="settings",serializedData.name=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a=e.values;if(0!=a.length){var r=[],s=a[0].length,l=a.length;for(i=0;i<s;i++)r.push(a[l-1][i]);localStorage.setItem("settings",JSON.stringify(r))}}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),$("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)})}),request.always(function(){delete serializedData.scope,delete serializedData.name})},$.fn.EConfirmQuery=function(e,o){serializedData.scope="Econfirm",serializedData.email=e,serializedData.id=o,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(t,a,r){console.log("your data is sent!"),console.log(t),console.log(a),console.log(r);var s=t.values;return s.length>0?void $("#revolver").slideUp(200,function(){$("#section").html("<b style='color:#000'>Your email has already been confirmed!</b>")}):void $().EReconfirmQuery(e,o)}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#revolver").slideUp(200,function(){$("#section").html("<b style='color:red'>System error!. Pls check your console</b>")})}),request.always(function(){delete serializedData.scope,delete serializedData.id,delete serializedData.email})},$.fn.EReconfirmQuery=function(e,o){serializedData.scope="Ereconfirm",serializedData.email=e,serializedData.id=o,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(t,a,r){console.log("your data is sent!"),console.log(t),console.log(a),console.log(r);var s=t.values;if(0==s.length)return void $("#revolver").slideUp(200,function(){$("#section").html("<b style='color:#000'>Wrong information supplied!!!!!</b>")});if(request&&request.abort(),token=localStorage.getItem("accessToken"),!token)return void $("#revolver").slideUp(200,function(){$("#section").html("<b style='color:#000'>You must log into your account in Jend Solutions before confirming this email. Thanks!</b>")});token=JSON.parse(token);var l=token[1];serializedData.name=l,serializedData.email=e,serializedData.id=o,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbxE2KXblR1SQUYFnCXGbPo_bOLh8A9wzL8KhrKgrRr_DbJl2b8/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),$().EStatusQuery(l),$("#revolver").slideUp(200,function(){$("#section").html("<b style='color:#000'>Congrats!, "+l+" your email has now been confirmed. You can now use all our resources. Thanks!</b> <a href='/home'>Go to home</a>")})}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#revolver").slideUp(200,function(){$("#section").html("<b style='color:red'>An error occurred. Check your console</b>")})}),request.always(function(){delete serializedData.scope,delete serializedData.id,delete serializedData.email,delete serializedData.name})}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#revolver").slideUp(200,function(){$("#section").html("<b style='color:red'>System error!. Pls check your console</b>")})}),request.always(function(){delete serializedData.scope,delete serializedData.id,delete serializedData.email,delete serializedData.name})},$.fn.EStatusQuery=function(e){serializedData.scope="Estatus",serializedData.name=e,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var a,r=e.values;r.length>0?(a="confirmed",localStorage.setItem("emailStatus",a),document.getElementById("v4")&&refreshStatus()):(a="unconfirmed",localStorage.setItem("emailStatus",a),document.getElementById("v4")&&refreshStatus())}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope,delete serializedData.name})},$.fn.getButtonIds=function(e,o){serializedData.scope=o,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbz6hlVtxzhtzvi9K5O0MiO93vlEZj_rLUMDkTKOLBW0gmRyPdw/exec",type:"post",data:serializedData}),request.done(function(o,t,a){console.log("your data is sent!"),console.log(o),console.log(t),console.log(a);var r=o.values;localStorage.setItem(e,JSON.stringify(r)),buttonIdBool="true"}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){delete serializedData.scope})},$.fn.setProductTransactions=function(){request=$.ajax({url:"https://script.google.com/macros/s/AKfycbypOz2s49k1d3dAcO161jnYaL27MZqXb2Ct1vlzrJrzOzBPCSbW/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t)}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){})},$.fn.setContractTransactions=function(){request=$.ajax({url:"https://script.google.com/macros/s/AKfycbxubFhnBFjZXkk0cF862sVTcAMEXlX6l8-b-KhDqr7cngqjZm0/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t)}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){})},$.fn.setServiceTransactions=function(){request=$.ajax({url:"https://script.google.com/macros/s/AKfycbzsh2DbKR0k-VMaCh1eAvWOIbCbF7WKIl_4rfq3-gZ4CH-cwuU/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t)}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),request.always(function(){})};