function onFileSelected(e){$("#revolver2").slideDown(50);var o=JSON.parse(localStorage.getItem("accessToken"))[1];if(0==e.target.files.length)return void $("#revolver2").slideUp(200);if(e.target.files[0].size/1024>28)return $("#section2").html('<b style="color:#fff">The must be 28 KB or less</b>'),void $("#revolver2").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(1e4)})});var t=e.target.files[0],r=new FileReader,l=document.getElementById("pic");l.title=t.name;var s=l.title.split("."),i=s.length,a=s[i-1];return"jpg"!=a.toLowerCase()&&"jpeg"!=a.toLowerCase()&&"gif"!=a.toLowerCase()&&"png"!=a.toLowerCase()?($("#section2").html('<b style="color:#fff">Invalid image format</b>'),void $("#revolver2").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(1e4)})})):(r.onload=function(e){l.src=e.target.result,serializedData.imgData=l.src,serializedData.username=o,request=$.ajax({url:"https://script.google.com/macros/s/AKfycbzp2pS-bplJy50sr6PNuh-UgD-SxG3Q0BG1QYrlPjApahihgMzh/exec",dataType:"json",data:serializedData,type:"POST"}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t);var r=e.imgValue;0!=r.length&&($("#section2").html('<b style="color:#fff">Success!!!!</b>'),$("#revolver2").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(1e4)})}),localStorage.setItem("profileImgURL",r),updateProPic())}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section2").html('<b style="color:red">an error has occurred. Please check your console!</b>'),$("#revolver2").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(15e3)})})}),request.always(function(){delete serializedData.imgData,delete serializedData.username})},void r.readAsDataURL(t))}var serializedData={},request;