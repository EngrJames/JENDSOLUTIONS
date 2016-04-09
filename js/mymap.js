var myCenter=new google.maps.LatLng(54.622987,-5.938400);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("contact-us-map"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"JEND SOLUTIONS<br> Belfast, County Antrim, UK<br><br>"
  });

infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);